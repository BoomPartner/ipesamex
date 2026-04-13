'use client';
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from '@material-tailwind/react';
import React, { useState, useEffect } from 'react';
import { tipsparapintar, contenidoTips } from '@/components/server';
import Image from 'next/image';
import ReactPlayer from 'react-player';
import Link from 'next/link';
import styled from 'styled-components';

const Contenedor = styled.iframe`
  width: 100%;

  @media (min-width: 300px) {
    height: 1200px;
  }

  @media (min-width: 800px) {
    height: 1200px;
  }

  @media (min-width: 1300px) {
    height: 1200px;
  }
`;

const TipsParaPintar = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  const handleResize = () => {
    const newWindowWidth = window.innerWidth;
    setWindowWidth(newWindowWidth);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  const [tuoriales, setTutoriales] = useState(contenidoTips);

  const handleTips = (event) => {
    const filtro = contenidoTips.filter((item) => event == item.id);
    setTutoriales(filtro);
  };

  const handleLocal = (categoria, microcategoria) => {
    localStorage.setItem('categoria', categoria);
    localStorage.setItem('microcategoria', microcategoria);
  };
  return (
    <div className="">
      <div className="background-tips"></div>

      <div
        className={`backgroundTips w-full p-10 ${windowWidth < 815 ? '' : ''}`}
      >
        <div
          className={`mb-10 text-black ${
            windowWidth < 1280 ? 'w-full' : 'w-[50%]'
          }`}
        >
          <Typography variant="h1" className="uppercase">
            Tutoriales y Tips
          </Typography>
        </div>
        <div>
          <Contenedor
            // src="http://localhost/ipesa_video/index.php"
            src="https://tecknum.com/ipesa_video/index.php"
            title="Mi Iframe"
            frameborder="0"
            rameborder="0"
            // scrolling="no"
          />
        </div>
      </div>
    </div>
  );
};

export default TipsParaPintar;
