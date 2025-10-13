'use client';
import React, { useState, useEffect, useContext } from 'react';
import {
  CardBody,
  Card,
  Select,
  Option,
  Typography,
  Input,
  Button,
  Dialog,
  DialogBody,
} from '@material-tailwind/react';
import { estados } from './server';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import globalContext from '@/app/context/globalContext';
const BolsaTrabajo = () => {
  const [status, setStatus] = useState(null);
  const [mensaje, setMensaje] = useState(null);
  const handleOpen = () => setOpen(!open);
  const [open, setOpen] = useState(false);
  const { handleContacto, distribuidor } = useContext(globalContext);
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

  const [formData, setFormData] = useState({
    name: null,
    telefono: null,
    email: null,
    country: null,
    ciudad: null,
    cp: null,
    direction: null,
    emisor: 'ipesamex.com',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleData = async () => {
    const allFieldsFilled = Object.values(formData).every(
      (item) => item !== null
    );
    if (allFieldsFilled) {
      setStatus(true);
      try {
        const response = await fetch(
          'https://expresboom.onrender.com/mail_ipesa',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          }
        );
        if (response) {
          console.log('mensaje enviado');
          const data = await response.json();
          setOpen(true);
          setStatus(false);

          setTimeout(() => {
            setOpen(false);
          }, 3000);
        } else {
        }
      } catch (error) {
        console.error('Error al enviar el formulario:', error);
      }
    } else {
      console.log('Algunos campos están vacíos');
      setMensaje(true);
      setTimeout(() => {
        setMensaje(false);
      }, 3000);
    }
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      '.celular',
      { y: '60%', opacity: 0 },
      {
        duration: 1.3,
        y: '0%',
        opacity: 1,
        ease: 'power1.inOut',
      }
    );

    gsap.fromTo(
      '.texto-contact',
      { y: '50%', opacity: 0 },
      {
        duration: 1.3,
        y: '0%',
        opacity: 1,
        ease: 'power1.inOut',
      }
    );
    gsap.fromTo(
      '.texto-contact2',
      { y: '50%', opacity: 0 },
      {
        duration: 1.3,
        delay: 0.5,
        y: '0%',
        opacity: 1,
        ease: 'power1.inOut',
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);
  return (
    <>
      <section className={`overflow-hidden`}>
        <div className="w-full">
          <div
            className="banenrContacto"
            style={{
              position: 'relative',
              width: '100%',
              height: '0',
              paddingBottom: '35%',
            }}
          >
            <Image
              src={'/principal/movil.png'}
              width={1000}
              height={1000}
              alt="movil-contact"
              className="celular w-[30%] absolute left-[65%] bottom-0"
            ></Image>

            <div
              className={`w-full absolute text-white left-[10%] ${
                windowWidth < 660 ? 'bottom-[5%]' : 'bottom-[20%]'
              }`}
            >
              <Typography
                as={'h1'}
                className="uppercase mb-10 texto-contact opacity-0"
                style={{
                  fontSize:
                    windowWidth < 666
                      ? '18px'
                      : windowWidth < 1320
                      ? '32px'
                      : '80px',
                }}
              >
                Bolsa de Trabajo
              </Typography>
            </div>
          </div>

          <div className="w-full flex justify-center items-center bg-white relative ">
            <div className="w-full p-20">
              <Typography
                as={'h5'}
                variant={windowWidth < 920 ? 'h5' : 'h1'}
                color="black"
                className="mb-2 uppercase"
              >
                ¿Quieres formar parte de nuestro equipo?
              </Typography>{' '}
              :
              <Typography
                as={'h5'}
                variant={windowWidth < 920 ? 'h5' : 'h1'}
                color="black"
                className="mb-2 uppercase"
              >
                Envía tus datos
              </Typography>
              <Typography as={'h5'} variant="h5" color="gray" className="mb-4">
                contacto@ipesamex.com
              </Typography>
              <div
                className={`w-full grid ${
                  windowWidth < 700 ? 'grid-cols-1' : 'grid-cols-2'
                } gap-5`}
              >
                <div className="mt-5">
                  <Input
                    onChange={handleChange}
                    label="Nombre Completo"
                    name="name"
                    className="w-full"
                  ></Input>
                </div>
                <div className="mt-5">
                  <Input
                    onChange={handleChange}
                    label="Telefono"
                    name="telefono"
                    className="w-full"
                  ></Input>
                </div>
                <div className="mt-5">
                  <Input
                    onChange={handleChange}
                    label="Correo"
                    name="email"
                    className="w-full"
                  ></Input>
                </div>

                <div className="mt-5">
                  <Input
                    onChange={handleChange}
                    label="País"
                    name="country"
                    className=""
                  ></Input>
                </div>
                <div className="mt-5">
                  <Input
                    onChange={handleChange}
                    label="Ciudad"
                    name="ciudad"
                    className=""
                  ></Input>
                </div>
                <div className="mt-5">
                  <Input
                    onChange={handleChange}
                    label="Código Postal"
                    name="cp"
                    className=""
                  ></Input>
                </div>
                <div className="mt-5">
                  {' '}
                  <Input
                    onChange={handleChange}
                    label="Certificaciones o licencias"
                    name="direction"
                    className="w-full"
                  ></Input>
                </div>
                <div className="mt-5">
                  <Input
                    onChange={handleChange}
                    label="¿Por qué está interesado en formar parte de IPESA?"
                    name="intereses"
                  ></Input>
                </div>
              </div>
              <div className="w-full mt-5">
                <Button
                  onClick={handleData}
                  className="gap-2 text-gray-200 bg-[#e51e25] agrande"
                  disabled={status ? true : false}
                >
                  Enviar
                </Button>
              </div>
              <div className={`w-full mt-4 ${mensaje ? 'block' : 'hidden'}`}>
                <Typography
                  as={'p'}
                  variant="paragraph"
                  className="text-[#c50411]"
                >
                  Todos los campos son requeridos
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Dialog open={open} handler={handleOpen} size="sm" className="mt-24">
        <DialogBody>
          <div className="w-full flex justify-start">
            <div className="w-full text-left px-2">
              <Image
                src="/logos/logo.png"
                width={100}
                height={100}
                alt="logo"
              ></Image>
            </div>
          </div>
          <div className="w-full flex items-center justify-center h-[40vh] overflow-hidden">
            <div className="w-full">
              <Typography
                as={'h3'}
                variant="h3"
                className="w-full text-center text-black"
              >
                ¡Gracias por tu interes!
              </Typography>
              <Typography
                as={'h4'}
                variant="h4"
                className="w-full text-center text-black"
              >
                En breve te contáctaremos
              </Typography>
            </div>
          </div>
        </DialogBody>
      </Dialog>
    </>
  );
};

export default BolsaTrabajo;
