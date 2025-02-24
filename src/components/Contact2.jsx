"use client";
import styled from "styled-components";

const Contenedor = styled.iframe`
  width:100%;

      @media (min-width: 300px) {
    height: 1550px;
  }


      @media (min-width: 800px) {
    height: 1100px;
  }

    @media (min-width: 1300px) {
    height: 1000px;
  }
`;

const Contacto2 = () => {


    return (
        <div className="flex justify-center items-center p-4">
          <Contenedor 
            // src="http://localhost/ipesaForms_v1/test_form2_ipesa.php" 
            src="https://tecknum.com/ipesaForms_v1/test_form2_ipesa.php" 
            title="Mi Iframe"
            frameborder="0" rameborder="0" scrolling="no"
          />
        </div>
      );
    };

export default Contacto2
