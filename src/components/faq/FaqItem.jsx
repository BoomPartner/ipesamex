'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const applyCatalogueFilters = (action) => {
  if (!action?.catalogueCategoryId) {
    return;
  }

  localStorage.setItem('categoria', action.catalogueCategoryId);
  localStorage.setItem('microcategoria', action.catalogueMicrocategoryId ?? '');
};

const FaqItem = ({ faq, onTagSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const triggerId = `faq-trigger-${faq.id}`;
  const panelId = `faq-panel-${faq.id}`;

  return (
    <article className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      <h2>
        <button
          id={triggerId}
          type="button"
          className="flex min-h-16 w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold text-gray-900 transition-colors hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-[#c50411] sm:px-6 sm:text-lg"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={() => setIsOpen((current) => !current)}
        >
          <span>{faq.question}</span>
          <span
            aria-hidden="true"
            className={`shrink-0 text-2xl leading-none text-[#c50411] transition-transform motion-reduce:transition-none ${isOpen ? 'rotate-45' : ''}`}
          >
            +
          </span>
        </button>
      </h2>

      <div
        id={panelId}
        role="region"
        aria-labelledby={triggerId}
        hidden={!isOpen}
        className="border-t border-gray-100 px-5 py-5 text-gray-700 sm:px-6"
      >
        <p className="leading-7">{faq.answer}</p>

        {faq.answerItems?.length ? (
          <ul className="mt-4 list-disc space-y-2 pl-5">
            {faq.answerItems.map((item) => <li key={item}>{item}</li>)}
          </ul>
        ) : null}

        {faq.relatedProducts.length ? (
          <div className="mt-5">
            <h3 className="text-sm font-bold uppercase tracking-wide text-gray-900">
              Productos relacionados
            </h3>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {faq.relatedProducts.map((product) => (
                <Link
                  key={product.id}
                  href={product.href}
                  className="group flex min-h-20 items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 p-3 transition hover:border-red-200 hover:bg-red-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c50411]"
                >
                  <span className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg bg-white">
                    <Image
                      src={product.image}
                      alt=""
                      fill
                      loading="lazy"
                      sizes="56px"
                      className="object-contain p-1"
                    />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-bold text-gray-900 group-hover:text-[#9d0711]">
                      {product.name}
                    </span>
                    <span className="mt-1 block text-xs leading-5 text-gray-600">
                      {product.categoryName} · {product.subcategoryName}
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        ) : null}

        {faq.links?.length ? (
          <div className="mt-5 flex flex-wrap gap-4">
            {faq.links.map((link) => link.external ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#9d0711] underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c50411]"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="font-semibold text-[#9d0711] underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c50411]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        ) : null}

        {faq.action ? (
          <div className="mt-5">
            <Link
              href={faq.action.href}
              onClick={() => applyCatalogueFilters(faq.action)}
              className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-[#c50411] px-4 py-2 font-semibold text-white transition-colors hover:bg-[#9d0711] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c50411]"
            >
              {faq.action.label}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        ) : null}

        <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-gray-100 pt-4">
          <span className="rounded-full bg-gray-900 px-3 py-2 text-xs font-semibold text-white">
            {faq.category.name}
          </span>
          {faq.tags.map((tag) => (
            <button
              key={tag.id}
              type="button"
              className="min-h-11 rounded-full bg-gray-100 px-3 py-2 text-xs font-semibold text-gray-700 transition-colors hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c50411]"
              onClick={() => onTagSelect(tag.id)}
              aria-label={`Filtrar por etiqueta ${tag.name}`}
            >
              #{tag.name}
            </button>
          ))}
        </div>
      </div>
    </article>
  );
};

export default FaqItem;
