import { getPaginationItems } from '@/lib/products/catalog.mjs';

const ProductPagination = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;

  const items = getPaginationItems(currentPage, totalPages);

  return (
    <nav aria-label="Paginación de productos" className="mt-10 flex flex-wrap items-center justify-center gap-2">
      <button
        type="button"
        disabled={currentPage === 1}
        className="inline-flex min-h-11 items-center rounded-full border border-gray-300 px-4 text-sm font-bold text-gray-700 transition-colors hover:border-[#c50411] hover:text-[#9d0711] disabled:cursor-not-allowed disabled:opacity-40"
        onClick={() => onPageChange(currentPage - 1)}
      >
        <span aria-hidden="true" className="mr-2">←</span> Anterior
      </button>

      {items.map((item) => typeof item === 'number' ? (
        <button
          key={item}
          type="button"
          aria-current={item === currentPage ? 'page' : undefined}
          aria-label={`Ir a la página ${item}`}
          className={`inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border text-sm font-black transition-colors ${
            item === currentPage
              ? 'border-[#c50411] bg-[#c50411] text-white shadow-md'
              : 'border-gray-300 bg-white text-gray-700 hover:border-[#c50411] hover:text-[#9d0711]'
          }`}
          onClick={() => onPageChange(item)}
        >
          {item}
        </button>
      ) : (
        <span key={item} aria-hidden="true" className="px-1 text-gray-400">…</span>
      ))}

      <button
        type="button"
        disabled={currentPage === totalPages}
        className="inline-flex min-h-11 items-center rounded-full border border-gray-300 px-4 text-sm font-bold text-gray-700 transition-colors hover:border-[#c50411] hover:text-[#9d0711] disabled:cursor-not-allowed disabled:opacity-40"
        onClick={() => onPageChange(currentPage + 1)}
      >
        Siguiente <span aria-hidden="true" className="ml-2">→</span>
      </button>
    </nav>
  );
};

export default ProductPagination;
