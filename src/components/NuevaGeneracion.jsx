'use client';

import styled from 'styled-components';

const Contenedor = styled.iframe`
  width: 100%;

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

const NuevaGeneracion = () => {
  return (
    <div className="flex justify-center items-center p-4">
      <Contenedor
        src="https://tecknum.com/mapaIpesa"
        title="Nueva generación IPESA"
        frameBorder="0"
        scrolling="no"
      />
    </div>
  );
};

export default NuevaGeneracion;
