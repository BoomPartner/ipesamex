'use client';

import { useEffect, useMemo, useState } from 'react';

const ProductFilters = ({
  categories,
  products,
  selectedCategory,
  selectedSubcategory,
  onCategoryChange,
  onSubcategoryChange,
}) => {
  const [openCategory, setOpenCategory] = useState(selectedCategory);
  const categoryCounts = useMemo(() => products.reduce((counts, product) => {
    counts[product.categorie] = (counts[product.categorie] ?? 0) + 1;
    return counts;
  }, {}), [products]);
  const subcategoryCounts = useMemo(() => products.reduce((counts, product) => {
    counts[product.microcategorie] = (counts[product.microcategorie] ?? 0) + 1;
    return counts;
  }, {}), [products]);
  const activeCategory = categories.find((category) => category.id === selectedCategory);

  useEffect(() => {
    setOpenCategory(selectedCategory);
  }, [selectedCategory]);

  return (
    <>
      <div className="grid gap-3 rounded-3xl border border-gray-200 bg-white p-4 shadow-sm sm:grid-cols-2 lg:hidden">
        <div>
          <label htmlFor="catalog-category" className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-600">
            Categoría
          </label>
          <select
            id="catalog-category"
            value={selectedCategory}
            className="min-h-12 w-full rounded-xl border border-gray-300 bg-white px-4 text-gray-900 focus:border-[#c50411] focus:outline-none focus:ring-1 focus:ring-[#c50411]"
            onChange={(event) => onCategoryChange(event.target.value)}
          >
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.label} ({categoryCounts[category.id] ?? 0})
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="catalog-subcategory" className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-600">
            Subcategoría
          </label>
          <select
            id="catalog-subcategory"
            value={selectedSubcategory ?? ''}
            className="min-h-12 w-full rounded-xl border border-gray-300 bg-white px-4 text-gray-900 focus:border-[#c50411] focus:outline-none focus:ring-1 focus:ring-[#c50411]"
            onChange={(event) => onSubcategoryChange(event.target.value || null)}
          >
            <option value="">Todos los productos</option>
            {activeCategory?.subcategories.map((subcategory) => (
              <option key={subcategory.id} value={subcategory.id}>
                {subcategory.label} ({subcategoryCounts[subcategory.id] ?? 0})
              </option>
            ))}
          </select>
        </div>
      </div>

      <aside className="hidden lg:block" aria-label="Clasificación de productos">
        <div className="sticky top-24 rounded-3xl border border-gray-200 bg-white p-4 shadow-sm">
          <div className="px-2 pb-4">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#9d0711]">Explorar catálogo</p>
            <h2 className="mt-1 text-2xl font-black text-gray-900">Líneas y categorías</h2>
          </div>

          <div className="space-y-2">
            {categories.map((category) => {
              const isOpen = openCategory === category.id;
              const isSelected = selectedCategory === category.id;

              return (
                <div key={category.id} className="overflow-hidden rounded-2xl border border-gray-200">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`catalog-filters-${category.id}`}
                    className={`flex min-h-12 w-full items-center justify-between gap-3 px-4 py-3 text-left transition-colors ${
                      isSelected ? 'bg-[#9d0711] text-white' : 'bg-white text-gray-800 hover:bg-gray-50'
                    }`}
                    onClick={() => {
                      onCategoryChange(category.id);
                      setOpenCategory(isOpen ? null : category.id);
                    }}
                  >
                    <span className="font-black uppercase">{category.label}</span>
                    <span className="flex items-center gap-2">
                      <span className={`rounded-full px-2 py-0.5 text-xs ${isSelected ? 'bg-white/20' : 'bg-gray-100'}`}>
                        {categoryCounts[category.id] ?? 0}
                      </span>
                      <span aria-hidden="true" className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}>⌄</span>
                    </span>
                  </button>

                  {isOpen ? (
                    <div id={`catalog-filters-${category.id}`} className="space-y-1 bg-gray-50 p-2">
                      <button
                        type="button"
                        className={`flex min-h-10 w-full items-center justify-between rounded-xl px-3 text-left text-sm font-bold ${
                          !selectedSubcategory ? 'bg-white text-[#9d0711] shadow-sm' : 'text-gray-700 hover:bg-white'
                        }`}
                        onClick={() => onSubcategoryChange(null)}
                      >
                        Todos <span>{categoryCounts[category.id] ?? 0}</span>
                      </button>
                      {category.subcategories.map((subcategory) => (
                        <button
                          key={subcategory.id}
                          type="button"
                          className={`flex min-h-10 w-full items-center justify-between rounded-xl px-3 text-left text-sm font-semibold ${
                            selectedSubcategory === subcategory.id
                              ? 'bg-white text-[#9d0711] shadow-sm'
                              : 'text-gray-700 hover:bg-white'
                          }`}
                          onClick={() => onSubcategoryChange(subcategory.id)}
                        >
                          <span>{subcategory.label}</span>
                          <span className="ml-2 text-xs text-gray-500">{subcategoryCounts[subcategory.id] ?? 0}</span>
                        </button>
                      ))}
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </aside>
    </>
  );
};

export default ProductFilters;
