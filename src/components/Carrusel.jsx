"use client";
import styled from "styled-components";

const Contenedor = styled.iframe`
  width:100%;

      @media (min-width: 300px) {
    height: 270px;
  }


      @media (min-width: 800px) {
    height: 450px;
  }

    @media (min-width: 1300px) {
    height: 500px;
  }
`;

const Carrusel = () => {


    return (
        // <div className="flex justify-center items-center p-4">
          <Contenedor 
            // src="http://localhost/slider_ipesa/index_01.php" 
            src="https://tecknum.com/slider_ipesa/index_01.php" 
            title="Mi Iframe"
            frameborder="0" rameborder="0" scrolling="no"
            
          />
        // </div>
      );
    };

export default Carrusel
