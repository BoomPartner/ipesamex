import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { buildFaqSearchIndex, searchFaqs } from '../src/lib/faq/search.mjs';
import { normalizeSearchText } from '../src/lib/faq/normalize.mjs';
import { selectFaqsForProduct } from '../src/lib/faq/product-relations.mjs';

const faqData = JSON.parse(await readFile(new URL('../src/data/faqs.json', import.meta.url), 'utf8'));
const catalogSource = await readFile(new URL('../src/data/productos.js', import.meta.url), 'utf8');
const catalogModule = await import(`data:text/javascript;base64,${Buffer.from(catalogSource).toString('base64')}`);

const uniqueValues = (values) => new Set(values).size === values.length;
const categoryIds = new Set(faqData.categories.map((category) => category.id));
const tagIds = new Set(faqData.tags.map((tag) => tag.id));
const lineIds = new Set(faqData.lines.map((line) => line.id));
const productIds = new Set(catalogModule.productos.map((product) => String(product.id)));
const catalogLineIds = new Set(catalogModule.productos.map((product) => product.categorie));

assert.equal(faqData.schemaVersion, 1, 'La versión del esquema FAQ debe ser 1.');
assert.equal(faqData.faqs.length, 45, 'La migración debe contener 43 FAQ legadas y 2 del drawer.');
assert.ok(uniqueValues(faqData.faqs.map((faq) => faq.id)), 'Los IDs FAQ deben ser únicos.');
assert.ok(uniqueValues(faqData.faqs.map((faq) => faq.slug)), 'Los slugs FAQ deben ser únicos.');
assert.ok(uniqueValues([...categoryIds]), 'Los IDs de categoría deben ser únicos.');
assert.ok(uniqueValues([...tagIds]), 'Los IDs de tag deben ser únicos.');
assert.ok(uniqueValues([...lineIds]), 'Los IDs de línea deben ser únicos.');

faqData.lines.forEach((line) => {
  assert.ok(catalogLineIds.has(line.id), `La línea ${line.id} no existe en el catálogo.`);
});

faqData.faqs.forEach((faq) => {
  assert.match(faq.id, /^faq-\d{4}$/, `ID FAQ inválido: ${faq.id}`);
  assert.ok(faq.question.trim(), `${faq.id} no tiene pregunta.`);
  assert.ok(faq.answer.trim(), `${faq.id} no tiene respuesta.`);
  assert.ok(categoryIds.has(faq.categoryId), `${faq.id} usa una categoría inexistente.`);
  faq.tags.forEach((tagId) => assert.ok(tagIds.has(tagId), `${faq.id} usa el tag inexistente ${tagId}.`));
  faq.lineIds.forEach((lineId) => assert.ok(catalogLineIds.has(lineId), `${faq.id} usa la línea inexistente ${lineId}.`));
  assert.ok(uniqueValues(faq.productIds.map(String)), `${faq.id} repite una relación de producto.`);
  faq.productIds.forEach((productId) => assert.ok(productIds.has(String(productId)), `${faq.id} usa el producto inexistente ${productId}.`));
  assert.ok(['draft', 'published', 'archived'].includes(faq.status), `${faq.id} usa un estado inválido.`);
});

const categoryById = new Map(faqData.categories.map((category) => [category.id, category]));
const tagById = new Map(faqData.tags.map((tag) => [tag.id, tag]));
const lineById = new Map(faqData.lines.map((line) => [line.id, line]));
const productById = new Map(catalogModule.articulos.map((product) => [String(product.id), product]));
const publishedFaqs = faqData.faqs.filter((faq) => faq.status === 'published');
const contextualProductNamesByFaqId = new Map(publishedFaqs.map((faq) => [faq.id, []]));

catalogModule.productos.forEach((product) => {
  selectFaqsForProduct(publishedFaqs, product).forEach(({ faq }) => {
    contextualProductNamesByFaqId.get(faq.id).push(product.name);
  });
});

