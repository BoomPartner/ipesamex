import React from 'react'
import Productos from '@/components/Productos'
import { Suspense } from 'react'
import Isotipo from '@/components/Isotipo'

export const metadata = {
  title: "Productos",
  description: "Nuestros productos estan coformados por categorias especializadas para cada ramo del sector."
}
const PageProductos = () => {
  return (

    <Suspense fallback={<Isotipo></Isotipo>}>

      <Productos></Productos>
    </Suspense>

  )
}

export default PageProductos
