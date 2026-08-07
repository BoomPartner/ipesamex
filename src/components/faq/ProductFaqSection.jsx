import Link from 'next/link';

const ProductFaqSection = ({ product, faqs, directCount, categoryName, subcategoryName }) => {
  if (!faqs.length) return null;

  const faqSearchHref = `/preguntas-frecuentes?q=${encodeURIComponent(product.name)}`;
  const lineFaqHref = `/preguntas-frecuentes?linea=${encodeURIComponent(product.categorie)}`;

  return (
    <section
      id="preguntas-producto"
      aria-labelledby="product-faq-title"
      className="bg-gradient-to-b from-gray-50 to-white px-4 py-14 sm:px-6 sm:py-16 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#9d0711]">
              Ayuda para elegir y aplicar
            </p>
            <h2 id="product-faq-title" className="mt-2 text-3xl font-black text-gray-900 sm:text-4xl">
              Preguntas sobre {product.name}
            </h2>
            <p className="mt-3 leading-7 text-gray-600">
              {directCount > 0
                ? 'Estas respuestas están vinculadas directamente con el producto y se complementan con información de su línea.'
                : `Seleccionamos respuestas útiles para ${subcategoryName} dentro de la línea ${categoryName}.`}
            </p>
          </div>

          <div className="flex flex-wrap gap-2" aria-label="Clasificación del producto">
            <span className="rounded-full bg-red-50 px-4 py-2 text-sm font-bold text-[#9d0711]">
              {categoryName}
            </span>
            <span className="rounded-full bg-gray-200 px-4 py-2 text-sm font-bold text-gray-700">
              {subcategoryName}
            </span>
          </div>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {faqs.map((faq) => (
            <details
              key={faq.id}
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm open:border-red-200 open:shadow-md"
            >
              <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-bold text-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-[#c50411] [&::-webkit-details-marker]:hidden">
                <span>{faq.question}</span>
                <span
                  aria-hidden="true"
                  className="shrink-0 text-2xl leading-none text-[#c50411] transition-transform group-open:rotate-45 motion-reduce:transition-none"
                >
                  +
                </span>
              </summary>
              <div className="border-t border-gray-100 px-5 pb-5 pt-4 text-gray-700">
                <p className="leading-7">{faq.answer}</p>
                {faq.answerItems?.length ? (
                  <ul className="mt-4 list-disc space-y-2 pl-5">
                    {faq.answerItems.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                ) : null}
                {faq.relationType === 'direct' ? (
                  <p className="mt-4 text-xs font-bold uppercase tracking-wide text-[#9d0711]">
                    Relación directa con {product.name}
                  </p>
                ) : null}
              </div>
            </details>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-3 rounded-2xl bg-gray-900 p-5 text-white sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div>
            <p className="font-black">¿Necesitas otra respuesta?</p>
            <p className="mt-1 text-sm text-gray-300">Consulta el centro FAQ por producto o explora todas las preguntas de esta línea.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href={faqSearchHref}
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#c50411] px-5 py-2 text-center text-sm font-bold text-white transition-colors hover:bg-[#e11d2e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Buscar “{product.name}” en FAQ
            </Link>
            <Link
              href={lineFaqHref}
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-gray-600 px-5 py-2 text-center text-sm font-bold text-white transition-colors hover:border-white hover:bg-white hover:text-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Preguntas de {categoryName}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductFaqSection;
