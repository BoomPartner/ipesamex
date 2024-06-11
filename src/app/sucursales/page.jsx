import React, { Suspense } from 'react'
import Sucursales from '@/components/Sucursales'
import Isotipo from '@/components/Isotipo'

export const metadata = {
  title: "Sucursales",
  description: "Localiza tu sucursal más cercana, tenemos presencia a nivel nacional, estamos muy cerca de ti",
}
const PageSucursales = () => {
  return (


    <Suspense fallback={<Isotipo></Isotipo>}>

      <Sucursales></Sucursales>

    </Suspense>


  )
}

export default PageSucursales
