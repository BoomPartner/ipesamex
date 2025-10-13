'use client';
import { Typography } from '@material-tailwind/react';
import Link from 'next/link';
import { novedades } from '@/components/server';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const PageNovedades = () => {
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

  const handleStorage = (categoria, microcategoria) => {
    localStorage.setItem('categoria', categoria);
    localStorage.setItem('microcategoria', microcategoria);
  };

  return (
    <>
      <div className="">
        <div className="backgroundPromociones">
          <div
            className={`flex items-center w-[50%] md:w-[45%] ml-24  h-full md:items-center justify-center`}
          >
            <div className="w-full">
              <Typography
                variant={'h1'}
                color="white"
                className="text-left arriba"
              >
                <div className="w-full flex">
                  <strong>Novedades</strong>
                </div>
              </Typography>
              <Typography variant="h3" className="text-white mt-10 arriba2">
                Explora lo último en innovación y estilo, desde productos más
                recientes hasta las tendencias más actuales.
              </Typography>
            </div>
          </div>
        </div>
      </div>

      {novedades?.map((item, index) => (
        <div
          key={index}
          className={`w-full mt-10 shadow-xl ${
            windowWidth < 850 ? '' : 'flex items-center'
          }`}
        >
          <div className="w-full p-5">
            <Image
              src={item.imagen}
              width={1000}
              height={1000}
              alt="promociones"
              className="w-full"
            ></Image>
          </div>
          <div className={windowWidth < 850 ? 'px-4' : 'w-[80%] ml-5 p-5'}>
            <Typography variant="h4" className="uppercase">
              {item.name}
            </Typography>
            <Typography variant="small" className="mb-4">
              {item.description}
            </Typography>
            <Link
              href={item.enlace}
              className="hover:border-b hover:border-b-black"
              onClick={() => handleStorage(item.categoria, item.microcategoria)}
            >
              Ver productos
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default PageNovedades;
