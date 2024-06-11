import React, { Suspense } from 'react'
import Inicio from '@/components/Inicio'
import Isotipo from '@/components/Isotipo'
const Index = () => {
  return (
    <Suspense fallback={<Isotipo/>}>
      <Inicio></Inicio>
    </Suspense>
  
  )
}

export default Index
