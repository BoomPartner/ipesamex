import assert from 'node:assert/strict';
import { access, readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import {
  buildProductCatalogIndex,
  filterCatalogProducts,
  searchCatalogProducts,
} from '../src/lib/products/catalog.mjs';

const source = await readFile(new URL('../src/data/productos.js', import.meta.url), 'utf8');
const executableSource = source.replaceAll('export const ', 'const ');
const {
  catalogoVersion,
  categorias,
  categoriasCatalogo,
  productos,
} = new Function(`${executableSource}; return { catalogoVersion, categorias, categoriasCatalogo, productos };`)();

const unique = (values) => new Set(values).size === values.length;
const categoryById = new Map(categoriasCatalogo.map((category) => [category.id, category]));
const subcategoryIds = new Set(categoriasCatalogo.flatMap(
  (category) => category.subcategories.map((subcategory) => subcategory.id),
));

assert.equal(catalogoVersion, 2, 'La versión del catálogo debe ser 2.');
assert.equal(productos.length, 137, 'El catálogo debe contener 137 productos después de retirar el duplicado exacto.');
assert.ok(unique(productos.map((product) => String(product.id))), 'Los IDs públicos de producto deben ser únicos.');
assert.ok(unique(categoriasCatalogo.map((category) => category.id)), 'Los IDs de línea deben ser únicos.');
assert.ok(categorias.every((category) => categoryById.has(category.id)), 'Las categorías de Home deben existir en la taxonomía.');

for (const category of categoriasCatalogo) {
  assert.ok(category.label.trim(), `${category.id} no tiene etiqueta.`);
  assert.ok(unique(category.subcategories.map((subcategory) => subcategory.id)), `${category.id} tiene subcategorías duplicadas.`);
  await access(resolve(process.cwd(), 'public', 'fondos_categorias', `${category.id}.webp`));
}

for (const product of productos) {
  assert.ok(String(product.id).trim(), 'Existe un producto sin ID.');
  assert.ok(product.name?.trim(), `${product.id} no tiene nombre.`);
  assert.ok(product.imagen?.trim(), `${product.id} no tiene imagen.`);
  assert.ok(categoryById.has(product.categorie), `${product.id} usa la categoría inexistente ${product.categorie}.`);
  assert.ok(subcategoryIds.has(product.microcategorie), `${product.id} usa la subcategoría inexistente ${product.microcategorie}.`);
  assert.ok(
    categoryById.get(product.categorie).subcategories.some(
      (subcategory) => subcategory.id === product.microcategorie,
    ),
    `${product.id} clasifica ${product.microcategorie} fuera de ${product.categorie}.`,
  );

  for (const imagePath of [product.imagen, product.imagen_prd].filter(Boolean)) {
    if (imagePath.startsWith('/')) {
      await access(resolve(process.cwd(), 'public', imagePath.slice(1)));
    }
  }
}

const index = buildProductCatalogIndex(productos, categoriasCatalogo);
assert.deepEqual(
  searchCatalogProducts(index, 'vinilica').map((product) => product.id),
  searchCatalogProducts(index, 'vinílica').map((product) => product.id),
  'La búsqueda debe ignorar acentos.',
);
assert.equal(searchCatalogProducts(index, 'fosfatizante')[0]?.microcategorie, 'preparacion');
assert.equal(searchCatalogProducts(index, 'color cemento')[0]?.microcategorie, 'complementos');
assert.ok(searchCatalogProducts(index, 'proteccion corrosion').length > 0, 'La búsqueda debe consultar descripciones.');
assert.ok(filterCatalogProducts(index, {
  categoryId: 'automotriz',
  subcategoryId: 'preparacion',
  query: '',
}).every((product) => product.categorie === 'automotriz' && product.microcategorie === 'preparacion'));

const acritek = productos.find((product) => product.id === 'acritek');
assert.deepEqual(acritek.disponible_en, ['7000 Color Blanco', '7081 Base V1']);
for (const retiredField of ['color', 'gama', 'acabados', 'acabados2', 'fichas_colores']) {
  assert.equal(acritek[retiredField], undefined, `Acritek no debe conservar el campo ${retiredField}.`);
}

console.log(JSON.stringify({
  schemaVersion: catalogoVersion,
  products: productos.length,
  categories: categoriasCatalogo.length,
  subcategories: subcategoryIds.size,
  uniqueProductIds: true,
  legacyDuplicateNumericIds: [...new Set(productos
    .map((product) => String(product.id_number))
    .filter((id, index, ids) => ids.indexOf(id) !== index))],
  validatedLocalImages: productos.reduce(
    (total, product) => total + [product.imagen, product.imagen_prd].filter((path) => path?.startsWith('/')).length,
    0,
  ),
}, null, 2));
