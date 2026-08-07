'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ProductCard = ({ product, index }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const presentations = (product.presentation ?? []).filter(Boolean).slice(0, 3);

  return (
    <Link
      href={`/producto/${product.id}`}
      className="catalog-card-enter group block h-full rounded-3xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c50411]"
      style={{ animationDelay: `${Math.min(index, 7) * 55}ms` }}
    >
      <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition duration-300 group-hover:-translate-y-1 group-hover:border-red-200 group-hover:shadow-xl">
        <div className="relative aspect-square overflow-hidden bg-gradient-to-b from-gray-50 to-white p-5">
          {!imageLoaded ? (
            <div className="absolute inset-5 animate-pulse rounded-2xl bg-gray-100" aria-hidden="true" />
          ) : null}
          <Image
            src={product.imagen}
            alt={product.name}
            fill
            loading="lazy"
            sizes="(max-width: 639px) 88vw, (max-width: 1023px) 42vw, (max-width: 1279px) 28vw, 20vw"
            className={`object-contain p-5 transition duration-500 group-hover:scale-105 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setImageLoaded(true)}
          />
          {product.nuevo ? (
            <span className="absolute right-4 top-4 rounded-full bg-[#c50411] px-3 py-1 text-xs font-bold uppercase text-white shadow">
              Nuevo
            </span>
          ) : null}
        </div>

        <div className="flex flex-1 flex-col p-5">
          <div className="flex flex-wrap gap-2 text-[11px] font-bold uppercase tracking-wide">
            <span className="rounded-full bg-red-50 px-3 py-1 text-[#9d0711]">
              {product.catalogCategoryLabel}
            </span>
            <span className="rounded-full bg-gray-100 px-3 py-1 text-gray-600">
              {product.catalogSubcategoryLabel}
            </span>
          </div>

          <h2 className="mt-4 text-xl font-black leading-tight text-gray-900">
            {product.name}{product.registro ? <sup className="ml-1 text-xs">{product.registro}</sup> : null}
          </h2>
          {product.name2 ? <p className="mt-1 font-semibold text-gray-700">{product.name2}</p> : null}

          <p className="catalog-clamp-3 mt-3 text-sm leading-6 text-gray-600">
            {product.catalogDescription}
          </p>

          <div className="mt-auto pt-5">
            {presentations.length ? (
              <p className="text-xs font-semibold text-gray-500">
                Presentaciones: {presentations.join(' · ')}
              </p>
            ) : null}
            <span className="mt-4 inline-flex items-center font-bold text-[#9d0711]">
              Ver producto <span aria-hidden="true" className="ml-2 transition-transform group-hover:translate-x-1">→</span>
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default ProductCard;
