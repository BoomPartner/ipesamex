"use client";
import React from 'react'
import { Typography, Accordion, AccordionBody, AccordionHeader } from '@material-tailwind/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { preguntascontacto, preguntasdistribuidor, pregunatsproductos } from '@/components/server';
import Link from 'next/link';

const PagePreguntas = () => {
    const [open, setOpen] = React.useState(1);
    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    const handleCategoria = (event,event2) => {
        const localcategoria = localStorage.getItem('categoria');
        const localmicrocategoria = localStorage.getItem('microcategoria');
        if (localcategoria || localmicrocategoria) {
            localStorage.removeItem('categoria');
            localStorage.removeItem('microcategoria');
        }
        localStorage.setItem("categoria", event);
        localStorage.setItem("microcategoria", event2);
    }

    return (
        <div className='w-full p-20'>

            <Typography variant='h1' className='mb-10'>Preguntas Frecuentes</Typography>

            <Typography variant='h3' className='mb-10'>Prodcutos</Typography>
            {
                pregunatsproductos?.map((item) => (
                    <Accordion key={item.id} open={open === item.id}>
                        <AccordionHeader onClick={() => handleOpen(item.id)}>
                            {item.question}
                        </AccordionHeader>
                        <AccordionBody>
                            <Typography variant='paragraph'>{item.answer}</Typography>

                            {
                                item.labels?.map((target, index) => (
                                    <ul key={index}>
                                        <li className='mt-5'><strong>{target.name}</strong> <span>{target.description}</span></li>
                                    </ul>
                                ))
                            }
                            {
                                item.enlace ? <div className="flex items-center">
                                    <Link href={item.enlace} className='hover:border-b border-[#c50411]' onClick={() => handleCategoria(item.categorie,"")} >
                                        {item.labelEnlace}
                                        <FontAwesomeIcon icon={faArrowRight} size='lg' className='ml-2'></FontAwesomeIcon>
                                    </Link>

                                </div> : null
                            }

                        </AccordionBody>
                    </Accordion>
                ))
            }

            <Typography variant='h3' className='mt-10 mb-10'>Contacto</Typography>
            {
                preguntascontacto?.map((item) => (
                    <Accordion key={item.id} open={open === item.id}>
                        <AccordionHeader onClick={() => handleOpen(item.id)}>
                            {item.question}
                        </AccordionHeader>
                        <AccordionBody>
                            <Typography variant='paragraph'>{item.answer}</Typography>
                            {
                                item.redes?.map((target,index) => (
                                    <ul key={index}>

                                        <li className='mt-2'><a href={target.name} target="_blank" rel="noopener noreferrer" className='hover:border-b border-[#c50411]'>{target.name}</a></li>

                                    </ul>
                                ))
                            }
                            {
                                item.labels?.map((target, index) => (
                                    <ul key={index}>
                                        <li className='mt-5'><strong>{target}</strong></li>
                                    </ul>
                                ))
                            }
                            {
                                item.enlace ? <div className="flex items-center">
                                    <Link href={item.enlace} className='hover:border-b border-[#c50411]' >
                                        {item.labelEnlace}
                                        <FontAwesomeIcon icon={faArrowRight} size='lg' className='ml-2'></FontAwesomeIcon>
                                    </Link>

                                </div> : null
                            }

                        </AccordionBody>
                    </Accordion>
                ))
            }

            <Typography variant='h3' className='mt-10 mb-10'>Distribuidor</Typography>
            
            {
                preguntasdistribuidor?.map((item) => (
                    <Accordion key={item.id} open={open === item.id}>
                        <AccordionHeader onClick={() => handleOpen(item.id)}>
                            {item.question}
                        </AccordionHeader>
                        <AccordionBody>
                            <Typography variant='paragraph'>{item.answer}</Typography>
                            {
                                item.redes?.map((target,index) => (
                                    <ul key={index}>

                                        <li className='mt-2'><a href={target.name} target="_blank" rel="noopener noreferrer" className='hover:border-b border-[#c50411]'>{target.name}</a></li>

                                    </ul>
                                ))
                            }
                            {
                                item.labels?.map((target, index) => (
                                    <ul key={index}>
                                        <li className='mt-5'><strong>{target}</strong></li>
                                    </ul>
                                ))
                            }
                            {
                                item.enlace ? <div className="flex items-center">
                                    <Link href={item.enlace} className='hover:border-b border-[#c50411]' >
                                        {item.labelEnlace}
                                        <FontAwesomeIcon icon={faArrowRight} size='lg' className='ml-2'></FontAwesomeIcon>
                                    </Link>

                                </div> : null
                            }

                        </AccordionBody>
                    </Accordion>
                ))
            }

        </div>
    )
}

export default PagePreguntas
