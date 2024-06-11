import React, { Suspense } from 'react'
import Decorador from '@/components/Decorador'
import Isotipo from '@/components/Isotipo'
export const metadata = {
  title: "Decorador",
  description: "Decora tu espacio con nuestra linea de pinturas vinílicas ideal para interiores y exteriores"
}
const PageDecorador = () => {
  return (
    <Suspense fallback={<Isotipo></Isotipo>}>
      <Decorador></Decorador>
    </Suspense>
  )
}

export default PageDecorador
