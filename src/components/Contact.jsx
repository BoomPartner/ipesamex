"use client";
import React, { useState, useEffect, useContext } from 'react'
import {
    Typography,
    Input,
    Button,
    Dialog,
    DialogBody,
    Checkbox,
    Spinner
} from '@material-tailwind/react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import globalContext from '@/app/context/globalContext';
const Contacto = () => {

    const [status, setStatus] = useState(null)
    const [mensaje, setMensaje] = useState(null)
    const [spiner, setSpiner] = useState(false)
    const handleOpen = () => setOpen(!open);
    const [open, setOpen] = useState(false);
    const { handleContacto, distribuidor } = useContext(globalContext)
    const [windowWidth, setWindowWidth] = useState(0);


    const [options1, setOptions1] = useState([
        {
            id: 1, name: "Sí", checked: false, valor: "¿Actualmente, cuentas con algún negocio establecido?"
        },

        {
            id: 2, name: "No", checked: false, valor: "¿Actualmente, cuentas con algún negocio establecido?"
        },
    ])

    const [options2, setOptions2] = useState([
        {
            id: 3, name: "Usuario final", checked: false, valor: "Tipo de negocio (B2B O B2C)"
        },
        {
            id: 4, name: "Distribuidor", checked: false, valor: "Tipo de negocio (B2B O B2C)"
        },
    ])

    const [options3, setOptions3] = useState([
        {
            id: 5, name: "Facebook", checked: false, valor: "¿Cómo te enteraste de nuestro nuevo modelo de negocio?"
        },
        {
            id: 6, name: "Sitio web", checked: false, valor: "¿Cómo te enteraste de nuestro nuevo modelo de negocio?"
        },
    ])

    const [options4, setOptions4] = useState([
        {
            id: 7, name: "Arquitectónico", checked: false, valor: "¿En que línea de producto estas interesado?"
        },
        {
            id: 8, name: "Industrial", checked: false, valor: "¿En que línea de producto estas interesado?"
        },
        {
            id: 9, name: "Automotriz", checked: false, valor: "¿En que línea de producto estas interesado?"
        },
    ])

    const [options5, setOptions5] = useState([
        {
            id: 10, name: "Si", checked: false, valor: "Actualmente; ¿Eres distribuidor de otras marcas de recubrimientos?"
        },
        {
            id: 11, name: "No", checked: false, valor: "Actualmente; ¿Eres distribuidor de otras marcas de recubrimientos?"
        },
    ])

    const [options6, setOptions6] = useState([
        {
            id: 12, name: "1 año o menos", checked: false, valor: "¿Tienes experiencia en el negocio de recubrimientos?"
        },
        {
            id: 13, name: "2 a 5 años", checked: false, valor: "¿Tienes experiencia en el negocio de recubrimientos?"
        },
        {
            id: 14, name: "Más de 5 años", checked: false, valor: "¿Tienes experiencia en el negocio de recubrimientos?"
        },
    ])

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

    const [formData, setFormData] = useState({
        name: "",
        telefono: "",
        email: "",
        country: "",
        ciudad: "",
        cp: "",
        direction: "",
        emisor: "IPESA WEB"
    });

    const [errors, setErrors] = useState({ telefono: '', email: '' });


    const initialData2 = {
        empresa: "",
        rfc: "",
        modeloNegocio: "",
        marcas: "",
        estado: ""
    }

    const [formData2, setFormData2] = useState({
        empresa: "",
        rfc: "",
        modeloNegocio: "",
        marcas: "",
        estado: ""
    })


    const handleChange2 = (event) => {
        const { name, value } = event.target;
        setFormData2(prevState => ({
            ...prevState,
            [name]: value == "" ? null : value
        }));
    }


    const handleOption1 = (event) => {
        setOptions1((prevOptions1) =>
            prevOptions1.map((item) => ({
                ...item,
                checked: item.id === event ? !item.checked : false
            }))
        );
    }

    const handleOption2 = (event) => {
        setOptions2((prevOptions2) =>
            prevOptions2.map((item) => ({
                ...item,
                checked: item.id === event ? !item.checked : false
            }))
        );
    }


    const handleOption3 = (event) => {
        setOptions3((prevOptions3) =>
            prevOptions3.map((item) => ({
                ...item,
                checked: item.id === event ? !item.checked : false
            }))
        );
    }

    const handleOption4 = (event) => {
        setOptions4((prevOptions4) =>
            prevOptions4.map((item) => ({
                ...item,
                checked: item.id === event ? !item.checked : false
            }))
        );
    }

    const handleOption5 = (event) => {
        setOptions5((prevOptions5) =>
            prevOptions5.map((item) => ({
                ...item,
                checked: item.id === event ? !item.checked : false
            }))
        );
    }

    const handleOption6 = (event) => {
        setOptions6((prevOptions6) =>
            prevOptions6.map((item) => ({
                ...item,
                checked: item.id === event ? !item.checked : false
            }))
        );
    }

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(".celular",
            { y: '60%', opacity: 0 },
            {
                duration: 1.3,
                y: '0%',
                opacity: 1,
                ease: 'power1.inOut',

            }
        );


        gsap.fromTo(".texto-contact",
            { y: '50%', opacity: 0 },
            {
                duration: 1.3,
                y: '0%',
                opacity: 1,
                ease: 'power1.inOut',
            }
        );
        gsap.fromTo(".texto-contact2",
            { y: '50%', opacity: 0 },
            {
                duration: 1.3,
                delay: 0.5,
                y: '0%',
                opacity: 1,
                ease: 'power1.inOut',
            }
        );

        return () => {
            ScrollTrigger.getAll().forEach(st => st.kill());
        };
    }, []);

    const handleReset = (event) => {
        if (event == "contacto") {
            handleContacto("contacto")
        } else {
            setFormData2(initialData2)
            handleContacto("distribuidor")
            handleOption1("")
            handleOption2("")
            handleOption3("")
            handleOption4("")
            handleOption5("")
            handleOption6("")
        }


    }

    const distribuidorSiChecked = options5.some(option => option.id === 10 && option.checked);


    const handleData = async () => {


        const allFieldsFilled = Object.values(formData).every(item => item !== null);
        const allFieldsFilled2 = Object.values(formData2).every(item => item !== null);

        const distribuidorChekeds = options1.some(item => item.checked) &&
            options2.some(item => item.checked) &&
            options3.some(item => item.checked) &&
            options4.some(item => item.checked) &&
            options5.some(item => item.checked) &&
            options6.some(item => item.checked);
        const allOptions = [...options1, ...options2, ...options3, ...options4, ...options5, ...options6];

        const checkedOptions = allOptions.filter(option => option.checked);

        const checkedOptionsObject = checkedOptions.reduce((obj, item) => {
            obj[item.id] = item;
            return obj;
        }, {});
        const combinedData = {
            ...formData,
            ...formData2,
            options: checkedOptions
        };

        setSpiner(true)
        if (distribuidor) {
            if (distribuidorChekeds) {
                if (allFieldsFilled && allFieldsFilled2) {
                    try {
                        const response = await fetch("https://expres-jwgr.onrender.com/mail_ipesa", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify(combinedData)
                        })
                        if (response) {
                           
                            const data = await response.json()
                            setOpen(true)
                            setStatus(false)
                            setSpiner(false)
                            setTimeout(() => {
                                setOpen(false); 
                            }, 3000); 

                        } else {
                            console.log("No se envio el mensaje");

                        }
                    } catch (error) {
                        console.error('Error al enviar el formulario:', error);
                    }
                } else {
                    setMensaje(true)
                    setSpiner(false)
                    setTimeout(() => {
                        setMensaje(false);
                    }, 3000); 
                }
            } else {
                
                setMensaje(true)
                setSpiner(false)
                setTimeout(() => {
                    setMensaje(false); 
                }, 3000); 
            }

        } else {
            if (allFieldsFilled) {
                try {
                    const response = await fetch("https://expres-jwgr.onrender.com/mail_ipesa", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(formData)
                    })
                    if (response) {
                        const data = await response.json()
                        setOpen(true)
                        setStatus(false)
                        setSpiner(false)
                        setTimeout(() => {
                            setOpen(false); 
                        }, 3000);


                    } else {
                        console.log("No se envio el mensaje");

                    }
                } catch (error) {
                    setSpiner(false)
                    console.error('Error al enviar el formulario:', error);
                }
            } else {
                setMensaje(true)
                setSpiner(false)
                setTimeout(() => {
                    setMensaje(false); 
                }, 3000);
            }
        }

    }

    const handleChange = (event) => {
        if (event !== undefined) {
            const { name, value } = event.target;
            let filter = value;

            if (value.length > 250) {
                event.target.value = value.slice(0, 250);
                return;
            }

            switch (name) {
                case "cp":
                    if (value.length > 6) {
                        filter = value.slice(0, 6);
                    }
                    filter = value.replace(/[^0-9]/g, "");
                    break;

                case "rfc":
                    if (value.length > 14) {
                        filter = value.slice(0, 14);
                    }
                    filter = value.replace(/[^0-9a-zA-Z]/g, "");
                break;
                case "telefono":
                    if (value.length > 10) {
                        filter = value.slice(0, 10);
                    }
                    if (!/^\d*$/.test(value)) {
                        setErrors(prevState => ({ ...prevState, telefono: 'El teléfono debe contener solo números' }));
                    } else {
                        setErrors(prevState => ({ ...prevState, telefono: '' }));
                    }
                    break;

                case "email":
                    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                        setErrors(prevState => ({ ...prevState, email: 'El email no es válido' }));
                    } else {
                        setErrors(prevState => ({ ...prevState, email: '' }));
                    }
                    break;

                default:
                    break;
            }

            setFormData(prevState => ({
                ...prevState,
                [name]: filter === "" ? null : filter
            }));
        }
    };


    return (
        <>
            <section className={`overflow-hidden`}>
                <div className="w-full">

                    <div className="banenrContacto" style={{
                        position: 'relative',
                        width: '100%',
                        height: '0',
                        paddingBottom: "35%"
                    }}>
                        <Image src={"/principal/movil.png"} width={1000} height={1000} alt='movil-contact'
                            className='celular w-[30%] absolute left-[65%] bottom-0'></Image>
                        <div className="w-[50%] absolute text-white left-[10%] bottom-[40%]">

                            {
                                distribuidor ? <Typography as={'h1'} variant={windowWidth < 920 ? "h5" : "h1"} color="black" className="mb-2 uppercase text-white texto-contact">
                                    ¿Quieres ser distribuidor?
                                </Typography> : <Typography as={'h1'} className='uppercase mb-10 texto-contact' variant={windowWidth < 920 ? "h5" : "h1"}>Contáctanos</Typography>
                            }

                            {
                                distribuidor ?
                                    <Typography as={"p"} variant="paragraph" className='texto-contact2' style={{ fontSize: "24px" }}>Forma parte de nuestra familia de distribuidores IPESA,
                                        envía tu información y nuestro equipo se pondrá en contacto lo antes posible.</Typography> :

                                    <Typography as={"p"} variant="paragraph" className='texto-contact2' style={{ fontSize: "24px" }}>Tu satisfacción es nuestra prioridad. Ya sea que necesites asistencia inmediata o aclarar información precisa, estamos aquí para ayudarte a través de WhatsApp o nuestro formulario de contacto.
                                    </Typography>
                            }

                        </div>
                    </div>

                    <div className="w-full flex justify-center items-center bg-white relative ">

                        <div className={`w-full ${windowWidth < 500 ? "p-5" : "p-20"}`}>
                            {
                                distribuidor ?
                                    null :
                                    <Typography as={'h1'} variant={windowWidth < 920 ? "h5" : "h1"} color="black" className="mb-2 uppercase">
                                        Envía un mensaje
                                    </Typography>
                            }
                            {
                                distribuidor ? <Typography as={'h3'} variant="h3" color="blue-gray" className="mb-4 mt-5 uppercase">
                                    Formulario de registro

                                </Typography> : null
                            }
                            <Typography as={'h5'} variant={windowWidth < 270 ? "h6" : "h5"} color="gray" className="mb-4">
                                contacto@ipesamex.com
                            </Typography>



                            <div className={`w-full grid ${windowWidth < 700 ? "grid-cols-1" : "grid-cols-2"} gap-10`}>
                                <div className="mt-5">
                                    <Input onChange={handleChange} label='Nombre Completo' name='name' className='w-full' required value={formData.name}></Input>
                                </div>
                                <div className="mt-5">
                                    <Input onChange={handleChange} label='Teléfono' name='telefono' className='w-full' required value={formData.telefono}></Input>
                                    {errors.telefono && <span style={{ color: 'red' }}>{errors.telefono}</span>}
                                </div>

                                <div className="mt-5">
                                    <Input label='Correo' onChange={handleChange} name='email' className='w-full' required value={formData.email}></Input>
                                </div>

                                <div className="mt-5">
                                    <Input onChange={handleChange} label='País' name='country' className='' required value={formData.country}></Input>
                                </div>

                                <div className="mt-5">
                                    <Input label='Ciudad' name='ciudad' className='' onChange={handleChange} required value={formData.ciudad}></Input>
                                </div>
                                <div className="mt-5">
                                    <Input label='Código Postal' name='cp' onChange={handleChange} className='w-full' required value={formData.cp}></Input>
                                </div>
                                <div className="mt-5">
                                    <Input label='Dirección Completa' name='direction' onChange={handleChange} required className='w-full' value={formData.direction}></Input>
                                </div>

                                {
                                    distribuidor && <div className="mt-5">
                                        <Input onChange={handleChange2} label='Nombre de la empresa o persona fisíca' name='empresa' className='w-full'></Input>
                                    </div>
                                }

                                {
                                    distribuidor && <div className="mt-5">
                                        <Input onChange={handleChange2} label='RFC' name='rfc' className='w-full'></Input>
                                    </div>
                                }


                            </div>

                            {
                                distribuidor && <>
                                    <div className={`mt-5 w-full grid ${windowWidth < 700 ? "grid-cols-1" : "grid-cols-2"} gap-10`}>



                                        <div className="mt-5">
                                            <Typography as={'h5'} variant='h5'>¿Actualmente, cuentas con algún negocio establecido?</Typography>
                                            {
                                                options1.map((item, index) => (
                                                    <div key={index} className="">
                                                        <Checkbox checked={item.checked} label={item.name} key={`check-${item.id}`} ripple={true} onClick={() => handleOption1(item.id)} />
                                                    </div>
                                                ))
                                            }
                                        </div>


                                        <div className="mt-5">
                                            <Typography as={'h5'} variant='h5'>{"Tipo de negocio (B2B O B2C)"}</Typography>
                                            {
                                                options2.map((item, index) => (
                                                    <div key={index} className="">
                                                        <Checkbox checked={item.checked} label={item.name} key={`check-${item.id}`} ripple={true} onClick={() => handleOption2(item.id)} />
                                                    </div>
                                                ))
                                            }

                                        </div>

                                        <div className="mt-5">
                                            <Typography as={'h5'} variant='h5'>{"¿Cómo te enteraste de nuestro nuevo modelo de negocio?"}</Typography>
                                            {
                                                options3.map((item, index) => (
                                                    <div key={index} className="">
                                                        <Checkbox checked={item.checked} label={item.name} key={`check-${item.id}`} ripple={true} onClick={() => handleOption3(item.id)} />
                                                    </div>
                                                ))
                                            }
                                            <div className="">
                                                <Input onChange={handleChange2} label='Otro' name='modeloNegocio' className='w-full' onClick={() => handleOption3("")}></Input>
                                            </div>
                                        </div>


                                        <div className="mt-5 block">
                                            <Typography as={'h5'} variant='h5'>{"¿En que línea de producto estas interesado?"}</Typography>

                                            {
                                                options4.map((item, index) => (
                                                    <div key={index} className="">
                                                        <Checkbox checked={item.checked} label={item.name} key={`check-${item.id}`} ripple={true} onClick={() => handleOption4(item.id)} />
                                                    </div>
                                                ))
                                            }
                                        </div>

                                        <div className="mt-5">
                                            <Typography as={'h5'} variant='h5'>{"Actualmente; ¿Eres distribuidor de otras marcas de recubrimientos?"}</Typography>
                                            {
                                                options5.map((item, index) => (
                                                    <div key={index} className="">
                                                        <Checkbox checked={item.checked} label={item.name} key={`check-${item.id}`} ripple={true} onClick={() => handleOption5(item.id)} />
                                                    </div>
                                                ))
                                            }
                                            {distribuidorSiChecked && (
                                                <Input onChange={handleChange2} label='¿Cuáles?' name='marcas' className='w-full'></Input>
                                            )}
                                        </div>

                                        <div className="mt-5">
                                            <Typography as={'h5'} variant='h5'>{"¿Tienes experiencia en el negocio de recubrimientos?"}</Typography>
                                            {
                                                options6.map((item, index) => (
                                                    <div key={index} className="">
                                                        <Checkbox checked={item.checked} label={item.name} key={`check-${item.id}`} ripple={true} onClick={() => handleOption6(item.id)} />
                                                    </div>
                                                ))
                                            }
                                        </div>

                                        <div className="mt-5">
                                            <Input onChange={handleChange2} label='¿En qué localidad, municipio o estado estas interesado en aperturar tiendas?' name='estado' className='w-full'></Input>
                                        </div>

                                    </div>
                                </>
                            }

                            <div className="w-full mt-5 flex">
                                <Button onClick={handleData} className="gap-2 text-gray-200 bg-[#e51e25] agrande px-10" disabled={status ? true : false}>
                                    {spiner ? <Spinner className="h-5 w-5" /> : "Enviar"}
                                </Button>

                                {
                                    distribuidor ? <Button onClick={() => handleReset("contacto")} className="gap-2 text-gray-200 bg-[#e51e25] agrande px-10 ml-10">
                                        No me interesa
                                    </Button> : <Button onClick={() => handleReset("")} className="gap-2 text-gray-200 bg-[#e51e25] agrande px-10 ml-10">
                                        ¿Quieres ser distribuidor?
                                    </Button>
                                }

                            </div>
                            <div className={`w-full mt-4 ${mensaje ? "block" : "hidden"}`}><Typography as={"p"} variant='paragraph' className='text-[#c50411]'>Todos los campos son requeridos</Typography></div>
                        </div>
                    </div>
                </div>
            </section >
            <Dialog open={open} handler={handleOpen} size='sm' className='mt-24'>
                <DialogBody>
                    <div className="w-full flex justify-start">
                        <div className="w-full text-left px-2"><Image src="/logos/logo.png" width={100} height={100} alt='logo'></Image></div>
                    </div>
                    <div className="w-full flex items-center justify-center h-[40vh] overflow-hidden">


                        <div className="w-full">
                            <Typography as={'h3'} variant='h3' className='w-full text-center text-black'>¡Gracias por tu interes!</Typography>
                            <Typography as={'h4'} variant='h4' className='w-full text-center text-black'>En breve te contáctaremos</Typography>
                        </div>
                    </div>



                </DialogBody>

            </Dialog>

        </>
    )
}

export default Contacto
