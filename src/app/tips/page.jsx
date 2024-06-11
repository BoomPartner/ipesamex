"use client";
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
} from '@material-tailwind/react'
import React, { useState, useEffect } from 'react'
import {
    tipsparapintar, contenidoTips
} from '@/components/server';
import Image from 'next/image';
import ReactPlayer from 'react-player';
import Link from 'next/link';

const TipsParaPintar = () => {
    const [windowWidth, setWindowWidth] = useState(0);

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

    const [tuoriales, setTutoriales] = useState(contenidoTips);

    const handleTips = (event) => {
        const filtro = contenidoTips.filter((item) => event == item.id)
        setTutoriales(filtro)
    }

    const handleLocal = (categoria, microcategoria) => {
        localStorage.setItem("categoria", categoria)
        localStorage.setItem("microcategoria", microcategoria)
    }
    return (
        <div className="">
            <div className="background-tips"></div>

            <div className={`backgroundTips w-full p-10 ${windowWidth < 815 ? "" : ""}`}>
                
                <div className={`mb-10 text-black ${windowWidth < 1280 ? "w-full" : "w-[50%]"}`}>
                    <Typography variant='h1' className='uppercase'>Tutoriales y Tips</Typography>
                    <ul className='p-2'>
                        {
                            tipsparapintar?.map((item, index) => (
                                <li className='mt-4 cursor-pointer p-2 hover:bg-white text-black 
                            text-xl transition-transform transform duration-500 hover:scale-105 uppercase' key={index}
                                    onClick={() => handleTips(item.target)}>{item.name}</li>))
                        }
                    </ul>

                </div>
                <div className={`w-full grid gap-10 ${windowWidth < 860 ? "grid-cols-1" : windowWidth < 1280 ? "grid-cols-2" : "grid-cols-3"}`}>
                    {
                        tuoriales?.map((item, index) => (

                            item.video ?
                                <Card key={index} className={`mt-6 ${windowWidth < 860 ? " w-[70%]" : "w-[90%]"}`}>
                                    <CardHeader color="blue-gray" className="relative h-[30vh]">
                                        <div key={index} className="">
                                            <ReactPlayer url={item.video} width={"auto"} height={ windowWidth < 1000 ? 200 : 300} loop controls className={"w-full"} />
                                        </div>
                                    </CardHeader>
                                    <CardBody>
                                        <div className="w-full flex items-center">
                                            <div className="w-full">
                                                <Typography variant="h4" color="blue-gray" className="ml-2 mb-4 uppercase">
                                                    {item.name}
                                                </Typography>
                                                <Link href={item.enlace} className='ml-2 hover:border-b border-[#c50411]'
                                                    onClick={() => handleLocal(item.categoria, item.microcategoria)}>Ver Prodcucto</Link>
                                            </div>
                                        </div>

                                        <Typography>
                                            {item.description}
                                        </Typography>
                                    </CardBody>
                                </Card>
                                :

                                <Card key={index} className={`mx-auto mt-6 ${windowWidth < 860 ? " w-[70%]" : "w-[90%]"}`}>
                                    <CardHeader color="blue-gray" className="relative ">
                                        <Image src={item.imagen} width={500} height={600} className={`${item.causas ? "w-[30%]" : "w-full"}`} alt='vinilicas'></Image>
                                    </CardHeader>
                                    <CardBody>
                                        <div className="w-full flex items-center">
                                            <div className={`rounded-full h-[15px] w-[15px]`} style={{ backgroundColor: item.color }}></div>
                                            <div className="w-full">
                                                <Typography variant="h5" color="blue-gray" className="ml-2 uppercase">
                                                    {item.title}
                                                </Typography>
                                            </div>
                                        </div>

                                        <Typography>
                                            {item.description}
                                        </Typography>
                                    </CardBody>
                                </Card>
                        ))
                    }


                </div>
            </div>
        </div>
    )
}

export default TipsParaPintar
