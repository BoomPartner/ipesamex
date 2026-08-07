import React, { Suspense } from 'react'
import Inicio from '@/components/Inicio'
import Isotipo from '@/components/Isotipo'
import { getHomeFaqSummary } from '@/lib/faq/repository'
import { categorias, productos } from '@/data/productos'
const Index = () => {
  const faqSummary = getHomeFaqSummary({ limit: 3 })
  const calculatorProduct = productos.find((product) => product.id === 'vintek')

  return (
    <Suspense fallback={<Isotipo/>}>
      <Inicio
        faqSummary={faqSummary}
        homeCategories={categorias}
        calculatorProduct={calculatorProduct}
      ></Inicio>
    </Suspense>
  
  )
}

export default Index
