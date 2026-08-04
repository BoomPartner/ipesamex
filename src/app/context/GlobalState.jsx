"use client";
import { useCallback, useMemo, useState } from "react";
import globalContext from './globalContext';
const GlobalState = ({ children }) => {

    const [categorie, setCategorie] = useState("decorativa")
    const [idProducto,setidProducto] = useState(null)
    const [openQuestions,setOpenQuestios] = useState(false)
    const [openCalculador,setOpenCalculador] = useState(false)
    const [distribuidor,setDistribuidor] = useState(false)
    const [nosotros,setNosotros] = useState(false)

    const handleNosotros = useCallback((event) => {
        setNosotros(event === "nosotros")
    }, [])

    const handleLineas = useCallback((categorie) => {
        setCategorie(categorie);
    }, [])

    const handleIdProducto = useCallback((producto) => {
        setidProducto(producto)
    }, [])

    const handleQuestions = useCallback(() => {
        setOpenQuestios((prevState)=> !prevState)
        setNosotros(false)
    }, [])

    const handleCalculador = useCallback(() => {
        setOpenCalculador((prevState)=>!prevState)
    }, [])

    const handleContacto = useCallback((event) => {
        setDistribuidor(event === "distribuidor")
    }, [])

    const contextValue = useMemo(() => ({
        categorie,
        idProducto,
        openQuestions,
        openCalculador,
        distribuidor,
        nosotros,
        handleContacto,
        handleNosotros,
        handleLineas,
        handleIdProducto,
        handleQuestions,
        handleCalculador,
    }), [
        categorie,
        distribuidor,
        handleCalculador,
        handleContacto,
        handleIdProducto,
        handleLineas,
        handleNosotros,
        handleQuestions,
        idProducto,
        nosotros,
        openCalculador,
        openQuestions,
    ])
    
    return (
        <globalContext.Provider value={contextValue}>
            {children}
        </globalContext.Provider>
    )
}

export default GlobalState
