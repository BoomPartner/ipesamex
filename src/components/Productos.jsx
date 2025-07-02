"use client";
import React, { useState, useEffect, useContext, Suspense } from 'react'
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTurnUp } from '@fortawesome/free-solid-svg-icons';
import Isotipo from './Isotipo';
import 'swiper/css';
import { articulos } from '@/components/server';
import { Card, Typography, Accordion, AccordionHeader, AccordionBody, List, ListItem, ListItemPrefix, Checkbox, Collapse } from '@material-tailwind/react';
import Link from 'next/link';
import globalContext from '@/app/context/globalContext';
const Productos = () => {
    const valorCategoria = localStorage.getItem("categoria")
    const [categorie, setCategorie] = useState(valorCategoria)
    const [fondos, setFondos] = useState()
    const [microcategorie, setMicroCategorie] = useState(null);
    const [displayData, setDisplayData] = useState([]);
    const itemsPerPage = 18;
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0)
    const [openMain, setOpenMain] = useState(0);
    const [windowWidth, setWindowWidth] = useState(0);
    const [paginadovista, setPaginadoVista] = useState(null)
    const { handleIdProducto, idProducto } = useContext(globalContext)

    const [subDecorativa, setSubDecorativa] = useState([
        {
            id: "vinilicas",
            micro: "Selladores",
            microStatus: true,
            checked: false,
            label: "Acrílicas / Vinílicas"
        },
        {
            id: "esmaltes",
            micro: "Primarios",
            microStatus: true,
            checked: false,
            label: "Esmaltes"
        },
        {
            id: "aerosoles",
            micro: "",
            microStatus: false,
            checked: false,
            label: "Aerosoles"
        },
        {
            id: "impermeabilizantes",
            micro: "",
            microStatus: false,
            checked: false,
            label: "Impermeabilizantes"
        },
        {
            id: "industriales",
            micro: "",
            microStatus: false,
            checked: false,
            label: "Industrial"
        },
        {
            id: "adhesivos",
            micro: "",
            microStatus: false,
            checked: false,
            label: "Adhesivos"
        }

    ])

    const [subMaderas, setSubMaderas] = useState([
        {
            id: "selladores_maderas",
            micro: null,
            checked: false,
            label: "Selladores"
        },
        {
            id: "lacas",
            micro: null,
            checked: false,
            label: "Lacas"
        },
        {
            id: "tintas",
            micro: null,
            checked: false,
            label: "Tintas"
        },
        {
            id: "barnices",
            micro: null,
            checked: false,
            label: "Barnices"
        },
        {
            id: "poliuretano",
            micro: null,
            checked: false,
            label: "Poliuretanos"
        }
    ])

    const [subAutomotriz, setSubAutomotriz] = useState([
        {
            id: "esmaltes_auto",
            micro: null,
            checked: false,
            label: "Esmaltes"
        },
        {
            id: "laca_acrilica",
            micro: null,
            checked: false,
            label: "Laca Acrilica"
        },
        {
            id: "basecolor",
            micro: null,
            checked: false,
            label: "Base Color"
        },
        {
            id: "primers",
            micro: null,
            checked: false,
            label: "Primers"
        },
        {
            id: "rellenadores",
            micro: null,
            checked: false,
            label: "Rellenadores"
        },
        {
            id: "perlas",
            micro: null,
            checked: false,
            label: "Perlas"
        },
        {
            id: "transparentes",
            micro: null,
            checked: false,
            label: "Transparentes"
        },
        {
            id: "hd",
            micro: null,
            checked: false,
            label: "Endurecedores y Aditivos"
        },{
            id: "reductores",
            micro: null,
            checked: false,
            label: "Reductores"
        },{
            id: "pulimentos",
            micro: null,
            checked: false,
            label: "Pulimentos/Abrillantadores"

        }
    ])

    const [subFerretera, setSubFerretera] = useState([
        {
            id: "pinturas_ferre",
            microStatus: false,
            checked: false,
            label: "Vínilicas"
        },
        {
            id: "esmaltes_ferre",
            micro: "primarios_ferre",
            microLabel: "Primarios",
            microStatus: true,
            checked: false,
            label: "Esmaltes"
        },

        {
            id: "madera_ferre",
            microStatus: false,
            checked: false,
            label: "Maderas"
        },
    ])


    // Función para capturar el ancho de la ventana al redimensionar
    const handleResize = () => {
        const newWindowWidth = window.innerWidth;
        setWindowWidth(newWindowWidth);
        // console.log('Ancho de la ventana:', newWindowWidth);
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


    const toggleOpen = (value) => {
        if (value === "primarios_ferre") {
            // Crear una copia del estado actual para modificar
            const updatedFerretera = subFerretera.map((item) => {
                // Verificar si el valor coincide con el atributo 'micro'
                if (item.micro === value && item.micro !== "") {
                    // Invertir el valor de 'microStatus'
                    return { ...item, microStatus: !item.microStatus };
                }
                // Devolver el elemento sin cambios si no hay coincidencia
                return item;
            });

            // Establecer el nuevo estado con la copia modificada
            setSubFerretera(updatedFerretera);
        } else {
            // Crear una copia del estado actual para modificar
            const updatedSubDecorativa = subDecorativa.map((item) => {
                // Verificar si el valor coincide con el atributo 'micro'
                if (item.micro === value && item.micro !== "") {
                    // Invertir el valor de 'microStatus'
                    return { ...item, microStatus: !item.microStatus };
                }
                // Devolver el elemento sin cambios si no hay coincidencia
                return item;
            });

            // Establecer el nuevo estado con la copia modificada
            setSubDecorativa(updatedSubDecorativa);
        }
    };

    const goToPage = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    function Icon({ id, open }) {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
        );
    }



    const handleSelladores = (value) => {
        const val = value.toLowerCase();
        localStorage.setItem("microcategoria", val)
        setCurrentPage(1)
        setSubDecorativa(subDecorativa.map(decorativa => ({ ...decorativa, checked: false })));
        setSubMaderas(subMaderas.map(subMaderas => ({ ...subMaderas, checked: false })));
        setSubAutomotriz(subAutomotriz.map(automotriz => ({ ...automotriz, checked: false })));
        setSubFerretera(subFerretera.map(ferretera => ({ ...ferretera, checked: false })));
        const filteredData = articulos.filter(articulo => articulo.microcategorie === val);
        const totalPaginas = Math.ceil(filteredData.length / itemsPerPage);
        setTotalPages(totalPaginas)
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const newData = filteredData.slice(startIndex, endIndex);
        setDisplayData(newData);

    }


    const handleOpenMain = (value) => {
        const localcategoria = localStorage.getItem('categoria');
        const localmicrocategoria = localStorage.getItem('microcategoria');
        if (value == 3) {
            setPaginadoVista(false)
        } else {
            setPaginadoVista(true)
        }


        if (localcategoria && localmicrocategoria) {
            localStorage.removeItem('categoria');
            localStorage.removeItem('microcategoria');
        }
        localStorage.setItem("categoria", value == 1 ? "decorativa" : value == 2 ? "automotriz" : value == 3 ? "ferretera" : value == 4 ? "maderas" : null);

        setCurrentPage(1)
        setCategorie(value == 1 ? "decorativa" : value == 2 ? "automotriz" : value == 3 ? "ferretera" : value == 4 ? "maderas" : null)
        setFondos(value == 1 ? "decorativa" : value == 2 ? "automotriz" : value == 3 ? "ferretera" : value == 4 ? "maderas" : null)
        setOpenMain(openMain === value ? 0 : value)
        setSubDecorativa(subDecorativa.map(decorativa => ({ ...decorativa, checked: false })));
        setSubMaderas(subMaderas.map(subMaderas => ({ ...subMaderas, checked: false })));
        setSubAutomotriz(subAutomotriz.map(automotriz => ({ ...automotriz, checked: false })));
        setSubFerretera(subFerretera.map(ferretera => ({ ...ferretera, checked: false })));
        setMicroCategorie(null)
    };



    const handleClickCategoria = (categorie) => {
        setPaginadoVista(false)
        if (categorie == "vinilicas" || categorie == "esmaltes" || categorie == "aerosoles" ||
            categorie == "impermeabilizantes" || categorie == "industriales" || categorie == "adhesivos") {

            switch (categorie) {
                case "vinilicas":
                    setFondos("vinilicas")
                    localStorage.setItem("microcategoria", "vinilicas");
                    break;
                case "esmaltes":
                    setFondos("esmaltes")
                    localStorage.setItem("microcategoria", "esmaltes");
                    break;
                case "aerosoles":
                    setFondos("aerosoles")
                    localStorage.setItem("microcategoria", "aerosoles");
                    break;
                case "impermeabilizantes":
                    setFondos("impermeabilizantes")
                    localStorage.setItem("microcategoria", "impermeabilizantes");
                    break;
                case "industriales":
                    setFondos("industriales")
                    localStorage.setItem("microcategoria", "industriales");
                    break;
                case "adhesivos":
                    setFondos("adhesivos")
                    localStorage.setItem("microcategoria", "adhesivos");
                    break;
                default:
                    break;
            }

            setMicroCategorie(categorie)
            setSubDecorativa((prevCheckboxes) =>
                prevCheckboxes.map((checkbox) =>
                    checkbox.id === categorie ? { ...checkbox, checked: !checkbox.checked } :
                        { ...checkbox, checked: false }
                )
            );
        }

        if (categorie == "selladores_maderas" || categorie == "lacas" || categorie == "tintas" || categorie == "barnices" ||
            categorie == "poliuretano") {
            switch (categorie) {
                case "tintas":
                    setFondos("tintas")
                    localStorage.setItem("microcategoria", "tintas");
                    break;
                case "selladores_maderas":
                    setFondos("selladores_maderas")
                    localStorage.setItem("microcategoria", "selladores_maderas");
                    break;
                case "lacas":
                    setFondos("lacas")
                    localStorage.setItem("microcategoria", "lacas");
                    break;
                case "barnices":
                    setFondos("barnices")
                    localStorage.setItem("microcategoria", "barnices");
                    break;
                case "poliuretano":
                    setFondos("poliuretano")
                    localStorage.setItem("microcategoria", "poliuretano");
                    break;

                default:
                    break;
            }
            setSubMaderas((prevCheckboxes) =>
                prevCheckboxes.map((checkbox) =>
                    checkbox.id === categorie ? { ...checkbox, checked: !checkbox.checked } : { ...checkbox, checked: false }
                )
            );
        }

        if (categorie == "primers" || categorie == "rellenadores" ||
            categorie == "perlas" || categorie == "transparentes" ||
            categorie == "hd" || categorie == "reductores" ||
            categorie == "esmaltes_auto" || categorie == "basecolor" || categorie == "laca_acrilica" || categorie == "pulimentos") {

            switch (categorie) {

                case "esmaltes_auto":
                    setFondos("esmaltes_auto")
                    localStorage.setItem("microcategoria", "esmaltes_auto");
                    break;
                case "primers":
                    setFondos("primers")
                    localStorage.setItem("microcategoria", "primers");
                    break;
                case "rellenadores":
                    setFondos("rellenadores")
                    localStorage.setItem("microcategoria", "rellenadores");
                    break;
                case "perlas":
                    setFondos("perlas")
                    localStorage.setItem("microcategoria", "perlas");
                    break;
                case "transparentes":
                    setFondos("transparentes")
                    localStorage.setItem("microcategoria", "transparentes");
                    break;
                case "hd":
                    setFondos("hd")
                    localStorage.setItem("microcategoria", "hd");
                    break;
                case "reductores":
                    setFondos("reductores")
                    localStorage.setItem("microcategoria", "reductores");
                    break;

                case "basecolor":
                    setFondos("basecolor")
                    localStorage.setItem("microcategoria", "basecolor");
                    break;

                case "laca_acrilica":
                    setFondos("laca_acrilica")
                    localStorage.setItem("microcategoria", "laca_acrilica");
                    break;

                    case "pulimentos":
                        setFondos("pulidores")
                        localStorage.setItem("microcategoria", "pulimentos");
                        break;    

                default:
                    break;
            }

            setSubAutomotriz((prevCheckboxes) =>
                prevCheckboxes.map((checkbox) =>
                    checkbox.id === categorie ? { ...checkbox, checked: !checkbox.checked } : { ...checkbox, checked: false }
                ));

        }

        if (categorie == "pinturas_ferre" || categorie == "esmaltes_ferre" || categorie == "primarios_ferre" ||
            categorie == "madera_ferre") {
            switch (categorie) {
                case "pinturas_ferre":
                    setFondos("pinturas_ferre")
                    localStorage.setItem("microcategoria", "pinturas_ferre");
                    break;
                case "esmaltes_ferre":
                    setFondos("esmaltes_ferre")
                    localStorage.setItem("microcategoria", "esmaltes_ferre");
                    break;
                case "primarios_ferre":
                    setFondos("primario_ferre")
                    localStorage.setItem("microcategoria", "primarios_ferre");
                    break;
                case "madera_ferre":
                    setFondos("madera_ferre")
                    localStorage.setItem("microcategoria", "madera_ferre");
                    break;

                default:
                    break;
            }
            setSubFerretera((prevCheckboxes) =>
                prevCheckboxes.map((checkbox) =>
                    checkbox.id === categorie ? { ...checkbox, checked: !checkbox.checked } : { ...checkbox, checked: false, microStatus: true }
                )
            );
        }

        setCurrentPage(1)
        const filteredData = articulos.filter(articulo => articulo.microcategorie === categorie);
        const totalPaginas = Math.ceil(filteredData.length / itemsPerPage);
        setTotalPages(totalPaginas)
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const newData = filteredData.slice(startIndex, endIndex);
        setDisplayData(newData);
    }


    useEffect(() => {
        const localcategoria = localStorage.getItem('categoria');
        const localmicrocategoria = localStorage.getItem('microcategoria');

        if (localcategoria) {

            if (localmicrocategoria) {
                setFondos(localmicrocategoria == "selladores" ? "vinilicas" : localmicrocategoria == "primarios" ? "esmaltes" : localmicrocategoria == "primarios_ferre" ? "esmaltes_ferre" : localmicrocategoria)
                if (articulos) {
                    const filter = articulos.filter(item => item.microcategorie == localmicrocategoria)
                    const totalPaginas = Math.ceil(filter.length / itemsPerPage);
                    setTotalPages(totalPaginas)
                    const startIndex = (currentPage - 1) * itemsPerPage;
                    const endIndex = startIndex + itemsPerPage;
                    const newData = filter.slice(startIndex, endIndex);
                    setDisplayData(newData);
                }
            } else {
                setFondos(localcategoria)
                if (articulos) {
                    const filter = articulos.filter(item => item.categorie == localcategoria)
                    const totalPaginas = Math.ceil(filter.length / itemsPerPage);
                    setTotalPages(totalPaginas)
                    const startIndex = (currentPage - 1) * itemsPerPage;
                    const endIndex = startIndex + itemsPerPage;
                    const newData = filter.slice(startIndex, endIndex);
                    setDisplayData(newData);
                }
            }
            switch (localcategoria) {
                case "decorativa":
                    if (localmicrocategoria == "selladores") {
                        setSubDecorativa((prevCheckboxes) =>
                            prevCheckboxes.map((checkbox) => {
                                if (checkbox.id === "vinilicas") {
                                    return {
                                        ...checkbox,
                                        checked: true,
                                        microStatus: true
                                    };
                                }
                                return checkbox;
                            })
                        );
                    }
                    if (localmicrocategoria == "primarios") {
                        setSubDecorativa((prevCheckboxes) =>
                            prevCheckboxes.map((checkbox) => {
                                if (checkbox.id == "esmaltes") {
                                    return {
                                        ...checkbox,
                                        checked: true,
                                        microStatus: true
                                    };
                                }
                                return checkbox;
                            })
                        );

                    }
                    setOpenMain(1)

                    if (localmicrocategoria !== "primarios" || localmicrocategoria !== "selladores") {
                        setSubDecorativa((prevCheckboxes) =>
                            prevCheckboxes.map((checkbox) =>
                                checkbox.id === localmicrocategoria ? { ...checkbox, checked: true } : { ...checkbox, checked: false }
                            )

                        );
                    }
                    break;

                case "automotriz":
                    setOpenMain(2)
                    setSubAutomotriz((prevCheckboxes) =>
                        prevCheckboxes.map((checkbox) =>
                            checkbox.id === localmicrocategoria ? { ...checkbox, checked: true } : { ...checkbox, checked: false }
                        ));

                    break;
                case "ferretera":
                    setOpenMain(3)
                    if (localmicrocategoria == "primarios_ferre") {
                        setSubFerretera((prevCheckboxes) =>
                            prevCheckboxes.map((checkbox) => {
                                if (checkbox.id === "esmaltes_ferre") {
                                    return {
                                        ...checkbox,
                                        checked: true,
                                        microStatus: true
                                    };
                                }
                                return checkbox;
                            })
                        );
                    }

                    if (localmicrocategoria !== "primarios_ferre") {
                        setSubFerretera((prevCheckboxes) =>
                            prevCheckboxes.map((checkbox) =>
                                checkbox.id === localmicrocategoria ? { ...checkbox, checked: true } : { ...checkbox, checked: false }
                            )
                        );
                    }

                    break;
                
                default:
                    break;
            }

        } else {



            switch (categorie) {
                case "decorativa":
                    setOpenMain(1)

                    break;
                case "automotriz":
                    setOpenMain(2)
                    break;
                case "ferretera":
                    setOpenMain(3)

                    break;
                
                default:
                    break;
            }

        }

    }, [categorie, currentPage, articulos, itemsPerPage]);



    const backgroundStyle = {
        width: '100%',
        paddingBottom: '44.25%', 
        backgroundImage: `url('/fondos_categorias/${fondos}.webp')`,
        backgroundSize: "100% 100%",
        backgroundRepeat: 'no-repeat',
    };


    return (
        <>
            {
                categorie &&
                <section className={`w-full h-full bg-opacity-10 bg-[url('/principal/waves.jpg')] bg-cover bg-center bg-no-repeat`}>

                    <div className={`w-full ${windowWidth < 940 ? "block" : "flex"}`}>

                        <div className={`${windowWidth < 940 ? "w-full h-full" : "w-[30%] sticky top-0"} p-10`}>

                            <div className={`mt-32 ${windowWidth < 940 ? "w-[80%]" : "w-full"}`}>
                               
                                <Accordion open={openMain === 1} icon={<Icon id={1} open={openMain} />}>
                                    <AccordionHeader onClick={() => handleOpenMain(1)} className='uppercase'
                                        style={{ fontSize: "17px", fontWeight: "bold" }}>Decorativa</AccordionHeader>
                                    <AccordionBody>
                                        {
                                            subDecorativa?.map((vinil) => (
                                                <>

                                                    <ListItem key={vinil.id} className="p-2" onClick={() => handleClickCategoria(vinil.id)}>

                                                        <ListItemPrefix key={`vinilcheck-${vinil.id}`} className="mr-3">
                                                            <Checkbox
                                                                id={vinil.id}
                                                                checked={vinil.checked}
                                                                ripple={false}
                                                                className="hover:before:opacity-0"
                                                                containerProps={{
                                                                    className: "p-0",
                                                                }}
                                                            />
                                                        </ListItemPrefix>
                                                        <div className="w-full">
                                                            <div className="w-full">
                                                                <Typography as={"h3"} key={`vinillab-${vinil.id}`} color="blue-gray"
                                                                    className="font-medium">
                                                                    {vinil.label}
                                                                </Typography>
                                                            </div>


                                                        </div>

                                                    </ListItem>

                                                    <Collapse open={vinil.microStatus} className='arriba px-5'>

                                                        <div className="mx-auto p-1 ml-4 w-full flex rounded-xl cursor-pointer hover:bg-blue-gray-100" onClick={() => handleSelladores(vinil.micro)}>
                                                            {
                                                                vinil.micro == "" ? null :
                                                                    <div className="p-2 flex items-center justify-start" onClick={() => toggleOpen(vinil.micro)}>
                                                                        <FontAwesomeIcon icon={faTurnUp} rotation={90}></FontAwesomeIcon>
                                                                    </div>
                                                            }
                                                            <Typography as={"p"}>
                                                                {
                                                                    vinil.micro
                                                                }
                                                            </Typography>
                                                        </div>
                                                    </Collapse>

                                                </>

                                            ))
                                        }
                                    </AccordionBody>
                                </Accordion>

                                {/* Automotriz */}
                                <Accordion open={openMain === 2} icon={<Icon id={2} open={openMain} />}>
                                    <AccordionHeader onClick={() => handleOpenMain(2)} className='uppercase'
                                        style={{ fontSize: "17px", fontWeight: "bold" }} >Automotriz</AccordionHeader>
                                    <AccordionBody>
                                        <List>
                                            {
                                                subAutomotriz?.map((item) => (


                                                    <ListItem key={item.id} className="p-2" onClick={() => handleClickCategoria(item.id)}>
                                                        <ListItemPrefix key={`cats-${item.id}`} className="mr-3">
                                                            <Checkbox
                                                                id={item.id}
                                                                checked={item.checked}
                                                                ripple={false}
                                                                className="hover:before:opacity-0"
                                                                containerProps={{
                                                                    className: "p-0",
                                                                }}
                                                            />
                                                        </ListItemPrefix>
                                                        <Typography as={"p"} key={`labcats-${item.id}`} color="blue-gray" className="font-medium">
                                                            {item.label}
                                                        </Typography>
                                                    </ListItem>
                                                ))
                                            }
                                        </List>
                                    </AccordionBody>
                                </Accordion>

                                {/* Ferretera  */}
                                <Accordion open={openMain === 3} icon={<Icon id={3} open={openMain} />}>
                                    <AccordionHeader onClick={() => handleOpenMain(3)} className='uppercase'
                                        style={{ fontSize: "17px", fontWeight: "bold" }}>Ferretera</AccordionHeader>
                                    <AccordionBody>
                                        {
                                            subFerretera?.map((ferre) => (


                                                <>
                                                    <ListItem key={ferre.id} className="p-2" onClick={() => handleClickCategoria(ferre.id)}>
                                                        <ListItemPrefix key={`cats-${ferre.id}`} className="mr-3">
                                                            <Checkbox
                                                                id={ferre.id}
                                                                checked={ferre.checked}
                                                                ripple={false}
                                                                className="hover:before:opacity-0"
                                                                containerProps={{
                                                                    className: "p-0",
                                                                }}
                                                            />
                                                        </ListItemPrefix>
                                                        <div className="w-full">
                                                            <div className="w-full">
                                                                <Typography as={"p"} key={`ferre-${ferre.id}`} color="blue-gray"
                                                                    className="font-medium">
                                                                    {ferre.label}
                                                                </Typography>
                                                            </div>



                                                        </div>
                                                    </ListItem>

                                                    <Collapse open={ferre.microStatus} className='arriba px-5'>
                                                        <div className="mx-auto p-1 ml-4 w-full flex rounded-xl cursor-pointer hover:bg-blue-gray-100"
                                                            onClick={() => handleSelladores(ferre.micro)}>

                                                            {
                                                                ferre.micro ? <div className="p-2 flex items-center justify-end" onClick={() => toggleOpen(ferre.micro)}>
                                                                    <FontAwesomeIcon icon={faTurnUp} rotation={90}></FontAwesomeIcon>
                                                                </div> : null

                                                            }
                                                            {
                                                                ferre.microLabel ? <Typography as={"p"}>
                                                                    {
                                                                        ferre.microLabel
                                                                    }
                                                                </Typography> : null
                                                            }
                                                        </div>
                                                    </Collapse>


                                                </>
                                            ))
                                        }
                                    </AccordionBody>
                                </Accordion>

                                {/* Maderas  */}
                                <Accordion open={openMain === 4} icon={<Icon id={4} open={openMain} />}>
                                    <AccordionHeader
                                        onClick={() => handleOpenMain(4)}
                                        className='uppercase'
                                        style={{ fontSize: "17px", fontWeight: "bold" }}>Maderas</AccordionHeader>
                                    <AccordionBody>
                                        <List>
                                            {
                                                subMaderas?.map((item) => (

                                                    <ListItem key={item.id} className="p-2" onClick={() => handleClickCategoria(item.id)}>
                                                        <ListItemPrefix key={`cats-${item.id}`} className="mr-3">
                                                            <Checkbox
                                                                id={item.id}
                                                                checked={item.checked}
                                                                ripple={false}
                                                                className="hover:before:opacity-0"
                                                                containerProps={{
                                                                    className: "p-0",
                                                                }}
                                                            />
                                                        </ListItemPrefix>
                                                        <Typography as={"p"} key={`labcats-${item.id}`} color="blue-gray" className="font-medium">
                                                            {item.label}
                                                        </Typography>
                                                    </ListItem>
                                                ))
                                            }
                                        </List>
                                    </AccordionBody>
                                </Accordion>

                            </div>
                        </div>

                        <div className="w-full bg-[#f6f6f6]">
                            <div style={backgroundStyle} className="">

                            </div>
                            {
                                paginadovista ? <div className="mt-10 mb-10 flex justify-center">
                                    {
                                        Array.from({ length: totalPages }, (_, index) => (
                                            <div key={index}
                                                onClick={() => goToPage(index + 1)
                                                }
                                                className={
                                                    `mx-2 text-xl cursor-pointer ${currentPage === index + 1 ? "bg-[#dc2a25] hover:bg-[#dc2a25] hover:text-white px-3 py-1 text-white" : "bg-gray-200 hover:bg-[#dc2a25] hover:text-white px-3 py-1"
                                                    }`
                                                }>{index + 1} </div>
                                        ))
                                    }
                                </div> : null
                            }
                            <div className={`w-full grid ${windowWidth < 700 ? "grid-cols-1" : windowWidth < 1235 ? "grid-cols-2" : windowWidth < 2000 ? "grid-cols-3" : "grid-cols-4"} gap-10 p-14`}>

                                <Suspense fallback={<Isotipo></Isotipo>}>

                                    {
                                        displayData?.map((item, index) => (
                                            <Link key={index} href={`/producto/${item.id}`}
                                                onClick={() => handleIdProducto(item.id_number)} className='zoom-producto'>
                                                <Card key={index} className="w-full h-full lg:w-72 md:w-72 mx-auto sinradius">
                                                    <div className="w-[50%] md:w-[50%] mx-auto mt-5 flex justify-center">
                                                        {
                                                            item.tipo ? 
                                                            
                                                            <Image src={item.imagen}
                                                                width={100}
                                                                height={100}
                                                                alt="imagen" 
                                                                />
                                                                :
                                                                <Image src={item.imagen}
                                                                    width={500}
                                                                    height={500}
                                                                    alt="imagen" />
                                                        }

                                                    </div>
                                                    <div className='w-full h-full flex items-end p-5'>

                                                        <div className="w-full text-center">
                                                            <Typography as={'h1'} color="blue-gray"
                                                                className="uppercase mb-2 text-center text-lg md:text-2xl lg:text-2xl relative">
                                                                {item.name} {item.registro ? <span style={{ fontSize: "14px" }}
                                                                    className='absolute -top-2'>{item.registro}</span> : null}
                                                                {item.name2 ? <p>{item.name2}</p> : null}
                                                            </Typography>
                                                            <Typography as={'h5'} color="blue-gray" className="mb-2 text-xl md:text-xl">
                                                                Capacidades
                                                            </Typography>
                                                            <ul className='w-full'>
                                                                {
                                                                    item.presentation.map((element, index) => (
                                                                        <li key={index}>{element}</li>
                                                                    ))
                                                                }
                                                            </ul>
                                                        </div>

                                                    </div>


                                                </Card>
                                            </Link>


                                        ))
                                    }
                                </Suspense>

                            </div>
                            {
                                paginadovista ? <div className="mt-10 flex justify-center">
                                    {
                                        Array.from({ length: totalPages }, (_, index) => (
                                            <div key={index}
                                                onClick={() => goToPage(index + 1)
                                                }
                                                className={
                                                    `mx-2 text-xl cursor-pointer mb-10 ${currentPage === index + 1 ? "bg-[#dc2a25] hover:bg-[#dc2a25] hover:text-white px-3 py-1 text-white" : "bg-gray-200 hover:bg-[#dc2a25] hover:text-white px-3 py-1"
                                                    }`
                                                }>{index + 1} </div>
                                        ))
                                    }
                                </div> : null
                            }

                        </div>

                    </div>
                </section>
            }



        </>
    )
}

export default Productos
