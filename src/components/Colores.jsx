'use client';
import React, { useEffect, useRef, useState } from 'react';
import { colores } from '@/components/server';
import { Button, Typography } from '@material-tailwind/react';
import Image from 'next/image';
import gsap from 'gsap';
const ColoresAnimados = () => {
  const gridRef = useRef(null);
  const gridGama = useRef(null);
  const botonesRef = useState(null);
  const [gamaColors, setGamaColors] = useState(null);
  const [windowWidth, setWindowWidth] = useState(0);
  const [gamas, setGamas] = useState([
    {
      id: 1,
      name: 'Vinílicas',
      target: 'vinilicas',
    },
    {
      id: 2,
      name: 'Esmaltes',
      target: 'esmaltes',
    },
    {
      id: 3,
      name: 'Aerosoles',
      target: 'aerosoles',
    },
    {
      id: 4,
      name: 'Maderas',
      target: 'maderas',
    },
    {
      id: 5,
      name: 'Ferreteras',
      target: 'ferre',
    },
  ]);

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

  const handleGamas = (event) => {
    const filter = gamas.find((item) => item.target === event);

    if (filter) {
      const coloresFilter = colores.filter((item) => item.cat == filter.target);
      setGamaColors(coloresFilter);
    }
  };

  useEffect(() => {
    const gridItems = gridRef.current.children;

    if (gridItems.length > 0) {
      const elementToAnimate = gridItems[0];
      const elementToAnimate2 = gridItems[1];
      const elementToAnimate3 = gridItems[2];
      const elementToAnimate4 = gridItems[3];
      const elementToAnimate5 = gridItems[4];
      const elementToAnimate6 = gridItems[5];
      const elementToAnimate7 = gridItems[6];
      const elementToAnimate8 = gridItems[7];

      const elementToAnimate9 = gridItems[8];
      const elementToAnimate10 = gridItems[9];
      const elementToAnimate11 = gridItems[10];
      const elementToAnimate12 = gridItems[11];

      const elementToAnimate13 = gridItems[12];
      const elementToAnimate14 = gridItems[13];
      const elementToAnimate15 = gridItems[14];
      const elementToAnimate16 = gridItems[15];

      const elementToAnimate17 = gridItems[16];
      const elementToAnimate18 = gridItems[17];
      const elementToAnimate19 = gridItems[18];
      const elementToAnimate20 = gridItems[19];
      gsap.fromTo(
        elementToAnimate,
        { x: 1000, y: 900 },
        {
          duration: 2,
          x: 0,
          y: 0,
          ease: 'power2.out',
        }
      );

      gsap.fromTo(
        elementToAnimate2,
        { x: -1000, y: 900 },
        {
          duration: 2,
          x: 0,
          y: 0,
          ease: 'power2.out',
        }
      );
      gsap.fromTo(
        elementToAnimate3,
        { x: 1000, y: 900 },
        {
          duration: 2,
          x: 0,
          y: 0,
          ease: 'power2.out',
        }
      );

      gsap.fromTo(
        elementToAnimate4,
        { x: -1000, y: 900 },
        {
          duration: 2,
          x: 0,
          y: 0,
          ease: 'power2.out',
        }
      );

      // Segunda atanda

      gsap.fromTo(
        elementToAnimate5,
        { x: 500, y: -500 },
        {
          duration: 2,
          x: 0,
          y: 0,
          ease: 'power2.out',
        }
      );

      gsap.fromTo(
        elementToAnimate6,
        { x: -500, y: -500 },
        {
          duration: 2,
          x: 0,
          y: 0,
          ease: 'power2.out',
        }
      );
      gsap.fromTo(
        elementToAnimate7,
        { x: 500, y: -500 },
        {
          duration: 2,
          x: 0,
          y: 0,
          ease: 'power2.out',
        }
      );

      gsap.fromTo(
        elementToAnimate8,
        { x: -500, y: -500 },
        {
          duration: 2,
          x: 0,
          y: 0,
          ease: 'power2.out',
        }
      );

      // tercera atanda

      gsap.fromTo(
        elementToAnimate9,
        { x: -500, y: -1000 },
        {
          duration: 2,
          x: 0,
          y: 0,
          ease: 'power2.out',
        }
      );

      gsap.fromTo(
        elementToAnimate10,
        { x: 500, y: -1000 },
        {
          duration: 2,
          x: 0,
          y: 0,
          ease: 'power2.out',
        }
      );
      gsap.fromTo(
        elementToAnimate11,
        { x: -500, y: -1000 },
        {
          duration: 2,
          x: 0,
          y: 0,
          ease: 'power2.out',
        }
      );

      gsap.fromTo(
        elementToAnimate12,
        { x: 500, y: -1000 },
        {
          duration: 2,
          x: 0,
          y: 0,
          ease: 'power2.out',
        }
      );

      // cuarta atanda

      gsap.fromTo(
        elementToAnimate13,
        { x: 500, y: 1500 },
        {
          duration: 2,
          x: 0,
          y: 0,
          ease: 'power2.out',
        }
      );

      gsap.fromTo(
        elementToAnimate14,
        { x: -500, y: 1500 },
        {
          duration: 2,
          x: 0,
          y: 0,
          ease: 'power2.out',
        }
      );
      gsap.fromTo(
        elementToAnimate15,
        { x: 500, y: 1500 },
        {
          duration: 2,
          x: 0,
          y: 0,
          ease: 'power2.out',
        }
      );

      gsap.fromTo(
        elementToAnimate16,
        { x: -500, y: 1500 },
        {
          duration: 2,
          x: 0,
          y: 0,
          ease: 'power2.out',
        }
      );

      // quinta atanda

      gsap.fromTo(
        elementToAnimate17,
        { x: -500, y: -1000 },
        {
          duration: 2,
          x: 0,
          y: 0,
          ease: 'power2.out',
        }
      );

      gsap.fromTo(
        elementToAnimate18,
        { x: 500, y: -1000 },
        {
          duration: 2,
          x: 0,
          y: 0,
          ease: 'power2.out',
        }
      );
      gsap.fromTo(
        elementToAnimate19,
        { x: -500, y: -1000 },
        {
          duration: 2,
          x: 0,
          y: 0,
          ease: 'power2.out',
        }
      );

      gsap.fromTo(
        elementToAnimate20,
        { x: 500, y: -1000 },
        {
          duration: 2,
          x: 0,
          y: 0,
          ease: 'power2.out',
        }
      );
    }
  }, [colores]);

  useEffect(() => {
    if (gridGama && gridGama.current) {
      const gridItems = gridGama.current.children;

      gsap.killTweensOf(gridItems);

      if (gridItems.length > 0) {
        gsap.fromTo(
          gridItems,
          { opacity: 0, scale: 0 },
          {
            duration: 0.5,
            scale: 1,
            opacity: 1,
            stagger: 0.2,
            ease: 'power2.out',
            startAt: 1,
          }
        );
      }
    }
  }, [gamaColors]);

  useEffect(() => {
    if (botonesRef && botonesRef.current) {
      const botones = botonesRef.current.children;

      if (botonesRef.length > 0) {
        gsap.fromTo(
          botones,
          { opacity: 0, scale: 0 },
          {
            duration: 0.5,
            scale: 1,
            opacity: 1,
            stagger: 0.2,
            ease: 'power2.out',
            startAt: 1,
          }
        );
      }
    }
  }, []);

  return (
    <div
      className={`bg-[url('/principal/waves.jpg')] bg-fixed bg-cover bg-center p-10 overflow-hidden`}
    >
      <Typography
        as={'h1'}
        variant={windowWidth < 800 ? 'h5' : 'h1'}
        className="text-center mt-10 mb-10 uppercase"
      >
        Gama de colores
      </Typography>
      <div
        className={`w-full grid ${
          windowWidth < 850 ? '' : 'grid-cols-5'
        } gap-10 mb-10`}
        ref={botonesRef}
      >
        {gamas.map((item, index) => (
          <div key={index} className="w-full">
            <Button
              key={item.id}
              variant="text"
              className="w-full bg-red-700 bg-opacity-90 text-white hover:bg-opacity-30 hover:bg-red-700"
              ripple={true}
              onClick={() => handleGamas(item.target)}
            >
              {item.name}
            </Button>
          </div>
        ))}
      </div>

      {gamaColors ? (
        <div
          ref={gridGama}
          className={`w-full grid sm:grid-cols-2 md:grid-cols-4 gap-10 p-5`}
        >
          {gamaColors?.map((item, index) => (
            <div key={index} className="mt-5">
              {item.color_imagen ? (
                <div
                  key={index}
                  className={`w-full h-[15vh] shadow-2xl rounded-xl mx-auto`}
                  style={{ background: item.color }}
                >
                  <Image
                    className="w-full h-full"
                    src={item.color_imagen}
                    alt="color-imagen"
                    width={1000}
                    height={1000}
                  ></Image>
                </div>
              ) : (
                <div
                  key={index}
                  className={`w-full h-[15vh] shadow-2xl rounded-xl mx-auto`}
                  style={{ background: item.color }}
                ></div>
              )}

              <div className="text-gray-700 text-center mt-4">{item.name}</div>
              <div className="text-gray-700 text-center">{item.codigo}</div>
            </div>
          ))}
        </div>
      ) : (
        <div
          ref={gridRef}
          className={`w-full grid sm:grid-cols-2 md:grid-cols-4 gap-10 p-5`}
        >
          {colores?.map((item, index) => (
            <div key={index} className="mt-5">
              {item.color_imagen ? (
                <div
                  key={index}
                  className={`w-full h-[15vh] shadow-2xl rounded-xl mx-auto`}
                >
                  <Image
                    className="w-full h-full"
                    src={item.color_imagen}
                    alt="color-imagen"
                    width={1000}
                    height={1000}
                  ></Image>
                </div>
              ) : (
                <div
                  key={index}
                  className={`w-full h-[15vh] shadow-2xl rounded-xl mx-auto`}
                  style={{ background: item.color }}
                ></div>
              )}

              <div className="text-gray-700 text-center mt-4">{item.name}</div>
              <div className="text-gray-700 text-center">{item.codigo}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ColoresAnimados;
