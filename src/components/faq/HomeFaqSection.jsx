import Link from 'next/link';

const HomeFaqSection = ({ faqSummary }) => {
  const total = faqSummary?.total ?? 0;
  const featuredFaqs = faqSummary?.faqs ?? [];

  return (
    <section
      aria-labelledby="home-faq-title"
      className="relative overflow-hidden bg-[#970811] text-white"
    >
      <div
        aria-hidden="true"
        className="absolute -right-20 -top-24 h-72 w-72 rounded-full border-[48px] border-white/5"
      />
      <div className="relative mx-auto grid w-full max-w-7xl gap-8 px-5 py-10 sm:px-8 lg:grid-cols-[0.9fr_1.6fr] lg:items-center lg:px-10 lg:py-12">
        <div>
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.18em] text-red-100">
            Centro de ayuda IPESA
          </p>
          <h2 id="home-faq-title" className="text-3xl font-black leading-tight sm:text-4xl">
            ¿Tienes preguntas sobre nuestros productos?
          </h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-red-50">
            Encuentra respuestas sobre aplicación, rendimiento, seguridad, compra y líneas de producto.
          </p>
          <Link
            href="/preguntas-frecuentes"
            className="mt-6 inline-flex min-h-12 items-center rounded-full bg-white px-6 font-bold text-[#870710] shadow-lg transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Explorar {total} respuestas
            <span aria-hidden="true" className="ml-2">→</span>
          </Link>
        </div>

        <div className="grid gap-3 sm:grid-cols-3" aria-label="Preguntas destacadas">
          {featuredFaqs.map((faq) => (
            <Link
              key={faq.id}
              href={`/preguntas-frecuentes?q=${encodeURIComponent(faq.question)}`}
              className="group flex min-h-36 flex-col justify-between rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-sm transition-colors hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <span className="text-xs font-bold uppercase tracking-wider text-red-100">
                Pregunta frecuente
              </span>
              <span className="mt-5 font-bold leading-6">{faq.question}</span>
              <span className="mt-4 text-sm font-semibold text-white">
                Ver respuesta <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeFaqSection;
