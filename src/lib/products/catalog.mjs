export const normalizeProductText = (value = '') => String(value)
  .toLocaleLowerCase('es-MX')
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .replace(/[^a-z0-9\s-]/g, ' ')
  .replace(/\s+/g, ' ')
  .trim();

const flattenText = (value) => {
  if (Array.isArray(value)) return value.flat(Infinity).map(flattenText).join(' ');
  if (value && typeof value === 'object') return Object.values(value).map(flattenText).join(' ');
  return value == null ? '' : String(value);
};

export const buildProductCatalogIndex = (products, categories) => {
  const categoryById = new Map(categories.map((category) => [category.id, category]));

  return products.map((product) => {
    const category = categoryById.get(product.categorie);
    const subcategory = category?.subcategories.find(
      (item) => item.id === product.microcategorie,
    );
    const description = flattenText(product.description).trim();
    const categoryLabel = category?.label ?? product.categorie;
    const subcategoryLabel = subcategory?.label ?? product.microcategorie;
    const normalizedName = normalizeProductText(`${product.name} ${product.name2 ?? ''}`);
    const normalizedDescription = normalizeProductText(description);
    const normalizedClassification = normalizeProductText([
      categoryLabel,
      subcategoryLabel,
      product.categorie,
      product.subcategorie,
      product.microcategorie,
    ].join(' '));

    return {
      ...product,
      catalogCategoryLabel: categoryLabel,
      catalogSubcategoryLabel: subcategoryLabel,
      catalogDescription: description,
      catalogSearch: `${normalizedName} ${normalizedClassification} ${normalizedDescription}`,
      catalogSearchName: normalizedName,
      catalogSearchClassification: normalizedClassification,
    };
  });
};

export const searchCatalogProducts = (indexedProducts, query) => {
  const normalizedQuery = normalizeProductText(query);
  if (!normalizedQuery) return indexedProducts;

  const terms = normalizedQuery.split(' ').filter(Boolean);

  return indexedProducts
    .map((product) => {
      if (!terms.every((term) => product.catalogSearch.includes(term))) return null;

      let score = 0;
      if (product.catalogSearchName === normalizedQuery) score += 1000;
      if (product.catalogSearchName.startsWith(normalizedQuery)) score += 400;
      if (product.catalogSearchName.includes(normalizedQuery)) score += 250;
      if (product.catalogSearchClassification.includes(normalizedQuery)) score += 120;
      terms.forEach((term) => {
        if (product.catalogSearchName.includes(term)) score += 60;
        if (product.catalogSearchClassification.includes(term)) score += 35;
      });

      return { product, score };
    })
    .filter(Boolean)
    .sort((left, right) => right.score - left.score || left.product.name.localeCompare(right.product.name, 'es'))
    .map(({ product }) => product);
};

export const filterCatalogProducts = (
  indexedProducts,
  { categoryId, subcategoryId, query },
) => {
  if (normalizeProductText(query)) return searchCatalogProducts(indexedProducts, query);

  return indexedProducts.filter((product) => {
    if (categoryId && product.categorie !== categoryId) return false;
    if (subcategoryId && product.microcategorie !== subcategoryId) return false;
    return true;
  });
};

export const getPaginationItems = (currentPage, totalPages) => {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }

  const pages = new Set([1, totalPages, currentPage - 1, currentPage, currentPage + 1]);
  const validPages = [...pages]
    .filter((page) => page >= 1 && page <= totalPages)
    .sort((left, right) => left - right);
  const items = [];

  validPages.forEach((page, index) => {
    const previousPage = validPages[index - 1];
    if (previousPage && page - previousPage > 1) items.push(`ellipsis-${previousPage}`);
    items.push(page);
  });

  return items;
};
