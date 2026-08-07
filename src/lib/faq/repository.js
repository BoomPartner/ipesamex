import 'server-only';

import faqData from '@/data/faqs.json';
import { categoriasCatalogo, productos } from '@/data/productos';
import { buildFaqSearchIndex } from './search.mjs';
import { selectFaqsForProduct } from './product-relations.mjs';

const categoryById = new Map(
  faqData.categories.filter((category) => category.active).map((category) => [category.id, category]),
);
const tagById = new Map(
  faqData.tags.filter((tag) => tag.active).map((tag) => [tag.id, tag]),
);
const lineById = new Map(
  faqData.lines.filter((line) => line.active).map((line) => [line.id, line]),
);
const productById = new Map(
  productos.map((product) => [String(product.id), product]),
);
const catalogCategoryById = new Map(
  categoriasCatalogo.map((category) => [category.id, category]),
);

const getProductTaxonomy = (product) => {
  const category = catalogCategoryById.get(product.categorie);
  const subcategory = category?.subcategories.find((item) => (
    item.id === product.subcategorie || item.id === product.microcategorie
  ));

  return {
    categoryId: category?.id ?? product.categorie,
    categoryName: category?.label ?? product.categorie,
    subcategoryId: subcategory?.id ?? product.subcategorie ?? product.microcategorie,
    subcategoryName: subcategory?.label ?? product.subcategorie ?? product.microcategorie,
  };
};

const enrichFaq = (faq) => ({
  ...faq,
  updatedAt: faq.updatedAt ?? faqData.updatedAt,
  category: categoryById.get(faq.categoryId),
  tagIds: faq.tags,
  tags: faq.tags.map((tagId) => tagById.get(tagId)).filter(Boolean),
  lines: faq.lineIds.map((lineId) => lineById.get(lineId)).filter(Boolean),
  relatedProducts: faq.productIds.map((productId) => {
    const product = productById.get(String(productId));

    if (!product) return null;

    return {
      id: String(product.id),
      name: product.name,
      href: `/producto/${product.id}`,
      image: product.imagen,
      ...getProductTaxonomy(product),
    };
  }).filter(Boolean),
});

const publishedFaqs = faqData.faqs
  .filter((faq) => faq.status === 'published')
  .map(enrichFaq)
  .sort((left, right) => left.sortOrder - right.sortOrder);
const contextualProductNamesByFaqId = new Map(
  publishedFaqs.map((faq) => [faq.id, []]),
);

productos.forEach((product) => {
  selectFaqsForProduct(publishedFaqs, product).forEach(({ faq }) => {
    contextualProductNamesByFaqId.get(faq.id).push(product.name);
  });
});

export const getPublishedFaqs = () => publishedFaqs;

export const getFeaturedFaqs = ({ limit = 5 } = {}) => publishedFaqs
  .filter((faq) => faq.featured)
  .slice(0, limit);

export const getHomeFaqSummary = ({ limit = 3 } = {}) => ({
  total: publishedFaqs.length,
  faqs: getFeaturedFaqs({ limit }).map((faq) => ({
    id: faq.id,
    question: faq.question,
  })),
});

export const getFaqsByProductId = (productId) => publishedFaqs
  .filter((faq) => faq.productIds.includes(String(productId)));

export const getProductFaqPayload = (productId, { limit = 5 } = {}) => {
  const product = productById.get(String(productId));

  if (!product) {
    return { faqs: [], directCount: 0 };
  }

  const selectedFaqs = selectFaqsForProduct(publishedFaqs, product, { limit });

  return {
    faqs: selectedFaqs.map(({ faq, relation }) => ({
      id: faq.id,
      question: faq.question,
      answer: faq.answer,
      answerItems: faq.answerItems,
      relationType: relation.type,
    })),
    directCount: selectedFaqs.filter(({ relation }) => relation.type === 'direct').length,
  };
};

export const getPublicFaqPayload = () => {
  const usedCategoryIds = new Set(publishedFaqs.map((faq) => faq.categoryId));
  const usedTagIds = new Set(publishedFaqs.flatMap((faq) => faq.tagIds));
  const usedLineIds = new Set(publishedFaqs.flatMap((faq) => faq.lineIds));

  return {
    faqs: buildFaqSearchIndex(publishedFaqs.map((faq) => ({
      ...faq,
      searchProductNames: contextualProductNamesByFaqId.get(faq.id),
    }))),
    categories: faqData.categories
      .filter((category) => category.active && usedCategoryIds.has(category.id))
      .sort((left, right) => left.sortOrder - right.sortOrder),
    tags: faqData.tags
      .filter((tag) => tag.active && usedTagIds.has(tag.id))
      .sort((left, right) => left.name.localeCompare(right.name, 'es')),
    lines: faqData.lines
      .filter((line) => line.active && usedLineIds.has(line.id))
      .sort((left, right) => left.sortOrder - right.sortOrder),
  };
};
