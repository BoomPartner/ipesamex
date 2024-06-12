import React from 'react'
import About from '@/components/Nosotros'
import { Suspense } from 'react'
import Isotipo from '@/components/Isotipo'

export const metadata = {
  title: "Nosotros",
  description: "Conocenos y conoce nuestras certificaciones que garantizan la calidad y seguridad dde nuestros productos."
}
const PageNosotros = () => {
  return (
    <Suspense fallback={<Isotipo></Isotipo>}>

      <About></About>
     
    </Suspense>
  )
}

export default PageNosotros
