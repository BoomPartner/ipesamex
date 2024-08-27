"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/parallax';
import { Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';

const CarruselSecundario = ({ width, element }) => {

    const handleDataSlide2 = (event) => {
        const activeSlide = event.slides.find(slide => slide.classList.contains('swiper-slide-active'));

        if (activeSlide) {
            const classList = activeSlide.className.split('');

            const prueba = classList.find(cls => cls.startsWith('swiper2-slide-'));

            if (prueba) {
                switch (prueba) {

                    case "swiper2-slide-2":

                        gsap.fromTo(".tutorials",
                            { y: '40%', opacity: 0, rotationX: 0 },
                            {
                                duration: 1,
                                y: '0%',
                                opacity: 1,
                                rotationX: 360,
                                
                                ease: 'power1.inOut',
                                delay: 0.3,
                            }
                        );

                        gsap.fromTo(".tutorials-btn",
                            { y: '60%', opacity: 0 },
                            {
                                duration: 1,
                                y: '0%',
                                opacity: 1,
                                ease: 'power1.inOut',
                                delay: 0.3,
                            }
                        );
                        break;

                    case "swiper2-slide-3":

                        gsap.fromTo(".discover",
                            { x: '50%', opacity: 0 },
                            {
                                duration: 1,
                                x: '0%',
                                opacity: 1,
                                ease: 'power1.inOut',
                                delay: 0.3,
                            }
                        );

                        gsap.fromTo(".discover-btn",
                            { y: '60%', opacity: 0 },
                            {
                                duration: 1,
                                y: '0%',
                                opacity: 1,
                                ease: 'power1.inOut',
                                delay: 0.3,
                            }
                        );
                        break;
                    default:

                }
            }

        }
    };

    return (
        <div>
            <Swiper
                onSlideChangeTransitionStart={handleDataSlide2}
                navigation={true}
                parallax={true}
                modules={[Navigation, Pagination]}
                className="swiperInicio"
            >

                { <SwiperSlide className='swiper2-slide-1' style={{
                    position: 'relative',
                    width: '100%',
                    height: '0',
                    paddingBottom: width < 1400 ? '50%' : "43%" 
                }}>

                    <div className="background-swiper1">

                        <div className={`absolute left-[25%] ${width < 980 ? "top-[15%]" : "top-[20%]"} w-full text-white`}>
                            <Image src={"/principal/decorador.png"} width={938}
                                height={342} className={`w-[50%] ${element ? "izquierda" : ""}`} alt='imagen'></Image>
                        </div>


                        <div className={`flex justify-center w-full absolute bottom-[15%] left-0 text-gray`}>


                            <div className={`bg-white rounded-lg text-center inline-block agrande uppercase p-2 ${width < 1000 ? "" : "w-[15%]"}`}>
                                <Link href={"/decorador"}
                                    style={{ fontSize: width < 720 ? "12px" : "15px" }} className={`font-semibold ${element ? "arriba" : ""}`}>Conocer más</Link>
                            </div>
                        </div>


                    </div>
                </SwiperSlide> }



                <SwiperSlide className='swiper2-slide-2' style={{
                    position: 'relative',
                    width: '100%',
                    height: '0',
                    paddingBottom: width < 1400 ? '50%' : "43%"
                }}>
                    <div className="background-swiper3 flex justify-start">


                        <div className={`absolute left-20 ${width < 980 ? "top-[18%] w-[40%]" : "top-[10%] w-[50%]"} text-white `}>
                            <Image src={"/principal/txt_tutoriales.png"} width={938}
                                height={342} className={`tutorials w-full`} alt='imagen'></Image>
                        </div>

                        <div className={`flex justify-center w-full absolute bottom-[15%] left-0 text-gray`}>


                            <div className={`tutorials-btn bg-white rounded-lg inline-block text-center agrande uppercase 
                            p-2 ${width < 1000 ? "" : "w-[15%]"}`}>
                                <Link href={"/tips"}
                                    style={{ fontSize: width < 720 ? "12px" : "15px" }} className='font-semibold'>Ver más</Link>
                            </div>
                        </div>

                    </div>
                </SwiperSlide>



                <SwiperSlide className='swiper2-slide-3' style={{
                    position: 'relative',
                    width: '100%',
                    height: '0',
                    paddingBottom: width < 1400 ? '50%' : "43%"
                }}>
                    <div className="background-swiper2">
                        <div className={`absolute left-[25%] ${width < 980 ? "top-[15%]" : "top-[20%]"} w-full text-white`}>
                            <Image src={"/principal/descubre.png"} width={938}
                                height={342} className={`discover w-[50%]`} alt='imagen'></Image>
                        </div>

                        <div className={`flex justify-center inline-block w-full absolute bottom-[15%] left-0 text-gray`}>


                            <div className={`discover-btn bg-white rounded-lg inline-block text-center agrande uppercase 
                            p-2 ${width < 1000 ? "" : "w-[15%]"}`}>
                                <Link href={"/descubre-tu-color"}
                                    style={{ fontSize: width < 720 ? "12px" : "15px" }} className='font-semibold'>Conocer más</Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>


            </Swiper>
        </div>
    )
}

export default CarruselSecundario
