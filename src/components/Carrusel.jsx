'use client';

import styled from 'styled-components';

const Contenedor = styled.iframe`
  width: 100%;

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
      <Contenedor
        src="https://tecknum.com/slider_ipesa/index_01.php"
        title="Promociones y novedades de IPESA"
        frameBorder="0"
        scrolling="no"
      />
    );
};

export default Carrusel
