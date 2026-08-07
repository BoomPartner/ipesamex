'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { categoriasCatalogo, productos } from '@/data/productos';
import {
  buildProductCatalogIndex,
  filterCatalogProducts,
  normalizeProductText,
} from '@/lib/products/catalog.mjs';
import ProductCard from './products/ProductCard';
import ProductFilters from './products/ProductFilters';
import ProductPagination from './products/ProductPagination';
import ProductSearch from './products/ProductSearch';

const DEFAULT_CATEGORY = 'decorativa';
const ITEMS_PER_PAGE = 12;
const indexedProducts = buildProductCatalogIndex(productos, categoriasCatalogo);

const Productos = () => {
  const [categoryId, setCategoryId] = useState(DEFAULT_CATEGORY);
  const [subcategoryId, setSubcategoryId] = useState(null);
  const [searchInput, setSearchInput] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const catalogRef = useRef(null);

  const activeCategory = useMemo(
    () => categoriasCatalogo.find((category) => category.id === categoryId)
      ?? categoriasCatalogo[0],
    [categoryId],
  );
  const activeSubcategory = activeCategory.subcategories.find(
    (subcategory) => subcategory.id === subcategoryId,
  );

  const filteredProducts = useMemo(
    () => filterCatalogProducts(indexedProducts, {
      categoryId,
      subcategoryId,
      query: searchQuery,
    }),
    [categoryId, searchQuery, subcategoryId],
  );
  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / ITEMS_PER_PAGE));
  const firstProductIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const visibleProducts = filteredProducts.slice(
    firstProductIndex,
    firstProductIndex + ITEMS_PER_PAGE,
  );

  const scrollToCatalog = useCallback(() => {
    window.requestAnimationFrame(() => {
      catalogRef.current?.scrollIntoView({
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
        block: 'start',
      });
    });
  }, []);

  useEffect(() => {
    const storedCategoryId = localStorage.getItem('categoria');
    const storedSubcategoryId = localStorage.getItem('microcategoria');
    const storedCategory = categoriasCatalogo.find(
      (category) => category.id === storedCategoryId,
    );
    const nextCategory = storedCategory ?? categoriasCatalogo[0];
    const hasValidSubcategory = nextCategory.subcategories.some(
      (subcategory) => subcategory.id === storedSubcategoryId,
    );

    setCategoryId(nextCategory.id);
    setSubcategoryId(hasValidSubcategory ? storedSubcategoryId : null);
    localStorage.setItem('categoria', nextCategory.id);
    if (!hasValidSubcategory) localStorage.removeItem('microcategoria');
  }, []);

  useEffect(() => {
    if (currentPage > totalPages) setCurrentPage(totalPages);
  }, [currentPage, totalPages]);

  const handleCategoryChange = (nextCategoryId) => {
    setCategoryId(nextCategoryId);
    setSubcategoryId(null);
    setSearchQuery('');
    setSearchInput('');
    setCurrentPage(1);
    localStorage.setItem('categoria', nextCategoryId);
    localStorage.removeItem('microcategoria');
  };

  const handleSubcategoryChange = (nextSubcategoryId) => {
    setSubcategoryId(nextSubcategoryId);
    setSearchQuery('');
    setSearchInput('');
    setCurrentPage(1);
    localStorage.setItem('categoria', categoryId);
    if (nextSubcategoryId) localStorage.setItem('microcategoria', nextSubcategoryId);
    else localStorage.removeItem('microcategoria');
  };

  const commitSearch = (query) => {
    const normalizedQuery = normalizeProductText(query);
    setSearchQuery(normalizedQuery ? query.trim() : '');
    setCurrentPage(1);
    scrollToCatalog();
  };

  const handleSuggestionSelect = (product) => {
    setSearchInput(product.name);
    setSearchQuery(product.name);
    setCurrentPage(1);
    scrollToCatalog();
  };

  const clearSearch = () => {
    setSearchInput('');
    setSearchQuery('');
    setCurrentPage(1);
  };

  const goToPage = (page) => {
    if (page < 1 || page > totalPages || page === currentPage) return;
    setCurrentPage(page);
    scrollToCatalog();
  };

  const resultsStart = filteredProducts.length ? firstProductIndex + 1 : 0;
  const resultsEnd = Math.min(firstProductIndex + ITEMS_PER_PAGE, filteredProducts.length);
  const resultHeading = searchQuery
    ? `Resultados para “${searchQuery}”`
    : activeSubcategory?.label ?? activeCategory.label;
  const backgroundCategory = activeCategory?.id ?? DEFAULT_CATEGORY;
  const faqHref = searchQuery
    ? `/preguntas-frecuentes?q=${encodeURIComponent(searchQuery)}`
    : `/preguntas-frecuentes?linea=${encodeURIComponent(categoryId)}`;

  return (
    <main className="min-h-screen bg-[#f5f5f5] bg-[url('/principal/waves.jpg')] bg-cover bg-center bg-no-repeat pb-16">
      <div className="mx-auto w-full max-w-[1800px] px-4 pt-6 sm:px-6 lg:px-8">
        <ProductSearch
          products={indexedProducts}
          value={searchInput}
          onChange={setSearchInput}
          onSearch={commitSearch}
          onSelect={handleSuggestionSelect}
          onClear={clearSearch}
        />

        <div className="mt-6 grid gap-6 lg:grid-cols-[270px_minmax(0,1fr)]">
          <ProductFilters
            categories={categoriasCatalogo}
            products={indexedProducts}
            selectedCategory={categoryId}
            selectedSubcategory={subcategoryId}
            onCategoryChange={handleCategoryChange}
            onSubcategoryChange={handleSubcategoryChange}
          />

          <div className="min-w-0">
            <section
              aria-labelledby="catalog-title"
              className="relative flex min-h-44 items-end overflow-hidden rounded-3xl bg-gray-800 shadow-lg sm:min-h-52 lg:min-h-56"
              style={{
                backgroundImage: `linear-gradient(90deg, rgba(0,0,0,.72), rgba(0,0,0,.12)), url('/fondos_categorias/${backgroundCategory}.webp')`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
              }}
            >
              <div className="relative max-w-2xl p-6 text-white sm:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-100">
                  Catálogo IPESA
                </p>
                <h1 id="catalog-title" className="mt-2 text-3xl font-black sm:text-4xl">
                  {resultHeading}
                </h1>
                <p className="mt-2 text-sm leading-6 text-gray-100 sm:text-base">
                  {filteredProducts.length} {filteredProducts.length === 1 ? 'producto encontrado' : 'productos encontrados'}
                </p>
              </div>
            </section>

            <div ref={catalogRef} className="scroll-mt-28 pt-7">
              <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-gray-200 bg-white px-5 py-4 shadow-sm" aria-live="polite">
                <div>
                  <p className="font-black text-gray-900">{resultHeading}</p>
                  <p className="mt-1 text-sm text-gray-600">
                    Mostrando {resultsStart}–{resultsEnd} de {filteredProducts.length}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Link
                    href={faqHref}
                    className="inline-flex min-h-10 items-center rounded-full border border-gray-300 bg-white px-4 text-sm font-bold text-gray-700 transition-colors hover:border-red-200 hover:bg-red-50 hover:text-[#9d0711] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c50411]"
                  >
                    {searchQuery ? 'Consultar esta búsqueda en FAQ' : `Preguntas de ${activeCategory.label}`}
                  </Link>
                  {searchQuery ? (
                    <button type="button" onClick={clearSearch} className="inline-flex min-h-10 items-center rounded-full bg-red-50 px-4 text-sm font-bold text-[#9d0711] hover:bg-red-100">
                      Limpiar búsqueda ×
                    </button>
                  ) : (
                    <>
                      <span className="inline-flex min-h-10 items-center rounded-full bg-red-50 px-4 text-sm font-bold text-[#9d0711]">
                        {activeCategory.label}
                      </span>
                      {activeSubcategory ? (
                        <span className="inline-flex min-h-10 items-center rounded-full bg-gray-100 px-4 text-sm font-bold text-gray-700">
                          {activeSubcategory.label}
                        </span>
                      ) : null}
                    </>
                  )}
                </div>
              </div>

              {visibleProducts.length ? (
                <div
                  key={`${categoryId}-${subcategoryId ?? 'all'}-${searchQuery}-${currentPage}`}
                  className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4"
                >
                  {visibleProducts.map((product, index) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      index={index}
                    />
                  ))}
                </div>
              ) : (
                <div className="mt-6 rounded-3xl border border-dashed border-gray-300 bg-white px-6 py-16 text-center">
                  <p className="text-2xl font-black text-gray-900">No encontramos productos</p>
                  <p className="mx-auto mt-3 max-w-xl leading-7 text-gray-600">
                    Revisa la escritura o prueba con una categoría, aplicación o término más general.
                  </p>
                  <button type="button" onClick={clearSearch} className="mt-6 min-h-11 rounded-full bg-[#c50411] px-6 font-bold text-white hover:bg-[#9d0711]">
                    Ver catálogo
                  </button>
                </div>
              )}

              <ProductPagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={goToPage}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Productos;
