'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { searchFaqs } from '@/lib/faq/search.mjs';
import FaqItem from './FaqItem';

const getUrlFilters = (searchParams) => ({
  query: searchParams.get('q') ?? '',
  categoryId: searchParams.get('categoria') ?? '',
  tagId: searchParams.get('tag') ?? '',
  lineId: searchParams.get('linea') ?? '',
});

const FaqExplorer = ({ faqs, categories, tags, lines }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const urlFilters = getUrlFilters(searchParams);
  const [query, setQuery] = useState(urlFilters.query);
  const [categoryId, setCategoryId] = useState(urlFilters.categoryId);
  const [tagId, setTagId] = useState(urlFilters.tagId);
  const [lineId, setLineId] = useState(urlFilters.lineId);
  const queryUrlTimer = useRef(null);

  useEffect(() => {
    const nextFilters = getUrlFilters(searchParams);
    setQuery(nextFilters.query);
    setCategoryId(nextFilters.categoryId);
    setTagId(nextFilters.tagId);
    setLineId(nextFilters.lineId);
  }, [searchParams]);

  useEffect(() => () => window.clearTimeout(queryUrlTimer.current), []);

  const updateUrl = (filters, method = 'replace') => {
    const params = new URLSearchParams();

    if (filters.query.trim()) params.set('q', filters.query.trim());
    if (filters.categoryId) params.set('categoria', filters.categoryId);
    if (filters.tagId) params.set('tag', filters.tagId);
    if (filters.lineId) params.set('linea', filters.lineId);

    const queryString = params.toString();
    const nextUrl = queryString ? `${pathname}?${queryString}` : pathname;
    router[method](nextUrl, { scroll: false });
  };

  const results = useMemo(() => searchFaqs(faqs, {
    query,
    categoryId,
    tagId,
    lineId,
  }), [faqs, query, categoryId, tagId, lineId]);

  const hasFilters = Boolean(query.trim() || categoryId || tagId || lineId);

  const applyFilters = (nextFilters) => {
    window.clearTimeout(queryUrlTimer.current);
    const filters = {
      query,
      categoryId,
      tagId,
      lineId,
      ...nextFilters,
    };

    setQuery(filters.query);
    setCategoryId(filters.categoryId);
    setTagId(filters.tagId);
    setLineId(filters.lineId);
    updateUrl(filters, 'push');
  };

  const handleQueryChange = (event) => {
    const nextQuery = event.target.value;
    setQuery(nextQuery);
    window.clearTimeout(queryUrlTimer.current);
    queryUrlTimer.current = window.setTimeout(() => {
      updateUrl({ query: nextQuery, categoryId, tagId, lineId });
    }, 250);
  };

  const clearFilters = () => applyFilters({
    query: '',
    categoryId: '',
    tagId: '',
    lineId: '',
  });

  return (
    <div>
      <section aria-label="Búsqueda y filtros" className="rounded-2xl bg-white p-5 shadow-lg sm:p-7">
        <div>
          <label htmlFor="faq-search" className="mb-2 block text-sm font-bold text-gray-900">
            Buscar en preguntas frecuentes
          </label>
          <div className="flex flex-col gap-2 sm:flex-row">
            <input
              id="faq-search"
              type="search"
              maxLength={120}
              value={query}
              onChange={handleQueryChange}
              placeholder="Buscar una pregunta, producto o aplicación..."
              className="min-h-12 w-full rounded-lg border border-gray-300 px-4 py-3 text-base text-gray-900 outline-none transition-shadow placeholder:text-gray-500 focus:border-[#c50411] focus:ring-2 focus:ring-[#c50411]/25"
            />
            {query ? (
              <button
                type="button"
                className="min-h-12 rounded-lg border border-gray-300 px-5 py-3 font-semibold text-gray-700 hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c50411]"
                onClick={() => applyFilters({ query: '' })}
              >
                Limpiar búsqueda
              </button>
            ) : null}
          </div>
        </div>

        <fieldset className="mt-6">
          <legend className="mb-3 text-sm font-bold text-gray-900">Categoría</legend>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              className={`min-h-11 rounded-full px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c50411] ${!categoryId ? 'bg-[#c50411] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              aria-pressed={!categoryId}
              onClick={() => applyFilters({ categoryId: '' })}
            >
              Todas
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                type="button"
                className={`min-h-11 rounded-full px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c50411] ${categoryId === category.id ? 'bg-[#c50411] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                aria-pressed={categoryId === category.id}
                onClick={() => applyFilters({ categoryId: category.id })}
              >
                {category.name}
              </button>
            ))}
          </div>
        </fieldset>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div>
            <label htmlFor="faq-line" className="mb-2 block text-sm font-bold text-gray-900">
              Línea de producto
            </label>
            <select
              id="faq-line"
              value={lineId}
              onChange={(event) => applyFilters({ lineId: event.target.value })}
              className="min-h-12 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 focus:border-[#c50411] focus:outline-none focus:ring-2 focus:ring-[#c50411]/25"
            >
              <option value="">Todas las líneas</option>
              {lines.map((line) => <option key={line.id} value={line.id}>{line.name}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="faq-tag" className="mb-2 block text-sm font-bold text-gray-900">
              Etiqueta
            </label>
            <select
              id="faq-tag"
              value={tagId}
              onChange={(event) => applyFilters({ tagId: event.target.value })}
              className="min-h-12 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 focus:border-[#c50411] focus:outline-none focus:ring-2 focus:ring-[#c50411]/25"
            >
              <option value="">Todas las etiquetas</option>
              {tags.map((tag) => <option key={tag.id} value={tag.id}>{tag.name}</option>)}
            </select>
          </div>
        </div>

        {hasFilters ? (
          <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-gray-100 pt-5">
            <span className="text-sm font-semibold text-gray-700">Filtros activos:</span>
            {query.trim() ? <span className="rounded-full bg-red-50 px-3 py-2 text-sm text-[#9d0711]">Búsqueda: “{query.trim()}”</span> : null}
            {categoryId ? <span className="rounded-full bg-red-50 px-3 py-2 text-sm text-[#9d0711]">{categories.find((item) => item.id === categoryId)?.name}</span> : null}
            {lineId ? <span className="rounded-full bg-red-50 px-3 py-2 text-sm text-[#9d0711]">{lines.find((item) => item.id === lineId)?.name}</span> : null}
            {tagId ? <span className="rounded-full bg-red-50 px-3 py-2 text-sm text-[#9d0711]">#{tags.find((item) => item.id === tagId)?.name}</span> : null}
            <button
              type="button"
              onClick={clearFilters}
              className="min-h-11 rounded-lg px-3 py-2 text-sm font-bold text-[#9d0711] underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c50411]"
            >
              Limpiar filtros
            </button>
          </div>
        ) : null}
      </section>

      <div className="mb-5 mt-8 flex items-end justify-between gap-4">
        <p className="font-semibold text-gray-800" aria-live="polite" aria-atomic="true">
          {results.length} {results.length === 1 ? 'resultado' : 'resultados'}
        </p>
        <span className="text-sm text-gray-600">{faqs.length} preguntas publicadas</span>
      </div>

      {results.length ? (
        <div className="space-y-4">
          {results.map((faq) => (
            <FaqItem key={faq.id} faq={faq} onTagSelect={(nextTagId) => applyFilters({ tagId: nextTagId })} />
          ))}
        </div>
      ) : (
        <section className="rounded-2xl border border-dashed border-gray-300 bg-white px-6 py-12 text-center">
          <h2 className="text-xl font-bold text-gray-900">
            No encontramos una respuesta relacionada con tu búsqueda.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-gray-600">
            Prueba con menos palabras, selecciona otra categoría o elimina los filtros activos.
          </p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <button
              type="button"
              onClick={clearFilters}
              className="min-h-12 rounded-lg bg-[#c50411] px-5 py-3 font-semibold text-white hover:bg-[#9d0711] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c50411]"
            >
              Ver todas las preguntas
            </button>
            <Link
              href="/contacto"
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-gray-300 px-5 py-3 font-semibold text-gray-800 hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c50411]"
            >
              Contáctanos
            </Link>
          </div>
        </section>
      )}
    </div>
  );
};

export default FaqExplorer;
