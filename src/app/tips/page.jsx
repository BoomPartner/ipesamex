'use client';

import styled from 'styled-components';

const Contenedor = styled.iframe`
  width: 100%;
  height: 1200px;
`;

const TipsParaPintar = () => {
  return (
    <div>
      <div className="background-tips"></div>

      <div className="backgroundTips w-full p-10">
        <div className="mb-10 w-full text-black xl:w-1/2">
          <h1 className="text-4xl font-semibold uppercase md:text-5xl">
            Tutoriales y Tips
          </h1>
        </div>
        <div>
          <Contenedor
            src="https://tecknum.com/ipesa_video/index.php"
            title="Tutoriales y consejos para pintar"
            frameBorder="0"
          />
        </div>
      </div>
    </div>
  );
};

export default TipsParaPintar;
