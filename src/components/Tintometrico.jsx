'use client';
import React, { useState, useEffect } from 'react';
import { Typography, Button } from '@material-tailwind/react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { tintometricos } from '@/components/server';
const SistemaTintometrico = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [isElementVisible, setElementVisible] = useState(false);
  const [isElementVisible2, setElementVisible2] = useState(false);
  const [animation1, setAnimation1] = useState(false);
  const [animation2, setAnimation2] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector('#section2');

      if (element && !animation1) {
        const elementPosition = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (elementPosition.top < windowHeight && elementPosition.bottom >= 0) {
          setAnimation1(true);
          setElementVisible(true);
        } else {
          setElementVisible(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [animation1]);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector('#automatico');

      if (element && !animation2) {
        const elementPosition = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (elementPosition.top < windowHeight && elementPosition.bottom >= 0) {
          setAnimation2(true);
          setElementVisible2(true);
        } else {
          setElementVisible2(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [animation2]);

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

  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      '.paleta',
      { x: '80%', opacity: 0 },
      {
        duration: 1,
        x: '0%',
        opacity: 1,
        ease: 'power1.inOut',

        scrollTrigger: {
          trigger: '#section1',
          start: 'top center',
          toggleActions: 'play none none none',
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div className="block">
      <div
        className=""
        style={{
          backgroundImage: `url(/tintometrico/01.webp)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%',
          paddingBottom: '40%',
        }}
      >
        <div
          className="w-full flex justify-center"
          style={{ textAlign: 'center', color: 'white', paddingTop: '50px' }}
        >
          <div className={`${windowWidth < 460 ? 'w-[70%]' : 'w-[60%]'}`}>
            <Typography
              as={'p'}
              variant={'paragraph'}
              style={{ fontSize: windowWidth < 1050 ? '15px' : '24px' }}
              className="mb-10"
            >
              Bienvenido al
              <span
                className="font-bold uppercase"
                style={{ fontSize: windowWidth < 1050 ? '18px' : '24px' }}
              >
                {' '}
                Sistema Tintométrico
              </span>
              , una avanzada tecnología en el universo de la pintura que ofrece
              una infinidad de colores con la máxima calidad de todos nuestros
              productos.
            </Typography>
            <Button
              href="#"
              className="text-gray-700 bg-[#fefefe] p-3 rounded-lg texto uppercase"
              onClick={() => scrollToElement('tintometrico')}
            >
              Conocer más
            </Button>
          </div>
        </div>
      </div>

      <div className="backgroundTips">
        <div className="" id="tintometrico"></div>

        <div
          id="section1"
          className={`w-full ${
            windowWidth < 1090 ? '' : 'flex'
          } overflow-hidden`}
        >
          <div className="w-full p-10 flex flex-col items-center justify-center">
            <div className="">
              <Typography
                as={'h1'}
                variant={windowWidth < 900 ? 'h3' : 'h1'}
                className="efectotexto1 mt-24 uppercase"
              >
                ¿Qué te ofrecemos?
              </Typography>
            </div>

            <div className="">
              <Typography as={'h4'} variant="h4" className="efectotexto2 mt-24">
                Equipo operado a través de una computadora que posee un completo
                software de igualación de color.
              </Typography>
            </div>
          </div>

          <div className="w-full flex justify-center">
            <Image
              src={'/tintometrico/maquinaIP.png'}
              width={1000}
              height={1000}
              alt="sitema-tintometrico"
              className="paleta w-[50%] mx-auto"
            ></Image>
          </div>
        </div>

        <div
          id="automatico"
          className={`w-full ${
            windowWidth < 1090 ? '' : 'flex'
          } overflow-hidden`}
        >
          <div className="w-full flex justify-center">
            <Image
              src={'/tintometrico/tintoArmado.png'}
              width={1000}
              height={1000}
              alt="sitema-tintometrico"
              className={`w-[50%] mx-auto ${
                isElementVisible2 ? 'izquierda' : ''
              }`}
            ></Image>
          </div>

          <div className="w-full p-10 flex flex-col items-center justify-center">
            <div className="">
              <Typography
                as={'h1'}
                variant={windowWidth < 900 ? 'h3' : 'h1'}
                className="efectotexto1 mt-24 uppercase"
              >
                Automático
              </Typography>
            </div>
            <div className="">
              <Typography
                as={'h4'}
                variant={windowWidth < 900 ? 'h5' : 'h4'}
                className="efectotexto1 mt-24"
              >
                Dosificador por computadora de fácil operación, su diseño
                permite que la recarga de colorante se realice de manera cómoda,
                además tiene el tamaño ideal para adaptarse en cualquier
                espacio.
              </Typography>
            </div>
          </div>
        </div>

        <div
          className={`w-full ${
            windowWidth < 1090 ? '' : 'flex'
          } overflow-hidden`}
        >
          <div id="section2"></div>

          <div className="w-full">
            <div
              className={`grid ${
                windowWidth < 980
                  ? 'grid-cols-1'
                  : windowWidth < 1300
                  ? 'grid-cols-2'
                  : 'grid-cols-3'
              } gap-5 p-10`}
            >
              {tintometricos?.map((item, index) => (
                <div
                  key={index}
                  className={`opacity-0 shadow-xl transform duration-500 hover:scale-110 group mb-10 ${
                    isElementVisible ? item.clase : ''
                  }`}
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '70vh',
                    paddingBottom: '100%',
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      backgroundImage: `url(${item.imagen})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  >
                    <div className="z-10 flex items-center h-full text-white bg-black bg-opacity-0 px-10 hover:bg-opacity-50 transform duration-500">
                      <div className="">
                        <div className="text-3xl text-left group-hover:opacity-80 transform translate-y-32 group-hover:translate-y-0 duration-500">
                          <Typography
                            as={'h3'}
                            variant="h3"
                            className={`mb-2 uppercase`}
                          >
                            {item.title}
                          </Typography>
                        </div>
                        <div
                          className={`opacity-0 text-white text-2xl text-left group-hover:opacity-80 transform translate-y-20 group-hover:translate-y-0 duration-500 `}
                        >
                          <Typography
                            as={'p'}
                            variant="paragraph"
                            color="white"
                          >
                            {item.description}
                          </Typography>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SistemaTintometrico;
