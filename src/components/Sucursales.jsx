"use client";
import React, { useState, useEffect } from 'react'
import { locations } from './dataMapas';
import Image from 'next/image'
import { Card, CardBody, Input, Typography, } from '@material-tailwind/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';



const Sucursales = () => {
    
    const [windowWidth, setWindowWidth] = useState(0);
    const [positions, setPositions] = useState(locations)
    const [mensaje, setMensaje] = useState(false)
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


    const handleCode = (value) => {
        if (value) {
            postalCode = value;
        } else {
            setPositions(locations)
            setMensaje(false)

        }
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleFilterLocations();
        }
    };

    const handleFilterLocations = () => {
        if (postalCode !== "") {
            if (!isNaN(Number(postalCode))) {
                const codigoNumerico = Number(postalCode);
                const filteredLocations = locations.filter((item) => item.codigo_postal === codigoNumerico);
                setPositions(filteredLocations.length > 0 ? filteredLocations : []);
                setMensaje(filteredLocations.length === 0);
            } else {
                const estadoNormalizado = postalCode.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                const filteredLocations = locations.filter((item) => {
                    const estadoItem = item.estado.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                    return estadoItem === estadoNormalizado;
                });
                setPositions(filteredLocations.length > 0 ? filteredLocations : []);
                setMensaje(filteredLocations.length === 0);
            }
        } else {
            setPositions(locations);
            setMensaje(false);
        }
    };




    return (
        <div className='sinfocus'>
            <div className={`${windowWidth < 990 ? "" : "flex justify-center"} w-full color-sucursales p-10 sinfocus`}>

                <div className={`w-full sinfocus ${windowWidth < 990 ? "" : "flex "}`}>

                    {
                        windowWidth < 990 ? <div className="w-full">
                            <Image src={"/sucursales/sucursales.webp"} className='push w-full' width={1500} height={1500}></Image>
                        </div> : null
                    }

                    <div className={`${windowWidth < 990 ? "w-full p-10" : "w-[80%] p-20"} arriba`}>
                        <Typography as={'h1'} variant="h1" className='mb-5 text-black'>
                            Ubícanos
                        </Typography>
                        <Typography as={"p"} variant='paragraph' className='w-full text-black' style={{ fontSize: "20px" }}>
                            Localiza tu sucursal más cercana y disfruta de los servicios y productos que ofrecemos.
                            Contamos con más de <span className='font-bold uppercase' style={{fontSize: "24px"}}>1000 sucursales</span> en todo el territorio nacional para
                            estar siempre a tu alcance.</Typography>

                        <Typography as={"p"} variant='paragraph' className='w-full text-black' style={{ fontSize: "20px" }}>
                            <Typography as={"p"} variant='paragraph' className='w-full text-black mt-10' style={{ fontSize: "20px" }}>
                            Visítanos en cualquiera de nuestras ubicaciones en la República Mexicana y vive la experiencia de 
                            un servicio de calidad y atención personalizada.</Typography></Typography>

                    </div>

                    {
                        windowWidth < 990 ? null : <div className="w-full flex justify-center">
                            <Image src={"/sucursales/sucursales.webp"} 
                            className='push w-[75%]' width={1500} height={1500}></Image>
                        </div>
                    }
                </div>
            </div>

            <div className={`w-full ${windowWidth < 980 ? "block" : "flex justify-center"}`}>

                <div className={`${windowWidth < 980 ? "w-full p-24" : "w-[50%] p-5"} `}>
                    <div className="flex items-center">
                        <div className="w-full">
                            <Input label='Ingresa código postal o estado'
                                onChange={e => handleCode(e.target.value)}
                                onKeyDown={handleKeyDown}></Input>
                        </div>
                        <div className=""><FontAwesomeIcon icon={faMagnifyingGlass} width={100} height={100}
                            size='xl' className='cursor-pointer' onClick={handleFilterLocations}></FontAwesomeIcon></div>
                    </div>


                    <div className="mt-4 w-full h-[75vh] overflow-y-auto">
                        {
                            mensaje ? <div className=""><Typography as={"h5"} variant='h5' className='w-full text-[#c50411] mt-10 text-center'>No se encontraron sucursales, por favor ingresa otro código postal</Typography></div> : positions.map((item, index) => (
                                <Card className="mt-6" key={index}>
                                    <CardBody>
                                        <Typography as={"h5"} variant="h5" color="blue-gray" className="mb-2">
                                            <Image src={item.imagen} width={100} height={100} alt='logo'></Image>
                                        </Typography>
                                        <Typography as={"p"}>
                                            <strong className='font-bold text-xl'>Estado: </strong> {item.estado}
                                        </Typography>
                                        <Typography as={"p"}>
                                            <strong className='font-bold text-xl'>Código Postal: </strong>{item.codigo_postal}
                                        </Typography>
                                        <Typography as={"p"}>
                                            <strong className='font-bold text-xl'>Ciudad: </strong>{item.ciudad}
                                        </Typography>
                                       
                                        <Typography as={"p"} className='font-bold text-xl'><Link href={item.enlace} className='hover:border-b border-gray-500' target='_blank'>Ver en Maps</Link></Typography>
                                    </CardBody>
                                </Card>
                            ))
                        }
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Sucursales
