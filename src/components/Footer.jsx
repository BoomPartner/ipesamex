import React, { useState, useEffect, useContext } from 'react';
import Link from 'next/link';
import { Typography } from '@material-tailwind/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faFacebook,
  faTiktok,
  faLinkedin,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import globalContext from '@/app/context/globalContext';
const Footer = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const { handleQuestions } = useContext(globalContext);
  const handleResize = () => {
    const newWindowWidth = window.innerWidth;
    setWindowWidth(newWindowWidth);
  };
  const handleCategoria = (event) => {
    const localcategoria = localStorage.getItem('categoria');
    const localmicrocategoria = localStorage.getItem('microcategoria');
    if (localcategoria || localmicrocategoria) {
      localStorage.removeItem('categoria');
      localStorage.removeItem('microcategoria');
    }
    localStorage.setItem('categoria', event);
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
  return (
    <div className={`w-full bg-[#e51e25] p-5 porarriba`}>
      <footer className="w-full p-5 text-center dark:bg-neutral-600 dark:text-neutral-200 lg:text-left">
        <div
          className={`w-full ${
            windowWidth < 720 ? 'block' : 'flex justify-center'
          }`}
        >
          <div className={`w-full ${windowWidth < 720 ? 'mt-16' : ''}`}>
            <Typography
              as={'h5'}
              variant="h5"
              color="white"
              className="uppercase"
            >
              Para tu interes
            </Typography>

            <div className="w-full text-white mt-2">
              <Link
                href={'/productos'}
                className="hover:border-b  border-b-white"
                onClick={() => handleCategoria('automotriz')}
              >
                Productos
              </Link>
            </div>
            <div className={`w-full text-white mt-2`}>
              <Link
                href={'/sucursales'}
                className="hover:border-b border-b-white"
              >
                Sucursales
              </Link>
            </div>
            <div className={`w-full text-white mt-2`}>
              <Link
                href={'/decorador'}
                className="hover:border-b border-b-white"
              >
                Decorador
              </Link>
            </div>
            <div className={`w-full text-white mt-2`}>
              <Link
                href={'/distribuidor'}
                className="hover:border-b border-b-white"
              >
                Distribuidor
              </Link>
            </div>
          </div>

          <div className="w-full">
            <Typography
              as={'h5'}
              variant="h5"
              color="white"
              className="uppercase"
            >
              Sobre Ipesa
            </Typography>

            <div className={`w-full text-white mt-2`}>
              <Link
                href={'/nosotros'}
                className="hover:border-b border-b-white"
              >
                Nosotros
              </Link>
            </div>
            <div className={`w-full text-white mt-2`}>
              <Link
                href={''}
                className="hover:border-b border-b-white"
                onClick={handleQuestions}
              >
                Preguntas Frecuentes
              </Link>
            </div>

            <div className={`w-full text-white mt-2`}>
              <Link
                href={'/politica-privacidad'}
                className="hover:border-b border-b-white"
              >
                Política de Privacidad
              </Link>
            </div>
            <div className={`w-full text-white mt-2`}>
              <Link
                href={'/terminos-condiciones'}
                className="hover:border-b border-b-white"
              >
                Términos y Condiciones
              </Link>
            </div>
          </div>

          <div className={`w-full ${windowWidth < 720 ? 'mt-16' : ''}`}>
            <Typography
              as={'h5'}
              variant="h5"
              color="white"
              className="uppercase text-center"
            >
              Contáctanos
            </Typography>
            <div className={`w-full flex justify-center`}>
              <div className="mt-5">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  size="xl"
                  color="white"
                ></FontAwesomeIcon>
              </div>
              <div className="mt-4">
                <Typography
                  as={'p'}
                  variant="small"
                  className="text-white text-lg ml-2"
                >
                  contacto@ipesamex.com
                </Typography>
              </div>
            </div>
            <div className={`w-full flex justify-center`}>
              <div className="mt-5">
                <FontAwesomeIcon
                  icon={faPhone}
                  size="xl"
                  color="white"
                ></FontAwesomeIcon>
              </div>
              <div className="mt-4">
                <Typography
                  as={'p'}
                  variant="small"
                  className="text-white text-lg ml-2"
                >
                  (55) 5569 1855
                </Typography>
              </div>
            </div>
            <div className={`w-full flex justify-center gap-5`}>
              <div className="rounded-full mt-5 cursor-pointer">
                <Link
                  href={'https://www.facebook.com/IPESAPinturasOficial/'}
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={faFacebook}
                    size="lg"
                    color="white"
                  ></FontAwesomeIcon>
                </Link>
              </div>
              <div className="rounded-full mt-5 cursor-pointer">
                <Link
                  href={'https://www.instagram.com/ipesa.pinturas.oficial/'}
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    size="lg"
                    color="white"
                  ></FontAwesomeIcon>
                </Link>
              </div>
              <div className="rounded-full mt-5 cursor-pointer">
                <Link
                  href={'https://www.tiktok.com/@ipesa.pinturas.oficial'}
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={faTiktok}
                    size="lg"
                    color="white"
                  ></FontAwesomeIcon>
                </Link>
              </div>
              <div className="rounded-full mt-5 cursor-pointer">
                <Link
                  href={'https://linkedin.com/company/ipesa-pinturas'}
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    size="lg"
                    color="white"
                  ></FontAwesomeIcon>
                </Link>
              </div>
              <div className="rounded-full mt-5 cursor-pointer">
                <Link
                  href={
                    'https://www.youtube.com/c/IPESAPINTURAS?sub_confirmation=1 '
                  }
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={faYoutube}
                    size="lg"
                    color="white"
                  ></FontAwesomeIcon>
                </Link>
              </div>
            </div>
          </div>

          <div className={`w-full ${windowWidth < 720 ? 'mt-16' : ''}`}>
            {/* 🔹 Bloque Hecho en México */}
            <div className="flex flex-col items-center justify-center mb-4">
              <img
                src="/logos/Hecho_En_Mexico_logo_bco.png"
                alt="Hecho en México"
                className="w-20 h-auto"
              />
              {/* <span className="text-sm text-white mt-1">Hecho en México</span> */}
            </div>

            {/* 🔹 Bloque principal del footer */}
            <div
              className={`w-full bg-neutral-200 p-2 text-center text-white ${
                windowWidth < 720 ? 'text-center' : ''
              }`}
            >
              <div>
                <span>© 2025 Copyright: </span>
              </div>
              <div>
                <Link href="/" className="font-bold">
                  IPESA PINTURAS
                </Link>
              </div>
            </div>

            {/* 🔹 Créditos */}
            <div className="rounded-full mt-1 cursor-pointer flex justify-center text-white">
              <span>Developed by:</span>
              <Link
                href="https://www.boom-partner.com/"
                target="_blank"
                className="ml-2 hover:border-b border-b-white"
              >
                Boom Growth Partner
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