const indexedFaqs = buildFaqSearchIndex(publishedFaqs.map((faq) => ({
    ...faq,
    category: categoryById.get(faq.categoryId),
    tagIds: faq.tags,
    tags: faq.tags.map((tagId) => tagById.get(tagId)),
    lines: faq.lineIds.map((lineId) => lineById.get(lineId)),
    relatedProducts: faq.productIds.map((productId) => {
      const product = productById.get(String(productId));
      return { id: String(product.id), name: product.name };
    }),
    searchProductNames: contextualProductNamesByFaqId.get(faq.id),
  })));

assert.equal(normalizeSearchText('  PINTURA Vinílica  '), 'pintura vinilica');
assert.deepEqual(
  searchFaqs(indexedFaqs, { query: 'vinilica' }).map((faq) => faq.id),
  searchFaqs(indexedFaqs, { query: 'vinílica' }).map((faq) => faq.id),
  'La búsqueda con y sin acentos debe producir los mismos resultados.',
);

for (const query of ['madera', 'automotriz', 'secado', 'rendimiento', 'impermeabilizante', 'anticorrosivo']) {
  assert.ok(searchFaqs(indexedFaqs, { query }).length > 0, `La búsqueda ${query} debe producir resultados.`);
}

assert.ok(searchFaqs(indexedFaqs, { query: 'impermeabilizante azotea' }).length > 0, 'La búsqueda con términos distribuidos debe producir resultados.');
assert.ok(searchFaqs(indexedFaqs, { query: 'anticorr' }).length > 0, 'La búsqueda parcial debe producir resultados.');
assert.equal(searchFaqs(indexedFaqs, { query: '   ' }).length, indexedFaqs.length, 'Los espacios deben equivaler a una búsqueda vacía.');
assert.equal(searchFaqs(indexedFaqs, { query: 'texto inexistente xyz' }).length, 0, 'El texto inexistente debe producir estado vacío.');
assert.ok(searchFaqs(indexedFaqs, { categoryId: 'maderas', tagId: 'madera', lineId: 'maderas' }).length > 0, 'Los filtros combinados deben funcionar.');
assert.ok(searchFaqs(indexedFaqs, { query: 'Acritek 360' }).length > 0, 'Un producto sin relación directa debe encontrar sus FAQ contextuales por nombre.');

const directlyRelatedProductIds = new Set(publishedFaqs.flatMap((faq) => faq.productIds.map(String)));
const productFaqSelections = catalogModule.productos.map((product) => ({
  product,
  selections: selectFaqsForProduct(publishedFaqs, product),
}));

productFaqSelections.forEach(({ product, selections }) => {
  assert.ok(selections.length > 0, `El producto ${product.id} debe tener FAQ contextuales.`);
  assert.ok(selections.length <= 5, `El producto ${product.id} excede el límite de FAQ contextuales.`);
});

const vintekSelection = productFaqSelections.find(({ product }) => product.id === 'vintek').selections;
assert.equal(vintekSelection[0].relation.type, 'direct', 'Vintek debe priorizar sus relaciones FAQ directas.');
assert.deepEqual(
  vintekSelection.slice(0, 4).map(({ relation }) => relation.type),
  ['direct', 'direct', 'direct', 'direct'],
  'Las cuatro relaciones directas de Vintek deben preceder los fallback.',
);

const acritekSelection = productFaqSelections.find(({ product }) => product.id === 'acritek').selections;
assert.equal(acritekSelection[0].relation.type, 'subcategory', 'Acritek debe usar primero FAQ de su subcategoría cuando no hay relación directa.');

console.log(JSON.stringify({
  faqs: faqData.faqs.length,
  published: indexedFaqs.length,
  featured: faqData.faqs.filter((faq) => faq.featured && faq.status === 'published').length,
  categories: faqData.categories.length,
  tags: faqData.tags.length,
  lines: faqData.lines.length,
  productRelations: faqData.faqs.reduce((total, faq) => total + faq.productIds.length, 0),
  directlyRelatedProducts: directlyRelatedProductIds.size,
  contextualProductCoverage: productFaqSelections.filter(({ selections }) => selections.length > 0).length,
}, null, 2));
