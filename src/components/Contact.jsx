"use client";
import styled from "styled-components";

const Contenedor = styled.iframe`
  width:100%;
  
  @media (min-width: 300px) {
    height: 380vw;
  }

   @media (min-width: 400px) {
    height: 380vw;
  }


   @media (min-width: 500px) {
    height: 370vw;
  }


     @media (min-width: 600px) {
    height: 320vw;
  }


     @media (min-width: 650px) {
    height: 290vw;
  }


     @media (min-width: 700px) {
    height: 270vw;
  }

    @media (min-width: 768px) {
    height: 250vw;
  }
 



  @media (min-width: 1024px) {
    height: 100vw;
  }

    @media (min-width: 1300px) {
    height: 85vw;
  }
`;

const Contacto = () => {


    return (
        <div className="flex justify-center items-center p-4">
          <Contenedor 
            src="https://tecknum.com/ipesaForms_v1/test_form1_ipesa.php" 
            title="Mi Iframe"
            frameborder="0" rameborder="0" scrolling="no"
          />
        </div>
      );
    };

export default Contacto
