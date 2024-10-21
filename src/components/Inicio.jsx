"use client";
import React from 'react'
import { useEffect, useState, useContext } from 'react';
import { consumidores, categorias, articulos } from '@/components/server';
import Carrusel from './Carrusel';
import {
    Typography,
    Input,
    Button,
    Drawer,
    IconButton,
} from '@material-tailwind/react';
import Link from 'next/link';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CarruselSecundario from './Carrusel2';
import globalContext from '@/app/context/globalContext';

const Inicio = () => {

    const { handleContacto } = useContext(globalContext)
    const [isOpen, setIsOpen] = useState(false);
    const [articulo, setArticulo] = useState(null)
    const [isElementVisible, setElementVisible] = useState(false);
    const [isElementVisible2, setElementVisible2] = useState(false);
    const [isElementVisible3, setElementVisible3] = useState(false);
    const [isElementVisible4, setElementVisible4] = useState(false);
    const [isElementVisible5, setElementVisible5] = useState(false);
    const [windowWidth, setWindowWidth] = useState(0);
    const [animation1, setAnimation1] = useState(false);
    const [animation2, setAnimation2] = useState(false);
    const [animation3, setAnimation3] = useState(false);
    const [animation4, setAnimation4] = useState(false);
    const [animation5, setAnimation5] = useState(false);
    const [viewCards, setViewCards] = useState(null);

    const [area, setArea] = useState(0);
    const [litros, setLitros] = useState(null)
    const [validar, setValidar] = useState(false)


    const handleCalculadorInicio = () => {
        setIsOpen((prevState) => !prevState)
    }

    const handleCalcularLitros = () => {
        const areaNumerica = parseFloat(area);
        const promedio = articulo[0].promedio;
        if (!isNaN(areaNumerica) && areaNumerica > 0) {
            const litrosNecesarios = (areaNumerica / promedio) * 1;
            const litrosRedondeados = Math.ceil(litrosNecesarios);
            setLitros(litrosRedondeados);
            setValidar(false)
        } else {
            setValidar(true)

            setTimeout(() => {
                setValidar(false);
            }, 3000);
        }
    };

    const handleCategoriaInicio = (event) => {
        const localcategoria = localStorage.getItem('categoria');
        const localmicrocategoria = localStorage.getItem('microcategoria');
        if (localcategoria || localmicrocategoria) {
            localStorage.removeItem('categoria');
            localStorage.removeItem('microcategoria');
        }
        localStorage.setItem("categoria", event);
    }

   
    const handleResize = () => {
        const newWindowWidth = window.innerWidth;
        setWindowWidth(newWindowWidth);
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
        const handleScroll = () => {
            const element = document.querySelector('#categorias');

            if (element && !animation1) {
                const elementPosition = element.getBoundingClientRect();
                const windowHeight = window.innerHeight;

                if (elementPosition.top < windowHeight && elementPosition.bottom >= 0) {
                    setAnimation1(true)
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
            const element = document.querySelector('#clientes');

            if (element && !animation2) {
                const elementPosition = element.getBoundingClientRect();
                const windowHeight = window.innerHeight;

                if (elementPosition.top < windowHeight && elementPosition.bottom >= 0) {
                    setAnimation2(true)
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
            const element = document.querySelector('#colorvida');

            if (element && !animation3) {
                const elementPosition = element.getBoundingClientRect();
                const windowHeight = window.innerHeight;

                if (elementPosition.top < windowHeight && elementPosition.bottom >= 0) {
                    setAnimation3(true)
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

    useEffect(() => {
        const handleScroll = () => {
            const element = document.querySelector('#carruselSecundario');

            if (element && !animation4) {
                const elementPosition = element.getBoundingClientRect();
                const windowHeight = window.innerHeight;

                if (elementPosition.top < windowHeight && elementPosition.bottom >= 0) {
                    setAnimation4(true)
                    setElementVisible4(true);
                } else {
                    setElementVisible4(false);
                }
            }

        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [animation4]);

    useEffect(() => {
        const handleScroll = () => {
            const element = document.querySelector('#distribuidor');

            if (element && !animation5) {
                const elementPosition = element.getBoundingClientRect();
                const windowHeight = window.innerHeight;

                if (elementPosition.top < windowHeight && elementPosition.bottom >= 0) {
                    setAnimation5(true)
                    setElementVisible5(true);
                } else {
                    setElementVisible5(false);
                }
            }

        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [animation5])


    useEffect(() => {
        if (windowWidth <= 1030) {
            setViewCards(2)
        }
        if (windowWidth <= 720) {
            setViewCards(1)
        }
        if (windowWidth > 1030) {
            setViewCards(3)
        }
    }, [windowWidth])

    useEffect(() => {
       
        if (articulos) {
            const articulo = articulos.filter(item => item.id == "vintek");
            setArticulo(articulo)
        }
    }, []);

    useEffect(() => {
     
        gsap.registerPlugin(ScrollTrigger);


        gsap.fromTo(".burbuja-grande",
            { y: '30%', opacity: 0 },
            {
                duration: 2,
                y: '0%',
                opacity: 1,
                ease: 'elastic.out(1, 0.3)',
                scrollTrigger: {
                    trigger: "#decorativa",
                    start: "top center",
                    toggleActions: "play none none none",
                },
                onComplete: () => {
                   
                    gsap.to(".burbuja-grande", {
                        scale: 1.01,
                        repeat: -1, 
                        yoyo: true, 
                        duration: 2,
                        ease: 'power1.inOut'
                    });
                }
            }
        );

        gsap.fromTo(".aros",
            { y: '40%', opacity: 0, rotation: 0 },
            {
                duration: 2,
                y: '0%', 
                opacity: 1, 
               
                ease: 'power1.inOut', 
                delay: 0.3, 
                scrollTrigger: {
                    trigger: "#decorativa",
                    start: "top center",
                    toggleActions: "play none none none",
                },
                onComplete: () => {
                    
                    gsap.to(".aros", {
                      
                        y: 5, 
                        repeat: -1, 
                        yoyo: true, 
                        ease: 'sine.inOut', 
                        duration: 2 
                    });
                }
            }

        );

        gsap.fromTo(".bote-automotivo",
            { scale: 0, opacity: 0 }, 
            {
                duration: 2, 
                scale: 1, 
                opacity: 1, 
                ease: 'power1.inOut', 
                delay: 0.3, 
                scrollTrigger: {
                    trigger: "#decorativa",
                    start: "top center",
                    toggleActions: "play none none none",
                },
               
                onComplete: () => {
                    
                    gsap.fromTo(".bote-automotivo",
                        { rotation: 5 }, 
                        {
                            rotation: -5,
                            repeat: -1,
                            yoyo: true,
                            ease: 'sine.inOut',
                            duration: 6
                        }
                    );
                }

            }
        );

        gsap.fromTo(".burbuja1",
            { scale: 0, opacity: 0 },
            {
                duration: 1,
                scale: 1, 
                opacity: 1, 
                ease: 'power1.inOut', 
                delay: 0.5,
               
                scrollTrigger: {
                    trigger: "#decorativa",
                    start: "top center",
                    toggleActions: "play none none none",
                },
                onComplete: () => {
                    
                    gsap.to(".burbuja1", {
                        y: 10, 
                        repeat: -1,
                        yoyo: true,
                        ease: 'sine.inOut',
                        duration: 2 
                    });
                }
            }
        );

        gsap.fromTo(".burbuja2",
            { scale: 0, opacity: 0 }, 
            {
                duration: 1, 
                scale: 1,
                opacity: 1, 
                ease: 'power1.inOut',
                delay: 1,
                scrollTrigger: {
                    trigger: "#decorativa",
                    start: "top center",
                    toggleActions: "play none none none",
                },
                onComplete: () => {
                    gsap.to(".burbuja2", {
                        y: -10, 
                        repeat: -1, 
                        yoyo: true,
                        ease: 'sine.inOut', 
                        duration: 2 
                    });
                }
            }
        );

        gsap.fromTo(".burbuja3",
            { scale: 0, opacity: 0 },
            {
                duration: 1, 
                scale: 1, 
                opacity: 1,
                ease: 'power1.inOut',
                delay: 1.5,
                scrollTrigger: {
                    trigger: "#decorativa",
                    start: "top center",
                    toggleActions: "play none none none",
                },
                onComplete: () => {
                    gsap.to(".burbuja3", {
                        y: 10, 
                        repeat: -1, 
                        yoyo: true, 
                        ease: 'sine.inOut', 
                        duration: 2
                    });
                }
            }
        );

        gsap.fromTo(".burbuja3",
            { scale: 0, opacity: 0 },
            {
                duration: 1, 
                scale: 1, 
                opacity: 1,
                ease: 'power1.inOut',
                delay: 2,
                scrollTrigger: {
                    trigger: "#decorativa",
                    start: "top center",
                    toggleActions: "play none none none",
                },
                onComplete: () => {
                    gsap.to(".burbuja3", {
                        y: -10, 
                        repeat: -1, 
                        yoyo: true, 
                        ease: 'sine.inOut', 
                        duration: 2 
                    });
                }
            }
        );

        gsap.fromTo(".burbuja4",
            { scale: 0, opacity: 0 },
            {
                duration: 1, 
                scale: 1, 
                opacity: 1,
                ease: 'power1.inOut',
                delay: 2.5, 
              
                scrollTrigger: {
                    trigger: "#decorativa",
                    start: "top center",
                    toggleActions: "play none none none",
                },
                onComplete: () => {
                    gsap.to(".burbuja4", {
                        y: 10, 
                        repeat: -1, 
                        yoyo: true, 
                        ease: 'sine.inOut',
                        duration: 2
                    });
                }
            }
        );
        gsap.fromTo(".burbuja5",
            { scale: 0, opacity: 0 }, 
            {
                duration: 1, 
                scale: 1, 
                opacity: 1, 
                ease: 'power1.inOut',
                delay: 3, 
                scrollTrigger: {
                    trigger: "#decorativa",
                    start: "top center",
                    toggleActions: "play none none none",
                },
                onComplete: () => {
                    gsap.to(".burbuja5", {
                        y: -10, 
                        repeat: -1, 
                        yoyo: true,
                        ease: 'sine.inOut', 
                        duration: 2 
                    });
                }
            }
        );

        gsap.fromTo(".burbuja6",
            { scale: 0, opacity: 0 }, 
            {
                duration: 1, 
                scale: 1, 
                opacity: 1, 
                ease: 'power1.inOut', 
                delay: 3.5, 
                scrollTrigger: {
                    trigger: "#decorativa",
                    start: "top center",
                    toggleActions: "play none none none",
                },
                onComplete: () => {
                    gsap.to(".burbuja6", {
                    
                        y: 10, 
                        repeat: -1,
                        yoyo: true, 
                        ease: 'sine.inOut', 
                        duration: 2
                    });
                }
            }
        );

        gsap.fromTo(".burbuja7",
            { scale: 0, opacity: 0 }, 
            {
                duration: 1, 
                scale: 1, 
                opacity: 1, 
                ease: 'power1.inOut', 
                delay: 4,
                scrollTrigger: {
                    trigger: "#decorativa",
                    start: "top center",
                    toggleActions: "play none none none",
                },
                onComplete: () => {
                   
                    gsap.to(".burbuja7", {
                        y: -10, 
                        repeat: -1,
                        yoyo: true, 
                        ease: 'sine.inOut',
                        duration: 2
                    });
                }
            }
        );

        gsap.fromTo(".botones-colorcril",
            { y: '40%', opacity: 0 },
            {
                duration: 1,
                y: '0%', 
                opacity: 1,
                ease: 'power1.inOut',
                delay: 4, 
                scrollTrigger: {
                    trigger: "#decorativa",
                    start: "top center",
                    toggleActions: "play none none none",
                },

            }

        );
        return () => {
            ScrollTrigger.getAll().forEach(st => st.kill());
        };

    }, []);



    return (
        <div className={`bg-[url('/principal/waves.jpg')] bg-fixed bg-cover bg-center`}>
       
            <section id='carrusel' className='overflow-hidden'>
                <Carrusel width={windowWidth}></Carrusel>
            </section>

            <section id='categorias' className='overflow-hidden'>
                <div className="w-full p-10">

                    <div className="w-full text-center">
                        <Typography as={'h1'} variant='h1' color='black' className='uppercase'>Nuestras Líneas</Typography>
                    </div>

                    <div className="mt-16 gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                        {
                            categorias?.map((item, index) => (
                                <>

                                    <Link
                                        key={index}
                                        href={`/productos`}
                                        onClick={() => handleCategoriaInicio(item.id)}
                                        className={`shadow-xl transform duration-500 hover:scale-110 group opacity-0
                                            ${isElementVisible ? item.clase : ""}`}
                                        style={{
                                            position: 'relative',
                                            width: '100%',
                                            height: '0',
                                            paddingBottom: '100%'
                                        }}>
                                        <div
                                            style={{
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                width: '100%',
                                                height: '100%',
                                                backgroundImage: `url(${item.imagen})`,
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center'
                                            }}
                                        >
                                            <div className="bg-black bg-opacity-0 hover:bg-opacity-50 hover:text-[#c89919] transform duration-300 cursor-pointer"
                                                style={{
                                                    objectFit: "cover",
                                                    width: "100%",
                                                    height: '100%',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center'
                                                }}>
                                                <div className="opacity-0 h-[45vh] text-white text-center flex justify-center items-center text-2xl group-hover:opacity-80 transform duration-500">
                                                    {item.name}
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </>
                            ))
                        }
                    </div>

                </div>

            </section>

            <section id='decorativa' style={{
                position: 'relative',
                width: '100%',
                height: '0',
                paddingBottom: windowWidth < 950 ? '80%' : "56%"
            }} >

                <div className="banenrDecorativa">

                    <div className="w-full border fex justify-center">
                        <Image placeholder='blur' blurDataURL='/articulos/automotriz/base_color.png' src={"/articulos/automotriz/base_color.png"} className='bote-automotivo w-[15%] absolute z-10 top-[37%] left-[44%]' width={1000} height={1000} alt='bote' style={{ transform: 'rotate(5deg)' }}></Image>

                        <Image placeholder='blur' blurDataURL='/principal/automotivo/burbuja.webp' src={"/principal/automotivo/burbuja.webp"} width={1200} height={1200} className='burbuja-grande absolute inset-0 m-auto w-[65%]' alt='burbuja'></Image>
                        <Image placeholder='blur' blurDataURL='/principal/automotivo/aros.webp' src={"/principal/automotivo/aros.webp"} width={1200} height={1200} className={`aros absolute top-[43%] left-[26%] w-[50%]`} alt='aros'></Image>
                        <Image placeholder='blur' blurDataURL='/principal/automotivo/1.png' src={"/principal/automotivo/1.png"} width={285} height={285} className={`burbuja1 absolute top-[60%] right-[10%] w-[17%]`} alt='automotriz'></Image>
                        <Image placeholder='blur' blurDataURL='/principal/automotivo/2.png' src={"/principal/automotivo/2.png"} width={285} height={285} className={`burbuja2 absolute top-[40%] right-[17%] w-[15%]`} alt='automotriz'></Image>
                        <Image placeholder='blur' blurDataURL='/principal/automotivo/3.png' src={"/principal/automotivo/3.png"} width={285} height={285} className={`burbuja3 absolute top-[20%] right-[24%] w-[15%]`} alt='automotriz'></Image>

                        <Image placeholder='blur' blurDataURL='/principal/automotivo/4.png' src={"/principal/automotivo/4.png"} width={285} height={285} className={`burbuja4 absolute top-[8%] right-[38%] w-[18%]`} alt='automotriz'></Image>

                        <Image placeholder='blur' blurDataURL='/principal/automotivo/5.png' src={"/principal/automotivo/5.png"} width={285} height={197} className={`burbuja5 absolute top-[20%] left-[25%] w-[15%]`} alt='automotriz'></Image>
                        <Image placeholder='blur' blurDataURL='/principal/automotivo/6.png' src={"/principal/automotivo/6.png"} width={285} height={197} className={`burbuja6 absolute top-[40%] left-[15%] w-[18%] `} alt='automotriz'></Image>
                        <Image placeholder='blur' blurDataURL='/principal/automotivo/7.png' src={"/principal/automotivo/7.png"} width={285} height={197} className={`burbuja7 absolute top-[60%] left-[13%] w-[15%] `} alt='automotriz'></Image>
                    </div>

                    <div className={`flex justify-center gap-5 inline-block w-full z-10 absolute bottom-5 
                    left-1/2 transform -translate-x-1/2 text-white botones-colorcril`}>

                        <div className={`bg-white text-black rounded-lg text-center agrande uppercase p-2 ${windowWidth < 600 ? "" : "px-10"}`}>
                            <Link href={"/productos"} onClick={() => handleCategoriaInicio("automotriz")} style={{ fontSize: windowWidth < 720 ? "12px" : "15px" }} className='font-semibold'>Ver Productos</Link>
                        </div>
                        <div className={`bg-white text-black rounded-lg text-center agrande uppercase p-2 ${windowWidth < 600 ? "" : "px-10"}`}>
                            <Link href={"https://colorcril.app/login"} target='_blank' style={{ fontSize: windowWidth < 720 ? "12px" : "15px" }} className='font-semibold'>Laboratorio Color Cril</Link>
                        </div>
                    </div>


                </div>

            </section>

            <section id='clientes' className='overflow-hidden'>
                <div className="w-full">
                    <div className="w-full">
                        <div className="w-full text-center p-10">
                            <Typography as={'h2'} variant='h2' className='uppercase'>Principales Clientes</Typography>
                        </div>
                    </div>
                    <div className={`grid ${windowWidth < 1100 ? "grid-cols-1" : "grid-cols-3"} gap-5 p-10`} >
                        {
                            consumidores?.map((item, index) => (
                                <div
                                    key={index}
                                    className={`opacity-0 shadow-xl transform duration-500 hover:scale-110 group ${isElementVisible2 ? item.clase : ""}`}
                                    style={{
                                        position: 'relative',
                                        width: '100%',
                                        height: '70vh',
                                        paddingBottom: '100%' 
                                    }}>
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
                                                    <Typography as={'h4'} variant="h4"
                                                        className={`mb-2 uppercase`}>
                                                        {item.name}</Typography>
                                                </div>
                                                <div className={`opacity-0 text-white text-2xl text-left group-hover:opacity-80 transform translate-y-20 group-hover:translate-y-0 duration-500 `}>
                                                    <Typography as={"p"} variant='small' color='white'>{item.description}</Typography>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>


                            ))
                        }
                    </div>
                </div>
            </section>

            <section id='carruselSecundario'>
                <CarruselSecundario width={windowWidth} element={isElementVisible4}></CarruselSecundario>

            </section>
            <section id='colorvida'>
                <div className="w-full">

                    <div className={`w-full ${windowWidth < 950 ? "" : "flex items-center"}`}>

                        <div className="w-full p-10">
                            <div className="w-full mb-10">
                                <Typography as={'h1'} variant={`${windowWidth < 1280 ? "h3" : 'h1'}`}
                                    className={`uppercase ${isElementVisible3 ? "arriba" : ""}`}>Experimenta el color en tu vida</Typography>
                            </div>
                            <Typography as={'h3'} variant='h3' className={`${isElementVisible3 ? "arriba2" : ""}`}><strong>IPESA®</strong> transforma tu próximo proyecto en una realidad vibrante, ofreciéndote
                                herramientas de color avanzadas para elegir los tonos exactos que materializarán tu visión creativa.</Typography>
                            <div className={`w-full grid  ${windowWidth < 500 ? "" : "grid-cols-2"}  gap-5`}>
                                <Link href={"/colores"} className={`mt-10 bg-[#c50411] text-center p-2 rounded-lg text-white font-semibold uppercase ${isElementVisible3 ? "arriba4" : ""}`}>Gama de colores</Link>
                            </div>
                        </div>

                        <div className="w-full">
                            <Image
                                placeholder='blur'
                                blurDataURL='/principal/02.webp'
                                src={"/principal/02.webp"} 
                                width={1000}
                                height={1000} alt='color-vida'
                                className={`w-full  ${isElementVisible3 ? "arriba2" : ""}`}></Image>
                        </div>

                    </div>

                </div>
            </section>

            <section id='calculador'>
                <div className={`w-full ${windowWidth < 950 ? "" : "flex items-center"}`}>

                    <div className="w-full flex justify-center">
                        <Image placeholder='blur' blurDataURL='/principal/calculador.png"' src={"/principal/calculador.png"} className='' width={630} height={670} alt='mano'></Image>
                    </div>

                    <div className="w-full p-10">
                        <div className="w-full mb-10">
                            <Typography as={'h3'} variant={`${windowWidth < 1280 ? "h3" : 'h2'}`}
                                className={`uppercase `}>¿No sabes cuántos litros necesitas?</Typography>
                        </div>
                        <Typography as={'h5'} variant='h5' className={``}>Puedes ocupar nuestro calculador con cualquiera de nuestros productos.</Typography>

                        <div className={`w-full grid  ${windowWidth < 500 ? "" : "grid-cols-2"}  gap-5`}>
                            <Button className={`mt-10 bg-[#c50411] text-center p-3 rounded-lg text-white 
                                    font-semibold`} onClick={handleCalculadorInicio} style={{ fontSize: "17px" }}>Calculador</Button>
                        </div>

                    </div>

                </div>
            </section>

            <section className={`bg-[url('/principal/distribuidor.webp')] bg-cover bg-center`}>
                <div className="w-full md:flex items-center" >

                    <div className={`w-full relative p-5 ${windowWidth < 1212 ? "bg-[#dfe3e6]" : "backDist"}`} id='distribuidor'>
                        <div className={windowWidth < 1212 ? "w-[100%] p-5" : "w-[50%] p-10 transition-all duration-500"}>

                            <Typography variant={windowWidth < 950 ? `h3` : "h1"} color='black'
                                className=''>DISTRIBUIDOR IPESA®</Typography>
                            <Typography as={"p"} variant={"small"} color='black' className={`mt-10 text-left ${isElementVisible5 ? "arriba" : ""}`} style={{ fontSize: "16px" }}>
                                Únete a nuestra red de distribuidores, en IPESA® valoramos la calidad, la confianza y colaboración mutua, como distribuidor de nuestra marca tendrás acceso a una amplia gama de productos de alta calidad, así como a nuestro respaldo y apoyo continuo para alcanzar tus metas comerciales. Además, ofrecemos condiciones comerciales competitivas, financiamientos y herramientas de venta.
                            </Typography>
                            <Typography variant={"small"} color='black' className={`mt-10 text-left ${isElementVisible5 ? "arriba2" : ""}`} style={{ fontSize: "16px" }}>
                                Si estás interesado en formar parte de nuestra familia de distribuidores IPESA® no dudes en ponerte en contacto con nosotros para obtener más información.
                            </Typography>
                            <Typography as={'h5'} variant={"h5"} color='black' style={{ fontSize: "16px" }} className={`mt-5 text-left ${isElementVisible5 ? "arriba2" : ""}`}>
                                ¡Conviértete en un socio exitoso con una gran compañía en expansión!
                            </Typography>

                            <div className={`w-full grid  ${windowWidth < 500 ? "" : "grid-cols-2"}  gap-5`}>
                                <Link href={"/contacto"} onClick={handleContacto("distribuidor")} className={`mt-10 bg-[#c50411] text-center p-2 rounded-lg text-white font-semibold uppercase ${isElementVisible3 ? "arriba4" : ""}`}>Estoy Interesado</Link>
                            </div>

                            <div className={` mt-10 ${windowWidth < 1212 ? "w-full" : "w-[80%]"}`}>
                                <Image placeholder='blur' blurDataURL='/principal/tienda.png' src={"/principal/tienda.png"} className={`w-full ${isElementVisible5 ? "arriba4" : ""}`} width={1000} height={1000} alt='Tienda'></Image>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="formulario">

                </div>

            </section>
            <Drawer
                overlay={false}
                placement="right"
                size={450}
                open={isOpen}
                onClose={handleCalculadorInicio}
                className="p-4 sombra-arriba porarriba overflow-auto"
            >
                <div className="mb-10 flex items-center justify-between">
                    <IconButton
                        variant="text"
                        color="blue-gray"
                        onClick={handleCalculadorInicio}
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
                    <Typography variant="h4" color="blue-gray">
                        ¡Calcula los litros que necesitas!
                    </Typography>
                </div>

                <div className="mb-10 flex justify-left">
                    <Image placeholder='blur' blurDataURL='/sitio/casa.webp' src={"/sitio/casa.webp"} width={500} height={500} alt='casa'></Image>
                </div>

                <div className="mb-10 flex justify-left">
                    <Typography variant="h4" color="blue-gray">
                        ¿Cómo se calculan los litros?
                    </Typography>
                </div>

                <div className="mb-10 flex justify-left">
                    <Typography variant="h6" color="blue-gray">
                        Litros necesarios = Área / Rendimiento teórico
                    </Typography>
                </div>

                <div className="mb-10">
                    <Typography variant='h5'>Area en m2 :</Typography>
                    <Input variant='standard' placeholder='Area total a pintar' size='lg' onChange={e => setArea(e.target.value)}></Input>

                </div>
                {
                    litros && (
                        <div className="w-full flex">
                            <div className="">
                                <Image placeholder='blur' src={articulo[0].imagen} width={300} height={300} alt='bote'></Image>
                            </div>
                            <div className="ml-5">
                                <Typography variant='paragraph' className='text-lg'>Necesitas aproximadamente <strong className='text-xl font-bold'>{litros.toFixed(0)}</strong> litros para cubrir <strong className='text-xl font-bold'>{area}</strong> metros cuadrados.</Typography>
                            </div>
                        </div>

                    )
                }
                {
                    validar && (
                        <div className="mb-10 mt-5 flex justify-left">
                            <Typography variant="h6" color="#c50411" className='text-[#c50411]'>
                                Por favor, introduce un área válida.
                            </Typography>
                        </div>
                    )


                }

                <div className="w-full flex justify-center mt-10">
                    <Button className='bg-[#c50411] zoom-producto text-white' color='white' onClick={handleCalcularLitros}>Calcular</Button>
                    <Link href={"/productos"} onClick={handleCategoriaInicio("decorativa")} className={`zoom-producto ml-4 bg-[#c50411] text-center p-2 rounded-lg text-white`}>Probar con más productos</Link>
                </div>

                <Typography variant='h5' className='mt-5'>¡Importante!</Typography>
                <Typography className='' variant='paragraph'>El rendimiento puede variar según el tipo de acabado y método de aplicación.</Typography>
            </Drawer>
        </div>
    )
}

export default Inicio
