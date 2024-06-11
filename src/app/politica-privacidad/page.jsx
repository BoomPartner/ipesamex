import React from 'react'
import PoliticaPrivacidad from '@/components/PoliticaPrivacidad'

export const metadata = {
  title: "Politica de Privacidad",
  description: "Conoce nuestra política de privacidad, donde se explica con que fines usaremos los datos proporcionados en nuestra web."
}
const PagePolitica = () => {
  return (
    <div className={`bg-[url('/principal/waves.jpg')] bg-cover bg-center bg-no-repeat`}>
      <PoliticaPrivacidad></PoliticaPrivacidad>
    </div>
  )
}

export default PagePolitica
