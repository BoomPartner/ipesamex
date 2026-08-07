const getProductTaxonomyIds = (product) => new Set([
  product.subcategorie,
  product.microcategorie,
].filter(Boolean));

export const getProductFaqRelation = (faq, product) => {
  const productId = String(product.id);

  if (faq.productIds.includes(productId)) {
    return { type: 'direct', score: 1000 };
  }

  const taxonomyIds = getProductTaxonomyIds(product);
  const actionCategoryId = faq.action?.catalogueCategoryId;
  const actionMicrocategoryId = faq.action?.catalogueMicrocategoryId;

  if (
    actionCategoryId === product.categorie
    && actionMicrocategoryId
    && taxonomyIds.has(actionMicrocategoryId)
  ) {
    return { type: 'subcategory', score: 700 };
  }

  if (faq.tags.some((tagId) => taxonomyIds.has(tagId))) {
    return { type: 'subcategory', score: 600 };
  }

  if (faq.lineIds.includes(product.categorie)) {
    return { type: 'line', score: 400 };
  }

  if (actionCategoryId === product.categorie && !actionMicrocategoryId) {
    return { type: 'line', score: 300 };
  }

  return null;
};

export const selectFaqsForProduct = (faqs, product, { limit = 5 } = {}) => faqs
  .map((faq) => ({ faq, relation: getProductFaqRelation(faq, product) }))
  .filter((item) => item.relation)
  .sort((left, right) => (
    right.relation.score - left.relation.score
    || left.faq.sortOrder - right.faq.sortOrder
  ))
  .slice(0, limit);
