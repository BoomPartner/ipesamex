import React, { useState, useEffect } from "react";
import {
    Menu,
    MenuHandler,
    MenuList,
    Collapse,
} from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const menuItems = [
    {
        title: "Portal de Clientes",
        enlace: `https://clientes.ipesamex.com`,
    },
    {
        title: "Laboratorio Color Cril",
        enlace: `https://colorcril.app/login`,
    },
];




const NavListMenu = ({openMenu, setOpenMenu}) => {
   
    const [windowWidth, setWindowWidth] = useState(0);

    const renderItems = menuItems.map(({ title, enlace },index) => (
        <div key={index} className="text-left w-full flex md:px-2">
            <Link className={`w-full mt-2 mb-1 uppercase hover:text-[#c50411] `} 
            href={enlace} target="_blank" key={title} style={{fontSize: "12px"}}>
               {title}
            </Link>
        </div>

    ))

    const handleResize = () => {
        const newWindowWidth = window.innerWidth;
        setWindowWidth(newWindowWidth);
        if (newWindowWidth > 959) {
            setOpenMenu(false)
            
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

    return (

        <Menu placement="bottom" open={openMenu} handler={setOpenMenu} >
            <MenuHandler>
                <div
                    variant="text"
                    className={`md:flex lg:flex items-center gap-3 p-0 uppercase
                    tracking-normal cursor-pointer ${openMenu ? "text-[#c50411]" : ""}`}
                    style={{ fontSize: "12px" }}
                >
                    Clientes
                    <FontAwesomeIcon
                        icon={faAngleDown}
                        color=""
                        className={`h-3.5 w-3.5 transition-transform ${openMenu ? "rotate-180" : ""
                            }`}></FontAwesomeIcon>
                </div>
            </MenuHandler>
            {
                windowWidth <= 870 ?
                    <Collapse open={openMenu}>
                        <div className="border-none sinbordenifocus no-underline">{renderItems}</div>
                    </Collapse> :
                    <MenuList className={`hidden grid-cols-1 border-none overflow-visible md:grid lg:grid porarriba sinbordenifocus no-underline`}>
                        <div className="porarriba no-underline border-none sinbordenifocus">
                            {
                                renderItems
                            }
                        </div >
                    </MenuList>
            }

        </Menu>

    );
}

export default NavListMenu