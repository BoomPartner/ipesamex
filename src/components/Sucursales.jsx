'use client';

import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

let locationsPromise;

const loadLocations = () => {
  if (!locationsPromise) {
    locationsPromise = import('./dataMapas').then((module) => module.locations);
  }

  return locationsPromise;
};

const normalizeText = (value) =>
  value
    .trim()
    .toUpperCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');

const Sucursales = () => {
  const [query, setQuery] = useState('');
  const [positions, setPositions] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [searchError, setSearchError] = useState(false);

  const handleQueryChange = (event) => {
    const nextQuery = event.target.value;
    setQuery(nextQuery);

    if (!nextQuery.trim()) {
      setPositions([]);
      setHasSearched(false);
      setSearchError(false);
    }
  };

  const handleFilterLocations = async (event) => {
    event.preventDefault();

    const normalizedQuery = normalizeText(query);
    if (!normalizedQuery) {
      setPositions([]);
      setHasSearched(false);
      setSearchError(false);
      return;
    }

    setIsSearching(true);
    setSearchError(false);

    try {
      const locations = await loadLocations();
      const isPostalCode = /^\d+$/.test(normalizedQuery);
      const filteredLocations = locations.filter((item) => {
        if (isPostalCode) {
          return item.codigo_postal === Number(normalizedQuery);
        }

        return normalizeText(item.estado) === normalizedQuery;
      });

      setPositions(filteredLocations);
      setHasSearched(true);
    } catch {
      setPositions([]);
      setHasSearched(true);
      setSearchError(true);
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <main className="sinfocus">
      <section className="color-sucursales w-full p-6 md:p-10">
        <div className="mx-auto flex w-full max-w-[1600px] flex-col items-center lg:flex-row">
          <div className="order-2 w-full p-6 arriba lg:order-1 lg:w-4/5 lg:p-20">
            <h1 className="mb-5 text-4xl font-semibold text-black md:text-5xl">
              Ubícanos
            </h1>
            <p className="w-full text-xl text-black">
              Localiza tu sucursal más cercana y disfruta de los servicios y
              productos que ofrecemos. Contamos con más de{' '}
              <span className="text-2xl font-bold uppercase">
                1000 sucursales
              </span>{' '}
              en todo el territorio nacional para estar siempre a tu alcance.
            </p>
            <p className="mt-10 w-full text-xl text-black">
              Visítanos en cualquiera de nuestras ubicaciones en la República
              Mexicana y vive la experiencia de un servicio de calidad y
              atención personalizada.
            </p>
          </div>

          <div className="order-1 flex w-full justify-center lg:order-2">
            <Image
              src="/sucursales/sucursales.webp"
              className="push h-auto w-full lg:w-3/4"
              width={1500}
              height={1500}
              sizes="(min-width: 1024px) 38vw, 100vw"
              alt="Mapa ilustrativo de sucursales IPESA"
            />
          </div>
        </div>
      </section>

      <section className="flex w-full justify-center px-6 py-10">
        <div className="w-full max-w-3xl">
          <form
            className="flex items-center gap-3"
            onSubmit={handleFilterLocations}
          >
            <label className="sr-only" htmlFor="branch-search">
              Código postal o estado
            </label>
            <input
              id="branch-search"
              className="w-full rounded-md border border-gray-400 px-4 py-3 text-base outline-none transition focus:border-[#c50411] focus:ring-2 focus:ring-[#c50411]/20"
              placeholder="Ingresa código postal o estado"
              value={query}
              onChange={handleQueryChange}
              autoComplete="postal-code"
            />
            <button
              type="submit"
              className="rounded-md p-3 text-[#c50411] transition hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-[#c50411]"
              aria-label="Buscar sucursales"
              disabled={isSearching}
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} size="xl" />
            </button>
          </form>

          <div
            className="mt-6 max-h-[75vh] w-full overflow-y-auto pr-2"
            aria-live="polite"
            aria-busy={isSearching}
          >
            {isSearching && (
              <p className="py-8 text-center text-gray-700">
                Buscando sucursales…
              </p>
            )}

            {!isSearching && !hasSearched && (
              <p className="py-8 text-center text-gray-700">
                Escribe un código postal o el nombre de un estado para mostrar
                las sucursales cercanas.
              </p>
            )}

            {!isSearching && searchError && (
              <p className="py-8 text-center text-[#c50411]">
                No fue posible cargar las sucursales. Intenta nuevamente.
              </p>
            )}

            {!isSearching &&
              hasSearched &&
              !searchError &&
              positions.length === 0 && (
                <p className="py-8 text-center text-[#c50411]">
                  No se encontraron sucursales. Ingresa otro código postal o
                  estado.
                </p>
              )}

            {!isSearching &&
              positions.map((item, index) => (
                <article
                  className="mt-6 rounded-xl bg-white p-6 shadow-md"
                  key={`${item.estado}-${item.codigo_postal}-${item.ciudad}-${index}`}
                >
                  <Image
                    src={item.imagen}
                    width={100}
                    height={100}
                    alt={`Logo de sucursal en ${item.ciudad}`}
                  />
                  <p className="mt-4">
                    <strong className="text-xl font-bold">Estado: </strong>
                    {item.estado}
                  </p>
                  <p>
                    <strong className="text-xl font-bold">
                      Código Postal:{' '}
                    </strong>
                    {item.codigo_postal}
                  </p>
                  <p>
                    <strong className="text-xl font-bold">Ciudad: </strong>
                    {item.ciudad}
                  </p>
                  <p className="mt-3 text-xl font-bold">
                    <Link
                      href={item.enlace}
                      className="hover:border-b hover:border-gray-500"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ver en Maps
                    </Link>
                  </p>
                </article>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Sucursales;
