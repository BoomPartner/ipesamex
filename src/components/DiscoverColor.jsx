"use client"
import React, { useState, useEffect } from 'react'

import {
    Typography,
} from '@material-tailwind/react';
import Link from 'next/link';
import { espacios, estilos, coloresDiscover } from './server';
const DiscoverColor = () => {

    const [windowWidth, setWindowWidth] = useState(0);
    const [filterColor, setFilterColor] = useState(null)
    const [espacio, setEspacio] = useState(null)
    const [estilo, setEstilo] = useState(null)

    const [activeIndex1, setActiveIndex1] = useState(null);
    const [activeIndex2, setActiveIndex2] = useState(null);

    const [imagen1, setImagen1] = useState("")
    const [imagen2, setImagen2] = useState("")

    const [mostrar, setMostrar] = useState(false)

    const handleEspacios = (event, index, imagen) => {
        setEspacio(event)
        setActiveIndex1(index)
        setImagen1(imagen)
        document.getElementById('estilos').scrollIntoView({
            behavior: 'smooth', 
            block: 'start'  
        });
    }

    const handleEstilos = (event, index, imagen) => {
        setEstilo(event)
        setActiveIndex2(index)
        setImagen2(imagen)
    }

    const handleDescubreColor = () => {
        setMostrar(true)
        switch (estilo) {
            case "contemporaneo":
                const filter1 = coloresDiscover.filter(item => item.estilo == "contemporaneo")
                if (filter1) {
                    setFilterColor(filter1)
                } else {
                    setFilterColor(null)
                }
                break;

            case "escandinavo":
                const filter2 = coloresDiscover.filter(item => item.estilo == "escandinavo")
                if (filter2) {
                    setFilterColor(filter2)
                } else {
                    setFilterColor(null)
                }
                break;

            case "minimalista":
                const filter3 = coloresDiscover.filter(item => item.estilo == "minimalista")
                if (filter3) {
                    setFilterColor(filter3)
                } else {
                    setFilterColor(null)
                }
                break;

            case "moderno":
                const filter4 = coloresDiscover.filter(item => item.estilo == "moderno")
                if (filter4) {
                    setFilterColor(filter4)
                } else {
                    setFilterColor(null)
                }
                break;

            default:
                break;
        }
        document.getElementById('color').scrollIntoView({
            behavior: 'smooth', 
            block: 'start'  
        });
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




    return (
        <div className='color-sucursales'>


            <section>
                <div className="background-discover bg-black bg-opacity-20 relative">
                    <div className="w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <Typography variant={windowWidth < 1080 ? "h4" : "h1"} className='text-white text-center uppercase arriba'>Descubre tu color</Typography>
                        
                    </div>
                </div>

            </section>

            <section className='w-full'>
                <div className="p-10" >
                    <div className="w-full mt-10">
                        <Typography as={'h2'} variant={windowWidth < 1080 ? "h5" : "h2"} className='mt-20 text-black text-center upeprcase arriba2 uppercase'>CONOCE CUÁLES COLORES SE ADAPTAN MÁS A TU ESTILO DE VIDA</Typography>

                    </div>

                    <div className="w-full mt-24">

                        <Typography as={"h3"} className='w-full uppercase' variant={windowWidth < 1000 ? "h5" : "h3"}>Selecciona un espacio.</Typography>
                    </div>

                    <div className="mt-16 gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                        {
                            espacios?.map((item, index) => (
                                <>

                                    <div
                                        key={index}
                                        onClick={() => handleEspacios(item.space, index, item.imagen)}
                                        className={`shadow-xl transform duration-500 hover:scale-110 group ${activeIndex1 === index ? 'scale-110-active' : 'hover:scale-110'}`}
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
                                            <div className={`bg-black bg-opacity-0 ${activeIndex1 === index ? 'bg-opacity-50 text-[#c89919]' : 'hover:bg-opacity-50 hover:text-[#c89919]'} transform duration-300 cursor-pointer`}
                                                style={{
                                                    objectFit: "cover",
                                                    width: "100%",
                                                    height: '100%',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center'
                                                }}>
                                                <div className={` ${activeIndex1 === index ? 'opacity-80 ' : 'opacity-0 '} h-[45vh] text-white text-center flex justify-center items-center text-2xl group-hover:opacity-80 transform duration-500 uppercase`}>
                                                    {item.title}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ))
                        }
                    </div>
                    <div className="" id='estilos'></div>
                </div>

            </section>


            <section >
                <div className="p-10 mt-16 tansition-all transform duration-500">
                    <div className="w-full">
                        <Typography as={'h3'} className='w-full uppercase' variant={windowWidth < 1000 ? "h5" : "h3"}>Selecciona un estilo.</Typography>
                    </div>

                    <div className="mt-16 gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                        {
                            estilos?.map((item, index) => (
                                <>

                                    <div
                                        key={index}
                                        onClick={() => handleEstilos(item.style, index, item.imagen)}
                                        className={`shadow-xl transform duration-500 hover:scale-110 group ${activeIndex2 === index ? 'scale-110-active' : 'hover:scale-110'}`}
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
                                            <div className={`bg-black bg-opacity-0 ${activeIndex2 === index ? 'bg-opacity-50 text-[#c89919]' : 'hover:bg-opacity-50 hover:text-[#c89919]'} transform duration-300 cursor-pointer`}
                                                style={{
                                                    objectFit: "cover",
                                                    width: "100%",
                                                    height: '100%',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center'
                                                }}>
                                                <div className={` ${activeIndex2 === index ? 'opacity-80 ' : 'opacity-0 '} h-[45vh] text-white text-center flex justify-center items-center text-2xl group-hover:opacity-80 transform duration-500 uppercase`}>
                                                    {item.title}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ))
                        }
                    </div>

                </div>

                <div className="w-full flex justify-center mt-24">
                    {
                        estilo && estilo.trim() !== '' && espacio && espacio.trim() !== ''
                            ? <div className="cursor-pointer agrande bg-[#c50411] text-white p-2 px-4 rounded-lg" onClick={handleDescubreColor}>
                                <Typography as={'h5'} variant='h5' className='uppercase' >Descubre el color</Typography>
                            </div>
                            : null
                    }
                </div>
            </section>

            <section className='colordescubierto p-10 mt-24' id='color'>

                {
                    mostrar &&

                    <div className={`w-full p-10 ${windowWidth < 1200 ? "block" : "flex justify-center"}`}>

                        <div className={windowWidth < 1200 ? "mx-auto w-[80%]" : "w-[60%]"}>
                            <div className="w-full">
                                <div
                                    className={`shadow-xl transform duration-500  group  scale-110-active `}
                                    style={{
                                        position: 'relative',
                                        width: '100%',
                                        height: '0',
                                        paddingBottom: '50%'
                                    }}>
                                    <div
                                        style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '100%',
                                            backgroundImage: `url(${imagen1})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center'
                                        }}
                                    >
                                        <div className={`bg-black  bg-opacity-20 text-[#c89919] transform duration-300 cursor-pointer`}
                                            style={{
                                                objectFit: "cover",
                                                width: "100%",
                                                height: '100%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            }}>
                                            <div className={`opacity-80  h-[45vh] text-white text-center flex justify-center items-center text-2xl group-hover:opacity-80 transform duration-500 uppercase`}>
                                                {espacio}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full">

                                <div
                                    className={`shadow-xl transform duration-500  group  scale-110-active `}
                                    style={{
                                        position: 'relative',
                                        width: '100%',
                                        height: '0',
                                        paddingBottom: '50%'
                                    }}>
                                    <div
                                        style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '100%',
                                            backgroundImage: `url(${imagen2})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center'
                                        }}
                                    >
                                        <div className={`bg-black  bg-opacity-20 text-[#c89919] transform duration-300 cursor-pointer`}
                                            style={{
                                                objectFit: "cover",
                                                width: "100%",
                                                height: '100%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            }}>
                                            <div className={`opacity-80  h-[45vh] text-white text-center flex justify-center items-center text-2xl group-hover:opacity-80 transform duration-500 uppercase`}>
                                                {estilo}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className={`w-full ${windowWidth < 1200 ? "ml-0 mt-24" : "ml-[5%]"} grid grid-cols-2 gap-5`}>
                            {
                                filterColor !== null ? filterColor?.map((item, index) => (
                                    <div key={index} className=''>
                                        {
                                            <div key={index} className={`w-full h-[15vh] shadow-2xl rounded-xl mx-auto`} style={{ background: item.codigo }}>

                                            </div>
                                        }

                                        <div className="text-gray-700 text-center mt-4">
                                            {
                                                item.name
                                            }
                                        </div>
                                        <div className="text-gray-700 text-center">
                                            {
                                                item.codigo2
                                            }
                                        </div>
                                    </div>
                                )) : null
                            }
                        </div>
                    </div>

                }
                {
                    mostrar && <div className="w-full mt-24 mb-10">
                        <div className="flex justify-center">
                            <Typography as={'h3'} variant='h3' className='uppercase'>Prueba tus colores en nuesrto decorador</Typography>
                        </div>
                        <div className="w-full flex justify-center">
                            <Link href={"/decorador"} className={`mt-10 bg-[#c50411] text-center p-2 rounded-lg text-white font-semibold uppercase`}>Decorador</Link>
                        </div>


                    </div>
                }



            </section>
        </div>
    )
}

export default DiscoverColor
