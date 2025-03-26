"use client";
import React, { useContext, useEffect, useState } from 'react'
import { articulos, colores } from '@/components/server';
import Image from 'next/image';
import {
  Typography, Dialog,
  DialogBody, Drawer, IconButton, Input, Button
} from '@material-tailwind/react';
import 'swiper/css';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, } from '@fortawesome/free-solid-svg-icons';
import { faCalculator } from '@fortawesome/free-solid-svg-icons';
import { faFileShield } from '@fortawesome/free-solid-svg-icons';
import globalContext from '@/app/context/globalContext';
import { faPhotoFilm } from '@fortawesome/free-solid-svg-icons';
import ReactPlayer from 'react-player';
import { faFilePdf } from '@fortawesome/free-regular-svg-icons';
import { faSwatchbook } from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import gsap from 'gsap';

const ProductoSelected = ({ valor }) => {
  const [articulo, setArticulo] = useState(null)
  const [relacionados, setRelacionados] = useState(null)
  const [color, setColor] = useState([])
  const [windowWidth, setWindowWidth] = useState(0);
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [ficha, setFicha] = useState(null)
  const handleOpen = () => setOpen(!open);
  const handleOpen2 = () => setOpen2(!open2);
  const handleOpen3 = () => setOpen3(!open3)
  const [browser, setBrowser] = useState(null)
  const [pdfVisible, setPdfVisible] = useState(true);
  const { handleCalculador, openCalculador } = useContext(globalContext)
  const [area, setArea] = useState(0);
  const [litros, setLitros] = useState(null)
  const [validar, setValidar] = useState(false)
  // console.log("idproducto en page producto", idProducto);
  const handleBrowser = () => {
    const browser = window.navigator.userAgent;
    // console.log(browser);
    if (browser.includes("Mac")) {
      setBrowser("Mac")
      // console.log("Mac OS");
    }
  }

  useEffect(() => {
    handleBrowser()
  }, [])

  // Función para capturar el ancho de la ventana al redimensionar
  const handleResize = () => {
    const newWindowWidth = window.innerWidth;
    setWindowWidth(newWindowWidth);
    // console.log('Ancho de la ventana:', newWindowWidth);
  };

  const handleModalColores = () => {
    const nameColor = articulo.color;
    const coloresFiltrados = colores.filter((item) => item.product === nameColor);
    setColor(coloresFiltrados)
    setOpen(!open)
  }

  const handleModalFicha = (value) => {

    setFicha(value)
    setOpen2(!open2)
  }

  const handlePdfError = () => {
    setPdfVisible(false); // Establece el estado como falso si hay un error al cargar el PDF
  };


  const handleCalcularLitros = () => {
    const areaNumerica = parseFloat(area);
    const promedio = articulo.promedio;
    if (!isNaN(areaNumerica) && areaNumerica > 0) {
      const litrosNecesarios = (areaNumerica / promedio) * 1;
      const litrosRedondeados = Math.ceil(litrosNecesarios);
      setLitros(litrosRedondeados);
      setValidar(false)
      // alert(`Necesitas aproximadamente ${litrosRedondeados.toFixed(1)} litros de pintura para cubrir ${areaNumerica} metros cuadrados.`);
    } else {
      // alert('Por favor, introduce un área válida.');

      setValidar(true)

      setTimeout(() => {
        setValidar(false);
      }, 3000);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth)
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }

  }, []);

  useEffect(() => {
    const id = valor.params.id;
    // console.log(id);
    if (id) {
      const producto = articulos.find(item => id == item.id)
      // console.log(producto);
      // const relacionados = articulos.filter(item => producto.categorie == item.categorie)
      setArticulo(producto)
    }

  }, [])

  useEffect(() => {
    if (articulo) {
      gsap.fromTo('.imagen-producto .producto-selected', {
        x: '-100%',
        opacity: 0,
      }, {
        x: '0%',
        opacity: 1,
        // delay: 0.5,
        ease: 'back.out(2.7)',
        duration: 1,

      });
    }
  }, [articulo])

  const backgroundStyle = {
    width: '100%',
    // paddingBottom: '44.25%', // 56.25 Esto crea una relación de aspecto de 16:9
    backgroundImage: `url('/fondo-producto/${articulo?.categorie}.jpg')`,
    backgroundSize: "cover",
    backgroundPosition: 'center',
    // backgroundRepeat: 'no-repeat', 
    objectFit: "cover"
  };


  return (
    <section className={`w-full py-24`} style={backgroundStyle}>

      {
        articulo && (
          <>

            <div className={`w-full h-full ${windowWidth < 1000 ? "block" : "flex justify-center items-center"}`}>

              {/* Enlace de retorno */}
              <div className="h-full flex items-center px-4 hover:shadow-xl">
                <div className="w-full">
                  <Link href={`/productos`}
                    style={{ fontSize: "24px", fontWeight: "bold" }}
                    className=''>

                    <FontAwesomeIcon icon={faAngleLeft} className='font-awesome-icon zoom-enlace' size='2xl'></FontAwesomeIcon>
                  </Link>
                </div>
              </div>

              {/* Imagen Producto  */}
              <div className="w-full lg:w-[80%]">
                <div className={`w-full h-full py-5 flex justify-center items-center`}>
                  {
                    articulo.tipo ?
                      <div className="imagen-producto"><Image src={articulo.imagen} width={180} height={180} alt='imagen' 
                      className='producto-selected'></Image> </div>
                      : <div className="imagen-producto"><Image src={articulo.imagen} width={400} height={500} alt='imagen' 
                      className='producto-selected'></Image></div>
                  }
                </div>

              </div>

              {/* Informacion producto  */}
              <div className="w-full p-5 lg:p-10">

                {/* PRIMER BLOQUE  */}

                <Typography as={"h3"} variant='h3' color="gray" className='uppercase font-semibold relative mb-5 card-animate'> {articulo.name}
                  {articulo.registro ? <span style={{ fontSize: "14px" }} className='absolute top-0'>{articulo.registro}</span> : null}
                  {articulo.name2 ? <span className='ml-2'>{articulo.name2}</span> : null}
                </Typography>


                {/* SEGUNDO BLOQUE  */}

                <section className='mb-10 producto-animate2'>
                  <div className="w-full flex items-center mb-2">
                    <Typography as={"p"} className='uppercase font-semibold' color='gray' style={{ fontSize: "16px" }}>Linea:</Typography>
                    <Typography as={"p"} className='uppercase ml-2' color='gray' style={{ fontSize: "14px" }}>{articulo.categorie}</Typography>
                  </div>

                  <div className="w-full md:w-[80%] mt-1">
                    <Typography as={'h6'} variant='h6' className='uppercase mb-2' color='gray'>Descripción</Typography>
                    {
                      articulo.description?.map((element, index) => (
                        <Typography as={"p"} key={index} className='mb-2' variant='small' color='gray' style={{ fontSize: "15px" }}>{element}</Typography>
                      ))
                    }
                    {
                      articulo.description2 ? articulo.description2?.map((element, index) => (
                        <Typography as={"p"} key={index} className='mt-5 mb-2' color='gray' variant='small' style={{ fontSize: "15px" }}>{element}</Typography>
                      )) : null
                    }
                    {
                      articulo.leyenda ? <Typography as={"p"} className='mt-4 font-semibold' style={{ fontSize: "18px" }}>{articulo.leyenda}
                      </Typography> : null
                    }
                  </div>

                  {
                    articulo.atributos ? <div className="w-full mt-1">
                      <Typography as={'h6'} variant='h6' className='uppercase mb-2'>Atributos</Typography>
                      {
                        articulo.atributos?.map((element, index) => (
                          <Typography as={"p"} key={index} className='' variant='small' style={{ fontSize: "15px" }}>● {element}</Typography>
                        ))
                      }
                    </div> : null
                  }

                  {
                    articulo.acabados_madera ? <div className="w-full mt-1">
                      <Typography as={"h6"} variant='h6' className='uppercase' color='gray'>Acabados</Typography>
                      {
                        articulo.acabados_madera?.map((element, index) => (
                          <Typography key={index} className='' variant='small' color='gray' style={{ fontSize: "15px" }}>● {element}</Typography>
                        ))
                      }
                    </div> : null
                  }
                </section>

                {/* TERCER BLOQUE  */}

                <hr className='producto-animate3' />

                <div className={`w-full mt-4 mb-4 gap-5 producto-animate3`}>
                  <div className="w-full block md:flex">
                    <div className="w-full md:w-[30%]">
                      <Typography as={'h6'} variant='h6' className='uppercase' color='gray'>Capacidades</Typography>
                      <ul className='text-md text-gray'>
                        {
                          articulo.presentation?.map((target, index) => (
                            <li key={index}><Typography as={"p"} key={index} variant='small' color='gray' className=''>{target}</Typography></li>
                          ))
                        }

                      </ul>
                    </div>


{/* ATRIBUTOS 2 */}
{
                      articulo.attr2 ? <div className="w-full md:w-[30%]">
                      <Typography as={'h6'} variant='h6' className='uppercase' color='gray'>Atributos</Typography>
                      <ul className='text-md text-gray'>
                        {
                          articulo.attr2?.map((target, index) => (
                            <li key={index}><Typography as={"p"} key={index} variant='small' color='gray' className=''>{target}</Typography></li>
                          ))
                        }

                      </ul>
                    </div> : null
                    }

{/* MEDIDAS                     */}
{
                      articulo.medidas ? <div className="w-full md:w-[30%]">
                      <Typography as={'h6'} variant='h6' className='uppercase' color='gray'>Medidas</Typography>
                      <ul className='text-md text-gray'>
                        {
                          articulo.medidas?.map((target, index) => (
                            <li key={index}><Typography as={"p"} key={index} variant='small' color='gray' className=''>{target}</Typography></li>
                          ))
                        }

                      </ul>
                    </div> : null
                    }

                    {
                      articulo.rendimiento ? <div className="w-full md:w-[50%]">
                        <Typography as={'h6'} variant='h6' className='uppercase' color='gray'>Rendimiento Teórico</Typography>
                        <Typography as={"p"} variant='small' className='' color='gray'>{articulo.rendimiento}</Typography>

                        {
                          articulo.promedio ? <div className="w-full mt-2 flex items-center">
                            <div className={`${windowWidth < 1816 ? "" : ""} flex items-center border p-4 rounded-full cursor-pointer zoom-producto`} onClick={handleCalculador}>
                              <Typography as={'h6'} variant='h6' color='gray' className='mt-2 cursor-pointer uppercase'>Litros Necesarios</Typography>
                              <FontAwesomeIcon icon={faCalculator} size='2x' color='gray' className='ml-5'></FontAwesomeIcon>
                            </div>
                          </div> : null
                        }

                      </div> : null
                    }
                    
                  </div>

                  <div className="w-full mt-4 block md:flex">
                    {
                      articulo.acabados ? <div className="w-full md:w-[30%]">
                        <Typography as={'h6'} variant='h6' className='uppercase' color='gray'>Acabados</Typography>
                        <Typography as={"p"} variant='small' className='' color='gray'>{articulo.acabados} <br/>
                          {articulo.acabados2 ? articulo.acabados2 : null}</Typography>
                      </div> : null
                    }

                    {
                      articulo.gama ? <div className="w-full md:w-[30%]">
                        <Typography as={"h6"} variant='h6' className='uppercase' color='gray'>Colores</Typography>
                        <Typography as={"p"} variant='small' className='' color='gray'>{articulo.gama}</Typography>

                      </div> : null
                    }
                  </div>

                </div>

                {/* CUARTO BLOQUE  */}

                <hr className='producto-animate4' />

                {/********* Botones  *********/}

                <div className="w-full md:w-[80%] mt-8 md:grid-cols-2 grid grid-cols-1 gap-3 card-animate4">
                  {
                    articulo.ficha && ( 
                    windowWidth < 800 || browser == "Mac" ?
                      <div className="w-full -ml-2 rounded-lg text-gray-600 flex items-center uppercase zoom-producto"
                        style={{ fontSize: "14px", fontWeight: "normal", padding: "9px" }}>
                        <a href={articulo.ficha} download className='font-bold'>
                          <FontAwesomeIcon icon={faFilePdf} size='3x' className='mr-4'></FontAwesomeIcon>
                          {browser == "Mac" ? "Ficha Técnica" : windowWidth < 800 ? "Ficha Técnica" : "Ficha Técnica"}
                        </a>
                      </div> : <div className="w-full flex items-center cursor-pointer zoom-producto" 
                      onClick={() => handleModalFicha(articulo.ficha)}>
                        <div className="">
                          <FontAwesomeIcon icon={faFilePdf} size='3x'
                            className='cursor-pointer'
                            color='gray'
                          ></FontAwesomeIcon>
                        </div>
                        <div className="ml-4"><Typography as={'h5'} variant='h5' color='gray'>Ficha Técnica</Typography></div>

                      </div>
                    )
                  }
                  {
                    articulo.ficha2 && (
                    windowWidth < 800 || browser == "Mac" ?
                      <div className="w-full -ml-2 rounded-lg text-gray-600 flex items-center uppercase zoom-producto"
                        style={{ fontSize: "14px", fontWeight: "normal", padding: "9px" }}>
                        <a href={articulo.ficha2} download className='font-bold'>
                          <FontAwesomeIcon icon={faFilePdf} size='3x' className='mr-4'></FontAwesomeIcon>
                          {browser == "Mac" ? "Ficha Técnica 100% Acrílico" : windowWidth < 800 ? "Ficha Técnica 100% Acrílico" : "Ficha Técnica 100% Acrílico"}
                        </a>
                      </div> : <div className="w-full flex items-center cursor-pointer zoom-producto" 
                      onClick={() => handleModalFicha(articulo.ficha2)}>
                        <div className="">
                          <FontAwesomeIcon icon={faFilePdf} size='3x'
                            className='cursor-pointer'
                            color='gray'
                          ></FontAwesomeIcon>
                        </div>
                        <div className="ml-4"><Typography as={'h5'} variant='h5' color='gray'>Ficha Técnica 100% Acrílico</Typography></div>

                      </div>
                    )
                  }
                  {
                    articulo.seguridad && (

                      windowWidth < 800 || browser == "Mac" ?
                        <div className="w-full rounded-lg -ml-2 text-gray-600 flex items-center uppercase zoom-producto"
                          style={{ fontSize: "14px", fontWeight: "normal", padding: "9px" }}>
                          <a href={articulo.seguridad} download className='font-bold'> 
                          <FontAwesomeIcon icon={faFileShield} size='3x' 
                          className='mr-4'></FontAwesomeIcon> 
                          {browser == "Mac" ? "Hoja de seguridad" : windowWidth < 800 ? "Hoja de seguridad" : "Hoja de seguridad"}</a>
                        </div> : <div className="w-full flex items-center cursor-pointer zoom-producto" 
                        onClick={() => handleModalFicha(articulo.seguridad)}>

                          <div className="">
                            <FontAwesomeIcon icon={faFileShield}
                              size='3x'
                              color='gray'
                              className='cursor-pointer'
                            ></FontAwesomeIcon>
                          </div>
                          <div className="ml-4">
                            <Typography as={'h5'} className='text-gray-600' variant='h5'>Hoja de seguridad</Typography>
                          </div>
                        </div>

                    )
                  }
                  {
                    articulo.seguridad2 && (

                      windowWidth < 800 || browser == "Mac" ?
                        <div className="w-full rounded-lg -ml-2 text-gray-600 flex items-center uppercase zoom-producto"
                          style={{ fontSize: "14px", fontWeight: "normal", padding: "9px" }}>
                          <a href={articulo.seguridad2} download className='font-bold'> 
                          <FontAwesomeIcon icon={faFileShield} size='3x' 
                          className='mr-4'></FontAwesomeIcon> 
                          {browser == "Mac" ? "Hoja de seguridad 100% Acrilica" : windowWidth < 800 ? "Hoja de seguridad 100% Acrilica" : "Hoja de seguridad 100% Acrilica"}</a>
                        </div> : <div className="w-full flex items-center cursor-pointer zoom-producto" 
                        onClick={() => handleModalFicha(articulo.seguridad2)}>

                          <div className="">
                            <FontAwesomeIcon icon={faFileShield}
                              size='3x'
                              color='gray'
                              className='cursor-pointer'
                            ></FontAwesomeIcon>
                          </div>
                          <div className="ml-4">
                            <Typography as={'h5'} className='text-gray-600' variant='h5'>Hoja de seguridad 100% Acrilica</Typography>
                          </div>
                        </div>

                    )
                  }

                  {
                    articulo.color ? <div className="w-full flex items-center cursor-pointer zoom-producto" onClick={handleModalColores}>
                      <div className="" >
                        <FontAwesomeIcon
                          icon={faSwatchbook}
                          size='3x'
                          color='gray'
                          className='cursor-pointer'
                        ></FontAwesomeIcon>
                      </div>
                      <div className="ml-4"><Typography as={'h5'} className='text-gray-600' variant='h5'>Colores</Typography></div>
                    </div> : null
                  }

{
                    articulo.ficha_color && (
                    windowWidth < 800 || browser == "Mac" ?
                      <div className="w-full -ml-2 rounded-lg text-gray-600 flex items-center uppercase zoom-producto"
                        style={{ fontSize: "14px", fontWeight: "normal", padding: "9px" }}>
                        <a href={articulo.ficha_color} download className='font-bold'>
                          <FontAwesomeIcon icon={faFilePdf} size='3x' className='mr-4'></FontAwesomeIcon>
                          {browser == "Mac" ? "Ficha Técnica 100% Acrílico" : windowWidth < 800 ? "Ficha Técnica 100% Acrílico" : "Ficha Técnica 100% Acrílico"}
                        </a>
                      </div> : <div className="w-full flex items-center cursor-pointer zoom-producto" 
                      onClick={() => handleModalFicha(articulo.ficha_color)}>
                        <div className="">
                        <FontAwesomeIcon
                          icon={faSwatchbook}
                          size='3x'
                          color='gray'
                          className='cursor-pointer'
                        ></FontAwesomeIcon>
                        </div>
                        <div className="ml-4"><Typography as={'h5'} className='text-gray-600' variant='h5'>Colores</Typography></div>

                      </div>
                    )
                  }                 

                  {
                    articulo.videos ?
                      <div className="w-full flex items-center cursor-pointer zoom-producto" onClick={handleOpen3}>
                        <div className="hove:arriba">
                          <FontAwesomeIcon icon={faPhotoFilm} size='3x' color='gray' className='mr-3' ></FontAwesomeIcon>
                        </div>
                        <div className="">
                          <Typography as={'h5'} variant='h5' className='text-gray-600'>Tutoriales</Typography>
                        </div>
                      </div>
                      : null

                  }
                </div>
              </div>

            </div>

          </>


        )
      }

      {
        color && (
          <Dialog open={open} handler={handleOpen} size='lg' className='mt-24'>
            <DialogBody>
              <div className="w-full grid grid-cols-2 md:grid-cols-4 h-[60vh] overflow-y-auto">
                {
                  color.map((item, index) => (
                    <div key={index} className='mt-4'>
                      {
                        item.color_imagen ? <div key={index}
                          className={`w-[10rem] h-[15vh] shadow-2xl rounded-xl mx-auto`}
                          style={{ background: item.color }}>
                          <Image className='w-full h-full' src={item.color_imagen} alt='color-imagen' width={1000} height={1000}></Image>
                        </div> : <div key={index} className={`w-[10rem] h-[10vh] shadow-2xl rounded-xl mx-auto`} style={{ background: item.color }}>

                        </div>
                      }


                      <div className="text-gray text-center mt-4">
                        {
                          item.name
                        }
                      </div>
                      <div className="text-gray text-center">
                        {
                          item.codigo
                        }
                      </div>

                    </div>
                  ))
                }
              </div>


            </DialogBody>

          </Dialog>
        )
      }

      <Dialog open={open2} handler={handleOpen2} size='lg' className='mt-24 porarriba'>
        <DialogBody className='sinpadin'>
          <div className="w-full mt-10">
            <div className="porarriba pdf-container flex justify-center">



              {pdfVisible ? ( // Si el PDF es visible, muestra el objeto PDF
                <object data={ficha} type="application/pdf" onError={handlePdfError}></object>
              ) : ( // Si el PDF no es visible, muestra un mensaje para descargar el PDF
                <div>
                  <Typography as={'h6'} variant="h6" style={{ fontSize: "14px", fontWeight: "normal", padding: "9px" }}>
                    El PDF no se puede mostrar. Por favor, descárguelo.</Typography>
                  <a href={ficha} download style={{ fontSize: "14px", fontWeight: "normal", padding: "9px" }}> Descargar Ficha Técnica</a>
                </div>
              )}

            </div>


          </div>


        </DialogBody>

      </Dialog>


      <Dialog open={open3} handler={handleOpen3} size='lg' className='mt-24 porarriba bg-[] w-full'>
        <DialogBody className='sinpadin flex justify-center'>
          <Swiper
            // grabCursor={true}
            centeredSlides={true}
            // effect='coverflow'
            // coverflowEffect={{
            //   rotate: 0,
            //   stretch: 400,
            //   depth: 500,
            //   modifier: 2.5,
            //   slideShadows: false
            // }}
            // onSlideChangeTransitionStart={}
            slidesPerView={"auto"}
            loop={false}
            pagination={true}
            navigation={true}
            modules={
              [Navigation, Pagination]
            }
            className="swiperDecorador">

            {
              articulo && (articulo.videos?.map((item, index) => (
                <SwiperSlide className='flex items-center justify-center' key={index}>

                  <div className="">
                    <ReactPlayer url={item.url} width={"auto"} height={500} loop className={"mx-auto w-full"} />
                  </div>

                </SwiperSlide>
              )))
            }

          </Swiper>


        </DialogBody>

      </Dialog>

      <Drawer
        overlay={false}
        placement="right"
        size={450}
        open={openCalculador}
        onClose={handleCalculador}
        className="p-4 sombra-arriba porarriba overflow-auto"
      >
        <div className="mb-10 flex items-center justify-between">
          <IconButton
            variant="text"
            color="blue-gray"
            onClick={handleCalculador}
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

        <div className="flex justify-left mb-10">
          <Typography as={'h4'} variant="h4" color="blue-gray">
            ¡Calcula los litros que necesitas!
          </Typography>
        </div>

        <div className="mb-10 flex justify-left">
          <Image src={"/sitio/casa.webp"} width={500} height={500}></Image>
        </div>

        <div className="mb-10 flex justify-left">
          <Typography as={'h4'} variant="h4" color="blue-gray">
            ¿Cómo se calculan los litros?
          </Typography>
        </div>

        <div className="mb-10 flex justify-left">
          <Typography as={'h6'} variant="h6" color="blue-gray">
            Litros necesarios = Área / Rendimiento teórico
          </Typography>
        </div>



        <div className="mb-10">
          <Typography as={'h5'} variant='h5'>Area en m2 :</Typography>
          <Input variant='standard' placeholder='Area total a pintar' size='lg' onChange={e => setArea(e.target.value)}></Input>
        </div>
        {
          litros && (
            <div className="w-full flex">
              <div className="">
                <Image src={articulo.imagen} width={300} height={300} alt='bottle'></Image>
              </div>
              <div className="ml-5">
                <Typography as={"p"} variant='paragraph' className='text-lg'>Necesitas aproximadamente <strong className='text-xl font-bold'>{litros.toFixed(0)}</strong> litros para cubrir <strong className='text-xl font-bold'>{area}</strong> metros cuadrados.</Typography>
              </div>
            </div>

          )
        }
        {
          validar && (
            <div className="mb-10 mt-5 flex justify-left">
              <Typography as={'h6'} variant="h6" color="#c50411" className='text-[#c50411]'>
                Por favor, introduce un área válida.
              </Typography>
            </div>
          )


        }

        <div className="w-full flex justify-center mt-10">
          <Button className='bg-[#c50411] zoom-producto text-white' color='white' onClick={handleCalcularLitros}>Calcular</Button>
        </div>

        <Typography as={'h5'} variant='h5' className='mt-5'>¡Importante!</Typography>
        <Typography as={"p"} className='' variant='paragraph'>
          El rendimiento puede variar según el tipo de acabado y método de aplicación.</Typography>

      </Drawer>


    </section>
  )
}

export default ProductoSelected
