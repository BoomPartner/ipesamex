'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  Typography,
  Card,
  CardBody,
  CardHeader,
  Button,
} from '@material-tailwind/react';
import { nosotros, valores } from '@/components/server';

const About = () => {
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

  const [isElementVisible, setElementVisible] = useState(false);
  const [isElementVisible2, setElementVisible2] = useState(false);
  const [isElementVisible3, setElementVisible3] = useState(false);
  const [animation1, setAnimation1] = useState(false);
  const [animation2, setAnimation2] = useState(false);
  const [animation3, setAnimation3] = useState(false);

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
      const element = document.querySelector('#mapa');

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

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector('#logoss');

      if (element && !animation3) {
        const elementPosition = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (elementPosition.top < windowHeight && elementPosition.bottom >= 0) {
          setAnimation3(true);
          setElementVisible3(true);
        } else {
          setElementVisible3(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [animation3]);

  return (
    <div
      className={`overflow-hidden bg-[url('/principal/waves.jpg')] bg-cover bg-center bg-fixed`}
    >
      <section className="overflow-hidden">
        <div className={`w-full p-5 overflow-hidden `}>
          <div
            className={
              windowWidth < 950
                ? 'block'
                : 'w-full flex justify-center items-center gap-5'
            }
          >
            <div className="w-full flex items-center">
              <div
                className={` ${
                  windowWidth < 950 ? 'w-full p-5' : 'p-10 w-[100%]'
                }`}
              >
                <Typography
                  as={'h1'}
                  variant={'h1'}
                  color="black"
                  className="w-full text-center mb-24 uppercase"
                >
                  Nuestra visión es de colores
                </Typography>
                <div
                  className={`w-full mt-10 ${
                    windowWidth < 1076 ? '' : 'flex justify-center items-center'
                  }`}
                >
                  <div className="w-full">
                    <Typography
                      as={'h1'}
                      variant="h1"
                      className={`uppercase mb-14 ${
                        isElementVisible2 ? 'arriba' : ''
                      }`}
                    >
                      ¿QUIÉNES SOMOS?
                    </Typography>
                    <Typography
                      as={'p1'}
                      variant="small"
                      className="mb-5 arriba2"
                      style={{ fontSize: '20px' }}
                    >
                      Somos una empresa{' '}
                      <strong style={{ fontSize: '24px', fontWeight: 'bold' }}>
                        100% Mexicana{' '}
                      </strong>
                      con más de{' '}
                      <strong style={{ fontSize: '24px', fontWeight: 'bold' }}>
                        52 años
                      </strong>{' '}
                      de experiencia en la fabricación, comercialización y
                      distribución de pinturas y recubrimientos de la más alta
                      calidad.
                    </Typography>

                    <Typography
                      as={'p1'}
                      variant="small"
                      className="arriba3"
                      style={{ fontSize: '20px' }}
                    >
                      <p>
                        Gracias al alto desempeño,{' '}
                        <strong
                          style={{ fontSize: '24px', fontWeight: 'bold' }}
                        >
                          IPESA
                        </strong>{' '}
                        ha sido reconocida en el
                        <strong
                          style={{ fontSize: '24px', fontWeight: 'bold' }}
                          className="uppercase"
                        >
                          {' '}
                          Sistema de Gestión de Calidad
                        </strong>{' '}
                        con la certificación{' '}
                        <strong
                          style={{ fontSize: '24px', fontWeight: 'bold' }}
                          className="uppercase"
                        >
                          ISO 9001
                        </strong>
                        .
                      </p>
                    </Typography>

                    <div className="w-full flex justify-center">
                      <Image
                        src={'/logos/certificado.webp'}
                        width={200}
                        height={200}
                        alt="certificado"
                        className="mt-10 push"
                      ></Image>
                    </div>
                  </div>

                  <div className="w-full flex justify-center">
                    <Image
                      src={'/principal/sucursales.webp'}
                      width={1728}
                      height={2160}
                      alt="certificado"
                      className={`mt-10 ${
                        windowWidth < 1076 ? 'w-[60%]' : 'w-full'
                      } derecha`}
                    ></Image>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`w-full ${
              windowWidth < 850 ? 'block' : 'flex justify-center items-center'
            }`}
          >
            <div className={`${windowWidth < 950 ? 'mt-10' : 'p-10'} w-full`}>
              <Image
                src={'/principal/mapa.png'}
                width={1000}
                height={1000}
                alt="mapa"
                className={`w-full opacity-0 ${
                  isElementVisible2 ? 'izquierda' : ''
                }`}
              ></Image>
            </div>
            <div id="mapa"></div>
            <div
              className={`${
                windowWidth < 850 ? 'w-full' : 'w-[80%]'
              } text-left md:p-10`}
            >
              <Typography
                as={'h1'}
                variant="h1"
                className={`uppercase mb-14 ${
                  isElementVisible2 ? 'arriba2' : ''
                }`}
              >
                Centros de Distribucíon
              </Typography>

              <Typography
                as={'p'}
                variant="small"
                className={`${isElementVisible2 ? 'arriba3' : ''}`}
                style={{ fontSize: '24px' }}
              >
                Tenemos{' '}
                <strong
                  className={`uppercase`}
                  style={{ fontSize: '24px', fontWeight: 'bold' }}
                >
                  13 centros{' '}
                </strong>{' '}
                de distribución alrededor de toda la República Mexicana.
              </Typography>
            </div>
          </div>
        </div>
      </section>

      <div
        className={`w-full ${windowWidth < 1090 ? '' : 'flex'} overflow-hidden`}
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
            {nosotros?.map((item, index) => (
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
                        {item.lista ? (
                          item.lista.map((target, targetIndex) => (
                            <ul key={targetIndex}>
                              <Typography
                                as={'p'}
                                variant="paragraph"
                                color="white"
                              >
                                {target}
                              </Typography>
                            </ul>
                          ))
                        ) : (
                          <Typography
                            as={'p'}
                            variant="paragraph"
                            color="white"
                          >
                            {item.description}
                          </Typography>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section>
        <div className="w-full relative">
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-10"></div>

          <div className="w-full md:flex justify-center items-center p-10">
            <div className="w-full p-5">
              <Image
                src={'/logos/logo.svg'}
                width={800}
                height={800}
                alt="logo_ipesa"
                className={`${
                  windowWidth < 720 ? 'w-[70%] mx-auto' : 'w-full'
                } ${isElementVisible3 ? 'push' : ''}`}
              ></Image>
            </div>
            <div id="logoss"></div>
            <div className="w-full p-5">
              <Image
                src={'/logos/colorcril.svg'}
                width={600}
                height={300}
                alt="logo_cril"
                className={`${
                  windowWidth < 720 ? 'w-[60%] mx-auto' : 'w-[85%] mx-auto'
                } ${isElementVisible3 ? 'push' : ''}`}
              ></Image>
            </div>
            <div className="w-full p-5">
              <Image
                src={'/logos/century.svg'}
                width={600}
                height={300}
                alt="logo_century"
                className={`${
                  windowWidth < 720 ? 'w-[55%] mx-auto' : 'w-[80%] mx-auto'
                } ${isElementVisible3 ? 'push' : ''}`}
              ></Image>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
