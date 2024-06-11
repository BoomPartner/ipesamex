"use client";
import React, {useEffect, useState} from 'react'

const PrincipalDecorador = () => {

    
    const [colores, setColores] = useState(["#cbe7f1", "#feddc8", "#fec979", "#fbe7cd"]);
    const [colorSala, setColorSala] = useState("#e5e2dd");
    const [indice, setIndice] = useState(0);

    useEffect(() => {
        const intervalo = setInterval(() => {
            setColorSala(colores[indice]);
            setIndice((prevIndice) => (prevIndice + 1) % colores.length);
        }, 3000);

        return () => clearInterval(intervalo);
    }, [indice, colores]);

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

    const [windowWidth, setWindowWidth] = useState(0);


    return (

        <div className="w-full sala-principal">

            <svg id="Capa_2" data-name="Capa 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1386.32 697.02">
                <defs>
                    <style>
                        {
                            `.sala-blanca {fill: ${colorSala}};}`
                        }
                    </style>
                </defs>
                <path className="sala-blanca" d="M1371.92,45.99l-1116,.38L202.48,0H0v10.75l33.47,23.12v6.06l196.67,118.61v383.12s6.43,1.67,13.14,7.33c4.69,3.49,10.32,8.36,15.85,14.94,6.79,8.08,11.11,15.96,13.83,22.01,13.68,7.47,27.37,14.95,41.05,22.42l50.53,22.23s72.69,3.54,76.67,11.12c1.33,1.89,1.71,3.41,1.89,7.77.19,4.36,0,44.91,0,44.91h16.11v2.65h46.99v-1.14h-6.63v-106.86s-1.52-1.61,7.58-4.36,28.8-9.95,28.8-9.95c0,0,5.21.09,6.35-12.88,1.14-12.98,4.07-19.71,4.07-19.71,0,0,1.33-6.16,10.89-6.06l9.57.09s-2.21-9.66-5.94-12.88c0,0-.88-3.6,2.34-3.47,3.22.13,6.06,1.77,6.06,1.77,0,0,10.86,3.98,17.49,2.65-.06-3.03,0-13.14,0-13.14h1.07v-.95h69.06v-1.17h2.24v.98h.79v1.01h35.65s7.14-1.58,25.39-1.99v1.04l.88-.06v1.01l1.14.06v-1.01h.98v-1.04l65.97,2.12s59.24,1.89,96.25-.25c.76-.51.38-3.6,9.09-1.86,8.72,1.74,58.11,1.86,58.11,1.86v-2.39l2.02-.52,11.75,2.08h51.82s5.4.38,5.4,6.25v6.63l18.76-3.98s5.21-1.8,4.55,2.27-2.27,13.64-2.27,13.64l20.46,1.14s4.55,1.71,7.11,15.44c2.56,13.74,3.03,21.51,3.03,21.51l33.06,10.42s7.86.66,7.96,7.96,0,73.61,0,73.61c0,0-1.58,3.44-3.22,3.44s60,.13,60,.13l3.16-23.24s-1.39-3.92,11.75-6.19,50.65-6.69,50.65-6.69c0,0,21.09-1.89,28.42-2.15,5.18-2.78,80.08-38.53,80.08-38.53,0,0,11.24-31.33,32.08-41.56,0-6.32,6.32-515.12,6.32-515.12l-14.4,10.99ZM916.8,467.76h-228.13V194.92h228.13v272.84Z" />
            </svg>
        </div>

    )
}

export default PrincipalDecorador
