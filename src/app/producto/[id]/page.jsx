import React from 'react'
import ProductoSelected from '@/components/Producto'
import { Suspense } from 'react'
import Isotipo from '@/components/Isotipo'
import { notFound } from 'next/navigation'
import ProductFaqSection from '@/components/faq/ProductFaqSection'
import { categoriasCatalogo, productos } from '@/data/productos'
import { getProductFaqPayload } from '@/lib/faq/repository'

export const metadata = {
  title: "Producto",
  description: ""
}

const PageProducto = ({ params }) => {
  const producto = productos.find((item) => item.id === params.id)

  if (!producto) notFound()

  const category = categoriasCatalogo.find((item) => item.id === producto.categorie)
  const subcategory = category?.subcategories.find((item) => (
    item.id === producto.subcategorie || item.id === producto.microcategorie
  ))
  const faqPayload = getProductFaqPayload(producto.id)

  return (
    <>
      <Suspense fallback={<Isotipo></Isotipo>}>
        <ProductoSelected producto={producto}></ProductoSelected>
      </Suspense>
      <ProductFaqSection
        product={producto}
        categoryName={category?.label ?? producto.categorie}
        subcategoryName={subcategory?.label ?? producto.subcategorie}
        {...faqPayload}
      />
    </>
  )
}

export default PageProducto
