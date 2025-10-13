'use client';
import React, { useEffect, useState } from 'react';
import { Typography } from '@material-tailwind/react';
import { Collapse, Card } from '@material-tailwind/react';
import Image from 'next/image';
import Link from 'next/link';
import { colores } from './server';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// swiper/modules
import { decorador } from './server';

const Decorador = () => {
  const [colorFacahada, setColorFachada] = useState('#e5e2dd');
  const [colorSala, setColorSala] = useState('#e5e2dd');
  const [colorSala2, setColorSala2] = useState('#e5e2dd');
  const [colorComedor, setColorComedor] = useState('#e5e2dd');
  const [colorComedor2, setColorComedor2] = useState('#e5e2dd');
  const [colorCuarto, setColorCuarto] = useState('#e5e2dd');
  const [colorDormitorio, setColorDormitorio] = useState('#e5e2dd');
  const [colorDormitorio2, setColorDormitorio2] = useState('#e5e2dd');
  const [colorPuerta, setColorPuerta] = useState('#e5e2dd');
  const [colorCarro, setColorCarro] = useState('#e5e2dd');
  const [windowWidth, setWindowWidth] = useState(0);
  const [modelos, setModelos] = useState('decorativa');
  const [espacio, setEspacio] = useState('puerta');

  const [automovil, setAutomovil] = useState('atomic_orange');

  const [pinturas, setPinturas] = useState(colores);
  const [banner, setBanner] = useState(0);
  const [open, setOpen] = useState(false);

  const [lienzos, setLienzos] = useState([
    {
      id: 1,
      registro: '®',
      name: 'vintek',
      categoria: 'vintek',
      fondo: 'rgba(0, 0, 0)',
      imagen: '/articulos/vinilicas/vintek.png',
      filter: 'decorativa',
    },
    {
      id: 2,
      registro: '®',
      name: 'realtek',
      categoria: 'realtek',
      fondo: 'rgba(0, 0, 0, 0.3)',
      imagen: '/articulos/vinilicas/realtek.png',
      filter: 'decorativa',
    },
    {
      id: 3,
      registro: '®',
      name: 'vinipesa',
      name2: 'satín',
      categoria: 'vinipesa_satin',
      fondo: 'rgba(0, 0, 0, 0.3)',
      imagen: '/articulos/vinilicas/vinipesa_satin.png',
      filter: 'decorativa',
    },
    {
      id: 4,
      registro: '®',
      name: 'vinipesa',
      name2: 'mate',
      categoria: 'vinipesa_mate',
      fondo: 'rgba(0, 0, 0, 0.3)',
      imagen: '/articulos/vinilicas/vinipesa.png',
      filter: 'decorativa',
    },

    {
      id: 5,
      registro: '®',
      categoria: 'vini_plus',
      name: 'Vini +',
      fondo: 'rgba(0, 0, 0, 0.3)',
      imagen: '/articulos/vinilicas/vini_plus.png',
      filter: 'decorativa',
    },
    {
      id: 6,
      registro: '®',
      name: 'colorbel',
      categoria: 'colorbel',
      fondo: 'rgba(0, 0, 0, 0.3)',
      imagen: '/articulos/vinilicas/colorbel.png',
      filter: 'decorativa',
    },
  ]);

  const [colorescril, setColorCril] = useState([
    {
      id: 0,
      name: 'Amarillo',
      fondo: '#e5ca38',
      categoria: 'amarillo',
    },
    {
      id: 1,
      name: 'Rojo Radiante',
      fondo: '#c81a1f',
      categoria: 'rojo_radiante',
    },
    {
      id: 2,
      name: 'Gris Oxford',
      fondo: '#686966',
      categoria: 'gris_oxford',
    },
    {
      id: 3,
      name: 'Atomic Orange',
      fondo: '#e25b00',
      categoria: 'atomic_orange',
    },
    {
      id: 4,
      name: 'Azul Loto',
      fondo: '#26385b',
      categoria: 'azul_loto',
    },
    {
      id: 5,
      name: 'Denim Blue',
      fondo: '#455c7e',
      categoria: 'demin_blue',
    },
  ]);

  const toggleOpen = (id, color) => {
    setOpen((cur) => !cur);
    setBanner(id);
    const coloresFiltrados = colores.filter((item) => item.product === color);
    setPinturas(coloresFiltrados);
  };

  const handleChangeColor = (color) => {
    setOpen((cur) => !cur);
    if (banner > 0) {
      setLienzos(
        lienzos.map((lienzo) =>
          lienzo.id === banner ? { ...lienzo, fondo: color } : lienzo
        )
      );
    }
    switch (espacio) {
      case 'fachada':
        setColorFachada(color);
        break;
      case 'sala':
        setColorSala(color);
        break;
      case 'comedor':
        setColorComedor(color);
        break;
      case 'dormitorio':
        setColorDormitorio(color);
        break;
      case 'cuarto':
        setColorCuarto(color);
        break;

      case 'puerta':
        setColorPuerta(color);
        break;

      case 'sala2':
        setColorSala2(color);
        break;

      case 'comedor2':
        setColorComedor2(color);
        break;
      case 'dormitorio2':
        setColorDormitorio2(color);
        break;

      case 'carro':
        setColorCarro(color);
        break;

      default:
        break;
    }
  };

  const handleDataModel = (event) => {
    const activeSlide = event.slides.find((slide) =>
      slide.classList.contains('swiper-slide-active')
    );

    const clasesDinamicas = [
      'sala',
      'comedor',
      'fachada',
      'dormitorio',
      'cuarto',
      'puerta',
      'comedor2',
      'dormitorio2',
      'sala2',
      'carro',
    ];

    let claseEncontrada = null;

    for (const clase of clasesDinamicas) {
      const elemento = activeSlide.querySelector(`.${clase}`);
      if (elemento) {
        claseEncontrada = clase;
        break;
      }
    }

    if (claseEncontrada) {
      setEspacio(claseEncontrada);
    } else {
    }
  };

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

  const handleFilterDecorador = (event) => {
    const filter = decorador.filter((item) => item.filter == event);
    console.log(filter);
    setLienzos(filter);
    setModelos(event);
    setAutomovil('atomic_orange');
  };

  const backgroundCarroAuto = {
    backgroundImage: `url('/decorador/${automovil}.webp')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    objectFit: 'cover',
    width: '100%',
    height: '100%',
    paddingBottom: '45%',
    transition: 'all 0.5s ease-in-out',
  };

  const handleChangeAuto = (event) => {
    setAutomovil(event);
  };
  return (
    <>
      <div className="w-full bg-[url('/principal/waves.jpg')] bg-cover bg-center bg-fixed overflow-hidden">
        <div
          className={`w-full h-[100vh] relative ${
            windowWidth < 950 ? 'block' : ''
          } bg-[url('/decorador/banner.webp')] 
                bg-cover bg-center bg-no-repeat`}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="w-full h-full absolute top-56 md:top-10 lg:top-10 left-0 p-10">
            <div
              className={windowWidth < 950 ? 'w-[90%] text-center ' : 'w-[40%]'}
            >
              <Typography
                as={'h1'}
                variant="h1"
                color="white"
                className="uppercase"
              >
                Decora tu espacio
              </Typography>
              <Typography
                as={'p'}
                variant="small"
                color="white"
                className="mt-10"
                style={{ fontSize: '18px' }}
              >
                Nuestro decorador virtual te brindará ideas y sugerencias con
                las de paletas de colores de línea que se adapten a tus gustos y
                necesidades.
              </Typography>
              <Typography
                as={'p'}
                variant="small"
                color="white"
                className="mt-10"
                style={{ fontSize: '18px' }}
              >
                ¡Transforma tus espacios con confianza y estilo!
              </Typography>
            </div>
          </div>
        </div>

        <div className="w-full mt-10">
          <div className="w-full flex justify-center text-center mb-10">
            <div className="p-5 md:w-[50%]">
              <Typography
                as={'h5'}
                variant="h5"
                color="black"
                className="uppercase text-center"
              >
                Selecciona un color de cualquiera de nuestras líneas de pinturas
                vinílicas y decora cada espacio.
              </Typography>
            </div>
          </div>

          <div className="flex justify-center p-10">
            <div
              className={`w-full ${
                windowWidth < 680 ? '' : 'grid grid-cols-3'
              } gap-5 text-center mb-10`}
            >
              <div
                onClick={() => handleFilterDecorador('decorativa')}
                className={`${
                  windowWidth < 680 ? 'mb-20' : ''
                } macflurri p-5 rounded-xl zoom-producto cursor-pointer mx-auto`}
              >
                <Image
                  src={'/articulos/vinilicas/vintek.png'}
                  width={1000}
                  height={1000}
                  alt="vintek"
                  className="w-full mx-auto"
                ></Image>
                <Typography
                  as={'p'}
                  className="mt-5  uppercase"
                  variant="paragraph"
                  style={{ fontSize: '18px' }}
                >
                  Vinílicas
                </Typography>
              </div>
              <div
                onClick={() => handleFilterDecorador('ferre')}
                className={`${
                  windowWidth < 680 ? 'mb-20' : ''
                } macflurri p-5 rounded-xl zoom-producto cursor-pointer mx-auto`}
              >
                <Image
                  src={'/articulos/ferreadvance/elite.png'}
                  width={1000}
                  height={1000}
                  alt="elite"
                  className="w-full mx-auto"
                ></Image>
                <Typography
                  as={'p'}
                  className="mt-5  uppercase"
                  variant="paragraph"
                  style={{ fontSize: '18px' }}
                >
                  Ferreteras
                </Typography>
              </div>
              <div
                onClick={() => handleFilterDecorador('automotriz')}
                className={`${
                  windowWidth < 680 ? 'mb-20' : ''
                } macflurri p-5 rounded-xl zoom-producto cursor-pointer mx-auto`}
              >
                <Image
                  src={'/articulos/automotriz/base_color.png'}
                  width={3000}
                  height={1000}
                  alt="automotriz"
                  className="w-full mx-auto"
                ></Image>
                <Typography
                  as={'p'}
                  className="mt-5  uppercase"
                  variant="paragraph"
                  style={{ fontSize: '18px' }}
                >
                  Automotriz
                </Typography>
              </div>
            </div>
          </div>

          <div className={`${windowWidth < 1170 ? 'block' : 'flex'}`}>
            {windowWidth < 1170 ? (
              <div className="w-full flex relative">
                <div
                  className={`grid ${
                    windowWidth < 370 ? 'grid-cols-2' : 'grid-cols-3'
                  }  md:flex w-full justify-evenly gap-5 pl-5`}
                >
                  {modelos == 'automotriz'
                    ? colorescril?.map((item, index) => (
                        <div
                          key={index}
                          className="w-full cursor-pointer hover:scale-110 transition-transform duration-500"
                          onClick={() => handleChangeAuto(item.categoria)}
                        >
                          <div
                            key={index}
                            className={`w-full h-[15vh] shadow-2xl rounded-xl mx-auto `}
                            style={{ background: item.fondo }}
                          ></div>
                          <div className="text-gray-700 text-center mt-4">
                            {item.name}
                          </div>
                        </div>
                      ))
                    : lienzos?.map((item, index) => (
                        <>
                          <div
                            key={index}
                            className={`rounded-xl w-[100%] p-2 cursor-pointer
                                                    z-0 shadow-xl text-center`}
                            style={{ background: '#ffff' }}
                            onClick={() => toggleOpen(item.id, item.categoria)}
                          >
                            <div className="w-full flex justify-center">
                              <Image
                                src={item.imagen}
                                width={60}
                                height={60}
                                alt={item.name}
                              ></Image>
                            </div>
                            <Typography
                              as={'p'}
                              variant="small"
                              className="uppercase"
                            >
                              {item.name}
                              <span style={{ fontSize: '14px' }}>
                                {item.registro}
                              </span>{' '}
                              <span className="ml-2">{item.name2}</span>
                            </Typography>
                          </div>
                        </>
                      ))}
                </div>

                <Collapse open={open} className="absolute top-0 z-50">
                  <Card className="mx-auto w-full h-[50vh] overflow-y-auto">
                    <div className="grid grid-cols-3 p-2 gap-5 lg:p-5 md:p-5 overflow-y-auto">
                      {pinturas?.map((item, index) => (
                        <div className={`w-full`} key={index}>
                          <div
                            key={index}
                            className="rounded-lg w-[100%] h-[10vh] cursor-pointer"
                            onClick={() => handleChangeColor(item.color)}
                            style={{ background: item.color }}
                          ></div>
                          <div className="text-gray text-center">
                            {item.name}
                          </div>
                          <div className="text-gray text-center">
                            {item.codigo}
                          </div>
                        </div>
                      ))}
                    </div>
                  </Card>
                </Collapse>
              </div>
            ) : null}

            {modelos == 'automotriz' ? (
              <div className="w-full p-5">
                <Swiper
                  grabCursor={true}
                  centeredSlides={true}
                  onSlideChangeTransitionStart={handleDataModel}
                  slidesPerView={'auto'}
                  loop={false}
                  // pagination={true}
                  navigation={true}
                  modules={[Navigation]}
                  className="swiperDecorador"
                >
                  <SwiperSlide className="swiper-slide">
                    <div style={backgroundCarroAuto}></div>
                  </SwiperSlide>
                </Swiper>

                <div className={`w-full p-4 px-10 flex justify-center`}>
                  <Link
                    href={'https://colorcril.app/login'}
                    target="_blank"
                    className={`mt-10 bg-[#c50411] text-center p-2 rounded-lg text-white font-semibold uppercase`}
                  >
                    Laboratorio Color Cril
                  </Link>
                </div>
              </div>
            ) : (
              <div className="w-full p-5">
                <Swiper
                  grabCursor={true}
                  centeredSlides={true}
                  onSlideChangeTransitionStart={handleDataModel}
                  slidesPerView={'auto'}
                  loop={false}
                  navigation={true}
                  modules={[Navigation]}
                  className="swiperDecorador"
                >
                  <SwiperSlide className="swiper-slide">
                    <div className="puerta">
                      <svg
                        id="Capa_2"
                        data-name="Capa 2"
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        viewBox="0 0 1600 900"
                      >
                        <defs>
                          <style>
                            {`.cls-5 {
                                                                    fill: ${colorPuerta};
                                                                    stroke-width: 0px;
                                                                }`}
                          </style>
                        </defs>
                        <rect
                          className="cls-5"
                          x="1543.3"
                          width="56.7"
                          height="714.2"
                        />
                        <path
                          className="cls-5"
                          d="M759.3,89l-6.3-55.8V0H0v714.2h487.1l22-19.1v-12.1h429v9.1h32.9v-24h1.1V231h216.1v436.8h5.1l4.7,4.7v20.5h29.2v-9.8h174.2V89h-641.9ZM921.8,394h-14v12.5h-27.4v-11.5h-6v-101h5.3v-23.7h27.3v23.7h14.7v99.9ZM1281.1,394v12.1h-27l-.3-11.1h-3l1-95.9,2-1.2v-26.9h27l1,23h29.1c0,0,.1,100,.1,100h-30Z"
                        />
                      </svg>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide className="swiper-slide">
                    <div className="fachada">
                      <svg
                        id="Color"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1600.01 900"
                      >
                        <defs>
                          <style>
                            {`.cls-6 {
                                                            fill: ${colorFacahada};
                                                        mix-blend-mode: multiply;
                                                        stroke-width: 0px;
                                                        }
        
                                                        .cls-6, .cls-2 {
                                                            isolation: isolate;
                                                        }`}
                          </style>
                        </defs>
                        <g className="cls-2">
                          <g id="Color-2" data-name="Color">
                            <path
                              className="cls-6"
                              d="M1499.61,0v50.92h7.58v3.79h-134.4l-56.34,49.77v-22.86l-1080.38-3.79v29.18l-40.55-36.76-17.05-17.05H58.22v-5.81h7.71V0H0v348.06l233.19.82-1.2,272.11-2.97.07c-.22,16.11-.29,32.49-.19,49.14.08,13.79.28,27.4.58,40.82.14,31.46.28,62.92.41,94.38h73.71l48.51-23.68h104.21l.13-37.07,22.86-10.86h68.72l2.78-541.64,458.21-1.2v539.28l83.46,1.57,8.31,8.79v42.37h123l32.21,15.06,63.19-.85,1.89-180.19-3.13.09,1.74-269.12,217.35.13-1.01,337.01h15.82v5.12h-1.14v5.68h49.36V0h-100.4ZM431.86,282.33c-4.54-1.19-10.76-2.33-18.19-2.27-6.95.05-12.81,1.13-17.18,2.27-.21-25.1-.42-50.19-.63-75.29,4.2-1.43,10.84-3.12,19.07-2.9,7.18.19,13.01,1.76,16.93,3.16v75.03ZM1123.57,281.44l-.88-74.78s1.01-3.79,18.95-4.17,16.04,4.17,16.04,4.17l.76,73.64-34.86,1.14h-.01Z"
                            />
                          </g>
                        </g>
                      </svg>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide className="swiper-slide">
                    <div className="sala">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 1600 900"
                      >
                        <defs>
                          <style>{`.cls-1 {fill: ${colorSala};}`}</style>
                        </defs>
                        <g id="vector">
                          <path
                            className="cls-1"
                            d="M131.11,380.22h64.8v5.78h-18.85l-12.03,351.09h-16.99l-10.61-76.58s-1.01-7.07-.76-14.4l-5.56-265.89Z"
                          />
                          <path
                            className="cls-1"
                            d="M1065.34,534.07h-128.21l-10.07,6.95v67.99h-8.97v2.97h8.97v4.96h-8.97v3h8.97v4.86h-9.13v3.19h8.97v4.07h-8.94v3.09h9.09v4.74h-9.16v3.06h9.16v5.05h-9.06v3.03h9.06v4.99h-9.03v3.03h8.87v4.99h-8.87v2.97h9.03v4.07h-9.09v3.85h8.97v3.98h-8.91v3.09h8.91v4.99h-8.97v2.97h9.09v4.99h-9.09v3.03h8.97v4.89h-8.91v2.24h9.03v5.81h-9v2.08h9v4.93h-9v3.06h8.81v4.89h-8.87v3.13h9.06v4.74h-9.63v1.33h-100.23v-1.04c-2.71.01-5.41.02-8.12.03,1.57-.74,3.14-1.47,4.71-2.21.41-.16.67-.56.63-.98-.03-.37-.28-.69-.63-.82-.3-.15-.62-.3-.97-.44-1.25-.49-2.42-.66-3.35-.7h-27.41v-19.5s-27.57.27-27.57.27l-21.32-26.53h-2.37l.19,2.27,20.08,24.44-11.08.09v24.06l-2.75.09v.85h-4.36v.95l-11.75.09v.76l-7.39-.09-62.43,1.23-7.77.28c-15.92,0-17.34,3.13-17.34,3.13h-17.17l-5.19-130.17c2.37-.95,4.74-1.89,7.11-2.84,2.4-1,3.81-2.28,3.6-3.03-.25-.9-2.78-.95-3.03-.95-17.36-.03-31.38,1.2-41.12,2.37-18.18,2.17-24.95,4.52-37.14,1.89-11.54-2.49-20.71-7.87-26.34-11.18-8.9-5.23-15.58-10.77-20.12-15l-5.68-50.91h-3.03l-1.77-12.25-5.05-4.42-75.54,5.68-115.42.82c-.73.35-1.8.91-3.03,1.71-1.58,1.02-2.38,1.54-2.56,2.18-.56,1.97,3.35,4.53,3.54,4.64v4.04c-1.31-.18-3.7-.32-6.38.69-1.31.5-2.34,1.14-3.09,1.71-.15,2.2-.23,4.54-.22,7.01.02,4.06.31,7.81.73,11.18l2.91,14.4.88,12-6.32,157.01h-30.82l-13.77-352.17h-21.22v-5.18h63.66l31.07-1.89-14.91-103.07-25.64-.66h-125.75L122.77,0h1477.23v536.73h-26.24v-.85h-.81v-.81h-1.75v-1.04h-2.18v.9h-1.85v-2.94h-2.94v-1.94h-2.23v-.9h5.97v-1.18h-.99v-1.85h-2.98v.85h-4.07v.9h-4.83v1.18h-1.09v.76h.9v2.08h-.81v1.14h.71v1.28h-32.02l7.2-76.41c.31-1.35.77-4.28-.32-7.71-.02-.06-.04-.11-.05-.17-.93-2.8-3.01-5.04-5.61-6.42-2.93-1.55-6.78-4.17-10.12-8.44-2.63-3.36-4.09-6.67-4.93-9.09-.38-8.4-.76-16.8-1.14-25.2h3.17v-1.71h-2.7v-1.18h2.7v-.99h-1.99l-1.04-3.03h-14.87l-1.28,2.84h-.9v1.23h1.04v.95h-1.09v1.09h1.04v.9h1.8l-3.03,25.29c-.45,1.9-1.3,4.36-2.94,6.88-3.12,4.81-7.47,7.31-10.41,8.56-2.76,1.18-5.15,3.14-6.6,5.76-.01.02-.03.05-.04.07-2.95,5.4-1.62,10.84-1.23,12.25,2.12,24.82,4.23,49.64,6.35,74.46h-147.98l3.98-4.74-3.98-4.17-32.4-1.52-61.39-.95c.57-.85,9.65-14.87,2.72-30.38-4.68-10.47-14.84-17.56-26.4-18.44-1.8-.11-16.24-.78-26.15,10.48-8.16,9.28-9.99,22.95-4.64,34.83-11.15-.92-22.29-1.83-33.44-2.75l-5.31,4.26-3.13,14.21-48.88-.47c2.07-.73,15.01-5.53,20.75-19.52,4.67-11.39,1.57-21.57.66-24.25-5.2-11.5-16.11-19.33-28.45-20.34-13.64-1.12-26.84,6.28-33.32,18.73-.91,1.71-6.62,12.88-1.8,25.99,4.93,13.4,16.93,18.15,18.69,18.82Z"
                          />
                          <polygon
                            className="cls-1"
                            points="279.91 734.16 279.91 738.45 357.21 738.45 357.21 731.88 279.91 734.16"
                          />
                          <polygon
                            className="cls-1"
                            points="370.98 731.88 370.98 738.45 467.61 739.21 467.61 728.85 370.98 731.88"
                          />
                          <polygon
                            className="cls-1"
                            points="480.12 739.84 480.12 728.09 595.82 725.06 595.82 741.36 480.12 739.84"
                          />
                          <path
                            className="cls-1"
                            d="M490.09,606.96c4.62,2.55,11.3,5.92,19.71,9.09,5.37,2.03,9.23,3.49,14.66,4.57,7.96,1.59,14.04,1.33,23.61.86,1.75-.09,9.55-.49,20.53-2.15,6.58-.99,15.11-2.55,25.01-5.12v72.19c-3.34-1.44-7.46-2.92-12.29-4-3.78-.85-7.24-1.29-10.26-1.5-21.6.51-43.2,1.01-64.8,1.52-1.6-4.65-3.14-9.65-4.55-14.97-2.02-7.6-3.48-14.78-4.55-21.41-.17-5.7-.73-12.28-2.02-19.52-1.34-7.48-3.17-14.05-5.05-19.58Z"
                          />
                        </g>
                      </svg>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide className="swiper-slide">
                    <div className="sala2">
                      <svg
                        id="color"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1600 900"
                      >
                        <defs>
                          <style>
                            {`.cls-7 {fill: ${colorSala2};stroke-width: 0px;}`}
                          </style>
                        </defs>
                        <polygon
                          className="cls-7"
                          points="334.78 726.17 334.78 719.52 322.65 707.78 321.09 726.17 334.78 726.17"
                        />
                        <polygon
                          className="cls-7"
                          points="299.17 640.09 303.35 640.09 299.17 726.17 289.91 726.17 299.17 640.09"
                        />
                        <path
                          className="cls-7"
                          d="M265,726.17h-46.04l.13-185.09h-2.48v-88.08h2.43v-1.17h-2.1v-5.87h3.08v-1.04h1.03v-.98h.98v1.04h.98v.98h2.02v-.98h1.01v-1.04h1.08v1.08h3.91v-1.08h2.05v1.01h3.88v-1.01h1.01v-1.01h1.08v-1.99h-3.08v-.99h-5.97v-1.98h9.05v-1.96h4.97v-4.01h-9.02v-.98h-2.02v.93h-5.98v1.06h-2.98v-.99h-5.01v.99h-2.01v-3.96h12v-1.04h-4.96v-1.14h-7.04v-9.82h5.02v-1.08h-5.02v-3.03h1.01v-.98h3.16v-1.01h2.87v-1.01h-5.93v1.01h-.78V0h1291.76v259.61l4.7,150-1.83,143.22-2.61,173.35h-32.87l-24.92-177.75,27.53-1.34s8.61-1.17,8.61-5.22-.52-8.22-.52-8.22c0,0-2.09-4.04-16.7-4.04s-12.52-.13-12.52-.13l.39-102.78.26-1.57,5.35.26,1.43-2.22,15.26,9.91h6.13l7.04,5.61,4.04-.13-1.96-6-1.04-.91-.52-5.61c-3.89-4.38-9.76-9.97-18-14.74-4.67-2.7-9.09-4.57-12.91-5.87,2.78-2.35,5.57-4.7,8.35-7.04l.13-6.91c2.41.25,5.49.33,9-.13,2.68-.35,5-.95,6.91-1.57.13-.3.26-.61.39-.91l6.52-.52,12.26-9.91.13-3,2.87-.78-5.61-4.57-2.09-.13-16.3-10.04-5.09-1.43c-1.74-1.01-3.83-2.03-6.26-2.87-6.24-2.16-11.84-2.17-15.52-1.83-1.66-1.1-3.36-2.27-5.09-3.52-1.68-1.21-3.28-2.42-4.81-3.62-1,.04-1.76.06-2.76.1l-6.39,5.87-.65-2.35,13.7-21.78,11.74-19.7v-6.78l-3.13,2.22-7.7,1.04-3.52,6.39-4.96,2.22-9.39,7.57s-12.91,4.17-13.83,35.22c.13.13-.39,1.57-.39,1.57l-7.57-4.04-2.22.13-2.48.65c.26-4.18.42-8.61.42-13.27,0-4.83-.15-9.41-.42-13.73h-1.83c.02-.92-.08-2.32-.68-3.88-1.03-2.65-2.91-4.14-3.75-4.73-1.02-5.2-2.92-11.92-6.62-19.14-6.24-12.17-14.59-19.92-19.99-24.16-1.65,1.83-3.3,3.65-4.96,5.48l-3,.26-8.22,11.22c-1.02,4.8-2.71,16.1,2.22,28.83,6.12,15.8,17.9,22.07,13.79,20.17-.53-.34-1.38-.88-1.9-1.21l-6.28-5.26-9-.13c-3.78-2.16-8.6-4.45-14.41-6.23-9.7-2.97-18.27-3.31-24.24-3.04-.13.72-.11.6-.23,1.32l9.54,4.03,4.17,5.74,1.7,2.22.39,3,.91.39,1.7,4.7,1.43,2.87s1.83,2.22,5.09,2.22c2.09,2.61,10.3,9.13,10.3,9.13l-.91,1.35s-7.17-1.74-11.61,2.3c-.52.26-12.78-1.57-15.39,2.35l-1.7.39-.39,3.39,1.43-.13s-1.3,12.13,14.35,12.26c1.43.52,2.48.26,2.48.26v1.17l8.87-.26s9.65-3.13,13.04-2.09c3.39.91,5.61,1.04,5.87,1.83.26.78,3.91,6.13,3.91,6.13l-2.61-.13s-4.83-3.52-12.91-3.26-18.26-.78-18.26-.78l-10.04-3.52-13.83,1.7-4.57-1.04-4.17.26-6.65-3.52-2.09.13.91,4.17,2.35.39s1.17,5.09,23.35,8.48c-.13,1.7,0,3.91,0,3.91,0,0-3.78,5.22,2.09,4.7,5.87-.52,13.17-3.78,13.17-3.78l6.13,1.96,9.13-.65c4.91,1.09,10.42,2.71,16.24,5.18,2.15.91,4.17,1.87,6.07,2.84-3.08-.38-24.17-2.83-38.64,3.23-2.79,1.17-7.54,3.16-11.84,7.92-2.92,3.24-4.52,6.53-5.4,8.73.28.47.39.65.68,1.11l3.67.33,3.13-1.3,2.35-.26c1.79.26,4.83.47,8.38-.49,4.49-1.22,7.45-3.67,8.84-4.99-.09,35.35-.17,70.7-.26,106.04,0,0-25.43.26-25.57,2.74-.13,2.48-.26,11.74-.26,11.74l27.65,4.04-27.52,178.43-66.65.39s1.96-2.35,2.35-5.61c2.48,0,8.48-.13,8.48-.13,0,0,4.3,1.17,8.48-14.09,4.17-15.26,6.13-37.04,6.13-37.04,0,0,27.39,7.3,43.7-4.17-.52-5.35-21.78-108-21.78-108l2.22-1.57-.39-15.39s-7.7-6.91-8.09-15.39c1.96-2.09,4.43-6.26,4.43-6.26l-.13-3.65-16.43-33.52c-2.02-3.29-4.56-6.85-7.78-10.41-9.86-10.93-21.14-16.49-28.61-19.33-5.4-1.47-13.58-2.99-23.43-2.09-6.3.57-11.61,1.97-15.7,3.4,0,0-2.35-11.22-19.83-4.17-.52-1.17-.91-8.22-.91-8.22,0,0,5.09-3.39,4.96-8.09-.13-4.7-16.57-6.91-16.57-6.91l-63-.78s-25.04,1.7-37.7-1.3c-13.43-.26-23.74,1.3-23.74,1.3l-28.3-1.96s-8.35-.26-11.74,2.35h-36.26l-3,1.43-16.57-1.96-37.96-1.43s-68.22-3-79.04,0c.13.26-1.57,1.04-4.17.78-1.42-.14-5.67-.01-9.25.13-4.08.17-8,1.7-11.07,4.4-1.01.89-1.78,1.72-1.86,2.25,0,0,.39,2.48,2.61,6.39,2.22,3.91,4.7,8.48,4.7,8.48,0,0-4.57-.65-13.7,3.26-6.13.78-16.17,3.26-16.17,3.26,0,0-2.09-13.83,2.87-18.52,0,0,2.41-9.23-9.07-8.97-.13-.07-5.93-1.66-5.93-1.66l-.16-5.32.85.16.03-8.02s-4.66-1.53-8.02-7.01c-3.36-5.48-6.85-9.65-6.85-9.65,0,0-4.66-1.86-5.9-2.54s-2.8-2.74-3.03-6.33c-.13-.46-1.34-.72-1.34-.72l-4.89-6.68,2.41-2.97c3.9-.77,10.46-2.62,16.92-7.57,11.32-8.66,14.45-20.72,15.26-24.46-4.3,1.09-13.36,4.01-21.72,12.03-7.45,7.15-10.79,14.94-12.23,19.08l-4.21,2.64-16.11-11.76s-5.54-2-6.85-1.35c.13-4.3.46-13.57.46-13.57,1.14-.49,2.44-1.16,3.82-2.09.94-.63,1.75-1.28,2.45-1.89l-5.54-.2c.12-5.65.24-11.3.36-16.96,1.81-1.82,6.16-6.69,7.39-14.27,1.92-11.88-5.44-20.59-6.55-21.86-1.72,2.22-6.73,9.23-6.8,19.43-.06,8.42,3.27,14.54,4.83,17.05-.22,5.48-.43,10.96-.65,16.43l-17.28-.03,3.72-5.02v-3.78c-.8-.43-.96-.52-1.76-.95l-11.94,7.86-17.61,11.22-.39-2.22s13.57-8.35,7.3-12.78c0-.13-1.57-.13-1.57-.13,0,0-13.17,5.74-21.78,16.3-.65-.39-3-1.04-3.39.39s-.26,2.61-.26,2.61l-7.7,10.83-4.7,3.78-3-2.22c-1.2-2.54-4.98-9.65-13.43-14.35-7.92-4.39-15.41-4.15-18.26-3.91,1.91,3.24,6.3,9.69,14.48,14.48,6.68,3.91,12.96,5,16.57,5.35l4.83,3.39-6.26-.26c.96,1.19,2.19,2.97,3.13,5.35.78,1.96,1.14,3.73,1.3,5.09.43,1.13.87,2.26,1.3,3.39,0,0-5.61,5.48-2.22,9.91-1.7,1.7-9.78,9.91-10.83,18.26,0-.13-4.17,1.04-4.43,3.91l-29.22,1.57s-17.09-2.87-17.87.52c-1.83-.91-9.26-4.17-20.35-4.17s-50.15.46-50.15.46l-18.98-.78-.78.98s-5.38.88-9.49-1.17c-3.72-.1-58.7-.29-58.7-.29l-6.36,5.87s-2.25,3.13,0,5.58c.2,2.74.29,8.22.29,8.22,0,0,4.99,2.93-.1,6.55-1.47,1.96-3.62,7.34.29,13.99.2,4.11.2,4.7.2,4.7l-6.26-.1c-1.03.05-3.86.34-6.55,2.45-2.98,2.33-3.87,5.4-4.11,6.36-1.11,8.18-2.22,16.37-3.33,24.55l-1.08.2-.79-22.64c-.1-3-1.54-5.85-4.03-7.54-.02-.02-.05-.03-.08-.05-3.84-2.56-7.97-1.64-8.71-1.47,0,0-1.17,1.37-1.66,1.37h-8.41l-2.15,1.17-14.28.98-13.99,4.5-30.42,2.05-6.55,1.86-13.5,15.07-.59,61.14-17.12,5.97s-.68,2.74,1.66,3.91c1.57,1.86,2.05,5.97,2.05,5.97,0,0,2.84,3.42,5.09,3.23.49,1.86,11.64,29.15,11.64,29.15l-9.29-.29-7.34,3.82-21.62,14.09s-7.53,4.3-12.03,5.58c-.78,1.57-2.15,2.64.98,5.97,3.13,3.33,10.66,10.5,10.66,10.5h12.72l-5.84,86.09Z"
                        />
                        <polygon
                          className="cls-7"
                          points="1333.52 725.52 1363.26 566 1405.78 567.04 1411.13 725.52 1333.52 725.52"
                        />
                        <polygon
                          className="cls-7"
                          points="1419.09 725.52 1467.61 725.52 1441.52 567.7 1417.91 567.7 1419.09 725.52"
                        />
                      </svg>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide className="swiper-slide">
                    <div className="comedor">
                      <svg
                        id="Color"
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        viewBox="0 0 1600 900"
                      >
                        <defs>
                          <style>
                            {`.cls-2 {
                                                            fill: ${colorComedor};
                                                        stroke-width: 0px;}`}
                          </style>
                        </defs>
                        <path
                          className="cls-2"
                          d="M271.51.09l-1.01,701.44,198.63-2.34,15.16-106.48s-1.42-7.39,5.02-9.71c.09,0-16.01-17.38-13.17-42.96,1.52-10.61,53.81-3.41,53.81-3.41l14.4,1.52s-7.39-22.36,24.63-24.44c32.02-2.08,84.88,1.14,121.64,17.81l233.43.76s30.51-18.95,100.8-18.76c37.71,0,41.49,8.72,41.49,8.72,0,0,4.74,2.46,2.46,16.67,2.08,0,33.73-3.22,33.73-3.22,0,0,35.91-4.74,35.24,6.06,0,0,2.08,27.66-13.64,40.74.55.29,5.03,2.69,5.78,7.63.34,2.29-.25,4.17-.66,5.16,1.23,6.73,16.2,103.83,16.2,103.83h73.11V.09H271.51Z"
                        />
                        <path
                          className="cls-2"
                          d="M485.61,672.96l6.25-54.76s1.33,18.57,20.08,20.46,27.66,2.65,27.66,2.65v5.87s-26.91,1.52-31.26,11.18-1.89,14.59-1.89,14.59h-20.84Z"
                        />
                        <polygon
                          className="cls-2"
                          points="481.82 699.2 481.82 695.22 532.6 695.22 532.13 699.2 481.82 699.2"
                        />
                        <polygon
                          className="cls-2"
                          points="541.32 699.2 542.07 694.18 567.84 694.18 567.84 699.2 541.32 699.2"
                        />
                        <polygon
                          className="cls-2"
                          points="587.86 699.2 592 694.01 597.87 694.01 597.78 699.2 587.86 699.2"
                        />
                        <rect
                          className="cls-2"
                          x="608.96"
                          y="691.95"
                          width="15.11"
                          height="7.06"
                        />
                        <rect
                          className="cls-2"
                          x="633.97"
                          y="691.01"
                          width="5.07"
                          height="8.01"
                        />
                        <polygon
                          className="cls-2"
                          points="646.95 690.96 646.95 699.01 682.9 699.01 682.9 689.92 646.95 690.96"
                        />
                        <path
                          className="cls-2"
                          d="M709.95,643.02h-35.91v1.8s16.71,1.86,20.97,7.83,2.75,11.43,2.75,11.43c0,0-.82,3.53-4.33,4.1l2.3,30.83h18.66l-4.45-55.99Z"
                        />
                        <path
                          className="cls-2"
                          d="M742.6,564.39l-47.72-2.56c-.93,2.52-3.52,6.87-7.06,10.61-4.82,5.09-10.22,7.02-15.4,8.87-3.56,1.27-8.95,2.8-15.81,3.26.05.43.12,1.05.17,1.79.3,4.94-.76,8.73-1.59,11.56-.72,2.47-1.9,5.74-3.88,9.38l56.69,1.47c.27,0,.54,0,.8-.02,1.22-.1,3.36.21,5.77,1.04,4.14,1.43,5.3,5.66,5.73,6.82.74,2.02.87,3.9.78,5.38-.09,1.61-1.42,2.93-3.03,2.95-.01,0-.02,0-.03,0-1.01,0,5.24,74.05,5.24,74.05h6.57l12.76-134.62Z"
                        />
                        <path
                          className="cls-2"
                          d="M870.56,564.52l13.64,134.49h4.8l5.87-73.52s-3.51.66-3.51-3.41.76-5.97.76-5.97c0,0,3.22-5.78,10.14-6.44s60.73-2.65,60.73-2.65c0,0-6.66-13.01-6.09-21.92,0,.19-34.39-3.76-38.46-23.18-4.74.28-47.87,2.59-47.87,2.59Z"
                        />
                        <polygon
                          className="cls-2"
                          points="1080.18 694.08 1080.18 699.48 1132.38 699.48 1132.38 695.22 1080.18 694.08"
                        />
                        <polygon
                          className="cls-2"
                          points="1047.97 694.08 1047.97 699.11 1072.13 699.48 1072.13 694.08 1047.97 694.08"
                        />
                        <polygon
                          className="cls-2"
                          points="1016.04 693.42 1016.04 699.48 1025.8 699.48 1021.92 694.08 1016.04 693.42"
                        />
                        <rect
                          className="cls-2"
                          x="989.99"
                          y="692.09"
                          width="14.02"
                          height="6.92"
                        />
                        <rect
                          className="cls-2"
                          x="973.98"
                          y="692.09"
                          width="6.16"
                          height="6.92"
                        />
                        <polygon
                          className="cls-2"
                          points="931.73 690.96 931.06 699.01 965.93 699.01 965.93 690.96 931.73 690.96"
                        />
                        <path
                          className="cls-2"
                          d="M903.31,642.96l-4.36,56.05h19.8l1.33-30.79s-4.93-.85-4.55-4.93,1.61-16.48,20.56-18.09c.09-.47,0-1.23,0-1.23l-32.78-1.01Z"
                        />
                        <path
                          className="cls-2"
                          d="M1074.02,641.03v5.68s31.45,2.84,32.97,14.68l.85,11.84,21.03.66-5.97-52.2-2.08.57s3.88,19.14-46.8,18.76Z"
                        />
                      </svg>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide className="swiper-slide">
                    <div className="comedor2">
                      <svg
                        id="Capa_2"
                        data-name="Capa 2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1600.34 900"
                      >
                        <defs>
                          <style>
                            {`.cls-8 {
                                                            fill: ${colorComedor2};
                                                        stroke-width: 0px;}`}
                          </style>
                        </defs>
                        <path
                          className="cls-8"
                          d="M1216.5,589.5l-12-3,27-103s0-6-21-8-38.96,0-38.96,0V212.5h-7.04l-39,27v263.88l-3.41,3.41v-25.33s2.15-8.72,1.77-9.54c-.38-.82-.41-3.79-14.53-4.83-14.12-1.04-35.19,3.32-35.19,3.32l-.82-194.68h-74.54v208.17l-35.12-8.34v-3.28h-21.22s.51-11.24,10.11-13.52c.51-.76,0-1.8,0-1.8l-37.55-.41-5.26-4.39-26.79-.58.88-301.33h-12.69c-.85-3.01-1.72-6.05-2.61-9.09-.96-3.29-1.92-6.55-2.89-9.79h133.14v98.27h123.54v-27.28l95.75-70.99h381.94l.34,456.15-383.84,1.98Z"
                        />
                        <path
                          className="cls-8"
                          d="M448.34,132.12v342.57h19.96l33.54,13.45,17.15,20.94-7.96-35.91s-.66-6.92,20.46-6.35c21.13.57,32.78,8.05,32.78,8.05,0,0,6.61,4.72,11.98,12.23,2.66,3.73,5.77,7.13,9.4,9.92,4.58,3.52,8.45,5.06,19.93,6.27l-5.12-5.31v-4.93l5.12-1.01V151.64h161.49c.24-2.68.74-5.91,1.77-9.47,1.18-4.08,2.7-7.45,4.11-10.04h-324.6Z"
                        />
                      </svg>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide className="swiper-slide">
                    <div className="dormitorio2">
                      <svg
                        id="color"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1600 900"
                      >
                        <defs>
                          <style>
                            {`.cls-9 {
                                                            fill: ${colorDormitorio2};
                                                        stroke-width: 0px;}`}
                          </style>
                        </defs>
                        <path
                          className="cls-9"
                          d="M1600,900h-170.9l-.98-217.88-14.71-7.6s-1.43-1.37-5.61-1.5c-4.17-.13-101.22-.98-101.22-.98,0,0-2.74.2-2.67,3.13.07,2.93,0,183.72,0,183.72,0,0-16.56-7.83-17.64-13.74-1.08-5.92-21.03-27.39-21.03-27.39l-19.37-20.62s-31.5-27.52-37.5-30.72c-6-3.2-20.71-14.15-54.65-23.93,0-6.16,1.27-191.54,1.27-191.54,0,0-11.98-6.9-23.92,0-.05,2.35,0,4.11,0,4.11h-24.16s-18.08-5.48-20.95-23.87c-4.3-.13-573.88-3.03-573.88-3.03,0,0,.88,22.7-26.71,24.75-17.12.2-19.37.1-19.37.1v-4.79s-14.18-6.16-26.22.78c0,11.84-.98,171-.98,171,0,0-42.07,13.7-57.33,24.07-.78-23.09,0-56.15,0-56.15,0,0,11.35,2.15,11.45-4.6.1-6.75.39-18.2.39-18.2l.68-.1.1-2.05h.88l-.1,1.96h.94c2.4,0,4.63-1.22,5.93-3.24l3.87-6.03c1.49-2.32,2.31-5,2.37-7.75l-9.68-11.93s-7.53-8.51-8.22-18.78c-1.27-.29-3.03-.2-3.03-.2l.2-1.96,3.72-.88s2.84.78,3.33-2.15h1.66l3.52,4.4h1.66v-3.33h.88l-.1-3.03s-12.72-8.41-14.18-11.25c-3.62,0-3.91-.59-3.91-.59l-.1-7.34s-1.57-1.17-3.52-1.76c-2.05-1.57-9.88-10.57-9.88-10.57,0,0-7.83.2-7.53,8.41-.1,0-5.38.1-5.38.1l-5.77-2.93h-6.75v-4.6s-.68-2.84-6.55-1.86-18.2,3.42-18.2,3.42l-.49,1.17-9-.2v-1.08s1.76,1.17,1.27-8.61c0,0-14.13-11.34-30.38-3.26h-66.5l-5.87,95.9h-20.09l-13.7-34.96v-6h-1.04l1.04-7.17,18.52-66.78-2.22-.52-18.13,66.26h-1.7l-17.48-67.83-4.43,1.57,18.39,59.74-23.61-57.52-1.7.65,24.65,64.17h2.48v2.35h-2.09v2.35l3.26,4.17-5.74,16.43h-6.78v25.7l-6.78-2.48v2.74h-20.22l-31.83,13.7,1.11,218.43H0V0h229.9l.6,258.04-12.52.13-.07.91-16.5.39.07,1.37-9.26.26v.98h-3.26v.91h-3.78v.78c-23.28,7.77-37.56,31.42-33.65,55.3,3.8,23.22,23.83,40.85,47.67,41.67l66.2.2c.41-.13.83-.26,1.24-.39,24.28-2.96,43.03-21.91,45.33-44.35,2.65-25.83-17.03-51.08-45.33-54.85-4.82-.65-9.8-1.25-14.93-1.76-5.83-.59-11.48-1.03-16.96-1.37V0h1365.26v900Z"
                        />
                      </svg>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide className="swiper-slide">
                    <div className="dormitorio">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 1600 900"
                      >
                        <defs>
                          <style>{`.cls-3 {fill: ${colorDormitorio};}`}</style>
                        </defs>
                        <g id="vector">
                          <path
                            className="cls-3"
                            d="M1141.95,501.29c.06-13.96.13-27.92.19-41.87l18.57-20.08,4.17-2.65-30.69-24.63.19-16.86,3.41-14.4v-8.34l-205.96.95-3.03-1.33-20.46-.38-2.65-1.71-78.06-4.93v3.98l-1.89-.76-8.72,2.27h-7.96l-59.31,3.79-194.97,4.45-23.4,1.14-.95.76h-11.94l5.12,16.77-.76,10.89-17.08,6.09-11.62,7.83c-4.8,3.63-9.6,7.26-14.4,10.89-.18.33-1.11,2.12-.38,4.07.3.81.79,1.37,1.14,1.71l10.61,8.84,1.26,5.31,6.06,5.05v2.78l7.58,22.23,2.27,3.54-.76,6.32-.76,19.45-3.92,9.47c-16.31,10.15-29.51,18.27-41.12,25.2-5.06,3.02-12.1,7.17-19.89,14.59-4.61,4.38-6.46,7.03-11.56,12.88-9.6,11.02-16.79,17.42-20.84,21.41-8.34,8.22-20.1,22.73-35.31,50.34l2.53-547.2-233.43-.51-4.17,620.15h-46.23l-4.42.19-6.32-89.05s7.58-22.48,5.05-28.8c4.04-8.34,5.68-36,5.68-36L87.15,0h1512.85v719h-93.88v-.85l3.13-3.13v-1.2h-3.13v-6.44h7.45v-3.28h-2.27v-8.02h3.47v-1.96h6.38v-14.02h.95v-1.14h3.79v-1.01h9.22v-1.07h5.94v-1.89h-2.91v-9.79h2.53v-1.26h-.51v-1.14h-13.2v-13.99h-39.79v-5.81h-1.18v-.97h-3.92v-1.03h-9.99v-1.92c1.56-1.48,3.11-2.96,4.67-4.44,2.2-2.93,5.02-7.34,7.11-13.2,2.28-6.39,2.81-12.03,2.87-15.85v-19.48c0-1.87-.09-4.71-.66-8.11-1.03-6.21-2.99-10.45-6.1-17.19-2.69-5.83-4.1-7.71-5.21-9-.85-.98-2.84-3.16-5.97-5.21-2.97-1.95-5.77-3.01-7.77-3.6v-15.25l51.16-.76-.09-.85h1.14v-1.52l-10.8-75.69h-86.4l-12.69,76.17h1.52l.38.76h4.93l.38,1.04h15.16l.19.95h29.46v14.97c-.86-.04-4.03-.09-6.82,2.18-4.03,3.28-3.64,8.45-3.6,8.91-2.24,4.53-4.77,10.88-6.16,18.76-1.97,11.21-.77,20.61.47,26.53-1.71,6.11-3.27,13.22-4.26,21.22-.75,6.02-1.06,11.6-1.11,16.64h1.07v1.01h1.01v3.28h-4.86v.51h-1.14v.88h-.88v.95l-37.89,7.52v1.89h3.16v10.67h-2.21v1.26h-.88v12h9.92v6.06l-4.17.95v2.02l10.11,2.97v7.96l3.85,3.22-7.86,3.79v.92h-1.01v.95h-1.29s-.33,13.31,0,12.98c.33-.33-82.52,0-82.52,0l-17.72-37.71h4.74v1.33h2.84l.19-3.03h1.14c-1.94-21.57-8.68-35.88-13.83-44.34-3.56-5.86-7.65-11.04-15.54-21.03-4.88-6.19-11.33-14.37-19.89-23.49-7.59-8.1-18.27-18.46-32.4-29.37h-.88v-1.39h1.07v-2.91h-1.01v-1.71h-1.14v-5.56h-.88v-.76h-1.07v-.82h-1.07v-2.08h-.69v-.88h-2.08v.88h-.88v-1.01h-2.91v1.2h-1.14v-1.14h-2.91v-2.91h-1.89v-1.89h-3.03v-2.27h-1.26v-4.17h-1.83v-.88h-1.96v.95h-2.08v1.07h-2.02v-1.89h-1.14v-1.07h-1.07v-1.01h-1.71v-1.2h-1.96v-5.75h-1.2v-.76h-.95v-1.2h-1.96v-1.2l-.92-.92h-1.36v-.98h-11.05v-1.14h-1.45v-.88h-3.16v-3.85h.82v-2.08h-1.01v-.88h-.88v-2.08h-9.09v-1.96h-.95v-.88h-2.02v-1.07h-2.97v-1.26h-8.78v-.95c-1.12-.19-2.23-.38-3.35-.57Z"
                          />
                          <path
                            className="cls-3"
                            d="M829.19,376.12v3.85h-1.39v4.04h-.82v5.68h-1.01v2.08h-.95v2.02h-1.01v4.86h-1.07v12.44c.6.8,1.29,1.85,1.89,3.16.63,1.35,1,2.6,1.23,3.6h3.82c.52-1.24,1.35-2.86,2.65-4.55,1.28-1.66,2.61-2.85,3.66-3.66v-8.53l.57-.06v-.95h1.45v-3.13h-.57c-.58-1.15-1.15-2.34-1.71-3.57-2.15-4.73-3.79-9.29-5.05-13.58v-3.73h-1.71Z"
                          />
                          <path
                            className="cls-3"
                            d="M1449.97,562.94v-12.69c.36-2.32,2.48-3.56,3.98-3.09,1.09.34,1.92,1.6,1.96,3.09v2.02l-4.86,10.67h-1.07Z"
                          />
                          <polygon
                            className="cls-3"
                            points="1460.96 551.95 1462.98 551.95 1462.98 549.04 1461.97 549.04 1461.97 550.02 1460.96 550.02 1460.96 551.95"
                          />
                          <polygon
                            className="cls-3"
                            points="1467.02 550.05 1467.02 559.78 1465.88 559.78 1465.88 562.24 1467.02 562.24 1467.02 564.83 1468.03 564.83 1468.03 568.05 1469.04 568.05 1469.04 571.97 1470.24 571.97 1470.24 574.87 1470.94 574.87 1470.94 580.05 1471.95 580.05 1471.95 583.02 1473.08 583.02 1473.08 587.25 1474.16 587.25 1474.16 594.96 1475.11 594.96 1475.11 600.89 1476.05 600.89 1476.05 608.03 1476.87 608.03 1476.87 628.94 1478.01 628.94 1478.01 627.04 1479.15 627.04 1479.15 624.01 1479.97 624.01 1479.97 622.05 1480.98 622.05 1480.98 619.15 1481.86 619.15 1481.86 616.24 1482.87 616.24 1482.87 610.75 1484.07 610.75 1484.07 587.06 1483 587.06 1483 580.12 1481.86 580.12 1481.86 575.88 1481.23 575.88 1481.23 572.79 1480.03 572.79 1480.03 569.95 1479.15 569.95 1479.15 565.97 1478.07 565.97 1478.07 564.07 1476.87 564.07 1476.87 561.93 1476.24 561.93 1476.24 559.08 1474.98 559.08 1474.98 558.01 1474.22 558.01 1474.22 556.05 1472.96 556.05 1472.96 554.99 1472.2 554.99 1472.2 552.96 1471.25 552.96 1471.25 551.95 1470.18 551.95 1470.18 551 1469.17 551 1469.17 550.05 1467.02 550.05"
                          />
                          <path
                            className="cls-3"
                            d="M1452.12,614.79h1.89l7.96,20.34v.88h-1.01c-2.37-1.84-5.09-4.31-7.71-7.58-1.29-1.62-2.38-3.19-3.28-4.67.04-.16,1-4.16,1.03-4.32.04-.18,1.07-4.46,1.11-4.65Z"
                          />
                          <path
                            className="cls-3"
                            d="M1440.78,612.77h.98l3.92,8.34c-.39,1.58-.91,3.33-1.64,5.18-1.23,3.12-2.69,5.69-4.04,7.71h-.88c-.1-3.2-.05-6.76.25-10.61.31-3.89.82-7.44,1.42-10.61Z"
                          />
                          <path
                            className="cls-3"
                            d="M1444.16,562.94h.63l.88,15.47-3.54,12.76h-.76c-.58-4.09-.93-9.56-.13-15.92.62-4.88,1.75-9.03,2.91-12.32Z"
                          />
                          <path
                            className="cls-3"
                            d="M1463.99,572.98h.76c2.54,7.86,4.99,17.51,6.44,28.67,1.65,12.68,1.57,23.86.88,32.87-.97.75-1.94,1.5-2.91,2.25-2.29-2.56-4.88-5.94-7.2-10.23-4.02-7.43-5.48-14.37-6.06-19.07v-2.59l8.08-31.89Z"
                          />
                          <path
                            className="cls-3"
                            d="M1452.94,596.09l-1.96-19.58,7.45-20.46h1.01l1.52,6.06c-.73,4.62-1.65,9.48-2.78,14.53-1.57,6.99-3.36,13.49-5.24,19.45Z"
                          />
                          <polygon
                            className="cls-3"
                            points="1447.32 589.49 1450.98 606.33 1447.32 616.68 1442.89 605.19 1447.32 589.49"
                          />
                          <polygon
                            className="cls-3"
                            points="1439.99 641.03 1463.01 641.03 1463.01 640.04 1462.16 640.04 1462.16 638.9 1459.08 638.9 1459.08 638 1457.09 638 1457.09 637.05 1456.14 637.05 1456.14 635.96 1455.1 635.96 1455.1 635.06 1454.01 635.06 1454.01 634.07 1453.06 634.07 1453.06 632.93 1452.12 632.93 1452.12 631.98 1451.03 631.98 1451.03 630.99 1450.13 630.99 1450.13 628.94 1448.99 628.94 1448.99 628.01 1447.95 628.01 1446.91 628.01 1446.91 629.85 1446.05 629.85 1446.05 632.88 1445.01 632.88 1445.01 634.97 1444.06 634.97 1444.06 636.86 1442.97 636.86 1442.97 637.95 1442.03 637.95 1442.03 639.04 1439.99 639.04 1439.99 641.03"
                          />
                        </g>
                      </svg>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide className="swiper-slide">
                    <div className="cuarto">
                      <svg
                        id="Capa_1"
                        data-name="Capa 1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1599.64 900"
                      >
                        <defs>
                          <style>{` .cls-4 {fill: ${colorCuarto};}`}</style>
                        </defs>
                        <path
                          className="cls-4"
                          d="M1580.83,900l-223.56-103.67-.14-7.41-2.69-.14-1.21-.94-.94-3.64-1.48-1.75-10.24-5.79-43.65-18.72-69.91-30.98-7.14-3.1v.81l-.07,1.08s-5.59,2.36-8.55-3.17c0,0-2.42-6.33,4.38-8.08,6.8-1.75,6.47,5.93,6.47,5.93l126.2,55.39,4.4,2.67s3.7-.2,4.31,1.01c-.07-.07-.09-82.35-.09-82.35,0,0-1.23.67-1.75,1.41-.52.74-1.33.47-1.33.47l-.9.79s-14.57.61-17.98-.61c-.54-.18-3.46-8.8-3.46-8.8l8.04-2.65s-.58-1.39-10.1-3.73c-9.52-2.34-90.25-26.13-90.25-26.13l-16.07-4.4c-.14.58-.57,1.97-1.82,2.74-1.83,1.14-4.76.54-6.8-1.78-.35-.42-1.33-1.71-1.41-3.6-.11-2.57,1.5-4.26,1.78-4.55,2.45-1.6,5.45-1.5,7.31.1h0c1.65,1.43,1.8,3.52,1.82,4.01,28.48,8.51,56.95,17.02,85.43,25.54l22,5.39s10.51,3.68,13.83,5.21c.99.18,2.61-.18,2.61-.18l.45-.54,3.86.45.54.63,3.77.09.81.9.72-1.53,27.75.54,213.91,57.3V0l-369,240.13-904.42-8.89L0,19.48v879.37l177.1-84.06-.67-42.03-8.62,3.23-9.03.27.94-16.7,7.01-2.83,4.98-1.62h4.85l4.58-471.34,144.27,56.58-2.02,405.74,453.02,2.42,3.73-69.87h6.87v-5.93h8.35v6.02l42.12-.18v-19.85l209.78.54,41.67,20.66-.9,61.43,11.23,7.72,1.35-.45,101.39.36v-2.07l-1.08-4.76-2.96-.18-.72-.63-3.23-1.52-.36-15.9,15.72.36,4.04,1.35v15.8l-6.56.63s.72,3.68.27,6.64c.09.27,15.45.54,15.45.54,0,0-.36-.9.72-.99s5.03.09,5.03.09l304.13,151.67h48.39ZM1229.84,626.2h15.48v-334.88l-2.69,1.62-4.85-.54v-14.41l1.95-1.08-.27-1.14,3.17-1.75h3.1l101.71-55.64.14-2.56,5.25-2.9h4.11l158.82-87.49-.67-2.63,8.35-4.98h5.19l8.22-4.38,14.01,2.36,6.87-3.23h2.96v270.09s.45,15.8,1.17,23.17,2.69,23.35,2.69,23.35c0,0,.36,6.83-2.51,11.67-.72,1.98-4.31,251.99-4.31,251.99l6.84,1.98v5.39l-6.84.36.54,5.39s.36.72-.18,2.51-.36,2.61-.36,2.61h-4.58v4.18h-5.39l-305.92-75.57v-7.54l-11.99-2.83v-3.09ZM157.3,497.69l-1.35.94-18.32-.81h-2.02v-42.57l21.69,1.48v40.95ZM733.1,708.82c0,.57-.48,1.03-1.05,1.03h-14.16c-.59,0-1.06-.48-1.05-1.06l.28-18.61c0-.57.48-1.03,1.05-1.03h14.16c.59,0,1.06.48,1.05,1.06l-.28,18.61ZM780.59,500.99h0s-.61.07-.61.07l-.67,2.29h-1.82v-14.57c0-.42.47-.65.81-.41l2.29,1.65v10.98ZM783.62,484.28h0s-5.39,0-5.39,0v-17.53h3.57v12.61h1.82v4.92ZM1013.59,633.11c0,.45-.36.81-.81.81h-7.54c-.45,0-.81-.36-.81-.81v-10.6c0-.45.36-.81.81-.81h7.54c.45,0,.81.36.81.81v10.6ZM1089.29,670.29l-36.28-17.78,1.26-51.37h13.02l22.99,6.83-.99,62.33h0ZM1090.28,602.45h0s-30.98-7.33-30.98-7.33v-4.85l-5.7-2.38v-.81h7.72v-201.57l-2.02,1.17-3.59-1.17v-7.54l36.91-19.71-2.34,244.18ZM1186.73,711.87c0,.79-.64,1.44-1.44,1.44h-13.38c-.79,0-1.44-.64-1.44-1.44v-17.87c0-.79.64-1.44,1.44-1.44h13.38c.79,0,1.44.64,1.44,1.44v17.87Z"
                        />
                      </svg>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            )}

            {windowWidth < 1170 ? null : (
              <div className="w-[80%] p-5 relative">
                <div className="grid grid-cols-3 w-full gap-5">
                  {modelos == 'automotriz'
                    ? colorescril?.map((item, index) => (
                        <div
                          key={index}
                          className="w-full cursor-pointer hover:scale-110 transition-transform duration-500"
                          onClick={() => handleChangeAuto(item.categoria)}
                        >
                          <div
                            key={index}
                            className={`w-full h-[15vh] shadow-2xl rounded-xl mx-auto `}
                            style={{ background: item.fondo }}
                          ></div>
                          <div className="text-gray-700 text-center mt-4">
                            {item.name}
                          </div>
                        </div>
                      ))
                    : lienzos?.map((item, index) => (
                        <>
                          <div
                            key={index}
                            className={`rounded-xl w-full cursor-pointer text-center z-0 shadow-xl`}
                            style={{ background: '#ffff' }}
                            onClick={() => toggleOpen(item.id, item.categoria)}
                          >
                            <div className="w-full flex justify-center">
                              <Image
                                src={item.imagen}
                                width={70}
                                height={70}
                                alt={item.name}
                                className=""
                              ></Image>
                            </div>
                            <Typography
                              as={'p'}
                              variant="small"
                              className="uppercase"
                            >
                              {item.name}{' '}
                              <span style={{ fontSize: '14px' }}>
                                {item.registro}
                              </span>{' '}
                              <span className="ml-2">{item.name2}</span>
                            </Typography>
                          </div>
                        </>
                      ))}
                </div>

                <Collapse open={open} className="absolute top-0 left-0 z-50">
                  <Card className="mx-auto w-[100%] h-[60vh] overflow-y-auto">
                    <div className="grid grid-cols-3 p-2 gap-5 lg:p-5 md:p-5 overflow-y-auto">
                      {pinturas?.map((item, index) => (
                        <div className={`w-full`} key={index}>
                          <div
                            key={index}
                            className="rounded-lg w-[100%] h-[10vh] cursor-pointer"
                            onClick={() => handleChangeColor(item.color)}
                            style={{ background: item.color }}
                          ></div>
                          <div className="text-gray text-center">
                            {item.name}
                          </div>
                          <div className="text-gray text-center">
                            {item.codigo}
                          </div>
                        </div>
                      ))}
                    </div>
                  </Card>
                </Collapse>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Decorador;
