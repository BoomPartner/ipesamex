import React, { useState, useEffect, useContext } from "react";
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
    Card,
    Typography,
    Collapse,
    List,
} from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import globalContext from "@/app/context/globalContext";
const menuItems = [
    {
        title: "Sobre Nosotros",
        enlace: `/nosotros`,
    },
    {
        title: "Preguntas Frecuentes",
        enlace: ``,
    },
    {
        title: "Bolsa de Trabajo",
        enlace: "/bolsa-de-trabajo"
    }
];

const NavListMenu4 = ({ openMenu, setOpenMenu }) => {
    const { handleQuestions, openQuestions, handleNosotros } = useContext(globalContext)

    const [windowWidth, setWindowWidth] = useState(0);

    const renderItems = menuItems.map(({ title, enlace }, index) => (
        <div key={index} className="text-left w-full flex md:px-2 sinbordenifocus">
            <Link className={`w-full mt-2 mb-1 uppercase hover:text-[#c50411] `}
                href={enlace} key={title} style={{ fontSize: "12px" }} onClick={enlace == "" ? handleQuestions : null}>
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
                    Nosotros
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
                        <div className="no-underline border-none">
                            {renderItems}
                        </div>
                    </Collapse> :
                    <MenuList className={`hidden grid-cols-1 border-none overflow-visible md:grid lg:grid porarriba no-underline`}>
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

export default NavListMenu4