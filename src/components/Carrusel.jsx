"use client";
import React, {useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {
    Typography,
} from '@material-tailwind/react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';

const Carrusel = ({ width }) => {

    const handleCategoria = (event) => {
        const localcategoria = localStorage.getItem('categoria');
        const localmicrocategoria = localStorage.getItem('microcategoria');
        if (localcategoria || localmicrocategoria) {
            localStorage.removeItem('categoria');
            localStorage.removeItem('microcategoria');
        }
        localStorage.setItem("categoria", event);
    }

    const handleDataSlide = (event) => {
        const activeSlide = event.slides.find(slide => slide.classList.contains('swiper-slide-active'));

        if (activeSlide) {
            const classList = activeSlide.className.split(' ');
            const prueba = classList.find(cls => cls.startsWith('swiper-slide-'));


            switch (prueba) {


                case "swiper-slide-promo":
                    gsap.fromTo('.swiper-slide-promo .promo1', {
                        y: '100%',
                        opacity: 0,
                    }, {
                        y: '0%',
                        opacity: 1,
                        ease: 'back.out(2.7)',
                        duration: 1,

                    });
                    gsap.fromTo('.promo2', {
                        x: '50%',
                        opacity: 0,
                    }, {
                        x: '0%',
                        opacity: 1,
                        ease: 'power3.out',
                        duration: 1,
                        delay: 0.5,
                    });

                    gsap.fromTo('.promo3', {
                        scale: 0,
                        opacity: 0,
                    }, {
                        scale: 1,
                        opacity: 1,
                        ease: 'power3.out',
                        duration: 1,
                        delay: 1
                    });

                    gsap.fromTo('.promo4', {
                        x: '100%',
                        opacity: 0,
                    }, {
                        x: '0%',
                        opacity: 1,
                        ease: 'power3.out',
                        duration: 1,
                        delay: 1
                    });
                    gsap.fromTo('.promo5', {
                        scale: 0,
                        opacity: 0,
                    }, {
                        scale: 1,
                        opacity: 1,
                        ease: 'power3.out',
                        duration: 1,
                        delay: 1
                    });
                    gsap.fromTo('.promo6', {
                        x: '-100%',
                        opacity: 0,
                    }, {
                        x: '0%',
                        opacity: 1,
                        ease: 'power3.out',
                        duration: 1,
                        delay: 1
                    });



                    break;

                case "swiper-slide-2":
                    gsap.fromTo('.swiper-slide-2 .bote-vintek', {
                        x: '100%',
                        opacity: 0,
                    }, {
                        x: '0%',
                        opacity: 1,
                        ease: 'back.out(2.7)',
                        duration: 1,
                        onComplete: () => {
                            gsap.to('.bote-vintek', {
                                y: '-10px',
                                repeat: -1, 
                                yoyo: true, 
                                ease: 'sine.inOut', 
                                duration: 3.5
                            });
                        }
                    });
                    gsap.fromTo('.vintek-text-1', {
                        y: '50%',
                        opacity: 0,
                    }, {
                        y: '0%',
                        opacity: 1,
                        ease: 'power3.out',
                        duration: 1,
                        delay: 0.5,
                    });

                    gsap.fromTo('.vintek-text-2', {
                        y: '50%',
                        opacity: 0,
                    }, {
                        y: '0%',
                        opacity: 1,
                        ease: 'power3.out',
                        duration: 1,
                        delay: 1 
                    });

                    gsap.fromTo('.vintek-text-3', {
                        y: '50%',
                        opacity: 0,
                    }, {
                        y: '0%',
                        opacity: 1,
                        ease: 'power3.out',
                        duration: 0.5,
                        delay: 1
                    });



                    break;

                case "swiper-slide-3":
                    gsap.fromTo('.swiper-slide-3 .bote-realtek', {
                        y: '100%',
                        opacity: 0,
                    }, {
                        y: '0%',
                        opacity: 1,
                        ease: 'back.out(2.7)',
                        duration: 1,
                        onComplete: () => {
                            
                            gsap.to('.bote-realtek', {
                                y: '-10px', 
                                repeat: -1, 
                                yoyo: true, 
                                ease: 'sine.inOut', 
                                duration: 3.5 
                            });
                        }
                    });

                    gsap.fromTo('.text-realtek-1', {
                        y: '50%',
                        opacity: 0,
                    }, {
                        y: '0%',
                        opacity: 1,
                        ease: 'power3.out',
                        duration: 1,
                        delay: 0.5,
                    });

                    gsap.fromTo('.text-realtek-2', {
                        y: '50%',
                        opacity: 0,
                    }, {
                        y: '0%',
                        opacity: 1,
                        ease: 'power3.out',
                        duration: 1,
                        delay: 1
                    });

                    gsap.fromTo('.text-realtek-3', {
                        y: '50%',
                        opacity: 0,
                    }, {
                        y: '0%',
                        opacity: 1,
                        ease: 'power3.out',
                        duration: 0.5,
                        delay: 1 
                    });
                    break;

                case "swiper-slide-4":
                    gsap.fromTo('.swiper-slide-4 .bote-automotriz', {
                        x: '100%',
                        opacity: 0,
                    }, {
                        x: '0%',
                        opacity: 1,
                        ease: 'back.out(2.7)',
                        duration: 1,
                        onComplete: () => {
                            
                            gsap.to('.bote-automotriz', {
                                y: '-20px',
                                repeat: -1, 
                                yoyo: true,
                                ease: 'sine.inOut', 
                                duration: 3.5 
                            });
                        }
                    });
                    gsap.fromTo('.text-automotriz-1', {
                        y: '50%',
                        opacity: 0,
                    }, {
                        y: '0%',
                        opacity: 1,
                        ease: 'power3.out',
                        duration: 1,
                        delay: 0.5,
                    });

                    gsap.fromTo('.text-automotriz-2', {
                        y: '50%',
                        opacity: 0,
                    }, {
                        y: '0%',
                        opacity: 1,
                        ease: 'power3.out',
                        duration: 1,
                        delay: 1
                    });

                    gsap.fromTo('.text-automotriz-3', {
                        y: '50%',
                        opacity: 0,
                    }, {
                        y: '0%',
                        opacity: 1,
                        ease: 'power3.out',
                        duration: 0.5,
                        delay: 1 
                    });
                    break;
                default:

            }
        }
    };

    useEffect(() => {

        gsap.fromTo('.swiper-slide-promo .promo1', {
            scale: 0,
            opacity: 0,
        }, {
            scale: 1,
            opacity: 1,
            ease: 'elastic.out(1, 0.6)', 
            duration: 3,
            onComplete: function () {
                
                gsap.to('.swiper-slide-promo .promo1', {
                    y: '+=10', 
                    x: 'random(-10, 10)', 
                    rotation: 'random(-5, 5)', 
                    repeat: -1,
                    yoyo: true, 
                    ease: 'power1.inOut',
                    duration: 4, 
                });
            }
        });

        gsap.fromTo('.promo2', {
            scale: 0,
            opacity: 0,
        }, {
            scale: 1,
            opacity: 1,
            ease: 'power3.out',
            duration: 1,
            delay: 0.5,
            onComplete: function () {
                
                gsap.to('.swiper-slide-promo .promo2', {
                    y: '+=10', 
                    x: gsap.utils.random(-10,10,true), // Moverse aleatoriamente en el eje X
                    rotation: gsap.utils.random(-5, 5,true), // Rotación aleatoria
                    repeat: -1, // Animación infinita
                    yoyo: true, // Reversa de la animación
                    ease: 'power1.inOut', // Suavizado
                    duration: 3, // Duración aleatoria
                });
            }
        });

        gsap.fromTo('.promo3', {
            scale: 0,
            opacity: 0,
        }, {
            scale: 1,
            opacity: 1,
            ease: 'power3.out',
            duration: 1,
            delay: 1,
            onComplete: function () {
               
                gsap.to('.swiper-slide-promo .promo3', {
                    y: '+=10', 
                    x: gsap.utils.random(-10,10,true), 
                    rotation: gsap.utils.random(-5, 5,true), 
                    repeat: -1,
                    yoyo: true, 
                    ease: 'power1.inOut', 
                    duration: 4, 
                });
            }
        });


        gsap.fromTo('.promo4', {
            x: '100%',
            opacity: 0,
        }, {
            x: '0%',
            opacity: 1,
            ease: 'power3.out',
            duration: 1,
            delay: 1,
            onComplete: function() {
               
                const tl = gsap.timeline({ repeat: -1, yoyo: true, ease: 'power1.inOut' });
        
                tl.to('.swiper-slide-promo .promo4', {
                    scale: 1.0, 
                    duration: 2,
                }).to('.swiper-slide-promo .promo4', {
                    scale: 1.02, 
                    duration: 0.8, 
                })
            }
        });
        gsap.fromTo('.promo5', {
            scale: 0,
            opacity: 0,
        }, {
            scale: 1,
            opacity: 1,
            ease: 'power3.out',
            duration: 1,
            delay: 1
        });
        gsap.fromTo('.promo6', {
            x: '-100%',
            opacity: 0,
        }, {
            x: '0%',
            opacity: 1,
            ease: 'power3.out',
            duration: 1,
            delay: 1
        });
        gsap.fromTo('.promo7', {
            scale: 0,
            opacity: 0,
        }, {
            scale: 1,
            opacity: 1,
            ease: 'power3.out',
            duration: 2,
            delay: 1 
        });
        gsap.fromTo('.promo8', {
            scale: 0,
            opacity: 0,
        }, {
            scale: 1,
            opacity: 1,
            ease: 'power3.out',
            duration: 1,
            delay: 1 
        });

    }, [])



    return (
        <div>
            <Swiper
                
               
                onSlideChangeTransitionStart={handleDataSlide}
                className="swiperInicio"
            >

                <SwiperSlide className='swiper-slide-promo' style={{
                    position: 'relative',
                    width: '100%',
                    height: '0',
                    paddingBottom: width < 720 ? '50%' : "40%" 
                }}>
                    <div className="fondoPromociones" >

                        <Image src={"/promociones/caida_cielo/01.png"}
                            className={`absolute left-[50%] w-[20%] top-[10%] promo2`}
                            width={1000} height={1000} alt='vintek'>
                        </Image>

                        <Image src={"/promociones/caida_cielo/02.png"}
                            className={`absolute right-[9%] w-[30%] top-[30%] promo1`}
                            width={1000} height={1000} alt='vintek'>
                        </Image>

                        <Image src={"/promociones/caida_cielo/03.png"}
                            className={`absolute right-[0%] w-[20%] top-[10%] promo3`}
                            width={1000} height={1000} alt='vintek'>
                        </Image>

                        <Image src={"/promociones/caida_cielo/04.png"}
                            className={`absolute left-[15%] w-[25%] top-[15%] promo4`}
                            width={1000} height={1000} alt='vintek'>
                        </Image>
                        <Image src={"/promociones/caida_cielo/txt.png"}
                            className={`absolute left-[15%] w-[25%] bottom-[10%] promo5`}
                            width={1000} height={1000} alt='vintek'>
                        </Image>


                        <div className="w-full absolute bottom-[5%] left-10 flex justify-center promo8">
                            <div className="inline-block agrande">

                                <Link href={`/novedades`} className={` text-black hover:scale-110 transition-all duration-500 bg-white p-3 rounded-lg texto font-semibold uppercase ${width < 600 ? "" : "px-10"}`}>Ver Promoción</Link>

                            </div>
                        </div>



                    </div>
                </SwiperSlide>

                <SwiperSlide className='swiper-slide-1' style={{
                    position: 'relative',
                    width: '100%',
                    height: '0',
                    paddingBottom: width < 720 ? '50%' : "45%"
                }}>

                    <div className="absolute background-carrusel1">

                    </div>

                </SwiperSlide>

                <SwiperSlide className='swiper-slide-2' style={{
                    position: 'relative',
                    width: '100%',
                    height: '0',
                    paddingBottom: width < 720 ? '50%' : "43%"
                }}>
                    <div className="background-carrusel2" >

                        <Image src={"/articulos/vinilicas/vintek.png"} className={`bote-vintek absolute left-[5%] bottom-5 w-[18%]`} width={1000} height={1000} alt='vintek'>
                        </Image>
                        <div className={`flex items-center w-[50%] md:w-[45%] md:ml-[20%] ${width < 842 ? "" : "mt-[5%]"} h-full
                         items-start md:items-center justify-center absolute ${width < 720 ? "top-[2%] left-[25%]" : "top-[20%]"}`}>
                            <div className='w-[90%] ml-10'>

                                <Typography as={'h3'} variant={width < 1068 ? "h6" : "h3"} color='white'
                                    className={`text-left vintek-text-1`}>
                                    <div className="w-full flex">
                                        <strong>VINTEK</strong>
                                        <p style={{ fontSize: "16px" }}> ®</p> </div> La pintura de los profesionales.

                                </Typography>
                                <p className={`text-left text-white mt-5 parrafo vintek-text-2`} style={{ fontSize: width < 590 ? "12px" : "16px" }}>Pintura vinil acrílica súper brillante de extraordinario desempeño y lavabilidad, ideal para espacios interiores y exteriores.</p>
                                <div className={`agrande inline-block mt-5 md:mt-10 vintek-text-3 `}>
                                    <Link href={`/productos`} className={`text-black bg-white p-3 rounded-lg texto font-semibold ${width < 600 ? "" : "px-10"}`}>CONOCER MÁS</Link>
                                </div>

                            </div>
                        </div>


                    </div>
                </SwiperSlide>

                <SwiperSlide className='swiper-slide-3' style={{
                    position: 'relative',
                    width: '100%',
                    height: '0',
                    paddingBottom: width < 720 ? '50%' : "43%" 
                }}>
                    <div className="background-carrusel3
                     flex justify-start relative">

                        <Image src={"/articulos/vinilicas/realtek.png"} className={`bote-realtek absolute mx-auto bottom-5 left-[42%] w-[18%]`}
                            width={1000} height={1000} alt='realtek'></Image>

                        <div className={`flex w-[43%] items-end h-full justify-start`}>
                            <div className={`w-full ml-16 ${width < 1080 ? "" : "mb-32"}`}>


                                <Typography as={'h3'} variant={width < 850 ? "h6" : "h3"} color='white' className={`text-left text-realtek-1`}>
                                    <div className="w-full flex">
                                        <strong>REALTEK</strong>
                                        <p style={{ fontSize: "16px" }}> ®</p>
                                    </div>
                                    La pintura de los conocedores. <br />

                                </Typography>
                                <p className={`mt-5 text-white text-left parrafo text-realtek-2`} style={{ fontSize: width < 590 ? "12px" : "16px" }}>Pintura vinil acrílica semi mate de excelente calidad y durabilidad, ideal para espacios interiores y exteriores.</p>

                                <div className={`md:mt-10 mt-5 text-left agrande inline-block text-realtek-3`}>
                                    <Link href={`/productos`} className={`text-black bg-white p-3 rounded-lg texto font-semibold ${width < 600 ? "" : "px-10"}`}>CONOCER MÁS</Link>
                                </div>

                            </div>
                        </div>

                    </div>
                </SwiperSlide>

                <SwiperSlide className='swiper-slide-4' style={{
                    position: 'relative',
                    width: '100%',
                    height: '0',
                    paddingBottom: width < 720 ? '50%' : "43%" 
                }}>
                    <div className="w-full background-carrusel4 flex justify-center relative">

                        <Image src={"/articulos/automotriz/base_color.png"} className='bote-automotriz absolute bottom-0 left-[10%] w-[18%]'
                            width={300} height={300} alt='automotriz'></Image>


                        <div className={`flex w-[40%] h-full items-end justify-start`}>
                            <div className={`w-full mb-10`}>
                                <Typography as={'h3'} variant={width < 850 ? "h6" : "h3"} color='white' className={`text-left text-automotriz-1`}>
                                    <div className="w-full flex">
                                        <strong>COLOR CRIL</strong>
                                        <p style={{ fontSize: "13px" }}> ®</p>

                                    </div>
                                    Repintado automotriz
                                </Typography>
                                <p className={`mt-5 text-left text-white parrafo text-automotriz-2`} style={{ fontSize: width < 590 ? "12px" : "16px" }}>Contamos con la línea de repintado automotriz, la cual está constituida por una amplia gama de productos.</p>

                                <div className={`mt-5 inline-block agrande text-automotriz-3`}>
                                    <Link onClick={() => handleCategoria("automotriz")} href={`/productos`} className={`text-black bg-white p-3 rounded-lg uppercase texto font-semibold ${width < 600 ? "" : "px-10"}`}>Conocer más</Link>
                                </div>

                            </div>
                        </div>

                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    )
}

export default Carrusel
