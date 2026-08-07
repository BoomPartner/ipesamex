import { Suspense } from 'react';
import FaqExplorer from '@/components/faq/FaqExplorer';
import { getPublicFaqPayload } from '@/lib/faq/repository';

export const metadata = {
  title: 'Preguntas Frecuentes',
  description: 'Consulta respuestas sobre productos IPESA, aplicaciones, rendimiento, preparación de superficies, secado, seguridad y recomendaciones técnicas.',
  alternates: {
    canonical: '/preguntas-frecuentes',
  },
  openGraph: {
    title: 'Preguntas Frecuentes | IPESA Pinturas',
    description: 'Encuentra información técnica y comercial sobre productos, aplicaciones, seguridad, compra y distribución de IPESA Pinturas.',
    url: '/preguntas-frecuentes',
    type: 'website',
  },
};

const FaqLoading = () => (
  <div className="rounded-2xl bg-white p-8 text-center text-gray-600 shadow-lg" role="status">
    Preparando el centro de preguntas frecuentes…
  </div>
);

const PagePreguntas = () => {
  const faqPayload = getPublicFaqPayload();

  return (
    <main className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-br from-[#97010b] to-[#d71f2b] px-5 py-12 text-white sm:py-16">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-100">Base de conocimiento IPESA</p>
          <h1 className="mt-3 text-3xl font-black uppercase sm:text-5xl">Preguntas frecuentes</h1>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-red-50 sm:text-lg">
            Encuentra respuestas sobre productos, aplicaciones, rendimiento, preparación, seguridad, compra y distribución.
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <Suspense fallback={<FaqLoading />}>
          <FaqExplorer {...faqPayload} />
        </Suspense>
      </div>
    </main>
  );
};

export default PagePreguntas;
