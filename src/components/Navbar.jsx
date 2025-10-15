'use client';
import React, { useEffect, useState, useContext } from 'react';
import {
  Typography,
  Drawer,
  IconButton,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Tooltip,
} from '@material-tailwind/react';
import { Collapse } from '@material-tailwind/react';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import NavListMenu from './NavListMenu';
import NavListMenu2 from './NavListMenu2';
import NavListMenu3 from './NavListMenu3';
import NavListMenu4 from './NavListMenu4';
import globalContext from '@/app/context/globalContext';
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTiktok,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

export function NavbarResponsive({ handleNosotros }) {
  const [openNav, setOpenNav] = useState(false);
  const [activeLink, setActiveLink] = useState(null);
  const [windowWidth, setWindowWidth] = useState(0);
  const [openCollapse, setOpenCollapse] = useState(false);
  const [openCollapse2, setOpenCollapse2] = useState(false);
  const [openCollapse3, setOpenCollapse3] = useState(false);
  const [openCollapse4, setOpenCollapse4] = useState(false);

  const [openMenu, setOpenMenu] = useState(false);
  const [openMenu2, setOpenMenu2] = useState(false);
  const [openMenu3, setOpenMenu3] = useState(false);
  const [openMenu4, setOpenMenu4] = useState(false);

  const { handleQuestions, openQuestions, handleContacto } =
    useContext(globalContext);
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  const itemNavbar = (elementId) => {
    console.log(elementId);
    if (elementId == 'contacto') {
      handleContacto('contacto');
    }
    setActiveLink(elementId);
    localStorage.setItem('categoria', 'decorativa');
    localStorage.removeItem('microcategoria');
  };
  const handleCategoria = (event, event2) => {
    const localcategoria = localStorage.getItem('categoria');
    const localmicrocategoria = localStorage.getItem('microcategoria');
    if (localcategoria || localmicrocategoria) {
      localStorage.removeItem('categoria');
      localStorage.removeItem('microcategoria');
    }
    localStorage.setItem('categoria', event);
    localStorage.setItem('microcategoria', event2);
  };

  // Función para capturar el ancho de la ventana al redimensionar
  const handleResize = () => {
    const newWindowWidth = window.innerWidth;
    setWindowWidth(newWindowWidth);
    if (newWindowWidth > 959) {
      setOpenNav(false);
      setOpenCollapse(false);
    }
    // console.log('Ancho de la ventana:', newWindowWidth);
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

  useEffect(() => {
    if (openMenu) {
      setActiveLink('null');
    }
  }, [openMenu, openMenu2, openMenu3, openMenu4]);

  return (
    <>
      <div className="w-full navbarResponsive">
        <div className={`w-full flex items-center justify-center`}>
          <ul
            className={`${
              windowWidth < 1260 ? 'w-full px-5' : 'w-[30%] ml-10'
            } p-4  flex-col md:flex-row flex md:mt-0 md:text-sm md:font-medium`}
          >
            <li>
              <Link
                href={'https://ipesamex.com/'}
                className={`hover:text-[#c50411]
                            ${activeLink === 'inicio' ? 'text-[#c50411]' : ''}`}
                onClick={() => {
                  itemNavbar('inicio');
                }}
              >
                <Image
                  src={'/logos/logo.svg'}
                  width={250}
                  height={200}
                  alt="Ipesa Pinturas"
                ></Image>
              </Link>
            </li>
          </ul>

          <ul className={`w-full flex gap-7 mt-4 md:mt-0 md:text-xs ocultar`}>
            <li className="">
              <Link
                href={'/'}
                className={`hover:text-[#dc2a25] uppercase
                            ${activeLink === 'inicio' ? 'text-[#dc2a25]' : ''}`}
                onClick={() => {
                  itemNavbar('inicio');
                }}
              >
                Inicio
              </Link>
            </li>
            <li className="">
              <Link
                href={'/productos'}
                className={`hover:text-[#dc2a25] uppercase
                            ${
                              activeLink === 'productos' ? 'text-[#dc2a25]' : ''
                            }`}
                onClick={() => {
                  itemNavbar('productos');
                }}
              >
                Productos
              </Link>
            </li>
            <li>
              <Link
                href={'/sucursales'}
                className={`hover:text-[#dc2a25] uppercase
                            ${
                              activeLink === 'sucursales'
                                ? 'text-[#dc2a25]'
                                : ''
                            }`}
                onClick={() => {
                  itemNavbar('sucursales');
                }}
              >
                Sucursales
              </Link>
            </li>
            <li>
              <Link
                href={'/nueva-generacion'}
                className={`hover:text-[#dc2a25] uppercase
                            ${
                              activeLink === 'sucursales'
                                ? 'text-[#dc2a25]'
                                : ''
                            }`}
                onClick={() => {
                  itemNavbar('nueva-generacion');
                }}
              >
                Tiendas Nueva Generación
              </Link>
            </li>
            <li className="p-0">
              <NavListMenu3
                openMenu={openMenu3}
                setOpenMenu={setOpenMenu3}
                collapse={openCollapse3}
              />
            </li>

            <li>
              <Link
                href={'/#distribuidor'}
                className={`hover:text-[#c50411] uppercase
                            ${
                              activeLink === 'distribuidor'
                                ? 'text-[#c50411]'
                                : ''
                            }`}
                onClick={() => {
                  itemNavbar('distribuidor');
                }}
              >
                Distribuidor
              </Link>
            </li>
            <li>
              <NavListMenu4
                openMenu={openMenu4}
                setOpenMenu={setOpenMenu4}
                collapse={openCollapse4}
              />
            </li>
            <li>
              <Link
                href={'/contacto'}
                className={`hover:text-[#c50411] uppercase
                            ${
                              activeLink === 'contacto' ? 'text-[#c50411]' : ''
                            }`}
                onClick={() => {
                  itemNavbar('contacto');
                }}
              >
                Contacto
              </Link>
            </li>

            <li className="p-0">
              <NavListMenu
                openMenu={openMenu}
                setOpenMenu={setOpenMenu}
                collapse={openCollapse}
              ></NavListMenu>
            </li>
            <li className="p-0">
              <NavListMenu2
                openMenu={openMenu2}
                setOpenMenu={setOpenMenu2}
                collapse={openCollapse2}
              ></NavListMenu2>
            </li>
          </ul>

          <div
            className={`${
              windowWidth < 1260 ? 'w-full px-5' : 'w-[30%]'
            } flex items-center justify-start gap-5`}
          >
            <div className="rounded-full cursor-pointer">
              <Tooltip
                placement={'bottom'}
                className={'bg-white shadow-xl placement'}
                content={
                  <div className="">
                    <Image
                      src={'/social/facebook.jpeg'}
                      width={150}
                      height={150}
                      alt="QR Facebook"
                      className="mx-auto"
                    ></Image>
                    <Typography
                      as={'p'}
                      variant="paragraph"
                      className="text-center"
                      color="black"
                    >
                      Siguenos en Facebook
                    </Typography>
                  </div>
                }
              >
                <Link
                  href={'https://www.facebook.com/IPESAPinturasOficial/'}
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={faFacebook}
                    size={'xl'}
                    color="#3B5998"
                  ></FontAwesomeIcon>
                </Link>
              </Tooltip>
            </div>
            <div className="rounded-full cursor-pointer">
              <Tooltip
                placement={'bottom'}
                className={'bg-white shadow-xl placement'}
                content={
                  <div>
                    <Image
                      src={'/social/instagram.png'}
                      width={150}
                      height={150}
                      alt="QR Instagram"
                      className="mx-auto"
                    ></Image>
                    <Typography
                      as={'p'}
                      variant="paragraph"
                      className="text-center"
                      color="black"
                    >
                      Siguenos en Instagram
                    </Typography>
                  </div>
                }
              >
                <Link
                  href={'https://www.instagram.com/ipesa.pinturas.oficial/'}
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    size={'xl'}
                    color="#DD2A7B"
                  ></FontAwesomeIcon>
                </Link>
              </Tooltip>
            </div>
            <div className="rounded-full cursor-pointer">
              <Tooltip
                placement={'bottom'}
                className={'bg-white shadow-xl placement'}
                content={
                  <div>
                    <Image
                      src={'/social/tiktok.png'}
                      width={150}
                      height={150}
                      alt="QR Tiktok"
                    ></Image>
                    <Typography
                      as={'p'}
                      variant="paragraph"
                      className="text-center"
                      color="black"
                    >
                      Siguenos en Tiktok
                    </Typography>
                  </div>
                }
              >
                <Link
                  href={'https://www.tiktok.com/@ipesa.pinturas.oficial'}
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={faTiktok}
                    size={'xl'}
                    color="black"
                  ></FontAwesomeIcon>
                </Link>
              </Tooltip>
            </div>
            <div className="rounded-full cursor-pointer">
              <Tooltip
                placement={'bottom'}
                className={'bg-white shadow-xl placement'}
                content={
                  <div>
                    <Image
                      src={'/social/linkedin.jpeg'}
                      width={150}
                      height={150}
                      alt="QR Linkedin"
                    ></Image>
                    <Typography
                      as={'p'}
                      variant="paragraph"
                      className="text-center"
                      color="black"
                    >
                      Siguenos en Linkedin
                    </Typography>
                  </div>
                }
              >
                <Link
                  href={'https://linkedin.com/company/ipesa-pinturas'}
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    size={'xl'}
                    color="#0077B5"
                  ></FontAwesomeIcon>
                </Link>
              </Tooltip>
            </div>

            <div className="rounded-full cursor-pointer">
              <Tooltip
                placement={'bottom'}
                className={'bg-white shadow-xl placement'}
                content={
                  <div>
                    <Image
                      src={'/social/youtube.png'}
                      width={150}
                      height={150}
                      alt="QR Linkedin"
                    ></Image>
                    <Typography
                      as={'p'}
                      variant="paragraph"
                      className="text-center"
                      color="black"
                    >
                      Siguenos en Youtube
                    </Typography>
                  </div>
                }
              >
                <Link
                  href={
                    'https://www.youtube.com/c/IPESAPINTURAS?sub_confirmation=1'
                  }
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={faYoutube}
                    size={'xl'}
                    color="#fc0231"
                  ></FontAwesomeIcon>
                </Link>
              </Tooltip>
            </div>
          </div>

          <div
            className={`${
              windowWidth <= 1640 ? '' : 'hidden'
            } cursor-pointer flex justify-end p-5`}
          >
            <FontAwesomeIcon
              icon={faBars}
              size="xl"
              onClick={() => {
                setOpenNav(!openNav);
              }}
            ></FontAwesomeIcon>
          </div>
        </div>

        <Collapse open={openNav}>
          <div className="text-center p-5">
            <div className="">
              <Link
                href={'/'}
                onClick={() => {
                  itemNavbar('inicio');
                  setOpenNav(!openNav);
                }}
                className={`mt-4 cursor-pointer md:text-md hover:text-[#c50411] sm:mx-6 uppercase
                                ${
                                  activeLink === 'inicio'
                                    ? 'text-[#c50411]'
                                    : ''
                                }`}
              >
                Inicio
              </Link>
            </div>

            <div className="mt-5">
              <Link
                href={'/productos'}
                onClick={() => {
                  itemNavbar('productos');
                  setOpenNav(!openNav);
                }}
                className={`mt-4 cursor-pointer hover:text-[#c50411] sm:mx-6 uppercase ${
                  activeLink === 'productos' ? 'text-[#c50411]' : ''
                }`}
              >
                Productos
              </Link>
            </div>

            <div className="mt-5">
              <Link
                href={'/sucursales'}
                onClick={() => {
                  itemNavbar('sucursales');
                  setOpenNav(!openNav);
                }}
                className={`mt-4 cursor-pointer hover:text-[#c50411] sm:mx-6 uppercase ${
                  activeLink === 'sucursales' ? 'text-[#c50411]' : ''
                }`}
              >
                Sucursales
              </Link>
            </div>

            <div className="mt-5">
              <Link
                href={'/nueva-generacion'}
                onClick={() => {
                  itemNavbar('nueva-generacion');
                  setOpenNav(!openNav);
                }}
                className={`mt-4 cursor-pointer hover:text-[#c50411] sm:mx-6 uppercase ${
                  activeLink === 'nueva-generacion' ? 'text-[#c50411]' : ''
                }`}
              >
                Tiendas Nueva Generación
              </Link>
            </div>

            <div className="mt-5">
              <Link
                href={'/decorador'}
                onClick={() => {
                  itemNavbar('decorador');
                  setOpenNav(!openNav);
                }}
                className={`mt-4 cursor-pointer hover:text-[#c50411] sm:mx-6 uppercase ${
                  activeLink === 'decorador' ? 'text-[#c50411]' : ''
                }`}
              >
                Decorador
              </Link>
            </div>
            <div className="mt-5">
              <Link
                href={'/descubre-tu-color'}
                onClick={() => {
                  itemNavbar('descubre');
                  setOpenNav(!openNav);
                }}
                className={`mt-4 cursor-pointer hover:text-[#c50411] sm:mx-6 uppercase ${
                  activeLink === 'descubre' ? 'text-[#c50411]' : ''
                }`}
              >
                Descubre tu color
              </Link>
            </div>

            <div className="mt-5">
              <Link
                href={'/tips'}
                onClick={() => {
                  itemNavbar('tips');
                  setOpenNav(!openNav);
                }}
                className={`mt-4 cursor-pointer hover:text-[#c50411] sm:mx-6 uppercase ${
                  activeLink === 'tips' ? 'text-[#c50411]' : ''
                }`}
              >
                Tutoriales y Tips
              </Link>
            </div>
            <div className="mt-5">
              <Link
                href={'/colores'}
                onClick={() => {
                  itemNavbar('colores');
                  setOpenNav(!openNav);
                }}
                className={`mt-4 cursor-pointer hover:text-[#c50411] sm:mx-6 uppercase ${
                  activeLink === 'colores' ? 'text-[#c50411]' : ''
                }`}
              >
                Colores
              </Link>
            </div>

            <div className="mt-5">
              <Link
                href={'/sistema-tintometrico'}
                onClick={() => {
                  itemNavbar('sistema-tintometrico');
                  setOpenNav(!openNav);
                }}
                className={`mt-4 cursor-pointer hover:text-[#c50411] sm:mx-6 uppercase ${
                  activeLink === 'sistema-tintometrico' ? 'text-[#c50411]' : ''
                }`}
              >
                Sistema Tintométrico
              </Link>
            </div>
            <div className="mt-5">
              <Link
                href={'/novedades'}
                onClick={() => {
                  itemNavbar('novedades');
                  setOpenNav(!openNav);
                }}
                className={`mt-4 cursor-pointer hover:text-[#c50411] sm:mx-6 uppercase ${
                  activeLink === 'novedades' ? 'text-[#c50411]' : ''
                }`}
              >
                Novedades
              </Link>
            </div>
            <div className="mt-5">
              <Link
                href={'/nosotros'}
                onClick={() => {
                  itemNavbar('nosotros');
                  setOpenNav(!openNav);
                }}
                className={`mt-4 cursor-pointer hover:text-[#c50411] sm:mx-6 uppercase ${
                  activeLink === 'nosotros' ? 'text-[#c50411]' : ''
                }`}
              >
                Nosotros
              </Link>
            </div>

            <div className="mt-5">
              <Link
                href={'/contacto'}
                onClick={() => {
                  itemNavbar('contacto');
                  setOpenNav(!openNav);
                }}
                className={`mt-4 cursor-pointer hover:text-[#c50411] sm:mx-6 uppercase ${
                  activeLink === 'contacto' ? 'text-[#c50411]' : ''
                }`}
              >
                Contacto
              </Link>
            </div>

            <div className="mt-5">
              <Link
                href={'https://clientes.ipesamex.com'}
                onClick={() => {
                  itemNavbar('clientes');
                  setOpenNav(!openNav);
                }}
                className={`mt-4 cursor-pointer hover:text-[#c50411] sm:mx-6 uppercase ${
                  activeLink === 'clientes' ? 'text-[#c50411]' : ''
                }`}
              >
                Portal de Clientes
              </Link>
            </div>
            <div className="mt-5">
              <Link
                href={'https://colorcril.app/login'}
                onClick={() => {
                  itemNavbar('laboratorio');
                  setOpenNav(!openNav);
                }}
                className={`mt-4 cursor-pointer hover:text-[#c50411] sm:mx-6 uppercase ${
                  activeLink === 'laboratorio' ? 'text-[#c50411]' : ''
                }`}
              >
                Laboratorio Color Cril
              </Link>
            </div>

            <div className="mt-5">
              <Link
                href={'/politica-privacidad'}
                onClick={() => {
                  itemNavbar('politicaprivacidad');
                  setOpenNav(!openNav);
                }}
                className={`mt-4 cursor-pointer hover:text-[#c50411] sm:mx-6 uppercase ${
                  activeLink === 'politicaprivacidad' ? 'text-[#c50411]' : ''
                }`}
              >
                Política de Privacidad
              </Link>
            </div>
            <div className="mt-5">
              <Link
                href={'/terminos-condiciones'}
                onClick={() => {
                  itemNavbar('terminosocndiciones');
                  setOpenNav(!openNav);
                }}
                className={`mt-4 cursor-pointer hover:text-[#c50411] sm:mx-6 uppercase ${
                  activeLink === 'terminoscondiciones' ? 'text-[#c50411]' : ''
                }`}
              >
                Términos y Condiciones
              </Link>
            </div>
          </div>
        </Collapse>
      </div>

      <Drawer
        overlay={false}
        placement="right"
        size={450}
        open={openQuestions}
        onClose={handleQuestions}
        className="p-4 sombra-arriba porarriba overflow-auto"
      >
        <div className="mb-10 flex items-center justify-between">
          <Typography as={'h3'} variant="h3" color="blue-gray">
            Preguntas Frecuentes
          </Typography>

          <IconButton
            variant="text"
            color="blue-gray"
            onClick={handleQuestions}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>

        <Accordion open={open === 1}>
          <AccordionHeader onClick={() => handleOpen(1)}>
            ¿Cómo puedo convertirme en distribuidor?
          </AccordionHeader>
          <AccordionBody>
            <Typography as={'p'} variant="paragraph">
              {' '}
              Puedes registrar tus datos en el formulario de la web o
              contáctanos directamente por correo electrónico donde uno de
              nuestros agentes te atenderá.
            </Typography>
          </AccordionBody>
        </Accordion>

        <Accordion open={open === 3} className="">
          <AccordionHeader onClick={() => handleOpen(3)}>
            ¿Dónde puedo comprar productos?
          </AccordionHeader>
          <AccordionBody>
            <Typography as={'p'} variant="paragraph">
              {' '}
              Puedes comprar productos de{' '}
              <strong className="font-bold">IPESA</strong> en nuestras
              sucursales. Visita nuestra sección de sucursales para conocer
              todas las ubicaciones.
            </Typography>
            <div className="flex items-center mt-4">
              <Link
                href={'/sucursales'}
                className="hover:border-b border-[#c50411]"
                onClick={handleQuestions}
              >
                Ver sucursales
                <FontAwesomeIcon
                  icon={faArrowRight}
                  size="lg"
                  className="ml-2"
                ></FontAwesomeIcon>
              </Link>
            </div>
          </AccordionBody>
        </Accordion>

        <Accordion open={open === 5}>
          <AccordionHeader onClick={() => handleOpen(5)}>
            ¿Tienen productos para automóviles?
          </AccordionHeader>
          <AccordionBody>
            <Typography as={'p'} variant="paragraph">
              Sí, ofrecemos productos para el repintado de vehículos
              automotrices.
            </Typography>
            <div className="flex items-center mt-4">
              <Link
                href={'/productos'}
                className="hover:border-b border-[#c50411]"
                onClick={() => (
                  handleCategoria('automotriz', ''), handleQuestions()
                )}
              >
                Ver productos
                <FontAwesomeIcon
                  icon={faArrowRight}
                  size="lg"
                  className="ml-2"
                ></FontAwesomeIcon>
              </Link>
            </div>
          </AccordionBody>
        </Accordion>

        <Accordion open={open === 6}>
          <AccordionHeader onClick={() => handleOpen(6)}>
            ¿Cuál es la durabildiad de sus productos?
          </AccordionHeader>
          <AccordionBody>
            <Typography as={'p'} variant="paragraph">
              La durabilidad de nuestras pinturas vinílicas va de los 3 hasta
              los 18 años.
            </Typography>
          </AccordionBody>
        </Accordion>

        <Accordion open={open === 7}>
          <AccordionHeader onClick={() => handleOpen(7)}>
            ¿Qué tipo de esmaltes ofrecen?
          </AccordionHeader>
          <AccordionBody>
            <Typography as={'p'} variant="paragraph" className="mb-2">
              En nuestro portafolio contamos con esmaltes alquidálicos de secado
              normal y secado rápido.
            </Typography>

            <div className="flex items-center mt-4">
              <Link
                href={'/productos'}
                className="hover:border-b border-[#c50411]"
                onClick={() => (
                  handleCategoria('decorativa', 'esmaltes'), handleQuestions()
                )}
              >
                Ver productos
                <FontAwesomeIcon
                  icon={faArrowRight}
                  size="lg"
                  className="ml-2"
                ></FontAwesomeIcon>
              </Link>
            </div>
          </AccordionBody>
        </Accordion>

        <div className="mt-5 flex items-center">
          <Link
            href={'/preguntas-frecuentes'}
            className="hover:border-b border-[#c50411]"
            onClick={handleQuestions}
          >
            Ver más preguntas
            <FontAwesomeIcon
              icon={faArrowRight}
              size="lg"
              className="ml-2"
            ></FontAwesomeIcon>
          </Link>
        </div>
      </Drawer>
    </>
  );
}
