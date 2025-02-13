"use client";
import styled from "styled-components";

const Contenedor = styled.iframe`
  width:100%;
  
  @media (min-width: 300px) {
    height: 300vw;
  }


@media (min-width: 600px) {
    height: 230vw;
  }

  @media (min-width: 700px) {
    height: 210vw;
  }


  @media (min-width: 768px) {
    height: 190vw;
  }


@media (min-width: 800px) {
    height: 120vw;
  }

  @media (min-width: 1024px) {
    height: 70vw;
  }
`;

const Contacto2 = () => {


    return (
        <div className="flex justify-center items-center p-4">
          <Contenedor 
            src="https://tecknum.com/ipesaForms_v1/test_form2_ipesa.php" 
            title="Mi Iframe"
            frameborder="0" rameborder="0" scrolling="no"
          />
        </div>
      );
    };

export default Contacto2
