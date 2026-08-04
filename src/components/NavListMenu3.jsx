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
        title: "Decorador",
        enlace: "/decorador",
    },
    {
        title: "Descubre tu color",
        enlace: "/descubre-tu-color",
    },
    {
        title: "Tutoriales y Tips",
        enlace: `/tips`,
    },
    {
        title: "Colores",
        enlace: `/colores`,
    },
     
    {
        title: "Sistema Tintometrico",
        enlace: "/sistema-tintometrico"
    },
    {
        title: "Novedades",
        enlace: "/novedades"
    },
   
];


const NavListMenu3 = ({openMenu, setOpenMenu, isMobile}) => {

    const renderItems = menuItems.map(({ title, enlace },index) => (
        <div key={index} className="text-left w-full flex md:px-2 sinbordenifocus">
            <Link className={`w-full mt-2 mb-1 uppercase hover:text-[#c50411] `} 
            href={enlace} key={title} style={{fontSize: "12px"}}>
               {title}
            </Link>
        </div>

    ))

    return (

        <Menu placement="bottom" open={openMenu} handler={setOpenMenu} >
            <MenuHandler>
                <div
                    variant="text"
                    className={`md:flex lg:flex items-center gap-3 p-0 uppercase
                    tracking-normal cursor-pointer ${openMenu ? "text-[#c50411]" : ""}`}
                    style={{ fontSize: "12px" }}
                >
                    Color
                    <FontAwesomeIcon
                        icon={faAngleDown}
                        color=""
                        className={`h-3.5 w-3.5 transition-transform ${openMenu ? "rotate-180" : ""
                            }`}></FontAwesomeIcon>
                </div>
            </MenuHandler>
            {
                isMobile ?
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

export default NavListMenu3
