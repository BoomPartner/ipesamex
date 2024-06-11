"use client";
import React, { useState, useEffect, useContext } from 'react'
import { NavbarResponsive } from '@/components/Navbar'
import Isotipo from '@/components/Isotipo';
import Footer from '@/components/Footer'
import ChatBot from '@/components/ChatBot';
import GlobalState from './context/GlobalState';
export const Provider = ({ children }) => {

    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1300);

        return () => clearTimeout(timer);
    }, []);


    return (
        <GlobalState>

            <div className='w-full'>
                {loading ? <Isotipo /> :
                    <div>
                        <NavbarResponsive></NavbarResponsive>
                        {children}
                            <ChatBot></ChatBot>
                         <Footer></Footer>
                    </div>
                }

            </div>
        </GlobalState>
    )
}


