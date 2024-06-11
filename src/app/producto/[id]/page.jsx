import React from 'react'
import ProductoSelected from '@/components/Producto'
import { Suspense } from 'react'
import Isotipo from '@/components/Isotipo'

export const metadata = {
  title: "Producto",
  description: ""
}

const PageProducto = (value) => {
  return (
    
    <Suspense fallback={<Isotipo></Isotipo>}>

      <ProductoSelected valor={value}></ProductoSelected>
    </Suspense>
    
  )
}

export default PageProducto
