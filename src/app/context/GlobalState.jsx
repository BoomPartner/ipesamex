"use client";
import React, { useEffect, useState } from "react";
import globalContext from './globalContext';
const GlobalState = ({ children }) => {

    const [categorie, setCategorie] = useState("decorativa")
    const [idProducto,setidProducto] = useState(null)
    const [openQuestions,setOpenQuestios] = useState(false)
    const [openCalculador,setOpenCalculador] = useState(false)
    const [distribuidor,setDistribuidor] = useState(false)
    const [nosotros,setNosotros] = useState(false)

    const handleNosotros = (event) =>{
        if (event == "nosotros") {
            setNosotros(true)
        }else{
            setNosotros(false)
        }

        
    }

    const handleLineas = (categorie) => {
        setCategorie(categorie);
        
    }

    const handleIdProducto = (producto) =>{
        setidProducto(producto)
    }

    const handleQuestions = () =>{
        setOpenQuestios((prevState)=> !prevState)
        setNosotros(false)
    }

    const handleCalculador = () =>{
        setOpenCalculador((prevState)=>!prevState)
    }

    const handleContacto = (event) =>{
        console.log(event);
        if (event == "distribuidor") {
            setDistribuidor(true)
        }
        else{
            setDistribuidor(false)
        }
    }
    
    return (
        <globalContext.Provider value={{categorie,idProducto,openQuestions,openCalculador,distribuidor, nosotros, 
        handleContacto, handleNosotros,handleLineas,handleIdProducto,handleQuestions,handleCalculador}}>
            {children}
        </globalContext.Provider>
    )
}

export default GlobalState
