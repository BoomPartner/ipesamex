'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import { normalizeProductText, searchCatalogProducts } from '@/lib/products/catalog.mjs';

const ProductSearch = ({ products, value, onChange, onSearch, onSelect, onClear }) => {
  const [focused, setFocused] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const normalizedQuery = normalizeProductText(value);
  const suggestions = useMemo(
    () => normalizedQuery.length >= 2
      ? searchCatalogProducts(products, value).slice(0, 6)
      : [],
    [normalizedQuery, products, value],
  );
  const showSuggestions = focused && normalizedQuery.length >= 2;

  const selectSuggestion = (product) => {
    onSelect(product);
    setFocused(false);
    setActiveIndex(-1);
  };

  const handleKeyDown = (event) => {
    if (!showSuggestions || suggestions.length === 0) return;

    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setActiveIndex((current) => (current + 1) % suggestions.length);
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      setActiveIndex((current) => (current <= 0 ? suggestions.length - 1 : current - 1));
    } else if (event.key === 'Escape') {
      setFocused(false);
      setActiveIndex(-1);
    } else if (event.key === 'Enter' && activeIndex >= 0) {
      event.preventDefault();
      selectSuggestion(suggestions[activeIndex]);
    }
  };

  return (
    <div
      className="relative z-30"
      onFocus={() => setFocused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setFocused(false);
          setActiveIndex(-1);
        }
      }}
    >
      <form
        role="search"
        className="rounded-3xl border border-gray-200 bg-white p-3 shadow-lg sm:flex sm:items-center sm:gap-3"
        onSubmit={(event) => {
          event.preventDefault();
          onSearch(value);
          setFocused(false);
          setActiveIndex(-1);
        }}
      >
        <label htmlFor="product-search" className="sr-only">Buscar productos</label>
        <div className="relative flex min-h-12 flex-1 items-center">
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="absolute left-4 h-5 w-5 text-gray-400">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m21 21-4.35-4.35m2.1-5.4a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Z" />
          </svg>
          <input
            id="product-search"
            type="search"
            value={value}
            maxLength={120}
            autoComplete="off"
            role="combobox"
            aria-autocomplete="list"
            aria-expanded={showSuggestions}
            aria-controls="product-search-suggestions"
            aria-activedescendant={activeIndex >= 0 ? `product-suggestion-${activeIndex}` : undefined}
            placeholder="Busca por producto, categoría, uso o descripción…"
            className="min-h-12 w-full rounded-2xl bg-gray-50 py-3 pl-12 pr-11 text-base text-gray-900 outline-none ring-[#c50411] placeholder:text-gray-500 focus:ring-2"
            onChange={(event) => {
              onChange(event.target.value);
              setActiveIndex(-1);
            }}
            onKeyDown={handleKeyDown}
          />
          {value ? (
            <button
              type="button"
              aria-label="Limpiar búsqueda"
              className="absolute right-3 inline-flex h-9 w-9 items-center justify-center rounded-full text-xl text-gray-500 hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#c50411]"
              onClick={onClear}
            >
              ×
            </button>
          ) : null}
        </div>
        <button
          type="submit"
          className="mt-3 inline-flex min-h-12 w-full items-center justify-center rounded-2xl bg-[#c50411] px-7 font-bold text-white transition-colors hover:bg-[#9d0711] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c50411] sm:mt-0 sm:w-auto"
        >
          Buscar
        </button>
      </form>

      {showSuggestions ? (
        <div
          id="product-search-suggestions"
          role="listbox"
          aria-label="Sugerencias de productos"
          className="absolute left-0 right-0 top-[calc(100%+0.5rem)] max-h-[70vh] overflow-y-auto rounded-3xl border border-gray-200 bg-white p-2 shadow-2xl"
        >
          {suggestions.length ? suggestions.map((product, index) => (
            <button
              key={product.id}
              id={`product-suggestion-${index}`}
              type="button"
              role="option"
              aria-selected={activeIndex === index}
              className={`grid w-full grid-cols-[72px_1fr] gap-4 rounded-2xl p-3 text-left transition-colors ${
                activeIndex === index ? 'bg-red-50' : 'hover:bg-gray-50'
              }`}
              onMouseEnter={() => setActiveIndex(index)}
              onClick={() => selectSuggestion(product)}
            >
              <span className="relative block h-[72px] overflow-hidden rounded-xl bg-gray-50">
                <Image src={product.imagen} alt="" fill sizes="72px" className="object-contain p-1" />
              </span>
              <span className="min-w-0">
                <span className="block font-black text-gray-900">{product.name}</span>
                <span className="mt-1 block text-xs font-bold uppercase text-[#9d0711]">
                  {product.catalogCategoryLabel} · {product.catalogSubcategoryLabel}
                </span>
                <span className="catalog-clamp-2 mt-1 block text-sm leading-5 text-gray-600">
                  {product.catalogDescription}
                </span>
              </span>
            </button>
          )) : (
            <p className="px-5 py-6 text-center text-sm text-gray-600">
              No encontramos productos para “{value}”. Presiona Buscar para ver el estado completo.
            </p>
          )}
        </div>
      ) : null}
    </div>
  );
};

export default ProductSearch;
