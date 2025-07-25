
export const categorias = [
    {
        id: "decorativa",
        name: "DECORATIVA",
        imagen: "/categorias/decorativa.jpg",
        clase: "categoria-animate"
    },
    {
        id: "automotriz",
        name: "AUTOMOTRIZ",
        imagen: "/categorias/automotriz.jpg",
        clase: "categoria-animate2"
    },
    {
        id: "ferretera",
        name: "FERRETERA",
        imagen: "/categorias/ferretera.jpg",
        clase: "categoria-animate3"
    },
    {
        id: "maderas",
        name: "MADERAS",
        imagen: "/categorias/maderas.jpg",
        clase: "categoria-animate4"
    },

]

export const articulos = [


    {
        id: "vintek",
        id_number: 1,
        codigo: 700,
        registro: "®",
        name: "Vintek",
        categorie: "decorativa",
        subcategorie: "vinilicas",
        microcategorie: "vinilicas",
        presentation: ["1 L","4 L","19 L"],
        color: "vintek",
        imagen: "/articulos/vinilicas/vintek.png",
        imagen_prd: "/articulos/vinilicas/VINTEK_img.png",
        subtitle: ["La pintura de los profesionales"],
        description: ["Pintura vinil acrílica súper brillante de extraordinario desempeño y lavabilidad, ideal para espacios interiores y exteriores."],
        atributos: ["Máximo poder cubriente y durabilidad.","Resistente a la intemperie, los rayos UV e ideal para ambientes húmedos.","Excelente nivelación que brinda un acabado uniforme."],
        rendimiento: "10 a 12 m2 / L",
        promedio: 13,
        gama: " 32 colores de línea y 3,454 colores en sistema Infinite Color",
        acabados: "31 colores brillantes.",
        acabados2: "Mate solo blanco",
        dirigido: "Particulares, oficios y profesional",
        ficha: ["/fichas/vinilicas/TDS-700-Vintek.pdf"],
        seguridad: ["/seguridad/decorativa/HDS-VINTEK-700-2025.pdf"],
        videos: [
            {name: "Atributos", url: "https://www.youtube.com/watch?v=mAvZhdvaHV0"},
            {name: "Tutorial paso a paso", url: "https://www.youtube.com/watch?v=uVic436FqTA"},
            {name: "Problema Solución", url:  "https://www.youtube.com/watch?v=iDLLIjFHT0s"}
        ],
    },
    {
        id: "realtek",
        id_number: 2,
        codigo: 700,
        registro: "®",
        name: "Realtek",
        categorie: "decorativa",
        subcategorie: "vinilicas",
        microcategorie: "vinilicas",
        presentation: ["1 L","4 L","19 L"],
        color: "realtek",
        imagen: "/articulos/vinilicas/realtek.png",
        imagen_prd: "/articulos/vinilicas/REALTEK_img.png",
        subtitle: "La pintura de los conocedores",
        description: ["Pintura vinil acrílica mate de excelente calidad y durabilidad, ideal para espacios interiores y exteriores"],
        atributos: ["Alto poder cubriente y durabilidad.",
        "Repele el agua y evita manchas en los muros.",
        "Mantiene estables  los colores por mayor tiempo."],
        gama: "23 colores de línea.",
        rendimiento: "10 a 12 m2 / L",
        promedio: 11,
        acabados: "Acabado mate",
        dirigido: "Particular, oficios y profesional",
        ficha: ["/fichas/vinilicas/TDS-400-Realtek.pdf"],
        seguridad: ["/seguridad/decorativa/HDS-REALTEK-400-2025.pdf"],
    },{
        id: "acritek",
        id_number: 130,
        registro: "®",
        name: "Acritek 360",
        categorie: "decorativa",
        subcategorie: "vinilicas",
        microcategorie: "vinilicas",
        presentation: ["1 L","4 L","19 L"],
        color: "vintek",
        imagen: "/articulos/vinilicas/ACRITEK.png",
        imagen_prd: "/articulos/vinilicas/ACRITEK_img.png",
        subtitle: ["La pintura de los profesionales"],
        description: ["Pintura 100% acrílica base agua, estrictamente desarrollada para obtener una excelente resistencia a climas tropicales en interiores y exteriores."],
        atributos: ["Alta resistencia a condiciones extremas: Soporta rayos UV, calor intenso, humedad, salitre, alcalinidad y mantiene su adherencia.","Protección higiénica y antimicrobiana: Evita la formación de bacterias, hongos y algas.","Composición segura y durable: Libre de plomo y metales pesados, con alta durabilidad."],
        rendimiento: "10 a 12 m2 / L",
        promedio: 13,
        gama: " 32 colores de línea y 3,454 colores en sistema Infinite Color",
        acabados: "31 colores brillantes.",
        acabados2: "Mate solo blanco",
        dirigido: "Particulares, oficios y profesional",
        ficha: ["/fichas/vinilicas/TDS-7000- Acritek 360.pdf"],
        seguridad: ["/seguridad/decorativa/HDS-ACRITEK-7000-2025.pdf"],
       
    },
    {
        id: "vinipesa-satin",
        id_number: 3,
        codigo: 700,
        registro: "®",
        name: "Vinipesa",
        name2: "   Satín",
        categorie: "decorativa",
        subcategorie: "vinilicas",
        microcategorie: "vinilicas",
        presentation: ["1 L","4 L","19 L"],
        color: "vinipesa_satin",
        imagen: "/articulos/vinilicas/vinipesa_satin.png",
        description: ["Pintura vinil acrílica satinada de excelente calidad resistencia, ideal para espacios interiores y exteriores."],
        atributos: ["Excelente  poder cubriente y rendimiento.", "Excelente resistencia y acabado.",
        " Ideal para el trabajo en obras."],
        rendimiento: "10 a 12 m2 / L",
        promedio: 11,
        gama: "16 colores de línea y 3,464 colores en sistema Infinite Color.",
        acabados: "Acabado satinado",
        dirigido: "Particular, oficios y profesional",
        ficha: ["/fichas/vinilicas/TDS-500-VinipesaSatin.pdf"],
        seguridad: ["/seguridad/decorativa/HDS-VINIPESA SATIN-500-2025.pdf"],
        videos: [
            {name: "Atributos", url: "https://www.youtube.com/watch?v=-v1_vGa3wHg"},
            {name: "Tutorial paso a paso", url: "https://www.youtube.com/watch?v=60U-4T2KQIM"},
            {name: "Problema Solución", url:  "https://youtube.com/watch?v=y7lY_QGr-GU"}
        ],
    },

    {
        id: "vinipesa",
        id_number: 4,
        codigo: 700,
        registro: "®",
        name: "Vinipesa",
        name2: "  Mate",
        categorie: "decorativa",
        subcategorie: "vinilicas",
        microcategorie: "vinilicas",
        presentation: ["1 L","4 L","19 L"],
        color: "vinipesa_mate",
        imagen: "/articulos/vinilicas/vinipesa.png",
        description: ["Pintura vinil acrílica mate de excelente calidad resistencia, ideal para espacios interiores y exteriores"],
        atributos: ["Excelente poder cubriente y rendimiento ","Por su acabado disimula imperfecciones","Ideal para el trabajo en obras."],
        subtitle: "La pintura de los grandes proyectos",
        rendimiento: "7 a 9 m2 / L",
        promedio: 8,
        gama: "24 colores de línea y 2,484 colores en sistema Infinite Color.",
        acabados: "Mate mas de 2,484 colores ",
        dirigido: "Particular, oficios y profesional",
        ficha: ["/fichas/vinilicas/TDS-300-VinipesaMate.pdf"],
        seguridad: ["/seguridad/decorativa/HDS-VINIPESA MATE-300-2025.pdf"],
        videos: [
            {name: "Atributos", url: "https://www.youtube.com/watch?v=-v1_vGa3wHg"},
            {name: "Tutorial paso a paso", url: "https://www.youtube.com/watch?v=60U-4T2KQIM"},
            {name: "Problema Solución", url:  "https://youtube.com/watch?v=y7lY_QGr-GU"}
        ],
    },

    {
        id: "vinimas",
        id_number: 5,
        codigo: 700,
        registro: "®",
        name: "Vini +",
        name2: "",
        categorie: "decorativa",
        subcategorie: "vinilicas",
        microcategorie: "vinilicas",
        presentation: ["4 L","19 L"],
        color: "vini_plus",
        imagen: "/articulos/vinilicas/vini_plus.png",
        subtitle: "La pintura que hace buen negocio.",
        description: ["Pintura vinil acrílica Mate ideal para el mantenimiento de tus superficies y proyectos en espacios interiores y exteriores."],
        atributos: ["Óptima para remodelaciones en espacios interiores comeciales o residenciales","No despide olores desagradables.",
        "Facilidad de aplicación."],
        rendimiento: " 5 a 7 m2 / L",
        promedio: 6,
        acabados: "Acabado mate",
        gama: "VINI+ ofrece 12 colores de línea y 2,064 colores en sistema Infinite Color.",
        dirigido: "Particular, oficios y profesional.",
        ficha: ["/fichas/vinilicas/TDS-1300-Vini.pdf"],
        seguridad: ["/seguridad/decorativa/HDS-VINI+-1300-2025.pdf"],
        videos: [
            {name: "Atributos", url: "https://www.youtube.com/watch?v=tVVATc6k8YE"},
            {name: "Tutorial paso a paso", url: "https://www.youtube.com/watch?v=6QYXimJi5CI"},
            {name: "Problema Solución", url: "https://www.youtube.com/watch?v=gaLpcGcPQiM"},
        ],
    },

    {
        id: "colorbel",
        id_number: 6,
        codigo: 700,
        registro: "®",
        name: "Colorbel",
        categorie: "decorativa",
        subcategorie: "vinilicas",
        microcategorie: "vinilicas",
        presentation: ["4 L","19 L"],
        color: "colorbel",
        imagen: "/articulos/vinilicas/colorbel.png",
        subtitle: "La pintura rendidora y durable.",
        description: ["Pintura Vinil Acrílica Mate, ideal para espacios en interiores."],
        atributos: ["Buen rendimiento.","Mejor relación precio-calidad.",
        "Para los que desean embellecer y dar color constantemente."],
        rendimiento: " 4 a 5 m2 / L",
        promedio: 5,
        acabados: "Acabado mate.",
        gama: "COLORBEL® ofrece 17 colores de línea y 1,686 colores en sistema Infinite Color",
        dirigido: "Particular, oficios y profesional",
        ficha: ["/fichas/vinilicas/TDS-1400-Colorbel.pdf"],
        seguridad: ["/seguridad/decorativa/HDS-COLORBEL-1400-2025.pdf"],
    },

    // Selladores ++++++ 
    
    {
        id: "sellatek-5x1",
        id_number: 7,
        codigo: 700,
        registro: "®",
        name: "Sellatek 5x1",
        name2: "",
        categorie: "decorativa",
        subcategorie: "vinilicas",
        microcategorie: "selladores",
        presentation: ["1 L", "4 L","19 L"],
        color: "",
        imagen: "/articulos/vinilicas/sellatek_5x1.png",
        description: ["Promueve la adherencia y sella el poro.",
        "Tiempo de secado de 60 minutos.",
        "Dilución en agua limpia."],
        rendimiento: " 35 a 45 m2 / L",
        promedio: 40,
        acabados: "Incoloro-transparente",
        dirigido: "Particular, oficios y profesional",
        ficha: ["/fichas/selladores/5010-Sellatek-5-1.pdf"],
        ficha2: ["/fichas/selladores/SELLATEK_5x1_acr.pdf"],
        seguridad: ["/seguridad/decorativa/HDS-5010-2025.pdf"],
        seguridad2: ["/seguridad/decorativa/SELLATEK_5X1.pdf"],
    },
    
    {
        id: "sellatek-entintable",
        id_number: 8,
        codigo: 700,
        registro: "®",
        name: "Sellatek 2 en 1",name2:"",
        categorie: "decorativa",
        subcategorie: "vinilicas",
        microcategorie: "selladores",
        presentation: ["1 L","4 L", "19 L"],
        color: "",
        imagen: "/articulos/vinilicas/sellatek_2en1.png",
        description: ["Promueve la adherencia, además cumple con 2 funciones: sella el poro, puede ser entintado y/o fondear.",
        "Tiempo de secado de 30 minutos.","Dilución en agua limpia 15%."],
        rendimiento: " 20 a 35 m2 / L",
        promedio: 40,
        acabados: "Blanco",
        dirigido: "Particular, oficios y profesional",
        ficha: ["/fichas/selladores/5020-Sellatek_2en1.pdf"],
        seguridad: ["/seguridad/decorativa/HDS-5020-2025.pdf"],
    },

    // +++++++++++++++++++++++++++++++++++++++ Esmaltes +++++++++++++++++++++++++++++++++++++++++++++++++
    // {
    //     id: "clasico",
    //     id_number: 9,
    //     name: "Clásico",
    //     registro: "®",
    //     categorie: "decorativa",
    //     subcategorie: "esmaltes",
    //     microcategorie: "esmaltes",
    //     presentation: ["1 L","4 L","19 L"],
    //     color: "clasico",
    //     imagen: "/articulos/esmaltes/clasico.png",
    //     subtitle: ["Esmalte de maxima protección."],
    //     description: ["Esmalte Alquidálico base solvente de excelente calidad y alto rendimiento para interior y exterior."],
    //     atributos: ["Mayor duración, rendimiento y adherencia.","Por sus excelentes propiedades anticorrosivas es recomendado para todo tipo de climas.","Ideal para estructuras metálicas, madera, yeso y concreto."],
    //     rendimiento: " 12 a 14 m2 / L",
    //     promedio: 13,
    //     acabados: "Acabado brillante (colores metalizados)",
    //     gama: "5 colores de línea metalizados.",
    //     dirigido: "Oficio, profesional y particular",
    //     ficha: ["/fichas/esmaltes/CLASICO.pdf"],
    //     seguridad: ["/seguridad/decorativa/CLASICO.pdf"],
    // },

    {
        id: "tropimar-sur",
        id_number: 10,
        codigo: 700,
        registro: "®",
        name: "Tropimar Sur", name2: "",
        categorie: "decorativa",
        subcategorie: "esmaltes",
        microcategorie: "esmaltes",
        presentation: ["1 L","4 L","19 L"],
        // color: "tropimarsur",
        ficha_color:["/fichas/esmaltes/MUESTRARIO-TROPIMAR-SUR.pdf"],
        imagen : "/articulos/esmaltes/tropimar_sur.png",
        subtitle: "Esmalte de secado ultra rápido",
        description: ["Esmalte alquidálico que brinda embellecimiento y protección para interior y exterior."],
        atributos: ["Excelente protección anticorrosiva en zonas húmedas y de alta salinidad.",
        "Secado ultra rápido 20 minutos. Curado de 4 Horas.",
        "Ideal para superficies metálicas donde se requiere uso inmediato como portones, bancas, juegos etc."],
        rendimiento: " 8 a 10 m2 / L",
        promedio: 9,
        acabados: "Acabados mate y brillante",
        gama: "18 colores de línea.",
        dirigido: "Oficio, particular y profesional",
        ficha: ["/fichas/esmaltes/200-TropimarSur.pdf"],
        seguridad: ["/seguridad/decorativa/HDS-200-2025.pdf"],
        videos: [
            {name: "Atributos", url: "https://www.youtube.com/watch?v=yiK1tH6Sd_0"},
            {name: "Tutorial paso a paso", url: "https://www.youtube.com/watch?v=UzDi2_ZJXwo"},
            {name: "Problema Solución", url: "https://www.youtube.com/watch?v=SzduR8EB3ms"},
        ],
    },
    {
        id: "tropimar",
        id_number: 11,
        codigo: 700,
        registro: "®",
        name: "Tropimar",
        categorie: "decorativa",
        subcategorie: "esmaltes",
        microcategorie: "esmaltes",
        presentation: ["250 ml","500 ml","1 L","4 L","19 L"],
        color: "tropimar",
        imagen: "/articulos/esmaltes/tropimar.png",
        subtitle: "El esmalte que lo resiste todo.",
        description: ["Esmalte alquidálico durable y de excelente resistencia en interiores y exteriores."],
        atributos: ["Protección anticorrosiva en climas extremos.",
        "Ideal para climas tropicales donde las temperaturas son muy altas.",
        "Ideal para trabajos de mantenimiento en muebles de herrería, madera, concreto, ladrillo, maquinaria etc."],
        rendimiento: "13 m2 / L",
        promedio: 9,
        acabados: "Acabado brillante.",
        gama: " 23 colores de línea.",
        dirigido: "Oficio, particular y profesional",
        ficha: ["/fichas/esmaltes/1000-Tropimar.pdf"],
        ficha3: ["/fichas/esmaltes/1040-1041-1042-Tropimar-Metálicos.pdf"],
        seguridad: ["/seguridad/decorativa/HDS-1000-2025.pdf"],
        seguridad3: ["/seguridad/decorativa/HDS-1040-1041-1042-TROPIMAR-METALICO.pdf"],
        videos: [
            {name: "Atributos", url: "https://www.youtube.com/watch?v=yTuBaOlXHME"},
            {name: "Tutorial paso a paso", url: "https://www.youtube.com/watch?v=ujiKUFdQd4s"},
            {name: "Problema Solución", url: "https://www.youtube.com/watch?v=JMXvAICmU-E"},
        ],
    },{
        id: "tropimar-aqua",
        id_number: 132,
        codigo: 700,
        registro: "®",
        name: "Tropimar", name2: "Aqua",
        categorie: "decorativa",
        subcategorie: "esmaltes",
        microcategorie: "esmaltes",
        presentation: ["1 L","4 L","19 L"],
        // color: "tropimar",
        imagen: "/articulos/esmaltes/TROPIMAR-AQUA.png",
        imagen_prd: "/articulos/esmaltes/TROPIMAR-AQUA_IMG.png",
        subtitle: "El esmalte que lo resiste todo.",
        description: ["Recubrimiento base agua desarrollado con tecnología de vanguardia para proporcionar mejores resultados de resistencia, secado y durabilidad; libre de olores a disolvente que lo hace amigable con el medio ambiente y no toxico para el ser humano.","Ayuda a proteger y restaurar superficies de metal, concreto, yeso y madera. Ideal para decorar en interiores como cocinas, baños, muebles gracias a su fácil aplicación, secado rápido y libre de olor."],
        atributos: ["19 colores y más de 1600 colores disponibles en el Sistema Tintométrico INFINITE COLOR®"],
        rendimiento: "10 - 12 m2 / L",
        promedio: 9,
        // acabados: "Acabado brillante.",
        // gama: " 23 colores de línea.",
        // dirigido: "Oficio, particular y profesional",
        ficha: ["/fichas/esmaltes/Tropimar_BA.pdf"],
        // seguridad: ["/seguridad/decorativa/HDS-1000-2025.pdf"],

       
    },
    {
        id: "brigadier",
        id_number: 12,
        codigo: 700,
        registro: "®",
        name: "Brigadier",
        categorie: "decorativa",
        subcategorie: "esmaltes",
        microcategorie: "esmaltes",
        presentation: ["1 L","4 L","19 L"],
        color: "brigadier",
        imagen: "/articulos/esmaltes/brigadier.png",
        subtitle: "Esmalte de acabado único.",
        description: ["Esmalte alquidálico estirenado de bajo VOC."],
        atributos: ["Gran protección y adherencia.",
        "Secado rápido (25 min), curado en 24 horas",
        "Se puede utilizar en superficies ferrosas, yeso, concreto y mampostería."],
        rendimiento: " 9 a 12 m2 / L",
        promedio: 10.5,
        acabados: "Acabados mate y brillante",
        gama: " 21 colores de línea.",
        dirigido: "Particular y oficio",
        ficha: ["/fichas/esmaltes/1700-Brigadier.pdf"],
        seguridad: ["/seguridad/decorativa/HDS-1700-2025.pdf"],
    },
    {
        id: "canada",
        id_number: 13,
        codigo: 700,
        registro: "®",
        name: "Canada",
        categorie: "decorativa",
        subcategorie: "esmaltes",
        microcategorie: "esmaltes",
        presentation: ["1 L","4 L","19 L"],
        color: "canada",
        imagen: "/articulos/esmaltes/canada.png",
        subtitle: "El esmalte para mantenimientos.",
        description: ["Esmalte alquidálico anticorrosivo que protege interiores y exteriores."],
        atributos: ["Buena resistencia.",
        "Fácil aplicación","Duración a la corrosión."],
        rendimiento: " 6 a 8 m2 / L",
        promedio: 7,
        acabados: "Acabado brillante",
        gama: " 2 colores de línea.",
        dirigido: "Particular y oficio",
        ficha: ["/fichas/esmaltes/Canada.pdf"],
        seguridad: ["/seguridad/decorativa/CANADA.pdf"],
    },
   
    {
        id: "15",
        id_number: 15,
        codigo: 700,
        registro: "®",
        name: "Vulcan",
        name2:" Alquidálico Minio Genuino",
        categorie: "decorativa",
        subcategorie: "esmaltes",
        microcategorie: "primarios",
        presentation: ["1 L","4 L","19 L"],
        color: "vulcan_miniogenuino",
        imagen: "/articulos/esmaltes/vulcan.png",
        description: ["Primario alquidálico anticorrosivo de excelente calidad, diseñado con pigmentos de zinc, promueve la adherencia entre el acabado y el sustrato, brinda resistencia a la corrosión e intemperismo de superficies metálicas ferrosas expuestas a condiciones ambientales agresivas, como tanques, tubería, duetos subterráneos y herrería en general. También puede utilizarse sobre lamina galvanizada previa preparación de superficie. Por su acción anticorrosiva prolonga la vida útil de los metales."],
        rendimiento: " 10 a 12 m2 / L",
        promedio: 11,
        dirigido: "Particular, profesional y oficio",
        ficha: ["/fichas/esmaltes/5004-Primario-Minio.pdf"],
        seguridad: ["/seguridad/decorativa/HDS-5004-2025.pdf"],
    },
    {
        id: "16",
        id_number: 16,
        codigo: 700,
        registro: "®",
        name: "Vulcan",
        name2:" Alquidálico Minio Económico",
        categorie: "decorativa",
        subcategorie: "esmaltes",
        microcategorie: "primarios",
        presentation: ["1 L"],
        color: "vulcan_minioeconomico",
        imagen: "/articulos/esmaltes/vulcan.png",
        description: ["Primario alquidálico anticorrosivo económico de muy buena calidad, formulado con pigmentos de zinc, promueve la adherencia entre el acabado y el sustrato, brinda resistencia a la corrosión e intemperismo de superficies metálicas ferrosas como, tubería, duetos subterráneos y herrería en general. También puede utilizarse sobre lamina galvanizada previa preparación de superficie. Por su acción anticorrosiva prolonga la vida útil de los metales."],
        rendimiento: " 8 a 10 m2 / L",
        promedio: 11,
        dirigido: "Particular, profesional y oficio",
        ficha: ["/fichas/esmaltes/5005-PrimarioMinio-ECO.pdf"],
        seguridad: ["/seguridad/decorativa/HDS-5005-2025.pdf"],
    },
    {
        id: "17",
        id_number: 17,
        codigo: 700,
        registro: "®",
        name: "Vulcan",
        name2: " Alquidálico Cromato de Zinc",
        categorie: "decorativa",
        subcategorie: "esmaltes",
        microcategorie: "primarios",
        presentation: ["1 L","4 L","19 L"],
        color: "vulcan_comatozinc",
        imagen: "/articulos/esmaltes/vulcan.png",
        description: ["Primario alquidálico anticorrosivo de excelente calidad, formulado con pigmentos de zinc, su fórmula promueve la adherencia entre el acabado y el sustrato, brinda resistencia a la corrosión e intemperismo de superficies metálicas ferrosas, como tubería y herrería en general. Puede utilizarse también sobre acero inoxidable, aluminio y lámina zintro previa preparación de superficie. Por su acción anticorrosiva prolonga la vida útil de los metales."],
        rendimiento: " 8 a 10 m2 / L",
        promedio: 11,
        dirigido: "Particular, profesional y oficio",
        ficha: ["/fichas/esmaltes/5007-Primario-Universal.pdf"],
        seguridad: ["/seguridad/decorativa/HDS-5007-2025.pdf"],
    },
    {
        id: "18",
        id_number: 18,
        codigo: 700,
        registro: "®",
        name: "Vulcan",
        name2: " Alquidálico Secado Rápido ",
        categorie: "decorativa",
        subcategorie: "esmaltes",
        microcategorie: "primarios",
        presentation: ["1 L","4 L","19 L"],
        color: "vulcan_secadorapido",
        imagen: "/articulos/esmaltes/vulcan.png",
        description: ["Primario alquidálico estructural de secado rápido que brinda protección anticorrosiva a superficies metálicas, su nueva formula ahora es compatible con cualquier acabado ya que cuenta con una excelente aceptación de esmaltes alquidálico, alquidálico de secado rápido, estirenado y acrílico. Promueve la adherencia del acabado proporcionando una película dura y resistente."],
        rendimiento: " 10 a 12 m2 / L",
        promedio: 11,
        dirigido: "Particular, profesional y oficio",
        ficha: ["/fichas/esmaltes/TDS-5007-Primario-Universal.pdf"],
        seguridad: ["/seguridad/decorativa/HDS-5007-2025.pdf"],
    },
    {
        id: "19",
        id_number: 19,
        codigo: 700,
        registro: "®",
        name: "Vulcan",
        name2: " Alquidálico Secado Express ",
        categorie: "decorativa",
        subcategorie: "esmaltes",
        microcategorie: "primarios",
        presentation: ["1 L","4 L","19 L"],
        color: "vulcan_secadoexpress",
        imagen: "/articulos/esmaltes/vulcan.png",
        description: ["Es un primario con exclentes cualidades de protección anticorrosiva, y mejor tiempo de secado, diseñado para la protección de piezas y superficies metálicas ferrosas como tanques, tubería y herrería en general. Mejora la adherencia del acabado a la superficie metálica y por su acción anticorrosiva prolonga la vida útil de los metales. También podrá utilizarse sobre lámina galvanizada previa preparación de superficie."],
        rendimiento: " 10 a 12 m2 / L",
        promedio: 11,
        dirigido: "Particular, profesional y oficio",
        ficha: ["/fichas/esmaltes/5040-5041-5042-Primario-Secado-Express.pdf"],
        seguridad: ["/seguridad/decorativa/HDS-5040-5041-5042-2025.pdf"],
    },

    {
        id: "20",
        id_number: 20,
        codigo: 700,
        registro: "®",
        name: "Vulcan",
        name2: " Alquidálico para Herreros",
        categorie: "decorativa",
        subcategorie: "esmaltes",
        microcategorie: "primarios",
        presentation: ["1 L","4 L","19 L"],
        color: "vulcan_herreros",
        imagen: "/articulos/esmaltes/vulcan.png",
        description: ["Primario 100% alquidálico diseñado con la más alta calidad de materiales que darán protección a superficies metálicas ferrosas como tanques, tubería y herrería en general. Mejora la adherencia del acabado a la superficie metálica y por su acción anticorrosiva prolonga la vida útil de los metales. "],
        rendimiento: " 10 a 12 m2 / L",
        promedio: 11,
        dirigido: "Particular, porfesional y oficio", 
        ficha: ["/fichas/esmaltes/5050-5051-Primario Herreros.pdf"],
        seguridad: ["/seguridad/decorativa/HDS-5050-2025.pdf"],
    },
    {
        id: "aerosol-color-cril",
        id_number: 21,
        codigo: 700,
        tipo:"aerosol",
        name: "Brillantes",
        categorie: "decorativa",
        subcategorie: "aerosoles",
        microcategorie: "aerosoles",
        presentation: ["400 ml"],
        color: "brillantes",
        imagen: "/articulos/aerosoles/AEROSOL_brillantes.png",
        description: ["Su acabado brillante y amplia gama de colores permite embellecer y dar un retoque a tus superficies."],
        rendimiento: " 1 a 2 m2 por bote ",
        promedio: 1.5,
        gama: "14 colores",
        ficha: ["/FICHAS_TECNICAS/AUTOMOTRIZ/AEROSOLES COLOR CRIL/TDS Aerosol Brillante.pdf"],
        seguridad: ["/HOJAS_SEGURIDAD/AUTOMOTRIZ/AEROSOLES_COLOR_CRIL/HDS AEROSOL BRILLANTE.pdf"]
    },
    {
        id: "22",
        id_number: 22,
        codigo: 700,
        tipo:"aerosol",
        name: "Madera",
        categorie: "decorativa",
        subcategorie: "aerosoles",
        microcategorie: "aerosoles",
        presentation: ["400 ml"],
        color: "aerosol_madera",
        imagen: "/articulos/aerosoles/AEROSOL_madera.png",
        description: ["Resalta y da vida a tus objetos en color madera."],
        rendimiento: "De 1 a 2 m2 por bote ",
        promedio: 1.5,
        gama: "2 colores",
        ficha: ["/FICHAS_TECNICAS/AUTOMOTRIZ/AEROSOLES COLOR CRIL/TDS Aerosol Brillante.pdf"],
        seguridad: ["/HOJAS_SEGURIDAD/AUTOMOTRIZ/AEROSOLES_COLOR_CRIL/HDS AEROSOL BRILLANTE.pdf"]
    },
    {
        id: "23",
        id_number: 23,
        codigo: 700,
        tipo:"aerosol",
        name: "Metálicos",
        categorie: "decorativa",
        subcategorie: "aerosoles",
        microcategorie: "aerosoles",
        presentation: ["400 ml"],
        color: "metalicos",
        imagen: "/articulos/aerosoles/AEROSOL_metalicos.png",
        description: ["Da un toque brillante y metálico a tus objetos.","Adherencia a metales."],
        rendimiento: "De 1 a 2 m2 por bote",
        promedio: 1.5,
        gama: "5 colores",
        ficha: ["/FICHAS_TECNICAS/AUTOMOTRIZ/AEROSOLES COLOR CRIL/TDS Aerosol metalico.pdf"],
        seguridad: ["/HOJAS_SEGURIDAD/AUTOMOTRIZ/AEROSOLES_COLOR_CRIL/HDS AEROSOL-METALICO.pdf"]
    },

    {
        id: "24",
        id_number: 24,
        codigo: 700,
        name: "Mate",
        tipo:"aerosol",
        categorie: "decorativa",
        subcategorie: "aerosoles",
        microcategorie: "aerosoles",
        presentation: ["400 ml"],
        color: "mate",
        imagen: "/articulos/aerosoles/AEROSOL_mate.png",
        description: ["Da un toque mate a tus objetos. "],
        rendimiento: " 1 a 2 m2 por bote ",
        promedio: 1.5,
        gama: "3 colores",
        ficha: ["/FICHAS_TECNICAS/AUTOMOTRIZ/AEROSOLES COLOR CRIL/TDS Aerosol mate y satinado.pdf"],
        seguridad: ["/HOJAS_SEGURIDAD/AUTOMOTRIZ/AEROSOLES_COLOR_CRIL/HDS AEROSOL MATE Y SATINADO.pdf"]
    },
   
    {
        id: "25",
        id_number: 25,
        codigo: 700,
        tipo:"aerosol",
        name: "Anticorrosivos",
        categorie: "decorativa",
        subcategorie: "aerosoles",
        microcategorie: "aerosoles",
        presentation: ["400 ml"],
        color: "anticorrosivos",
        imagen: "/articulos/aerosoles/AEROSOL_anticorrosivosyalta_temperatura.png",
        description: ["Da un toque brillante y metálico a tus objetos.","Adherencia a metales."],
        rendimiento: " 1 a 2 m2 por bote ",
        promedio: 1.5,
        gama: "2 colores",
        ficha: ["/FICHAS_TECNICAS/AUTOMOTRIZ/AEROSOLES COLOR CRIL/TDS Aerosol anticorrosivo.pdf"],
        seguridad: ["/HOJAS_SEGURIDAD/AUTOMOTRIZ/AEROSOLES_COLOR_CRIL/HDS AEROSOL- ANTICORROSIVOS.pdf"]
    },
    {
        id: "26",
        id_number: 26,
        codigo: 700,
        tipo:"aerosol",
        name: "Alta Temperatura",
        categorie: "decorativa",
        subcategorie: "aerosoles",
        microcategorie: "aerosoles",
        presentation: ["400 ml"],
        color: "alta_temperatura",
        imagen: "/articulos/aerosoles/AEROSOL_anticorrosivosyalta_temperatura.png",
        description: ["Ideal para superficies metálicas expuestas a temperaturas altas de hasta 250 ºC"],
        rendimiento: " 1 a 2 m2 por bote ",
        promedio: 1.5,
        gama: "2 colores",
        ficha: ["/FICHAS_TECNICAS/AUTOMOTRIZ/AEROSOLES COLOR CRIL/TDS Aerosol alta temperatura.pdf"],
        seguridad: ["/HOJAS_SEGURIDAD/AUTOMOTRIZ/AEROSOLES_COLOR_CRIL/HDS AEROSOL-ALTA TEMPERATURA.pdf"]
    },
    {
        id: "107",
        id_number: 27,
        codigo: 700,
        name: "Satín",
        tipo:"aerosol",
        categorie: "decorativa",
        subcategorie: "aerosoles",
        microcategorie: "aerosoles",
        presentation: ["400 ml"],
        color: "satin_aerosol",
        imagen: "/articulos/aerosoles/AEROSOL_mate.png",
        description: ["Da un toque mate a tus objetos. "],
        rendimiento: " 1 a 2 m2 por bote ",
        promedio: 1.5,
        gama: "1 color",
        ficha: ["/FICHAS_TECNICAS/AUTOMOTRIZ/AEROSOLES COLOR CRIL/TDS Aerosol mate y satinado.pdf"],
        seguridad: ["/HOJAS_SEGURIDAD/AUTOMOTRIZ/AEROSOLES_COLOR_CRIL/HDS AEROSOL MATE Y SATINADO.pdf"]
    },
    {
        id: "27",
        id_number: 28,
        codigo: 700,
        tipo:"aerosol",
        name: "Niquelados",
        categorie: "decorativa",
        subcategorie: "aerosoles",
        microcategorie: "aerosoles",
        presentation: ["400 ml"],
        color: "niquelados",
        imagen: "/articulos/aerosoles/AEROSOL_niquelados.png",
        description: ["Ideal para tus adornos de herrería."],
        rendimiento: " 1 a 2 m2 por bote.",
        promedio: 1.5,
        gama: "5 colores",
        ficha: ["/FICHAS_TECNICAS/AUTOMOTRIZ/AEROSOLES COLOR CRIL/TDS Aerosol niquelado.pdf"],
        seguridad: ["/HOJAS_SEGURIDAD/AUTOMOTRIZ/AEROSOLES_COLOR_CRIL/HDS AEROSOL-NIQUELADOS.pdf"]
    },
    {
        id: "28",
        id_number: 29,
        codigo: 700,
        tipo:"aerosol",
        name: "Fluorescentes",
        categorie: "decorativa",
        subcategorie: "aerosoles",
        microcategorie: "aerosoles",
        presentation: ["400 ml"],
        color: "fluorescentes",
        imagen: "/articulos/aerosoles/AEROSOL_fluorescentes.png",
        description: ["Ideal para señalizaciones y trabajos artísticos en cartulina color mate. "],
        rendimiento: " 1 a 2 m2 por bote.",
        promedio: 1.5,
        gama: "4 colores",
        ficha: ["/FICHAS_TECNICAS/AUTOMOTRIZ/AEROSOLES COLOR CRIL/TDS Aerosol fluorescente.pdf"],
        seguridad: ["/HOJAS_SEGURIDAD/AUTOMOTRIZ/AEROSOLES_COLOR_CRIL/HDS AEROSOL FLUORESCENTE.pdf"]
    },
    {
        id: "29",
        id_number: 30,
        codigo: 700,
        tipo:"aerosol",
        name: "Seguridad",
        categorie: "decorativa",
        subcategorie: "aerosoles",
        microcategorie: "aerosoles",
        presentation: ["400 ml"],
        color: "seguridad",
        imagen: "/articulos/aerosoles/AEROSOL_seguridad.png",
        description: ["Ideal para la identificación de tuberías."],
        rendimiento: " 1 a 2 m2 por bote ",
        promedio: 1.5,
        gama: "4 colores.",
        ficha: ["/FICHAS_TECNICAS/AUTOMOTRIZ/AEROSOLES COLOR CRIL/TDS Aerosol Brillante.pdf"],
        seguridad: ["/HOJAS_SEGURIDAD/AUTOMOTRIZ/AEROSOLES_COLOR_CRIL/HDS AEROSOL BRILLANTE.pdf"]
    },{
        id: "vulcan-5011",
        id_number: 18,
        codigo: 700,
        registro: "®",
        name: "VULCAN",
        name2: " PRIMARIO ALTA ADHERENCIA",
        categorie: "decorativa",
        subcategorie: "esmaltes",
        microcategorie: "primarios",
        presentation: ["1 L","4 L"],
        color: "",
        imagen: "/articulos/esmaltes/vulcan_5011.png",
        description: ["El primario Vulcan Alta Adherencia es un producto de la más alta calidad, elaborado con resinas acrílicas, especialmente diseñado para aplicarse sobre lámina galvanizada previamente acondicionada. Cuenta con excelentes propiedades como son: secado rápido, gran poder de relleno y gran adherencia. Para utilizarse como recubrimiento anticorrosivo sobre estructuras metálicas como son tanques, tuberías, maquinaria, puertas, etc. El primario puede ser recubierto con cualquier acabado IPESA Pinturas.", 
            "1.	Excelente adherencia sobre lámina galvanizada.",
            "2.	Buena protección anticorrosiva.",
            "3.	Secado rápido."
        ],
        rendimiento: " 10 a 11m² / L",
        promedio: 11,
        dirigido: "Particular, profesional y oficio",
        ficha: ["/fichas/esmaltes/VULCAN_5011_FICHA_TECNICA_PRIMER_ALTA_ADHERENCIA.pdf"],
        seguridad: ["/seguridad/decorativa/VULCAN_5011_HOJA_DE_SEGURIDAD.pdf"],
    },

     // +++++++++++++++++++ Impermeabilizantes +++++++++++++++++++++++
    {
        id: "imper-cril",
        id_number: 31,
        registro: "®",
        name: "Imper Cril",
        categorie: "decorativa",
        subcategorie: "impermeabilizantes",
        microcategorie: "impermeabilizantes",
        presentation: ["4 L","19 L"],
        tiempo: "7 Años",
        color: "",
        imagen: "/articulos/impermeabilizantes/impercrill.png",
        description: ["Impermeabilizante elastomérico hecho a base de resinas acrílicas altamente elásticas y flexibles, que resisten a movimientos térmico estructurales de losas, evitando así filtraciones por agrietamientos.",
    "Por su formulación es fácil de usar y en color blanco favorece la reducción de la temperatura interior. Se recomienda para proteger y decorar superficies expuestas a la lluvia como losas de concreto, láminas de asbesto, lámina galvanizada, paredes, muros de ladrillo, etc."],
        rendimiento: "De 1 a 1.5 m2 / L",
        promedio: 1.25,
        ficha: ["/fichas/impermeabilizantes/9040-9041-ImperCril-7anios.pdf"],
        seguridad: ["/seguridad/decorativa/9040-9041-2025.pdf"],
    },
    {
        id: "imper-lux",
        id_number: 32,
        registro: "®",
        name: "Imper Lux",
        categorie: "decorativa",
        subcategorie: "impermeabilizantes",
        microcategorie: "impermeabilizantes",
        presentation: ["4 L","19 L"],
        tiempo: "5 Años",
        color: "",
        imagen: "/articulos/impermeabilizantes/imperlux.png",
        description: ["Impermeabilizante elastomérico hecho a base de resinas acrílicas, por sus características, formulación y materias primas presenta un grado alto de elongación en impermeabilidad, lo cual provoca una resistencia importante a movimientos térmicos estructurales de losas y/o de la superficie impermeabilizada sin sufrir agrietamientos, previniendo filtraciones de agua."],
        rendimiento: "De 1 a 1.5 m2 / L",
        promedio: 1.25,
        ficha: ["/fichas/impermeabilizantes/9050-9051-ImperLux-5anios.pdf"],
        seguridad: ["/seguridad/decorativa/9050-9051-2025.pdf"],
    },
    {
        id: "imper-lux-fibratado",
        id_number: 33,
        registro: "®",
        name: "Imper Lux Fibratado",
        categorie: "decorativa",
        subcategorie: "impermeabilizantes",
        microcategorie: "impermeabilizantes",
        presentation: ["4 L","19 L"],
        tiempo: "5 Años",
        color: "",
        imagen: "/articulos/impermeabilizantes/imperlux_2.png",
        description: ["Impermeabilizante hecho a base de resina 100% acrílica y fibras sintéticas, lo que le proporciona altísima elasticidad y flexibilidad, protegiendo la superficie impermeabilizada de forma eficiente, evitando que los movimientos térmicos estructurales generen filtraciones.",
    "Dadas sus características de elasticidad, elongación e impermeabilidad, evita los agrietamientos y la necesidad de repasar la zona impermeabilizada en forma periódica. No requiere de malla de refuerzo en su aplicación."],
        rendimiento: "De 1 a 1.5 m2 / L",
        promedio: 1.25,
        ficha: ["/fichas/impermeabilizantes/9052-9053-ImperLuxFibratado.pdf"],
        seguridad: ["/seguridad/decorativa/9052-9053.pdf"],
    },
    {
        id: "imper-ruf",
        id_number: 34,
        registro: "®",
        name: "Imper Ruf",
        categorie: "decorativa",
        subcategorie: "impermeabilizantes",
        microcategorie: "impermeabilizantes",
        presentation: ["19 L"],
        tiempo: "3 Años",
        color: "",
        imagen: "/articulos/impermeabilizantes/imperruf.png",
        description: ["Impermeabilizante elastomérico hecho a base de resinas acrílicas, su formulación es altamente elástica y flexible, lo cual proporciona alta resistencia e impermeabilidad de la superficie."],
        rendimiento: "De 1 a 1.5 m2 / L",
        promedio: 1.25,
        ficha: ["/fichas/impermeabilizantes/9060-9061-ImperRuf-3anios.pdf"],
        seguridad: ["/seguridad/decorativa/9060-9061-2025.pdf"],
    },
    // {
    //     id: "imper-micro",
    //     id_number: 35,
    //     registro: "®",
    //     name: "Imper Micro",
    //     categorie: "decorativa",
    //     subcategorie: "impermeabilizantes",
    //     microcategorie: "impermeabilizantes",
    //     presentation: ["4 L","19 L"],
    //     tiempo: "7 Años",
    //     color: "",
    //     imagen: "/articulos/impermeabilizantes/impermicro.png",
    //     description: ["Impermeabilizante asfáltico emulsionado con agua, recomendado para aplicar sobre techos y azoteas."," Se adhiere inclusive en todo tipo de superficies secas o ligeramente húmedas. Es un sistema de impermeabilización de aplicación en frío, por lo que está listo para usarse; es de fácil aplicación y no es necesario calentarlo ni diluir"],
    //     rendimiento: "De 1 a 1.3 m2 / L",
    //     promedio: 1.15,
    //     ficha: ["/fichas/impermeabilizantes/IMPER_MICRO.pdf"],
    //     seguridad: ["/seguridad/decorativa/IMPER_MICRO.pdf"],
    // },
    {
        id: "imper-rok",
        id_number: 36,
        registro: "®",
        name: "Imper Rok",
        categorie: "decorativa",
        subcategorie: "impermeabilizantes",
        microcategorie: "impermeabilizantes",
        presentation: ["1 L","4 L","19 L"],
        tiempo: "7 Años",
        color: "",
        imagen: "/articulos/impermeabilizantes/imperrok.png",
        description: ["Impermeabilizante asfáltico base solvente que por su composición es ideal para proteger aislamientos térmicos.","Además de ser un excelente revestimiento impermeable, elástico y duradero en áreas de contacto continuo con la humedad, se adhiere sobre cualquier tipo de superficie como: cimentaciones, muros de contención, charolas de baños, jardineras, depósitos de agua no aptos para consumo humano, etc."],
        rendimiento: "De 1 a 1.5 m2 / L",
        promedio: 1.25,
        ficha: ["/fichas/impermeabilizantes/9000-ImperRock-BS.pdf"],
        seguridad: ["/seguridad/decorativa/9000-2025.pdf"],
    },
    {
        id: "wall-cover-eco",
        id_number: 37,
        registro: "®",
        name: "Wall Cover", name2:" Eco 3 Años",
        categorie: "decorativa",
        subcategorie: "impermeabilizantes",
        microcategorie: "impermeabilizantes",
        presentation: ["4 L","18 L"],
        tiempo: "",
        color: "",
        imagen: "/articulos/impermeabilizantes/wallcover.png",
        description: ["Impermeabilizante elastomérico creado especialmente para la impermeabilización de muros y paredes exteriores, por su alto nivel de elasticidad no sufre agrietamientos, evita la humedad y filtraciones hacia el interior."],
        rendimiento: "De 1 a 1.5 m2 / L",
        promedio: 1.25,
        ficha: ["/fichas/impermeabilizantes/9063-WallCover-3anios.pdf"],
        seguridad: ["/seguridad/decorativa/9063-2025.pdf"],
    },
    {
        id: "wal-cover-plus",
        id_number: 38,
        registro: "®",
        name: "Wall Cover",name2: "Plus 5 Años",
        categorie: "decorativa",
        subcategorie: "impermeabilizantes",
        microcategorie: "impermeabilizantes",
        presentation: ["4 L","18 L"],
        tiempo: "",
        color: "",
        imagen: "/articulos/impermeabilizantes/wallcoverplus.png",
        description: ["Impermeabilizante de excelente calidad, diseñado para proteger e impermeabilizar muros y paredes exteriores.","Su formulación le brinda propiedades de altísima elasticidad y flexibilidad, evitando que se generen filtraciones e impidiendo el paso de humedad."],
        rendimiento: "De 1 a 1.5 m2 / L",
        promedio: 1.25,
        ficha: ["/fichas/impermeabilizantes/9054-WallCover-5anios.pdf"],
        seguridad: ["/seguridad/decorativa/9054-2025.pdf"],
    },
    
    {
        id: "imper-flex",
        id_number: 39,
        registro: "®",
        name: "Imper Flex",name2: "(rollo de 100m)",
        categorie: "decorativa",
        subcategorie: "impermeabilizantes",
        microcategorie: "impermeabilizantes",
        presentation: ["Rollo de 100m"],
        tiempo: "",
        color: "",
        imagen: "/articulos/impermeabilizantes/rollo.png",
        description: ["Malla no tejida de trama multidireccional con fibras de poliéster."," Funciona como refuerzo integral en los sistemas de impermeabilización de aplicación en frío, ya sean asfálticos o acrílicos."],
        ficha: [""]
    },
    {
        id: "color-para-cemento",
        id_number: 40,
        name: "Color Para Cemento",
        categorie: "decorativa",
        subcategorie: "",
        microcategorie: "",
        presentation: ["1 kg"],
        tiempo: "",
        color: "",
        imagen: "/articulos/impermeabilizantes/color_cemento.png",
        description: ["Pigmento de alta calidad diseñado especialmente para entintar el concreto a utilizar en fachadas, pisos y tabique, así como para la coloración en la fabricación de mosaicos, mortero, loseta, entre otros. "],
        rendimiento: "De 10 a 12 m2 / L",
        ficha: ["/fichas/impermeabilizantes/Color_Cemento.pdf"],
        seguridad: ["/seguridad/decorativa/COLOR_CEMENTO.pdf"],
    },

    {
        id: "sellador-directo-de-nitro",
        id_number: 41,
        name: "Sellador Directo de Nitro",
        categorie: "maderas",
        subcategorie: "maderas",
        microcategorie: "selladores_maderas",
        presentation: ["1 L", "4 L", "19 L"],
        tiempo: "",
        color: "",
        imagen: "/articulos/maderas/sellador_directo.png",
        description: ["Sellador de nitrocelulosa listo para aplicar, proporciona rápido sellado de la madera con pocas manos, secado rápido, con buena lijabilidad y polveo. No requiere dilución"],
        rendimiento: "Rendimiento de 8.2 m2 / L",
        promedio: 8.2,
        ficha: ["/FICHAS_TECNICAS/MADERAS/3001 SELLADOR DIRECTO.pdf"],
        seguridad: ["/HOJAS_SEGURIDAD/MADERAS/HDS-3001-3002_2025.pdf"]
    },
    {
        id: "sellador-profesional-altos-solidos",
        id_number: 42,
        name: "Sellador Profesional Altos Sólidos",
        categorie: "maderas",
        subcategorie: "maderas",
        microcategorie: "selladores_maderas",
        presentation: ["1 L", "4 L", "19 L"],
        tiempo: "",
        color: "",
        imagen: "/articulos/maderas/sellador_solidos.png",
        description: ["Producto de alta viscosidad con gran capacidad de disolución, para su uso en interiores.","Presenta buena adherencia, facilidad de lijado y polveo con buena nivelación, lo que permite dejar un acabado de apariencia fina y tersa."],
        rendimiento: "Rendimiento de 11 m2 por / L",
        promedio: 11,
        ficha: ["/FICHAS_TECNICAS/MADERAS/3002 SELLADOR ALTOS SOLIDOS.pdf"],
        seguridad: ["/HOJAS_SEGURIDAD/MADERAS/HDS-3001-3002_2025.pdf"]
    },

    {
        id: "laca-profesional-de-nitro",
        id_number: 43,
        name: "Laca Profesional de Nitro",
        categorie: "maderas",
        subcategorie: "maderas",
        microcategorie: "lacas",
        presentation: ["1 L", "4 L", "19 L"],
        tiempo: "",
        color: "",
        imagen: "/articulos/maderas/laca_profesional.png",
        description: ["Producto de nitrocelulosa de viscosidad media para su uso en interiores."," Se utiliza para dar un acabado terso y homogéneo en muebles de madera que no requieran de una alta resistencia mecánica ni física."," Producto de secado rápido y fácil aplicación"],
        rendimiento: " 8.3 m2 / L",
        promedio: 8.3,
        acabados:  ["Brillante ,","semimate ","y mate."],
        ficha: ["/FICHAS_TECNICAS/MADERAS/3004 LACA BRILLANTE.pdf"],
        seguridad: ["/HOJAS_SEGURIDAD/MADERAS/HDS-3004,3005,3006,3007_2025.pdf"]
    },
   
    {
        id: "laca-directa-de-nitro",
        id_number: 44,
        name: "Laca Directa de Nitro",
        categorie: "maderas",
        subcategorie: "maderas",
        microcategorie: "lacas",
        presentation: ["1 L", "4 L"],
        tiempo: "",
        color: "",
        imagen: "/articulos/maderas/laca_directa.png",
        description: ["Laca de alta calidad, lista para usar en todo tipo de muebles y/o maderas que se encuentren en el interior.","Proporciona un rápido secado, un extraordinario brillo y una excelente nivelación.","Importante: Está laca al estar lista para usarse. presenta baja viscosidad."],
        rendimiento: " 7.5 m2 / L ",
        promedio: 7.5,
        ficha: ["/FICHAS_TECNICAS/MADERAS/3007_Laca Directa de Nitro Brillante.pdf"],
        seguridad: ["/HOJAS_SEGURIDAD/MADERAS/HDS-3004,3005,3006,3007_2025.pdf"]
    },
    {
        id: "laca-industrial-de-nitro",
        id_number: 45,
        name: "Laca Industrial de Nitro",
        categorie: "maderas",
        subcategorie: "maderas",
        microcategorie: "lacas",
        presentation: ["1 L", "4 L","19 L"],
        tiempo: "",
        color: "laca_century",
        imagen: "/articulos/maderas/laca_industrial.png",
        description: ["Producto de alta viscosidad para uso en interiores.","Se utiliza como acabado de color cerrado en muebles de madera que no requieran de alta resistencia mecánica ni física. Presenta buena adherencia, secado rápido y gran brillo. Por su calidad y excelentes cualidades proporciona buena nivelación, lo que le permite dejar un acabado de apariencia fina y tersa."],
        rendimiento: " 8 a 9.7 m2 / L",
        promedio: 8.85,
        gama: " 11 colores de línea.",
        ficha: ["/FICHAS_TECNICAS/MADERAS/3080-3090_Laca Industrial de Nitro.pdf"],
        seguridad: ["/HOJAS_SEGURIDAD/MADERAS/HDS-3080-3090_LACA INDUSTRIAL DE NITRO-2025.pdf"]
    },

    {
        id: "primer-de-nitrocelulosa",
        id_number: 46,
        name: "Primer de Nitrocelulosa",
        categorie: "maderas",
        subcategorie: "maderas",
        microcategorie: "lacas",
        presentation: ["1 L", "4 L","19 L"],
        tiempo: "",
        color: "primer_nitrocelulosa",
        imagen: "/articulos/maderas/primers_color.png",
        description: ["Producto de altos sólidos y alta viscosidad con gran capacidad de disolución.",
        "Se utiliza para sellar el poro de la madera, en acabados de nitrocelulosa.",
        "Presenta buena adherencia, facilidad de lijado y polveo."," Su uso es para interiores exclusivamente"],
        rendimiento: " 10 a 12 m2 / L",
        promedio: 11,
        gama: "4 colores de línea",
        ficha: ["/FICHAS_TECNICAS/MADERAS/3070,3071,3072,3073_Primer.pdf"],
        seguridad: ["/HOJAS_SEGURIDAD/MADERAS/HDS-3070,3071,3072,3073-2025.pdf"]
    },

    {
        id: "tinta-al-alcohol",
        id_number: 47,
        tipo:"aerosol",
        name: "Tinta al Alcohol",
        categorie: "maderas",
        subcategorie: "maderas",
        microcategorie: "tintas",
        presentation: ["500 ml", "1 L"],
        tiempo: "",
        color: "tintas_alcohol",
        imagen: "/articulos/maderas/tinta_alcohol.png",
        description: ["Diseñado especialmente para entintar trabajos de madera, donde se requiere una alta transparencia y color uniforme, resaltando las veta de la madera."],
        gama: " 11 colores de línea.",
        ficha: ["/FICHAS_TECNICAS/MADERAS/3010 al 3020 ALCOHOL.pdf"],
        seguridad: ["/HOJAS_SEGURIDAD/MADERAS/HDS-3010 al 3020-2025-TINTA ALCOHOL.pdf"]
    },
    {
        id: "tinta-al-aceite",
        id_number: 48,
        tipo:"aerosol",
        name: "Tinta al Aceite",
        categorie: "maderas",
        subcategorie: "maderas",
        microcategorie: "tintas",
        presentation: ["500 ml", "1 L"],
        tiempo: "",
        color: "tintas_aceite",
        imagen: "/articulos/maderas/tinta_aceite.png",
        description: ["Diseñado para entintar muebles de madera que se encuentran en el interior, proporciona transparencia, color uniforme y buena penetración, realzando la veta de la madera. "],
        gama:"11 colores de línea.",
        ficha: ["/FICHAS_TECNICAS/MADERAS/3030 al 3040 TINTA AL ACEITE.pdf"],
        seguridad: ["/HOJAS_SEGURIDAD/MADERAS/HDS-3030 al 3040-2025.pdf"]
    },
   
    {
        id: "barniz-transparente",
        id_number: 49,
        name: "Barniz Transparente",
        categorie: "maderas",
        subcategorie: "maderas",
        microcategorie: "barnices",
        presentation: ["500 ml", "1 L", "4 L","19 L"],
        tiempo: "",
        color: "",
        imagen: "/articulos/maderas/barniz_transparente.png",
        description: ["Especialmente diseñado para lograr óptima adherencia, nivelación y secado. Puede aplicarse sobre superficies de madera, revestimientos y otros objetos."," Decora y protege la madera, resiste a la intemperie y mantiene su brillo original. "],
        rendimiento: " 13.9 m2 / L",
        promedio: 13.9,
        ficha: ["/FICHAS_TECNICAS/MADERAS/3202_Barniz transparente.pdf"],
        seguridad: ["/HOJAS_SEGURIDAD/MADERAS/HDS-3202_BARNIZ TRANSPARENTE-2025.pdf"]
    },

    {
        id: "barniz-marino",
        id_number: 50,
        name: "Barniz Marino",
        categorie: "maderas",
        subcategorie: "maderas",
        microcategorie: "barnices",
        presentation: ["500 ml","1 L", "4 L", "19 L"],
        tiempo: "",
        color: "",
        imagen: "/articulos/maderas/barniz_marino.png",
        description: ["Barniz especialmente diseñado para lograr óptima adherencia y nivelación.",
        " Para aplicarse sobre superficies tanto en el interior como en el exterior. Aporta un excelente acabado brillante y por su composición fenólica tiene una excelente resistencia a los químicos, intemperie, rayado y al agua."],
        rendimiento: "De 10 a 12 m2 / L",
        promedio: 11,
        ficha: ["/FICHAS_TECNICAS/MADERAS/3203_Barniz Marino.pdf"],
        seguridad: ["/HOJAS_SEGURIDAD/MADERAS/HDS-3203-BARNIZ MARINO-2025.pdf"]
    },

    {
        id: "barniz-entintado",
        id_number: 51,
        name: "Barniz Entintado",
        categorie: "maderas",
        subcategorie: "maderas",
        microcategorie: "barnices",
        presentation: ["1 L", "4 L"],
        tiempo: "",
        color: "barniz_entintado",
        imagen: "/articulos/maderas/barniz_entintado.png",
        description: ["Producto de nitrocelulosa entintado listo para aplicar y para uso en interiores.",
    "Se utiliza para dar un acabado brillante y brindar color, al mismo tiempo en un solo paso, proporcionando tersura, buen brillo, excelente nivelación y tiempo de secado rápido. "],
         rendimiento: " 11.8 m2 / L",
         promedio: 11.8,
         ficha: ["/FICHAS_TECNICAS/MADERAS/3206-3213_Barniz Entintado.pdf"],
         seguridad: ["/HOJAS_SEGURIDAD/MADERAS/HDS-3206-3213-BARNIZ ENTINTADO-2025.pdf"]
    },
    {
        id: "barniz-de-poliuretano",
        id_number: 52,
        name: "Barniz Poliuretano",
        categorie: "maderas",
        subcategorie: "maderas",
        microcategorie: "poliuretano",
        presentation: ["1 L", "4 L"],
        tiempo: "",
        color: "",
        imagen: "/articulos/maderas/barniz_poliuretano.png",
        description: ["Barniz aromático de dos componentes recomendado para uso en interiores y para aplicarse sobre muebles de uso general que han sido sellados con Fondo de Poliuretano."],
        rendimiento: " 10.5 m2 / L",
        promedio: 10.5,
        acabados_madera: ["Brillante"," Semimate"," Mate"," Catalizador Brillante"," Catalizador Matizado"],
        dirigido: " 11.9 m2 / L",
        ficha: ["/FICHAS_TECNICAS/MADERAS/3060-3063_Barniz de PU brillante-Catalizador.CENTURY.pdf"],
        seguridad: ["/HOJAS_SEGURIDAD/MADERAS/HDS-3060-3061-3062-2025.pdf"]
        // "/fichas/maderas/BARNIZ_POLIURETANO_MATE.pdf",
        //     "/fichas/maderas/BARNIZ_POLIURETANO_SEMIMATE.pdf"
    },
    
    {
        id: "solvente-para-poliuretano",
        id_number: 53,
        name: "Solvente para Poliuretano",
        categorie: "maderas",
        subcategorie: "maderas",
        microcategorie: "poliuretano",
        presentation: ["1 L","4 L"],
        tiempo: "",
        color: "",
        imagen: "/articulos/maderas/solvente_poliuretano.png",
        description: ["Solvente diseñado para diluir los sistemas de poliuretano.","Presenta excelente poder de disolución, ayudando a optimizar la aplicación de los barnices de poliuretano, sin perder brillo."],
        ficha: ["/FICHAS_TECNICAS/MADERAS/3069 SOLVENTE PARA POLIURETANO.pdf"],
        seguridad: ["/HOJAS_SEGURIDAD/MADERAS/HDS-3069 -SOLVENTE PU-2025.pdf"]
    },

    {
        id: "fondo-de-poliuretano",
        id_number: 54,
        name: "Fondo de Poliuretano",
        categorie: "maderas",
        subcategorie: "maderas",
        microcategorie: "poliuretano",
        presentation: ["1 L","4 L"],
        tiempo: "",
        color: "",
        imagen: "/articulos/maderas/fondo_poliuretano.png",
        description: ["Poliuretano aromático para uso en interiores, diseñado para tapar la porosidad de la madera y preparar una superficie de anclaje para recibir acabados de poliuretano. "],
        rendimiento: " 11.1 m2 / L",
        promedio: 11.1,
        ficha: ["/fichas/maderas/FONDO_POLIURETANO.pdf"],
    },
    
   
   








    // ++++++++++++++++++++++++++++++++++++++++++++++ AUTOMOTRIZ ++++++++++++++++++++++++++++++++++++++++++++++++++


      // ++++++++++++++++ Esmalte ++++++++++++++++
    


     // ++++++++++++++++ Laca ++++++++++++++++
    {
        id: "laca-acrilica",
        id_number: 55,
        name: "Laca Acrílica",
        categorie: "automotriz",
        subcategorie: "automotriz",
        microcategorie: "laca_acrilica",
        presentation: ["4 L","19 L"],
        tiempo: "",
        color: "",
        imagen: "/articulos/automotriz/laca_acrilica.png",
        description: ["Laca Acrílica COLOR CRIL® es un producto de excelente calidad formulado para repintado automotriz. Su secado rápido, buena retención de color y gran durabilidad, hacen de este producto una excelente opción para el repintado profesional de vehículos automotrices."],
        rendimiento: " 7 a 8 m2 / L",
        // promedio: 7.5,
        gama: "31 colores sólidos, 9 aluminios y 1 transparente (vehículo de ajuste)",
        ficha: ["/fichas/automotriz/TDS_LINEA_2300_LACA_ACRILICA.pdf"],
        seguridad: ["/seguridad/automotriz/HDS_LINEA_2300_LACA_ACRILICA.pdf"]
    },


     // ++++++++++++++++ Base Color ++++++++++++++++
    {
        id: "base-color",
        id_number: 56,
        name: "Base Color",
        categorie: "automotriz",
        subcategorie: "automotriz",
        microcategorie: "basecolor",
        presentation: ["1 L","4 L"],
        tiempo: "",
        color: "",
        ficha_color:["/fichas/automotriz/base_color_rgb.pdf"],
        imagen: "/articulos/automotriz/base_color.png",
        description: ["Base Color de COLOR CRIL® es un producto desarrollado para el repintado total o parcial de vehículos automotrices; su variedad de colores y limpieza de tintes permiten la igualación de infinidad de colores. "],
        rendimiento: " 7 a 8 m2 / L",
        // promedio: 7.5,
        gama: "33 colores sólidos, 10 aluminios, 2 paliocrom y 1 transparente (vehículo de ajuste)",
        ficha: ["/fichas/automotriz/TDS_LINEA_2400_BASE_COLOR.pdf"],
        seguridad: ["/seguridad/automotriz/HDS_LINEA_2400__BASE_COLOR.pdf"]
    },

     // ++++++++++++++++ Esmaltes Automotriz ++++++++++++++++
     {
        id: "esmalte-acrilico",
        id_number: 57,
        name: "Esmalte Acrílico",
        categorie: "automotriz",
        subcategorie: "automotriz",
        microcategorie: "esmaltes_auto",
        presentation: ["4 L","19 L"],
        tiempo: "",
        color: "",
        imagen: "/articulos/automotriz/esmalte_acrilico.png",
        description: ["Especialmente diseñado para repintado automotriz.",
        "Tiene excelentes propiedades como son; rapidez en el tiempo de secado, alto brillo, retención de color, buena durabilidad, flexibilidad y adherencia sobre primarios.",
    "Puede utilizarse para el repintado parcial o total de vehículos automotrices."],
        rendimiento: " 10 a 17 m2 / L",
        // promedio: 13.5,
        gama: "32 colores sólidos, 9 aluminios y 1 transparente (vehículo de ajuste).",
        ficha: ["/fichas/automotriz/TDS_LINEA_2100_ESMALTE_ACRILICO.pdf"],
        seguridad: ["/seguridad/automotriz/HDS_LINEA_2100_ESMALTE_ACRILICO.pdf"]
    },
   
    {
        id: "esmalte-de-poliuretano",
        id_number: 58,
        name: "Esmalte de Poliuretano",
        categorie: "automotriz",
        subcategorie: "automotriz",
        microcategorie: "esmaltes_auto",
        presentation: ["4 L", "19 L"],
        tiempo: "",
        color: "",
        imagen: "/articulos/automotriz/esmalte_puliuretano.png",
        description: ["Esmalte de Poliuretano COLOR CRIL® es un producto de excelente calidad y gran durabilidad.",
        "Por su resistencia mecánica y resistencia química hacen de este producto la mejor opción para repintado total o parcial de flotillas de transporte, vehículos de uso intensivo, maquinaría pesada, y superficies donde se requiera una protección duradera.","Su alto brillo y nivelación permiten obtener un acabado de excelente apariencia. "],
        rendimiento: " 13 a 16 m2 / L",
        // promedio: 14.5,
        gama: "14 colores de línea",
        ficha: ["/fichas/automotriz/TDS_LINEA_2600_ESMALTE_POLIURETANO.pdf"],
        seguridad: ["/seguridad/automotriz/HDS_LINEA_2600ESMALTE_POLIURETANO_PARA_USO_AUTOMOTRIZ.pdf"]
    },
    {
        id: "negro-chasis",
        id_number: 59,
        name: "Negro Chasis",
        categorie: "automotriz",
        subcategorie: "automotriz",
        microcategorie: "esmaltes_auto",
        presentation: ["4 L","19 L"],
        tiempo: "",
        color: "",
        imagen: "/articulos/automotriz/esmalte_negro.png",
        description: [
        "Esmalte de secado rápido de extraordinaria calidad, diseñado para ser utilizado en el chasis de los autos, parachoques, muelles, etc."],
        rendimiento: "De 8 a 9 m2 / L",
        // promedio: 8.5,
        ficha: ["/fichas/automotriz/TDS_NEGRO_CHASIS_9020_Y_2181(AEROSOL).pdf"],
        seguridad: ["/seguridad/automotriz/HDS_9020_NEGRO_CHASIS_(AEROSOL).pdf"]  
    },
    {
        id: "negro-chasis-aerosol",
        id_number: 60,
        tipo:"aerosol",
        name: "Negro Chasis en Aerosol",
        categorie: "automotriz",
        subcategorie: "automotriz",
        microcategorie: "esmaltes_auto",
        presentation: ["400 ml"],
        tiempo: "",
        color: "",
        imagen: "/articulos/automotriz/chasis_aerosol.png",
        description: ["Negro Chasis Aerosol está pensado para facilitar el trabajo de repintado en áreas pequeñas o de difícil acceso.",
        "Esmalte de secado rápido de extraordinaria calidad, diseñado para ser utilizado en el chasis de los autos, parachoques, muelles, etc."],
        rendimiento: "De 1 a 2 m2 por bote.",
        // promedio: 1.5,
        ficha: ["/fichas/automotriz/TDS_NEGRO_CHASIS_9020_Y_2181(AEROSOL).pdf"],
        seguridad: ["/seguridad/automotriz/HDS_9020_NEGRO_CHASIS_(AEROSOL).pdf"]  
    },
    


     // ++++++++++++++++ Primers ++++++++++++++++
    
    {
        id: "cryl-baryprimer",
        id_number: 61,
        name: "Crilbaryprimer",
        categorie: "automotriz",
        subcategorie: "automotriz",
        microcategorie: "primers",
        presentation: ["1 L","4 L"],
        tiempo: "",
        color: "",
        imagen: "/articulos/automotriz/baryprimer.png",
        description: ["Crylbaryprimer es un primario acondicionador fosfatizante de dos componentes, de secado rápido, excelente adherencia y gran poder anticorrosivo, recomendado para superficies de acero, aluminio y acero galvanizado.","Sus propiedades permiten utilizarlo como primario de anclaje al metal desnudo en repintado automotriz así como en la industria metal mecánica."],
        rendimiento: "De 5.1 a 5.5 m2 / L",
        // promedio: 5.3,
        ficha: ["/FICHAS_TECNICAS/AUTOMOTRIZ/PRIMARIOS/TDS 2218.pdf"],
        seguridad: ["/HOJAS_SEGURIDAD/AUTOMOTRIZ/PRIMARIOS/HDS_2218_CRIL_BARYPRIMER.pdf"]
    },
    {
        id: "activador-crilbaryprimer",
        id_number: 62,
        tipo:"aerosol",
        name: "Activador Crilbaryprimer",
        categorie: "automotriz",
        subcategorie: "automotriz",
        microcategorie: "primers",
        presentation: ["1 L","4 L"],
        tiempo: "",
        color: "",
        imagen: "/articulos/automotriz/activador.png",
        description: ["Activador Crilbaryprimer está diseñado para uso exclusivo de Crilbaryprimer, para garantizar el debido funcionamiento, no debe ser sustituido por ningún otro diluyente."],
        ficha: ["/FICHAS_TECNICAS/AUTOMOTRIZ/REDUCTORES/TDS 2214 Activador CRILBARYPRIMER.pdf"],
        seguridad: ["/HOJAS_SEGURIDAD/AUTOMOTRIZ/REDUCTORES/HDS 2214  ACTIVADOR PARA CRILBARYPRIMER.pdf"]
    },

    {
        id: "primer-automotivo",
        id_number: 63,
        name: "Primer Automotivo",
        categorie: "automotriz",
        subcategorie: "automotriz",
        microcategorie: "primers",
        presentation: ["1 L","4 L","19 L"],
        tiempo: "",
        color: "",
        imagen: "/articulos/automotriz/automotivo.png",
        description: ["Primer de buena calidad, tiene una gran resistencia al impacto y flexibilidad, así como buena adherencia sobre diversas capas de pintura."," Recomendado para trabajos rápidos, en especial resanes pequeños y fondeos."],
        ficha: ["/FICHAS_TECNICAS/AUTOMOTRIZ/PRIMARIOS/TDS PRIMER AUTOMOTIVO (2220,2222,2282).pdf"],
        seguridad: ["/HOJAS_SEGURIDAD/AUTOMOTRIZ/PRIMARIOS/HDS_PRIMER_AUTOMOTIVO_(2220,2222,2282).pdf"]
    },
    {
        id: "econoprimer-universal",
        id_number: 64,
        name: "Econoprimer Universal",
        categorie: "automotriz",
        subcategorie: "automotriz",
        microcategorie: "primers",
        presentation: ["1 L","4 L","19 L"],
        tiempo: "",
        color: "",
        imagen: "/articulos/automotriz/universal.png",
        description: ["Primer diseñado para proporcionar extraordinario relleno en la superficie a aplicar, excelente adherencia, secado rápido, además de un gran rendimiento y resistencia al impacto."," Posee propiedades anticorrosivas y no sangra.","Ideal para el repintado parcial o total de vehículos automotrices."],
        ficha: ["/FICHAS_TECNICAS/AUTOMOTRIZ/PRIMARIOS/TDS 2240 ECONO PRIMER.pdf"],
        seguridad: ["/HOJAS_SEGURIDAD/AUTOMOTRIZ/PRIMARIOS/HDS_2240_ECONO_PRIMER.pdf"]
    },
    {
        id: "primer-universal",
        id_number: 65,
        name: "Primer Universal",
        categorie: "automotriz",
        subcategorie: "automotriz",
        microcategorie: "primers",
        presentation: ["1 L", "4 L","19 L"],
        tiempo: "",
        color: "",
        imagen: "/articulos/automotriz/primer_universal.png",
        description: ["Primer Universal COLOR CRIL® diseñado para el repintado parcial o total de vehículos automotrices.",
        " Presenta buena resistencia al impacto y flexibilidad, así como buena adherencia sobre diversos sustratos como lámina desnuda, lámina galvanizada, aluminio y fibra de vidrio. Proporciona poder de relleno, posee propiedades anticorrosivas, no sangra."],
        ficha: ["/FICHAS_TECNICAS/AUTOMOTRIZ/PRIMARIOS/TDS PRIMER UNIVERSAL (2223,2224,2225,2281).pdf"],
        seguridad: ["/HOJAS_SEGURIDAD/AUTOMOTRIZ/PRIMARIOS/HDS_2223,2224,2225,2281_PRIMER_UNIV.pdf"]
    },
    {
        id: "primer-epoxico",
        id_number: 66,
        name: "Primer Epóxico Gris",
        categorie: "automotriz",
        subcategorie: "automotriz",
        microcategorie: "primers",
        presentation: ["3.2 L","15.2 L"],
        imagen: "/articulos/automotriz/kit_epoxico.png",
        description: ["Recubrimiento de secado rápido, diseñado para sistemas de repintado automotriz."," Excelente resistencia a la corrosión, resistencia química y mecánica.","Recomendado también para la protección de tanques, techos, maquinaria, industria química, refinerías, estructuras metálicas, plantas eléctricas, etc. "],
        rendimiento: "18.5 m2 / L",
        ficha: ["/FICHAS_TECNICAS/AUTOMOTRIZ/PRIMARIOS/TDS 2235 PRIMER EPOXICO.pdf"],
        seguridad: ["/HOJAS_SEGURIDAD/AUTOMOTRIZ/PRIMARIOS/HDS_2235_PRIMER_EPOXICO.pdf"]
    },
     {
        id: "rellenador-hyper-light",
        id_number: 67,
        nuevo: "nuevo",
        name: "Rellenador Premium ",
        name2: "Hyper Light ",
        categorie: "automotriz",
        subcategorie: "automotriz",
        microcategorie: "rellenadores",
        presentation: ["500 ml","1 L","4 L"],
        imagen: "/articulos/automotriz/rellenador_hyper_light.png",
        description: ["Es un rellenador hiper ligero diseñado para realizar reparaciones de hojalatería, como golpes y reparaciones mayores, donde se requiera nivelar imperfecciones."],
        atributos: ["Más ligero y fácil de lijar","Reduce la porosidad","Excelente adherencia sobre metales, fibra de vidrio, madera y plásticos","Vida útil de la mezcla (7 min máximo)","Tiempo de secado (20 a 30 min)"],
        ficha: ["/FICHAS_TECNICAS/AUTOMOTRIZ/RELLENADORES/TDS 2279 HYPER LIGTH.pdf"],
        seguridad: ["/HOJAS_SEGURIDAD/AUTOMOTRIZ/RELLENADORES/HDS 2279 HYPER LIGHT.pdf"]
    },
     {
        id: "body-filler-2203",
        id_number: 68,
        name: "Body Filler (Rellenador Ultraligero)",
        categorie: "automotriz",
        subcategorie: "automotriz",
        microcategorie: "rellenadores",
        presentation: ["450 g","900 g","3.6 kg"],
        imagen: "/articulos/automotriz/rellenador_ultraligero.png",
        description: ["Pasta masilla color crema de alta calidad, diseñada para ser empleada en golpes o reparaciones mayores, en donde se requiera aplicar un mayor espesor de pasta debido a la profundidad de la superficie a reparar."],
        ficha: ["/FICHAS_TECNICAS/AUTOMOTRIZ/RELLENADORES/TDS 2203 ULTRA LIGERO.pdf"],
        seguridad: ["/HOJAS_SEGURIDAD/AUTOMOTRIZ/RELLENADORES/HDS 2203_BODY FILLER RELLENADOR_2025.pdf"]
    },
     {
        id: "body-filler-2202",
        id_number: 69,
        name: "Body Filler (Rellenador Ligero)",
        categorie: "automotriz",
        subcategorie: "automotriz",
        microcategorie: "rellenadores",
        presentation: ["450 g","900 g","3.6 kg"],
        imagen: "/articulos/automotriz/rellenador_ligero.png",
        description: ["Pasta masilla de alta calidad, diseñada para usarse en el repintado automotriz cuando se requieren realizar reparaciones de hojalatería.",
        "Por su formulación especial presenta un secado rápido, buena facilidad de aplicación, extraordinario poder de relleno, excelente adherencia sobre lámina de fierro.",
    "Es ligero y de fácil lijado, no sangra ni amarillea."],
        ficha: ["/FICHAS_TECNICAS/AUTOMOTRIZ/RELLENADORES/TDS 2202 LIGERO.pdf"],
        seguridad: ["/HOJAS_SEGURIDAD/AUTOMOTRIZ/RELLENADORES/HDS 2202 LIGERO.pdf"]
    },
   

     {
        id: "plaste",
        id_number: 70,
        name: "Plaste Automotivo",
        categorie: "automotriz",
        subcategorie: "automotriz",
        microcategorie: "rellenadores",
        presentation: ["1 L","4 L"],
        imagen: "/articulos/automotriz/plaste.png",
        description: ["Masilla de alta calidad, diseñada para usarse en el repintado automotriz cuando se requiere rellenar pequeñas imperfecciones y/o rayas de lija.",
        "Presentan secado rápido, buena facilidad de aplicación y de lijado (buen polveo) y excelente adherencia sobre nuestros primers."],
        ficha: ["/FICHAS_TECNICAS/AUTOMOTRIZ/PLASTES 2204,2207,2211,2280/TDS PLASTE AUTOMOTIVO.pdf"],
        seguridad: ["/HOJAS_SEGURIDAD/AUTOMOTRIZ/PLASTES_2204,2207.2211,2280/HDS PLASTE AUTOMOTIVO.pdf"]
    },
    {
        id: "filler-rellenador-1k",
        id_number: 71,
        name: "Filler-Rellenador 1K",
        categorie: "automotriz",
        subcategorie: "automotriz",
        microcategorie: "rellenadores",
        presentation: ["1 L","4 L"],
        imagen: "/articulos/automotriz/primer_1k.png",
        description: ["Primario rellenador 1 K, es un producto de la más alta calidad, especialmente diseñado para repintado automotriz.",
    "Presenta características que proporciona un gran poder de relleno, fácil de lijar, tiempo de secado rápido, excelente adherencia sobre lámina negra, fibra de vidrio, aluminio y lámina galvanizada. Puede ser recubierto con nuestros productos de la línea COLOR CRIL®"],
    ficha: ["/FICHAS_TECNICAS/AUTOMOTRIZ/PRIMARIOS/TDS 2221 1K.pdf"],
    seguridad: ["/HOJAS_SEGURIDAD/AUTOMOTRIZ/PRIMARIOS/HDS_2221_PRIMER_1K.pdf"]
    },
    {
        id: "primario-rellenador-2k-gp",
        id_number: 72,
        ajuste: "imagen",
        name: "Primario Rellenador GP 2K",
        categorie: "automotriz",
        subcategorie: "automotriz",
        microcategorie: "rellenadores",
        presentation: ["800 ml"],
        imagen: "/articulos/automotriz/kit_primario.png",
        description: ["Primario Rellenador GP-2K diseñado para sistemas de repintado automotriz donde se requiera un secado exprés, alta retención de brillo, máxima durabilidad y excelente poder de relleno.","Su gran facilidad de lijado, flexibilidad y excelente resistencia a solventes hacen de este primario una excelente opción para el repintado automotriz."],
        rendimiento: "De 13 a 14 m2 / L",
        ficha: ["/FICHAS_TECNICAS/AUTOMOTRIZ/PRIMARIOS/TDS 2270 2K GP.pdf"],
    seguridad: ["/HOJAS_SEGURIDAD/AUTOMOTRIZ/PRIMARIOS/HDS_2270_PRIMER_2K_GP.pdf"]
    },
    
    {
        id: "filler-rellenador-2k",
        id_number: 73,
        name: "Filler Rellenador 2K (Poliuretano)",
        categorie: "automotriz",
        subcategorie: "automotriz",
        microcategorie: "rellenadores",
        presentation: ["1 L","4 L"],
        imagen: "/articulos/automotriz/primer_2k.png",
        description: ["Primario de poliuretano diseñado para sistemas de repintado automotriz donde se requiera una alta retención de brillo, máxima durabilidad, excelente poder de relleno y tiempos de secado cortos."],
        rendimiento: "De 13 a 14 m2 / L",
        ficha: ["/FICHAS_TECNICAS/AUTOMOTRIZ/PRIMARIOS/TDS 2219  2K.pdf"],
    seguridad: ["/HOJAS_SEGURIDAD/AUTOMOTRIZ/PRIMARIOS/HDS_2219_PRIMER_2K.pdf"]
    },

    {
        id: "perlas-universales",
        id_number: 74,
        name: "Perlas Universales",
        categorie: "automotriz",
        subcategorie: "automotriz",
        microcategorie: "perlas",
        presentation: ["1 L"],
        
        imagen: "/articulos/automotriz/perlas.png",
        description: ["Las perlas han sido concebidas para la igualación de colores automotrices donde se requiere dar efectos de profundidad y cambio de tonalidad cuando se observan a diferentes ángulos.",
        "Su efecto principal es la reflexión de la luz en varias direcciones.","Diseñadas para utilizarse en sistemas de repintado automotriz COLOR CRIL® Esmalte Acrílico, Laca Acrllica, Poliuretano y Base Color"
        ],
        
        ficha: ["/FICHAS_TECNICAS/AUTOMOTRIZ/COMPLEMENTOS DE IGUALACION/TDS PERLAS LIQUIDAS UNIV. TRADICIONALES Y XIRALICAS.pdf"],
    seguridad: ["/HOJAS_SEGURIDAD/AUTOMOTRIZ/COMPLEMENTOS_DE_IGUALACION/HDS PERLAS LIQUIDAS UNIV. TRADICIONALES Y XIRALICAS.pdf"]
    },
    {
        id: "perlas-xiralicas",
        id_number: 75,
        name: "Perlas Xirálicas",
        categorie: "automotriz",
        subcategorie: "automotriz",
        microcategorie: "perlas",
        presentation: ["1 L"],
        imagen: "/articulos/automotriz/perlas_2.png",
        description: ["Las perlas han sido concebidas para la igualación de colores automotrices donde se requiere dar efectos de profundidad y cambio de tonalidad cuando se observan a diferentes ángulos.","Su efecto principal es la reflexión de la luz en varias direcciones.","Diseñadas para utilizarse en sistemas de repintado automotriz COLOR CRIL® Esmalte Acrílico, Laca Acrílica, Poliuretano y Base Color"],

        ficha: ["/FICHAS_TECNICAS/AUTOMOTRIZ/COMPLEMENTOS DE IGUALACION/TDS PERLAS LIQUIDAS UNIV. TRADICIONALES Y XIRALICAS.pdf"],
    seguridad: ["/HOJAS_SEGURIDAD/AUTOMOTRIZ/COMPLEMENTOS_DE_IGUALACION/HDS PERLAS LIQUIDAS UNIV. TRADICIONALES Y XIRALICAS.pdf"]
    },

     // ++++++++++++++++ Transparentes ++++++++++++++++

     {
        id: "transparente-hd",
        id_number: 76,
        name: "Transparente HD",
        categorie: "automotriz",
        subcategorie: "automotriz",
        microcategorie: "transparentes",
        presentation: ["3.8 L","1 L"],
        tiempo: "",
        color: "",
        imagen: "/articulos/automotriz/transparente_hd.png",
        description: ["Es un transparente de poliuretano de alta dilución y excelente rendimiento, recomendado para aplicarse sobre esmaltes catalizados, laca acrílica y base color, proporciona buena nivelación, brillo y distinción de imagen. Diseñado para todo tipo de reparaciones automotrices. Posee un gran rendimiento"],
        rendimiento: "De 11 a 15 m2 / L",
        // promedio: 13,
        ficha: ["/FICHAS_TECNICAS/AUTOMOTRIZ/TRANPARENTES/TDS 2276 HD.pdf"],
    seguridad: ["/HOJAS_SEGURIDAD/AUTOMOTRIZ/TRANSPARENTES/HDS 2276 HD.pdf"]
    },
    {
        id: "glass-finish",
        id_number: 77,
        tipo:"aerosol",
        name: "Glass Finish",
        categorie: "automotriz",
        subcategorie: "automotriz",
        microcategorie: "transparentes",
        presentation: ["800 ml","3.8 L"],
        imagen: "/articulos/automotriz/glass_finish.png",
        description: ["Transparente de poliuretano de la más alta calidad, permite obtener un acabado espejo. Gran rendimiento, alta resistencia y excelente nivelación."],
        rendimiento: "De 11 a 15 m2 / L",
        ficha: ["/FICHAS_TECNICAS/AUTOMOTRIZ/TRANPARENTES/TDS 2274 GLASS FINISH.pdf"],
    seguridad: ["/HOJAS_SEGURIDAD/AUTOMOTRIZ/TRANSPARENTES/HDS 2274 GLASS FINISH.pdf"]
    },
    {
        id: "transparente-top-gloss",
        id_number: 78,
        tipo:"aerosol",
        name: "Top Gloss",
        categorie: "automotriz",
        subcategorie: "automotriz",
        microcategorie: "transparentes",
        presentation: ["788 ml","4 L"],
        tiempo: "",
        color: "",
        imagen: "/articulos/automotriz/TRANSPARENTE_TOP_GLOSS.png",
        description: ["Transparente acrílico-poliuretano de muy alta calidad. Secado rápido, alto brillo, nivelación, gran durabilidad y resistencia a la interperie.",
        "El transparente de 788 ml contiene un Endurecedor de 158 ml.", 
        "El transparente de 4 L contiene un endurecedor de 800 ml."],
        rendimiento: "De 14.9 a 16.9 m2 / L",
        ficha: ["/FICHAS_TECNICAS/AUTOMOTRIZ/TRANPARENTES/TDS 2157 TOP GLOSS.pdf"],
    seguridad: ["/HOJAS_SEGURIDAD/AUTOMOTRIZ/TRANSPARENTES/HDS 2457 TOP GLOSS.pdf"]
    },

    {
        id: "transparente-hyper-finish",
        id_number: 79,
        tipo:"aerosol",
        name: "Hyper Finish",
        categorie: "automotriz",
        subcategorie: "automotriz",
        microcategorie: "transparentes",
        presentation: ["788 ml"],
        tiempo: "",
        color: "",
        imagen: "/articulos/automotriz/transparente_hyper_finish.png",
        description: ["Transparente de poliuretano de la más alta calidad y rendimiento que permite obtener acabados de gran durabilidad y resistencia a la intemperie.","Excelente nivelación, gran brillo y secado ultra rápido","Ideal para usarse en reparaciones express y está diseñado para aplicarse sobre Esmalte Acrílico (catalizado), Laca Acrílica y Base Color de la línea COLOR CRIL® en sistemas bicapa o tricapa."],
        rendimiento: "De 10 a 11 m2 / L",
        // promedio: 10.5,
        ficha: ["/FICHAS_TECNICAS/AUTOMOTRIZ/TRANPARENTES/TDS 2272 HYPER FINISH.pdf"],
    seguridad: ["/HOJAS_SEGURIDAD/AUTOMOTRIZ/TRANSPARENTES/HDS 2272 HYPER FINISH.pdf"]
    },

    {
        id: "transparente-lpa-ap",
        id_number: 80,
        tipo:"aerosol",
        name: "LPA - AP",
        categorie: "automotriz",
        subcategorie: "automotriz",
        microcategorie: "transparentes",
        presentation: ["788 ml", "4 L"],
        imagen: "/articulos/automotriz/TRANSPARENTE_LPA.png",
        description: ["Transparente acrílico-poliuretano de muy alta calidad. No contiene metanol, benceno, plomo ni solventes clorados.",
        " Secado rápido, alto brillo, nivelación, gran durabilidad y resistencia a la intemperie.",
        "Se recomienda para repintados totales o de secciones de vehículos automotrices.",
        ,"El transparente de 788 ml contiene un Endurecedor de 158 ml.", "El transparente de 4 L contiene un endurecedor de 800 ml."],
        rendimiento: "De 10.2 a 11.2 m2 / L",
        ficha: ["/FICHAS_TECNICAS/AUTOMOTRIZ/TRANPARENTES/TDS 2156 LPA.pdf"],
    seguridad: ["/HOJAS_SEGURIDAD/AUTOMOTRIZ/TRANSPARENTES/HDS  2156 LPA AP.pdf"]
    },

    // {
    //     id: "endurecedor-automotivo-docapa",
    //     id_number: 81,
    //     tipo:"aerosol",
    //     name: "Endurecedor Do Capa",
    //     categorie: "automotriz",
    //     subcategorie: "automotriz",
    //     microcategorie: "hd",
    //     presentation: ["250 ml","500 ml","1 L"],
    //     imagen: "/articulos/automotriz/endurecedor_automotivo.png",
    //     description: ["Diseñado para mezclarse con productos de los sistemas de repintado automotriz COLOR CRIL®.",
    // "Su función es endurecer los recubrimientos para obtener una película de gran durabílidad, alta resistencia química y mecánica, favoreciendo el brillo y la nivelación en los acabados."],
    //     ficha: ["/fichas/automotriz/COLORCRIL_Endurecedor_automotivo_DoCapa.pdf"],
    //     seguridad: ["/seguridad/automotriz/ENDURECEDOR-AUTOMOTIVO-DOCAPA.pdf"]
    // },
    {
        id: "desengrasante",
        id_number: 82,
        name: "Desengrasante",
        categorie: "automotriz",
        subcategorie: "automotriz",
        microcategorie: "hd",
        presentation: ["4 L"],
        imagen: "/articulos/automotriz/desengrasante.png",
        description: ["Creado para la limpieza de superficies, elimina contaminantes como silicones, ceras y grasas que pueden ocasionar defectos en el acabado y fallas de adherencia durante el proceso de repintado."],
        ficha: ["/FICHAS_TECNICAS/AUTOMOTRIZ/ADITIVOS/TDS 2210 Desengrasante.pdf"],
    seguridad: ["/HOJAS_SEGURIDAD/AUTOMOTRIZ/ADITIVOS/HDS 2210  DESENGRASANTE PREPARADOR DE SUPERFICIES.pdf"]
    },

    {
        id: "fosfatizante",
        id_number: 83,
        tipo:"aerosol",
        name: "Fosfatizante",
        categorie: "automotriz",
        subcategorie: "automotriz",
        microcategorie: "hd",
        presentation: ["1 L","4 L"],
        imagen: "/articulos/automotriz/fosfatizante.png",
        description: ["Remueve fácilmente el óxido de superficies ferrosas y por su lenta evaporación permite la acción efectiva de sus componentes.",
    "Previene la corrosión inmediata de las áreas en preparación. Promueve también la adherencia del recubrimiento sobre el metal."],
    ficha: ["/FICHAS_TECNICAS/AUTOMOTRIZ/ADITIVOS/TDS 2216 FOSF ACOND METALES.pdf"],
    seguridad: ["/HOJAS_SEGURIDAD/AUTOMOTRIZ/ADITIVOS/HDS 2216 FOSFATIZANTE ACONDICIONADOR DE METALES.pdf"]
    },


    {
        id: "flotador-de-aluminio",
        id_number: 84,
        name: "Flotador de Aluminio",
        categorie: "automotriz",
        subcategorie: "automotriz",
        microcategorie: "hd",
        presentation: ["1 L","4 L"],
        imagen: "/articulos/automotriz/flotador_aluminio.png",
        description: ["Mejora la igualación de colores metálicos, controlando el efecto flop (eliminando el destello de aluminio visto de lado), obteniéndose así una óptima igualación de color al adicionarlo a los colores metálicos de los sistemas de repintado automotriz COLOR CRIL®."],
        ficha: ["/FICHAS_TECNICAS/AUTOMOTRIZ/ADITIVOS/TDS 2227 FLOTADOR ALUM. NF.pdf"],
    seguridad: ["/HOJAS_SEGURIDAD/AUTOMOTRIZ/ADITIVOS/HDS 2227 FLOTADOR DE ALUMINIO.pdf"]
    },

    {
        id: "promotor-de-adherencia",
        id_number: 85,
        tipo:"aerosol",
        name: "Promotor de Adherencia",
        categorie: "automotriz",
        subcategorie: "automotriz",
        microcategorie: "hd",
        presentation: ["250 ml","500 ml","1 L"],
        imagen: "/articulos/automotriz/promotor.png",
        description: ["Promueve la adherencia entre sustratos o partes plásticas automotrices, sin necesidad de utilizar previamente ningún otro producto."],

        ficha: ["/FICHAS_TECNICAS/AUTOMOTRIZ/ADITIVOS/TDS 2228 Y 2233 PROM. ADHERENCIA.pdf"],
    seguridad: ["/HOJAS_SEGURIDAD/AUTOMOTRIZ/ADITIVOS/HDS 2228 Y 2233 PROM. ADHERENCIA.pdf"]
    },
    {
        id: "matizante",
        id_number: 86,
        name: "Matizante",
        categorie: "automotriz",
        subcategorie: "automotriz",
        microcategorie: "hd",
        presentation: ["4 L"],
        imagen: "/articulos/automotriz/matizante.png",
        description: ["Diseñado para reducir el brillo de diversas pinturas base solvente, incluyendo acabados automotrices como el esmalte acrílico, laca acrílica o base color.","No contiene plomo ni metanol."],

        ficha: ["/FICHAS_TECNICAS/AUTOMOTRIZ/ADITIVOS/TDS 2232 MATIZANTE UNIVERSAL.pdf"],
    seguridad: ["/HOJAS_SEGURIDAD/AUTOMOTRIZ/ADITIVOS/HDS 2232 MATIZANTE UNIVERSAL.pdf"]
    },

   
    {
        id: "promotor-de-adherencia-aerosol",
        id_number: 88,
        codigo: 2233,
        tipo:"aerosol",
        name: "Promotor de Adherencia en Aerosol",
        categorie: "automotriz",
        subcategorie: "automotriz",
        microcategorie: "hd",
        presentation: ["400 ml"],
        imagen: "/articulos/automotriz/promotor_aerosol.png",
        description: ["Incrementa la adherencia de los sistemas de COLOR CRIL® sobre superficies plásticas automotrices rígidas o flexibles, su presentación en aerosol facilita el trabajo de repintado en áreas pequeñas o de difícil acceso."],
        rendimiento: "De 1 a 2 m2 / L",
       
        ficha: ["/fichas/automotriz/COLORCRIL_Aerosol_Promotor_Adherencia.pdf"]
    },

     
    {
        id: "thinner-acrilico",
        id_number: 89,
        name: "Thiner Acrílico",
        categorie: "automotriz",
        subcategorie: "automotriz",
        microcategorie: "reductores",
        presentation: ["1 L", "4 L", "19 L"],
        imagen: "/articulos/automotriz/REDUCTORES_SOLVENTES.png",
        description: ["Es un diluyente o adelgazador de pinturas compuesto por una mezcla de solventes orgánicos perfectamente balanceada, diseñado para la dilución de esmalte acrílico, laca acrílica, primarios de piroxilina y universales.","Su gran poder de dilución, su evaporación rápida y controlada facilita la aplicación y permiten una adecuada formación de película con alto brillo y muy buena nivelación. Producto libre de metanol."],
        ficha: ["/FICHAS_TECNICAS/AUTOMOTRIZ/REDUCTORES/TDS 2205 THINNER ACRILICO.pdf"],
    seguridad: ["/HOJAS_SEGURIDAD/AUTOMOTRIZ/REDUCTORES/HDS 2205 THINER ACRILICO.pdf"]
    },
    {
        id: "reductor-acrilico-alta-temperatura",
        id_number: 90,
        name: "Reductor Acrílico Alta Temperatura",
        categorie: "automotriz",
        subcategorie: "automotriz",
        microcategorie: "reductores",
        presentation: ["1 L", "4 L"],
        imagen: "/articulos/automotriz/REDUCTORES_SOLVENTES.png",
        description: ["Es una mezcla de solventes de excelente calidad, diseñados para la dilución de esmalte acrílico proporcionando alto brillo y nivelación. Es una mezcla de solventes aromáticos y oxigenados, libres de metanol."],
        ficha: ["/FICHAS_TECNICAS/AUTOMOTRIZ/REDUCTORES/TDS 2206 Reductor alta temperatura.pdf"],
    seguridad: ["/HOJAS_SEGURIDAD/AUTOMOTRIZ/REDUCTORES/HDS 2206   REDUCTOR ACRILICO PARA ALTA TEMPERATURA.pdf"]
    },
    {
        id: "reductor-acrilico-alto-brillo",
        id_number: 91,
        name: "Acrílico Alto Brillo",
        categorie: "automotriz",
        subcategorie: "automotriz",
        microcategorie: "reductores",
        presentation: ["1 L", "4 L"],
        imagen: "/articulos/automotriz/REDUCTORES_SOLVENTES.png",
        description: ["Es una mezcla de solventes de excelente calidad, diseñados para la dilución de esmalte acrílico proporcionando alto brillo y nivelación. Es una mezcla de solventes aromáticos y oxigenados, libres de metanol."],
        ficha: ["/FICHAS_TECNICAS/AUTOMOTRIZ/REDUCTORES/TDS 2212 REDUCTOR ACRILICO ALTO BRILLO.pdf"],
    seguridad: ["/HOJAS_SEGURIDAD/AUTOMOTRIZ/REDUCTORES/HDS 2212  REDUCTOR ACRILICO ALTO BRILLO.pdf"]
    },
    {
        id: "reductor-primer-rellenador",
        id_number: 92,
        tipo:"aerosol",
        name: "Reductor Primer Rellenador",
        categorie: "automotriz",
        subcategorie: "automotriz",
        microcategorie: "reductores",
        presentation: ["1 L", "4 L"],
        imagen: "/articulos/automotriz/activador.png",
        description: ["El reductor para primer acrílico es una mezcla de ácido y solventes de excelente calidad, diseñado para la dilución del primer acrílico y primario rellenador.",
        " El uso de este reductor asegura una funcionalidad óptima del primer. El ácido que contiene ayuda a sensibilizar substratos de fierro para un mejor anclaje. Es una mezcla de solventes aromáticos y oxigenados no contiene metanol."],
        ficha: ["/FICHAS_TECNICAS/AUTOMOTRIZ/REDUCTORES/TDS 2229 REDUCTOR ACRILICO PRIMARIO.pdf"],
    seguridad: ["/HOJAS_SEGURIDAD/AUTOMOTRIZ/REDUCTORES/HDS 2229  REDUCTOR PARA PRIMARIO ACRILICO.pdf"]
    },
    {
        id: "reductor-base-color",
        id_number: 93,
        name: "Reductor Base Color",
        categorie: "automotriz",
        subcategorie: "automotriz",
        microcategorie: "reductores",
        presentation: ["1 L", "4 L", "19 L"],
        imagen: "/articulos/automotriz/REDUCTORES_SOLVENTES.png",
        description: ["El reductor para base color 2230 es una mezcla de solventes de excelente calidad diseñado exclusivamente para la dilución de base color.",
    "El uso de este reductor asegura una funcionalidad óptima de la base color. Es una mezcla de solventes aromáticos y oxigenados no contiene metanol."],
    ficha: ["/FICHAS_TECNICAS/AUTOMOTRIZ/REDUCTORES/TDS 2230 REDUCTOR BASE COLOR.pdf"],
    seguridad: ["/HOJAS_SEGURIDAD/AUTOMOTRIZ/REDUCTORES/HDS 2230  REDUCTOR ACRILICO PARA BASE COLOR.pdf"]
    },
    {
        id: "89",
        id_number: 94,
        name: "Reductor para Transparentes",
        categorie: "automotriz",
        subcategorie: "automotriz",
        microcategorie: "reductores",
        presentation: ["1 L", "4 L", "19 L"],
        imagen: "/articulos/automotriz/REDUCTORES_SOLVENTES.png",
        description: ["Es una mezcla balanceada de solventes orgánicos diseñada para la dilución de acabados de poliuretano, su formulación permite obtener acabados con excelente nivelación y muy buena distinción de imagen. No contiene metanol."],
        ficha: ["/FICHAS_TECNICAS/AUTOMOTRIZ/REDUCTORES/TDS 2231 REDUCTOR TRANSPARENTES P.U.pdf"],
    seguridad: ["/HOJAS_SEGURIDAD/AUTOMOTRIZ/REDUCTORES/HDS 2231  REDUCTOR PARA  CLEAR COAT.pdf"]
    },
    {
        id: "blender",
        id_number: 95,
        name: "Blender",
        categorie: "automotriz",
        subcategorie: "automotriz",
        microcategorie: "hd",
        presentation: ["1 L", "4 L"],
        imagen: "/articulos/automotriz/blender.png",
        description: ["Producto concebido para esfumar o difuminar la brisa y los bordes de acabados transparentes durante la aplicación, lo que permite obtener un acabado uniforme, terso y brillante."],
        ficha: ["/FICHAS_TECNICAS/AUTOMOTRIZ/ADITIVOS/TDS 2234 BLENDER.pdf"],
    seguridad: ["/HOJAS_SEGURIDAD/AUTOMOTRIZ/ADITIVOS/HDS 2234 BLENDER PARA ESFUMADO.pdf"]
    },
    {
        id: "91",
        id_number: 96,
        registro: "®",
        name: "Elite",
        categorie: "ferretera",
        subcategorie: "ferretera",
        microcategorie: "pinturas_ferre",
        presentation: ["1 L","4 L","19 L"],
        color: "elite",
        imagen: "/articulos/ferreadvance/elite.png",
        description: ["Elite es una pintura vinil acrílica lavable de acabado mate que gracias a su alta calidad, puede aplicarse sobre cualquier tipo de superficie interior o exterior. ", 
        "Por su fórmula antibacterial, este producto es resistente a la humedad y lo protege contra la formación de bacterias y hongos en cualquier superficie aplicada."],
        rendimiento: "De 7 a 9 m2 / L",
        promedio: 8,
        ficha: ["/fichas/ferreteras/ELITE.pdf"]
    },
    {
        id: "92",
        id_number: 97,
        registro: "®",
        name: "Imperial",
        categorie: "ferretera",
        subcategorie: "ferretera",
        microcategorie: "pinturas_ferre",
        presentation: ["1 L","4 L","19 L"],
        tiempo: "",
        color: "imperial",
        imagen: "/articulos/ferreadvance/imperial.png",
        description: ["Imperial 5 años, es una pintura vinil acrílica con extraordinario poder cubriente y de acabado mate, hará resaltar cualquier tipo de superficie en interiores y exteriores (yeso, concreto, tabla roca, mampostería, etc.).", 
        "Su formulación evitará la formación de bacterias y hongos perjudiciales para la salud. "],
        rendimiento: "De 5 a 7 m2 / L",
        promedio: "6",
        ficha: ["/fichas/ferreteras/IMPERIAL.pdf"]
    },

    {
        id: "93",
        id_number: 98,
        name: "Esmalte Estirenado de secado rápido ",
        categorie: "ferretera",
        subcategorie: "ferretera",
        microcategorie: "esmaltes_ferre",
        presentation: ["500 ml","1 L","4 L","19 L"],
        tiempo: "",
        color: "esmalte_ferre",
        imagen: "/articulos/ferreadvance/esmalte_estirenado_secado.png",
        description: ["Gracias a su poder anticorrosivo puede ser aplicado sobre cualquier superficie metálica interior y/o exterior, es ideal para utilizarse en trabajos de herrería donde se desea trabajar con rapidez debido a su gran velocidad de secado. "],
        rendimiento: "De 9 a 12 m2 / L",
        promedio: 10.5,
        ficha: ["/fichas/ferreteras/ESMALTE_ESTIRENADO_SECADO_RAPIDO.pdf"]
    },
    

     {
        id: "94",
        id_number: 99,
        name: "Primario para Herreros",
        categorie: "ferretera",
        subcategorie: "ferretera",
        microcategorie: "primarios_ferre",
        presentation: ["500 ml","1 L","4 L","19 L"],
        tiempo: "",
        color: "primario_herreros",
        imagen: "/articulos/ferreadvance/primario_herreros.png",
        description: ["Especialmente diseñado para utilizarse como base antes de la aplicación de esmaltes base solvente o base agua, su fórmula amigable con el medio ambiente ayuda a la protección anticorrosiva y promueve la adherencia del acabado."],
        rendimiento: "De 10 a 12 m2 / L",
        promedio: 11,
        ficha: ["/fichas/ferreteras/5030-5031-PrimarioHerreros.pdf"],
        seguridad: ["/seguridad/decorativa/HDS-5030-2025.pdf"],
    },

    {
        id: "95",
        id_number: 100,
        name: "Primario RTU para herreros",
        categorie: "ferretera",
        subcategorie: "ferretera",
        microcategorie: "primarios_ferre",
        presentation: ["500 ml","1 L","4 L","19 L"],
        tiempo: "",
        color: "primario_rtu",
        imagen: "/articulos/ferreadvance/primario_rtu.png",
        description: ["Es un primario listo para usar, no requiere dilución y está especialmente diseñado para promover la adherencia del acabado."],
        rendimiento: "De 10 a 12 m2 / L",
        promedio: 11,
        ficha: ["/fichas/ferreteras/PRIMARIO_RTU_HERREROS.pdf"]
    },

    {
        id: "96",
        id_number: 101,
        name: "Barniz Alto Brillo",
        categorie: "ferretera",
        subcategorie: "ferretera",
        microcategorie: "madera_ferre",
        presentation: ["1 L","4 L","19 L"],
        tiempo: "",
        color: "",
        imagen: "/articulos/ferreadvance/barniz_alto_brillo.png",
        description: ["Es un barniz alquidal de fácil aplicación que permite dejar un acabado de alto brillo sobre superficies de madera, su excelente adherencia, flexibilidad y nivelación hacen de él un producto ideal para usarse en muebles de madera al interior y exterior."],
        ficha: [""]
    },
    {
        id: "97",
        id_number: 102,
        name: "Barniz Entintado",
        categorie: "ferretera",
        subcategorie: "ferretera",
        microcategorie: "madera_ferre",
        presentation: ["1 L","4 L","19 L"],
        tiempo: "",
        color: "barniz_entintado_ferre",
        imagen: "/articulos/ferreadvance/barniz_entintado.png",
        description: ["Es un barniz de nitrocelulosa con color, listo para su uso en superficies de madera que se encuentren en interiores. Ideal para cuando se requiere entintar y dar brillo al mismo tiempo, ahorrando tiempo en la aplicación."],
        ficha: [""]
    },

    {
        id: "98",
        id_number: 103,
        name: "Laca Industrial",
        categorie: "ferretera",
        subcategorie: "ferretera",
        microcategorie: "madera_ferre",
        presentation: ["1 L","4 L","19 L"],
        tiempo: "",
        color: "laca_ferre",
        imagen: "/articulos/ferreadvance/laca_industrial.png",
        description: ["Es un producto de secado rápido y alta viscosidad que proporciona un excelente poder cubriente, gracias a su excelente nivelación dejará un acabado de apariencia fina y tersa.",
        " Ideal para aplicar sobre muebles interiores a los que se quiera dar color cerrado y brillo al mismo tiempo. "],
        ficha: [""]
    },

    {
        id: "99",
        id_number: 104,
        name: "Primer de Nitrocelulosa",
        categorie: "ferretera",
        subcategorie: "ferretera",
        microcategorie: "madera_ferre",
        presentation: ["1 L","4 L","19 L"],
        tiempo: "",
        color: "primer_ferre",
        imagen: "/articulos/ferreadvance/primer_nitrocelulosa.png",
        description: ["Es un producto con gran capacidad de disolución, ideal para sellar el poro de la madera y prepararla para recibir acabados de nitrocelulosa, por su alta calidad proporcionará una excelente adherencia y un lijado fácil para una apariencia fina y tersa. "],
        ficha: [""]
    },

    
    {
        id: "100",
        id_number: 105,
        name: "Sellador Profesional",
        categorie: "ferretera",
        subcategorie: "ferretera",
        microcategorie: "madera_ferre",
        presentation: ["1 L","4 L","19 L"],
        tiempo: "",
        color: "",
        imagen: "/articulos/ferreadvance/sellador_profesional.png",
        description: ["Es un sellador de alta viscosidad que ayuda al sellado del poro y al lijado fácil, lo que permitirá preparar la madera para recibir acabados de nitrocelulosa, obteniendo una apariencia fina y suave. "],
        ficha: [""]
    },

    {
        id: "index",
        id_number: 106,
        registro: "®",
        name: "INDEX", name2: " Base Solvente",
        categorie: "industrial",
        subcategorie: "industrial",
        microcategorie: "industriales",
        presentation: ["4 L","19 L"],
        tiempo: "",
        color: "",
        imagen: "/articulos/industriales/INDEX.png",
        description: ["Recubrimiento especial para señalización vial, de secado rápido, excelente retención del color, resistente a la abrasión y a la gasolina, con gran flexibilidad y estabilidad de almacenamiento."],
        rendimiento: "32.8 m2 / L,  línea de 10 cm de ancho y 6 milésimas de espesor.",
        promedio: 32.8,
        ficha: ["/fichas/industriales/6001-6002-IndexTrafico.pdf"],
        seguridad: ["/seguridad/decorativa/HDS-6001-6002-2025.pdf"],
    },{
        id: "index-agua",
        id_number: 133,
        registro: "®",
        name: "INDEX", name2: " Base Agua",
        categorie: "industrial",
        subcategorie: "industrial",
        microcategorie: "industriales",
        presentation: ["1 L","4 L","19 L", "200 L"],
        tiempo: "",
        color: "",
        imagen: "/articulos/industriales/INDEX-BASE-AGUA.png",
        imagen_prd: "/articulos/industriales/INDEX-BASE-AGUA_img.png",
        description: ["Pintura de tráfico base agua 100% acrílica amigable con el medio ambiente, desarrollada para el señalamiento de tránsito sobre pavimentos asfalticos y de concreto en carreteras, aeropuertos, helipuertos y zonas urbanas. Su formulación es de rápido secado, resistencia a la abrasión y a la intemperie."],
        rendimiento: "26 metro lineales / L (Línea de 10 cm de ancho y 6 milésimas de Espesor Húmedo)",
        promedio: 26,
        ficha: ["/fichas/industriales/Index_Trafico_Base_Agua.pdf"],
        // seguridad: ["/seguridad/decorativa/HDS-6001-6002-2025.pdf"],
    },

    {
        id: "aqua-alberka",
        id_number: 107,
        registro: "®",
        name: "Aqua Alberka",
        categorie: "industrial",
        subcategorie: "industrial",
        microcategorie: "industriales",
        presentation: ["4 L","19 L"],
        tiempo: "",
        color: "",
        imagen: "/articulos/industriales/AQUA_ALBERKA.png",
        description: ["Recubrimiento diseñado especialmente para pintar albercas, cisternas o contenedores de agua. De secado rápido, gran resistencia y gran capacidad de retención de color. "],
        description2: ["Así mismo, AQUA ALBERKA® Solvente está diseñado particularmente para diluir nuestra pintura de alberca el uso de este solvente asegura la funcionalidad óptima de nuestro recubrimiento. "],
        presentation2: ["4 L","19 L"],
        leyenda: "Este producto se vende por separado.",
        rendimiento: "1 a 2 m2 a una milesima.",
        ficha: ["/fichas/industriales/1900-AquaAlberka.pdf"],
        seguridad: ["/seguridad/decorativa/HDS-1900-2025.pdf"],
    },
    {
        id: "pegaso-tirol",
        id_number: 108,
        registro: "®",
        codigo: 1600,
        name: "Pegaso",
        name2: " Tirol",
        categorie: "decorativa",
        subcategorie: "adhesivos",
        microcategorie: "adhesivos",
        presentation: ["1L","4 L","19 L"],
        tiempo: "",
        color: "",
        imagen: "/articulos/adhesivos/tirol.png",
        description: ["Adhesivo hecho a base de resinas estiren acrílicas que proporciona extraordinario anclaje de la pasta de tirol. Por su gran calidad, también se utiliza como sellador de muros de yeso, tabla-roca y aplanados, así como fortificador de pinturas látex de bajo desempeño."],
        rendimiento: "12 a 14 m2 / L",
        promedio: 13,
        promedio: "13",
        ficha: ["/fichas/industriales/1600-PegaTirol.pdf"],
        seguridad: ["/seguridad/decorativa/HDS-1600-2025.pdf"],
    },
    {
        id: "pegaso-yeso",
        id_number: 109,
        registro: "®",
        codigo: 1602,
        name: "Pegaso",
        name2: " Yeso",
        categorie: "decorativa",
        subcategorie: "adhesivos",
        microcategorie: "adhesivos",
        presentation: ["1L","4 L","19 L"],
        tiempo: "",
        color: "",
        imagen: "/articulos/adhesivos/yeso.png",
        description: ["Adhesivo hecho a base de resinas estiren acrílicas, diseñado específicamente para proporcionar extraordinaria adhesión del yeso con el concreto. Se utiliza también como sellador de muros y fortificador de pinturas base agua de bajo desempeño."],
        rendimiento: "12 a 14 m2 / L",
        promedio: 13,
        promedio: "13",
        ficha: ["/fichas/industriales/1602-PegaYeso.pdf"],
        seguridad: ["/seguridad/decorativa/HDS-1602-2025.pdf"],
    },
    {
        id: "pegaso-acribond",
        id_number: 109,
        registro: "®",
        codigo: 1603,
        name: "Pegaso",
        name2: " Acribond",
        categorie: "decorativa",
        subcategorie: "adhesivos",
        microcategorie: "adhesivos",
        presentation: ["1L","4 L","19 L"],
        tiempo: "",
        color: "",
        imagen: "/articulos/adhesivos/acribond.png",
        description: ["Adhesivo 100 % acrílico de extraordinaria calidad, creado para promover la adherencia de concreto nuevo con viejo como también sellar el poro en superficies nuevas. Es resistente a la humedad y funciona como fortificador de pinturas látex de bajo desempeño, dada su gran calidad y naturaleza acrílica, no se amarillea a la intemperie. "],
        rendimiento: "12 a 14 m2 / L",
        promedio: 13,
        promedio: "13",
        ficha: ["/fichas/industriales/1603-Acribond.pdf"],
        seguridad: ["/seguridad/decorativa/HDS-1603-2025.pdf"],
    },
    {
        id: "pegaso-bond",
        id_number: 110,
        registro: "®",
        codigo: 1604,
        name: "Pegaso",
        name2: " Bond",
        categorie: "decorativa",
        subcategorie: "adhesivos",
        microcategorie: "adhesivos",
        presentation: ["1L","4 L","19 L"],
        tiempo: "",
        color: "",
        imagen: "/articulos/adhesivos/bond.png",
        description: ["Adhesivo de doble acción, su formulación proporciona adherencia entre concreto nuevo y viejo, es resistente a la humedad y por su gran desempeño se utiliza también para sellar el poro en superficies nuevas, además le permite fortificar pinturas látex de menor desempeño. "],
        rendimiento: "12 a 14 m2 / L",
        promedio: 13,
        promedio: "13",
        ficha: ["/fichas/industriales/1604-PegaBond.pdf"],
        seguridad: ["/seguridad/decorativa/HDS-1604-2025.pdf"],
    },
    
    // PULIMIENTOS===============================================================================
    {
        id: "heavy-cut-compound",
        id_number: 111,
        name: "Heavy Cut Compound",
        categorie: "automotriz",
        subcategorie: "automotriz",
        microcategorie: "pulimentos",
        presentation: ["250 ml", "1 L"],
        attr2: ["Corte 9/10", "Brillo 3/10"],
        imagen: "/articulos/automotriz/HEAVY_CUT_COMPOUND.png",
        description: ["Suave pero muy efectivo contra arañazos y marcas de uso severas. Este compuesto esta optimizado para ser utilizado con borla de lana."],
        ficha: ["/fichas/automotriz/1 HCC _ 300,400, One Step Polish Gelcoat.pdf"],
        seguridad: ""
    },{
        id: "medium-cut-polish",
        id_number: 112,
        name: "MEDIUM CUT POLISH",
        categorie: "automotriz",
        subcategorie: "automotriz",
        microcategorie: "pulimentos",
        presentation: ["250 ml", "1 L"],
        attr2: ["Corte 5/10", "Brillo 5/10"],
        imagen: "/articulos/automotriz/MEDIUM_CUT_POLISH.png",
        description: ["Medio corte de Brillo Profundo, potencializa los colores y reflejo."],
        ficha: ["/fichas/automotriz/MEDIUM_CUT_POLISH_2000.pdf"],
        seguridad: ""
    },{
        id: "final-finish",
        id_number: 113,
        name: "FINAL FINISH",
        categorie: "automotriz",
        subcategorie: "automotriz",
        microcategorie: "pulimentos",
        presentation: ["250 ml", "1 L"],
        attr2: ["Corte 3/10", "Brillo 9/10"],
        imagen: "/articulos/automotriz/FINAL_FINISH.png",
        description: ["Eliminador clásico de marcas de pulido y óptimo brillo. Absolutamente eficaz en la eliminación de marcas de pulido dando paso, al mismo tiempo a un brillo perfecto."],
        ficha: "",
        seguridad: ""
    },{
        id: "super-finish_plus",
        id_number: 114,
        name: "SUPER FINISH PLUS",
        categorie: "automotriz",
        subcategorie: "automotriz",
        microcategorie: "pulimentos",
        presentation: ["250 ml", "1 L"],
        attr2: ["Corte 2/10", "Brillo 10/10"],
        imagen: "/articulos/automotriz/SUPER_FINISH_PLUS.png",
        description: ["Eliminador de marcas de pulido, micro-rayas y hologramas, asegurando un brillo más profundo tipo \"Showroom\"."],
        ficha: ["/fichas/automotriz/SUPER_FINISH_PLUS_3800.pdf"],
        seguridad: ""
    },{
        id: "sealing-wax_protection",
        id_number: 115,
        name: "SEALING WAX PROTECTION",
        categorie: "automotriz",
        subcategorie: "automotriz",
        microcategorie: "pulimentos",
        presentation: ["250 ml", "1 L"],
        attr2: "",
        imagen: "/articulos/automotriz/Sealing_Wax_Protection.png",
        description: ["Sellador de alto brillo con capa antiestática, sella la pintura con acabado acrílico impecable y ofrece alta durabilidad y seguridad."],
        ficha: "",
        seguridad: ""
    },{
        id: "one-step-polish",
        id_number: 116,
        name: "ONE - STEP POLISH",
        categorie: "automotriz",
        subcategorie: "automotriz",
        microcategorie: "pulimentos",
        presentation: ["250 ml", "1 L"],
        attr2: ["Corte 5/10", "Brillo 9/10"],
        imagen: "/articulos/automotriz/ONE_STEP_POLISH.png",
        description: ["Elimina rayas de grano P3000, borra rayones, remolinos y hologramas, aparte de ofrecer larga duración en el brillo. Ideal para el principiante por su fácil uso y optimo resultado."],
        ficha: ["/fichas/automotriz/One_Step_Polish_3in1.pdf"],
        seguridad: ""
    },{
        id: "cut-force-pro",
        id_number: 117,
        name: "CUT FORCE PRO",
        categorie: "automotriz",
        subcategorie: "automotriz",
        microcategorie: "pulimentos",
        presentation: ["250 ml", "1 L"],
        attr2: ["Corte 9/10", "Brillo 9/10"],
        imagen: "/articulos/automotriz/CUT_FORCE_PRO.png",
        description: ["Alto corte, mas rápido y con mayor potencia, tiene un mejor abrillantado para segunda etapa."],
        ficha: "",
        seguridad: ""
    },{
        id: "heavy-cut-compound-100",
        id_number: 118,
        name: "HEAVY CUT COMPOUND",
        categorie: "automotriz",
        subcategorie: "automotriz",
        microcategorie: "pulimentos",
        presentation: ["250 ml", "1 L"],
        attr2: ["Corte 8/10", "Brillo 8/10"],
        imagen: "/articulos/automotriz/HEAVY_CUT_COPOUND_400.png",
        description: ["Producto muy vérsatil que permite cortar lija de hasta P1200 en tiempo record y a la vez completa el acabado gracias a la última tecnología de grano divisible."],
        ficha: ["/fichas/automotriz/HEAVY CUT COMPOUND .pdf"],
        seguridad: ""
    },{
        id: "endless-shine",
        id_number: 119,
        name: "ENDLESS SHINE",
        categorie: "automotriz",
        subcategorie: "automotriz",
        microcategorie: "pulimentos",
        presentation: ["500 ml"],
        attr2: "",
        imagen: "/articulos/automotriz/Menzerna_EndlessShine_500ml.png",
        description: ["Mejora y restaura todo tipo de superficie como laca, cristal, plástico o metal. Aplica protector al acabado con un brillo profundo."],
        ficha: "",
        seguridad: ""
    },{
        id: "ceramic-spray-sealant",
        id_number: 120,
        name: "CERAMIC SPRAY SEALANT",
        categorie: "automotriz",
        subcategorie: "automotriz",
        microcategorie: "pulimentos",
        presentation: ["500 ml"],
        attr2: "",
        imagen: "/articulos/automotriz/CERAMIC_SPRAY_SEALANT.png",
        description: ["Sellador en spray universal, fácil de aplicar, hidrofugo y antimanchas."],
        ficha: "",
        seguridad: ""
    },{
        id: "as-30",
        id_number: 121,
        name: "AS 30",
        categorie: "automotriz",
        subcategorie: "automotriz",
        microcategorie: "pulimentos",
        presentation: ["1 kg"],
        attr2: "",
        imagen: "/articulos/automotriz/AS30.png",
        description: ["Pasta de pulimento de alto corte, para barnices de poliuretano y poliéster."],
        ficha: "",
        seguridad: ""
    },{
        id: "esponja-premium-roja",
        id_number: 122,
        name: "ESPONJA PREMIUM ROJA",
        categorie: "automotriz",
        subcategorie: "automotriz",
        microcategorie: "pulimentos",
        presentation: [""],
        medidas: ["6\"", "7\""],
        imagen: "/articulos/automotriz/menzerna_HeavyCut.png",
        description: ["• Esponja para pulimento de alto corte."],
        ficha: "",
        seguridad: ""
    },{
        id: "esponja-premium-roja",
        id_number: 123,
        name: "ESPONJA PREMIUM ROJA",
        categorie: "automotriz",
        subcategorie: "automotriz",
        microcategorie: "pulimentos",
        presentation: [""],
        medidas: ["6\"", "7\""],
        imagen: "/articulos/automotriz/menzerna_HeavyCut.png",
        description: ["Esponja para pulimento de alto corte."],
        ficha: "",
        seguridad: ""
    },{
        id: "esponja-premium-amarilla",
        id_number: 124,
        name: "ESPONJA PREMIUM AMARILLA",
        categorie: "automotriz",
        subcategorie: "automotriz",
        microcategorie: "pulimentos",
        presentation: [""],
        medidas: ["6\"", "7\""],
        imagen: "/articulos/automotriz/menzerna_MediumCut.png",
        description: ["Esponja para pulimento de medio corte."],
        ficha: "",
        seguridad: ""
    },{
        id: "esponja-premium-verde",
        id_number: 125,
        name: "ESPONJA PREMIUM VERDE",
        categorie: "automotriz",
        subcategorie: "automotriz",
        microcategorie: "pulimentos",
        presentation: [""],
        medidas: ["6\"", "7\""],
        imagen: "/articulos/automotriz/menzerna_SoftCut.png",
        description: ["Esponja para pulimento abrillantador."],
        ficha: "",
        seguridad: ""
    },{
        id: "esponja-premium-azul",
        id_number: 126,
        name: "ESPONJA PREMIUM AZUL",
        categorie: "automotriz",
        subcategorie: "automotriz",
        microcategorie: "pulimentos",
        presentation: [""],
        medidas: ["6\"", "7\""],
        imagen: "/articulos/automotriz/menzerna_Wax.png",
        description: ["Esponja para abrillantador y selladores."],
        ficha: "",
        seguridad: ""
    },{
        id: "borla-de-lana-premium-orbital",
        id_number: 127,
        name: "BORLA DE LANA PREMIUM ORBITAL",
        categorie: "automotriz",
        subcategorie: "automotriz",
        microcategorie: "pulimentos",
        presentation: [""],
        medidas: ["6.5\""],
        imagen: "/articulos/automotriz/BORLA_DE_LANA_PREMIUM_ORBITAL.png",
        description: ["Borla de cordero de alto corte"],
        ficha: "",
        seguridad: ""
    },{
        id: "borla-de-lana",
        id_number: 128,
        name: "BORLA DE LANA",
        categorie: "automotriz",
        subcategorie: "automotriz",
        microcategorie: "pulimentos",
        presentation: [""],
        medidas: ["9\""],
        imagen: "/articulos/automotriz/BORLA_DE_LANA.png",
        description: ["Borla de cordero de alto corte"],
        ficha: "",
        seguridad: ""
    },

    {
        id: "esmalte-alquidalico",
        id_number: 129,
        name: "Esmalte Alquidálico",
        categorie: "ferretera",
        subcategorie: "ferretera",
        microcategorie: "esmaltes_ferre",
        presentation: ["500 ml","1 L","4 L","19 L"],
        tiempo: "",
        color: "",
        imagen: "/articulos/ferreadvance/esmalte_alquidalico.png",
        description: ["Protege y decora todo tipo de superficies ferrosas."],
        rendimiento: "De 10 a 12 m2 / L",
        promedio: 11,
        ficha: [""]
    },{
        id: "sellatek-prime",
        id_number: 131,
        codigo: 700,
        registro: "®",
        name: "SELLATEK PRIME",
        categorie: "decorativa",
        subcategorie: "vinilicas",
        microcategorie: "selladores",
        presentation: ["1 L","4 L", "19 L"],
        color: "",
        imagen: "/articulos/vinilicas/SELLATEK-PRIME.png",
        imagen_prd: "/articulos/vinilicas/SELLATEK-RRIME_img.png",
        description: ["Sellador 100% acrílico estrictamente diseñado para proteger superficies con problemas de alcalinidad, humedad y salitre previniendo el daño a la pintura en interiores y exteriores.","Proporciona un extraordinario sellado de porosidad, excelente durabilidad y adherencia en el área aplicada. Diseñado especialmente para sellar la porosidad de superficies nuevas y repintadas de concreto, yeso, panel de yeso, panel de concreto y mampostería con excelentes resultados."],
         atributos: ["Libre de plomo y metales pesados. Bajo en VOC.","No se recomienda como acabado final.","Recomendado para el uso de interiores y exteriores; libre de plomo o metales pesados."],
        rendimiento: " 18 m2 / L",
        promedio: 18,
        // acabados: "Blanco",
        dirigido: "Particular, oficios y profesional",
        ficha: ["/fichas/selladores/TDS-7010-Sellatek Prime.pdf"],
        // seguridad: ["/seguridad/decorativa/HDS-5020-2025.pdf"],
    }
    
    
   

 


    

    
]

export const colores = [
    {
        codigo: "765",
        name: "Blanco Ostión",
        color: "#fcf8ef",
        product: "vintek",
        cat: "vinilicas"
    },
    {
        codigo: "701",
        name: "Champaña",
        color: "#f5e6cf",
        product: "vintek",
        cat: "vinilicas"
    },
    {
        codigo: "704",
        name: "Crema",
        color: "#f8e2bb",
        product: "vintek",
        cat: "vinilicas"
    },
    {
        codigo: "745",
        name: "Salmón",
        color: "#eec4ac",
        product: "vintek",
        cat: "vinilicas"
    },
    {
        codigo: "747",
        name: "Cantera Mexicana",
        color: "#e6c49f",
        product: "vintek",
        cat: "vinilicas"
    },
    {
        codigo: "715",
        name: "Mostaza",
        color: "#ac8b3a",
        product: "vintek",
        cat: "vinilicas"
    },
    {
        codigo: "764",
        name: "Capuchino",
        color: "#94856e",
        product: "vintek",
        cat: "vinilicas"
    },
    {
        codigo: "725",
        name: "Chocolate",
        color: "#4f3127",
        product: "vintek",
        cat: "vinilicas"
    },
    {
        codigo: "724",
        name: "Rojo Óxido",
        color: "#622103",
        product: "vintek",
        cat: "vinilicas"
    },
    {
        codigo: "722",
        name: "Rojo",
        color: "#b40c01",
        product: "vintek",
        cat: "vinilicas"
    },
    {
        codigo: "712",
        name: "Mandarina",
        color: "#e16951",
        product: "vintek",
        cat: "vinilicas"
    },
    {
        codigo: "746",
        name: "Naranja Colonial",
        color: "#e38f39",
        product: "vintek",
        cat: "vinilicas"
    },
    {
        codigo: "729",
        name: "Amarillo Napolitano",
        color: "#edb582",
        product: "vintek",
        cat: "vinilicas"
    },
    {
        codigo: "735",
        name: "Durazno",
        color: "#f1c981",
        product: "vintek",
        cat: "vinilicas"
    },
    {
        codigo: "739",
        name: "Amarillo Colonial",
        color: "#f1c967",
        product: "vintek",
        cat: "vinilicas"
    },
    {
        codigo: "743",
        name: "Amarillo Solar",
        color: "#f9ea99",
        product: "vintek",
        cat: "vinilicas"
    },
    {
        codigo: "720",
        name: "Amarillo Limón",
        color: "#f5df34",
        product: "vintek",
        cat: "vinilicas"
    },
    {
        codigo: "703",
        name: "Verde Manzana",
        color: "#96D346",
        product: "vintek",
        cat: "vinilicas"
    },
    {
        codigo: "749",
        name: "Aqua",
        color: "#8dc0bb",
        product: "vintek",
        cat: "vinilicas"
    },
    {
        codigo: "740",
        name: "Verde Imperial",
        color: "#98a989",
        product: "vintek",
        cat: "vinilicas"
    },
    {
        codigo: "721",
        name: "Verde Esmeralda",
        color: "#2a3829",
        product: "vintek",
        cat: "vinilicas"
    },
    {
        codigo: "718",
        name: "Azul Colonial",
        color: "#3932a4",
        product: "vintek",
        cat: "vinilicas"
    },
    {
        codigo: "748",
        name: "Azul Océano",
        color: "#3157a0",
        product: "vintek",
        cat: "vinilicas"
    },
    {
        codigo: "714",
        name: "Azul Vallarta",
        color: "#73b5e5",
        product: "vintek",
        cat: "vinilicas"
    },
    {
        codigo: "733",
        name: "Rosa Mexicano",
        color: "#bd486b",
        product: "vintek",
        cat: "vinilicas"
    },
    {
        codigo: "741",
        name: "Frambuesa",
        color: "#831850",
        product: "vintek",
        cat: "vinilicas"
    },
    {
        codigo: "744",
        name: "Uva",
        color: "#402353",
        product: "vintek",
        cat: "vinilicas"
    },
    {
        codigo: "719",
        name: "Azul Rey",
        color: "#1d0050",
        product: "vintek",
        cat: "vinilicas"
    },
    {
        codigo: "742",
        name: "Gris Oxford",
        color: "#929292",
        product: "vintek",
        cat: "vinilicas"
    },
    {
        codigo: "723",
        name: "Negro",
        color: "#000000",
        product: "vintek",
        cat: "vinilicas"
    },
    {
        codigo: "700",
        name: "Blanco",
        color: "#ffffff",
        product: "vintek",
        cat: "vinilicas"
    },
    {
        codigo: "770",
        name: "Blanco Mate",
        color: "#ffffff",
        product: "vintek",
        cat: "vinilicas"
    },
    {
        codigo: "402",
        name: "Blanco Ostión",
        color: "#e2dcd0",
        product: "realtek",
        cat: "vinilicas"

    },
    {
        codigo: "430",
        name: "Arena Real",
        color: "#f6e0c9",
        product: "realtek",
        cat: "vinilicas"

    },
    {
        codigo: "427",
        name: "Champaña",
        color: "#e9d8c6",
        product: "realtek",
        cat: "vinilicas"

    },
    {
        codigo: "415",
        name: "Piñon",
        color: "#dcbc93",
        product: "realtek",
        cat: "vinilicas"

    },
    {
        codigo: "438",
        name: "Adobe Real",
        color: "#b1935f",
        product: "realtek",
        cat: "vinilicas"

    },
    {
        codigo: "417",
        name: "Sándalo",
        color: "#836a4c",
        product: "realtek",
        cat: "vinilicas"

    },
    {
        codigo: "439",
        name: "Terracota",
        color: "#793f33",
        product: "realtek",
        cat: "vinilicas"

    },
    {
        codigo: "410",
        name: "Ladrillo Hacienda",
        color: "#ba6b4a",
        product: "realtek",
        cat: "vinilicas"

    },
    {
        codigo: "414",
        name: "Rojo",
        color: "#c0292a",
        product: "realtek",
        cat: "vinilicas"

    },
    {
        codigo: "428",
        name: "Naranja",
        color: "#e58847",
        product: "realtek",
        cat: "vinilicas"

    },
    {
        codigo: "426",
        name: "Amarillo",
        color: "#f5da33",
        product: "realtek",
        cat: "vinilicas"

    },
    {
        codigo: "404",
        name: "Paja",
        color: "#f7e38d",
        product: "realtek",
        cat: "vinilicas"

    },
    {
        codigo: "431",
        name: "Verde Apio",
        color: "#e6f9c9",
        product: "realtek",
        cat: "vinilicas"

    },
    {
        codigo: "420",
        name: "Verde Manzana",
        color: "#bed668",
        product: "realtek",
        cat: "vinilicas"

    },
    {
        codigo: "436",
        name: "Verde Olivo",
        color: "#9b966c",
        product: "realtek",
        cat: "vinilicas"

    },
    {
        codigo: "429",
        name: "Zarzamora",
        color: "#643363",
        product: "realtek",
        cat: "vinilicas"

    },
    {
        codigo: "434",
        name: "Azul Profundo",
        color: "#1b3069",
        product: "realtek",
        cat: "vinilicas"

    },
    {
        codigo: "435",
        name: "Azul Infinito",
        color: "#617dc7",
        product: "realtek",
        cat: "vinilicas"

    },
    {
        codigo: "437",
        name: "Azul Cielo",
        color: "#d5e7f1",
        product: "realtek",
        cat: "vinilicas"

    },
    {
        codigo: "432",
        name: "Acero",
        color: "#6d8283",
        product: "realtek",
        cat: "vinilicas"

    },
    {
        codigo: "433",
        name: "Gris Bahía",
        color: "#dcddd8",
        product: "realtek",
        cat: "vinilicas"

    },
    {
        codigo: "400",
        name: "Blanco",
        color: "#ffffff",
        product: "realtek",
        cat: "vinilicas"

    },
    {
        codigo: "425",
        name: "Negro",
        color: "#000000",
        product: "realtek",
        cat: "vinilicas"

    },

    {
        codigo: "500",
        name: "Blanco",
        color: "#ffffff",
        product: "vinipesa_satin",
        cat: "vinilicas"
    },
    {
        codigo: "501",
        name: "Arena",
        color: "#f4e8c3",
        product: "vinipesa_satin",
        cat: "vinilicas"
    },
    {
        codigo: "502",
        name: "Turquesa",
        color: "#99dbbc",
        product: "vinipesa_satin",
        cat: "vinilicas"
    },
    {
        codigo: "503",
        name: "Blanco Ostión",
        color: "#f1f1e2",
        product: "vinipesa_satin",
        cat: "vinilicas"
    },
    {
        codigo: "504",
        name: "Marfil",
        color: "#ffe7bc",
        product: "vinipesa_satin",
        cat: "vinilicas"
    },
    {
        codigo: "505",
        name: "Verde Manzana",
        color: "#b0d770",
        product: "vinipesa_satin",
        cat: "vinilicas"
    },
    {
        codigo: "506",
        name: "Azul",
        color: "#42cce4",
        product: "vinipesa_satin",
        cat: "vinilicas"
    },
    {
        codigo: "507",
        name: "Naranja",
        color: "#ff501e",
        product: "vinipesa_satin",
        cat: "vinilicas"
    },
    {
        codigo: "508",
        name: "Rojo",
        color: "#ff361a",
        product: "vinipesa_satin",
        cat: "vinilicas"
    },
    {
        codigo: "509",
        name: "Gris Bahia",
        color: "#8da9a3",
        product: "vinipesa_satin",
        cat: "vinilicas"
    },
    {
        codigo: "510",
        name: "Piñon",
        color: "#eccba6",
        product: "vinipesa_satin",
        cat: "vinilicas"
    },
   
    
   
    {
        codigo: "314",
        name: "Amarillo Limón",
        color: "#f5da33",
        product: "vinipesa_mate",
        cat: "vinilicas"
    },
    {
        codigo: "311",
        name: "Marfil",
        color: "#f8e6c2",
        product: "vinipesa_mate",
        cat: "vinilicas"
    },
    {
        codigo: "319",
        name: "Durazno",
        color: "#eec0a9",
        product: "vinipesa_mate",
        cat: "vinilicas"
    },
    {
        codigo: "305",
        name: "Coral",
        color: "#e79393",
        product: "vinipesa_mate",
        cat: "vinilicas"
    },
    {
        codigo: "324",
        name: "Rosado",
        color: "#ecb1c5",
        product: "vinipesa_mate",
        cat: "vinilicas"
    },
    {
        codigo: "313",
        name: "Tangerina",
        color: "#e68f5c",
        product: "vinipesa_mate",
        cat: "vinilicas"
    },
    {
        codigo: "308",
        name: "Naranja",
        color: "#d85032",
        product: "vinipesa_mate",
        cat: "vinilicas"
    },
    {
        codigo: "323",
        name: "Rojo Bandera",
        color: "#b82f2f",
        product: "vinipesa_mate",
        cat: "vinilicas"
    },
    {
        codigo: "317",
        name: "Rojo Teja",
        color: "#733119",
        product: "vinipesa_mate",
        cat: "vinilicas"
    },
    {
        codigo: "303",
        name: "Violeta Intenso",
        color: "#64439e",
        product: "vinipesa_mate",
        cat: "vinilicas"
    },
    {
        codigo: "309",
        name: "Azul Rey",
        color: "#1a2857",
        product: "vinipesa_mate",
        cat: "vinilicas"
    },
    {
        codigo: "318",
        name: "Azul Medio",
        color: "#3d6eb3",
        product: "vinipesa_mate",
        cat: "vinilicas"
    },
    {
        codigo: "302",
        name: "Azul Horizonte",
        color: "#98caed",
        product: "vinipesa_mate",
        cat: "vinilicas"
    },
    {
        codigo: "310",
        name: "Verde Manzana",
        color: "#c8da62",
        product: "vinipesa_mate",
        cat: "vinilicas"
    },
    {
        codigo: "322",
        name: "Verde Esmeralda",
        color: "#32523a",
        product: "vinipesa_mate",
        cat: "vinilicas"
    },
    {
        codigo: "325",
        name: "Verde Milicia",
        color: "#48492a",
        product: "vinipesa_mate",
        cat: "vinilicas"
    },
    {
        codigo: "300",
        name: "Blanco",
        color: "#ffffff",
        product: "vinipesa_mate",
        cat: "vinilicas"
    },
    {
        codigo: "321",
        name: "Negro",
        color: "#040609",
        product: "vinipesa_mate",
        cat: "vinilicas"
    },

    {
        codigo: "1300",
        name: "Blanco",
        color: "#ffffff",
        product: "vini_plus",
        cat: "vinilicas"
    },
    {
        codigo: "1313",
        name: "Blanco Ostión",
        color: "#f9f3e7",
        product: "vini_plus",
        cat: "vinilicas"
    },
    {
        codigo: "1304",
        name: "Marfil",
        color: "#f8e6c2",
        product: "vini_plus",
        cat: "vinilicas"
    },
    {
        codigo: "1303",
        name: "Arena",
        color: "#f2cf95",
        product: "vini_plus",
        cat: "vinilicas"
    },
    {
        codigo: "1305",
        name: "Chabacano",
        color: "#efbb70",
        product: "vini_plus",
        cat: "vinilicas"
    },
    {
        codigo: "1311",
        name: "Salmón",
        color: "#edb585",
        product: "vini_plus",
        cat: "vinilicas"
    },
    {
        codigo: "1306",
        name: "Naranja",
        color: "#e17549",
        product: "vini_plus",
        cat: "vinilicas"
    },
    {
        codigo: "1301",
        name: "Flamingo",
        color: "#cf6080",
        product: "vini_plus",
        cat: "vinilicas"
    },
    {
        codigo: "1312",
        name: "Azul Eterno",
        color: "#8686b8",
        product: "vini_plus",
        cat: "vinilicas"
    },
    {
        codigo: "1309",
        name: "Azul",
        color: "#73b5e5",
        product: "vini_plus",
        cat: "vinilicas"
    },
    {
        codigo: "1308",
        name: "Turquesa",
        color: "#7cd1a8",
        product: "vini_plus",
        cat: "vinilicas"
    },
    {
        codigo: "1310",
        name: "Verde Manzana",
        color: "#c0d548",
        product: "vini_plus",
        cat: "vinilicas"
    },
    {
        codigo: "1400",
        name: "Blanco",
        color: "#ffff",
        product: "colorbel",
        cat: "vinilicas"
    },
    {
        codigo: "1406",
        name: "Violeta",
        color: "#ccc0e8",
        product: "colorbel",
        cat: "vinilicas"
    },
    {
        codigo: "1418",
        name: "Rosa Ligero",
        color: "#f1dcdb",
        product: "colorbel",
        cat: "vinilicas"
    },
    {
        codigo: "1414",
        name: "Roble",
        color: "#634833",
        product: "colorbel",
        cat: "vinilicas"
    },
    {
        codigo: "1408",
        name: "Amarillo",
        color: "#f4db7f",
        product: "colorbel",
        cat: "vinilicas"
    },
    {
        codigo: "1402",
        name: "Azul Olimpia",
        color: "#8ab5e7",
        product: "colorbel",
        cat: "vinilicas"
    },
    {
        codigo: "1409",
        name: "Blanco Ostión",
        color: "#e2dcd0",
        product: "colorbel",
        cat: "vinilicas"
    },
    {
        codigo: "1413",
        name: "Rojo Óxido",
        color: "#8c4941",
        product: "colorbel",
        cat: "vinilicas"
    },
    {
        codigo: "1415",
        name: "Verde Manzana",
        color: "#b5c668",
        product: "colorbel",
        cat: "vinilicas"
    },
    {
        codigo: "1405",
        name: "Azul Cascada",
        color: "#b1d5e1",
        product: "colorbel",
        cat: "vinilicas"
    },
    {
        codigo: "1401",
        name: "Marfil",
        color: "#f6dfc0",
        product: "colorbel",
        cat: "vinilicas"
    },
    {
        codigo: "1417",
        name: "Escarlata",
        color: "#9f3b35",
        product: "colorbel",
        cat: "vinilicas"
    },
    {
        codigo: "1411",
        name: "Pistache",
        color: "#b9cead",
        product: "colorbel",
        cat: "vinilicas"
    },
    {
        codigo: "1407",
        name: "Turquesa Claro",
        color: "#ade6d5",
        product: "colorbel",
        cat: "vinilicas"
    },
    {
        codigo: "1410",
        name: "Durazno",
        color: "#f1cb9e",
        product: "colorbel",
        cat: "vinilicas"
    },
    {
        codigo: "1416",
        name: "Mandarina",
        color: "#e48454",
        product: "colorbel",
        cat: "vinilicas"
    },
    {
        codigo: "1403",
        name: "Mamey",
        color: "#eaaa87",
        product: "colorbel",
        cat: "vinilicas"
    },

    {
        codigo: "1241",
        name: "Oro",
        color: "#b09345",
        product: "clasico",
        cat: "esmaltes"
    },
    {
        codigo: "1240",
        name: "Aluminio",
        color: "#a4a4a4",
        product: "clasico",
        cat: "esmaltes"
    },
    {
        codigo: "1242",
        name: "Cobre",
        color: "#9a6440",
        product: "clasico",
        cat: "esmaltes"
    },
    
    {
        codigo: "1200",
        name: "Blanco",
        color: "#ffff",
        product: "clasico",
        cat: "esmaltes"
    },
    {
        codigo: "1221",
        name: "Negro",
        color: "#000000",
        product: "clasico",
        cat: "esmaltes"
    },
    {
        codigo: "239",
        name: "Verde Manzana",
        color: "#84b645",
        product: "tropimarsur",
        cat: "esmaltes"
    },
    {
        codigo: "236",
        name: "Azul Holandés",
        color: "#3965bb",
        product: "tropimarsur",
        cat: "esmaltes"
    },
    {
        codigo: "223",
        name: "Negro",
        color: "#000000",
        product: "tropimarsur",
        cat: "esmaltes"
    },
    {
        codigo: "200",
        name: "Blanco",
        color: "#ffffff",
        product: "tropimarsur",
        cat: "esmaltes"
    },
    {
        codigo: "235",
        name: "Aluminio",
        color: "#b4b6b5",
        product: "tropimarsur",
        cat: "esmaltes"
    },
    {
        codigo: "240",
        name: "Transparente",
        color: "bg-transparent",
        product: "tropimarsur",
        cat: "esmaltes"
    },
    {
        codigo: "238",
        name: "Negro Mate",
        color: "#1f1f1f",
        product: "tropimarsur",
        cat: "esmaltes"
    },
    {
        codigo: "237",
        name: "Blanco Mate",
        color: "#ffffff",
        product: "tropimarsur",
        cat: "esmaltes"
    },
    {
        codigo: "241",
        name: "Azul Orgánico",
        color: "#1f3686",
        product: "tropimarsur",
        cat: "esmaltes"
    },
    {
        codigo: "242",
        name: "Verde Orgánico",
        color: "#335835",
        product: "tropimarsur",
        cat: "esmaltes"
    },
    {
        codigo: "1004",
        name: "Granada",
        color: "#ce3204",
        product: "tropimar",
        cat: "esmaltes"
    },
    {
        codigo: "1008",
        name: "Rojo Cereza",
        color: "#9b011d",
        product: "tropimar",
        cat: "esmaltes"
    },
    {
        codigo: "1012",
        name: "Rojo Indio",
        color: "#742811",
        product: "tropimar",
        cat: "esmaltes"
    },
    {
        codigo: "1024",
        name: "Marrón",
        color: "#810f31",
        product: "tropimar",
        cat: "esmaltes"
    },
    {
        codigo: "1016",
        name: "Chocolate",
        color: "#342609",
        product: "tropimar",
        cat: "esmaltes"
    },
    {
        codigo: "1009",
        name: "Castaño",
        color: "#9e7150",
        product: "tropimar",
        cat: "esmaltes"
    },
    {
        codigo: "1003",
        name: "Amarillo Óxido",
        color: "#aa762a",
        product: "tropimar",
        cat: "esmaltes"
    },
   
    {
        codigo: "1007",
        name: "Verde Real",
        color: "#4e8357",
        product: "tropimar",
        cat: "esmaltes"
    },
    {
        codigo: "1028",
        name: "Blanco Hueso",
        color: "#eee7d3",
        product: "tropimar",
        cat: "esmaltes"
    },

    {
        codigo: "1000",
        name: "Blanco",
        color: "#ffffff",
        product: "tropimar",
        cat: "esmaltes"
    },
    {
        codigo: "1014",
        name: "Negro",
        color: "#000000",
        product: "tropimar",
        cat: "esmaltes"
    },
    {
        codigo: "1715",
        name: "Amarillo Limón",
        color: "#ffd300",
        product: "brigadier",
        cat: "esmaltes"
    },
    {
        codigo: "1716",
        name: "Azul Orgánico",
        color: "#1f317b",
        product: "brigadier",
        cat: "esmaltes"
    },
    {
        codigo: "1711",
        name: "Verde Orgánico",
        color: "#007740",
        product: "brigadier",
        cat: "esmaltes"
    },
    {
        codigo: "1713",
        name: "Amarillo Cromo",
        color: "#f8ad00",
        product: "brigadier",
        cat: "esmaltes"
    },
    {
        codigo: "1717",
        name: "Azul Holandés",
        color: "#006cb4",
        product: "brigadier",
        cat: "esmaltes"
    },
    {
        codigo: "1712",
        name: "Verde Pradera",
        color: "#008645",
        product: "brigadier",
        cat: "esmaltes"
    },
    {
        codigo: "1714",
        name: "Amarillo Óxido",
        color: "#ca8107",
        product: "brigadier",
        cat: "esmaltes"
    },
    {
        codigo: "1707",
        name: "Café",
        color: "#583725",
        product: "brigadier",
        cat: "esmaltes"
    },
    {
        codigo: "1708",
        name: "Chocolate ",
        color: "#3a2105",
        product: "brigadier",
        cat: "esmaltes"
    },
    {
        codigo: "1718",
        name: "Marrón",
        color: "#81152d",
        product: "brigadier",
        cat: "esmaltes"
    },
    {
        codigo: "1706",
        name: "Rojo Óxido",
        color: "#8e3713",
        product: "brigadier",
        cat: "esmaltes"
    },
    {
        codigo: "1709",
        name: "Chocolate Mate",
        color: "#3a2105",
        product: "brigadier",
        cat: "esmaltes"
    },
    {
        codigo: "1710",
        name: "Rojo",
        color: "#e3051f",
        product: "brigadier",
        cat: "esmaltes"
    },
    {
        codigo: "1719",
        name: "Naranja",
        color: "#e74915",
        product: "brigadier",
        cat: "esmaltes"
    },
    {
        codigo: "1704",
        name: "Transparente",
        color: "transparent",
        product: "brigadier",
        cat: "esmaltes"
    },

    {
        codigo: "1100",
        name: "Blanco",
        color: "#ffffff",
        product: "canada",
        cat: "esmaltes"
    },
    {
        codigo: "1101",
        name: "Negro",
        color: "#000000",
        product: "canada",
        cat: "esmaltes"
    },
    {
        codigo: "2140",
        name: "Azul Cielo",
        color: "#a8dbec",
        product: "brillantes",
        cat: "aerosoles"
    },
    {
        codigo: "2144",
        name: "Amarillo Caterpilar",
        color: "#c8903b",
        product: "brillantes",
        cat: "aerosoles"
    },
    {
        codigo: "2145",
        name: "Crema",
        color: "#eed89c",
        product: "brillantes",
        cat: "aerosoles"
    },
    {
        codigo: "2146",
        name: "Chocolate",
        color: "#342a29",
        product: "brillantes",
        cat: "aerosoles"
    },
    {
        codigo: "2147",
        name: "Verde Óleo",
        color: "#8aa96e",
        product: "brillantes",
        cat: "aerosoles"
    },
    {
        codigo: "2148",
        name: "Rosa Taxi",
        color: "#ab005e",
        product: "brillantes",
        cat: "aerosoles"
    },
    {
        codigo: "2170",
        name: "Blanco",
        color: "#ffffff",
        product: "brillantes",
        cat: "aerosoles"
    },
    {
        codigo: "2171",
        name: "Negro",
        color: "#000000",
        product: "brillantes",
        cat: "aerosoles"
    },
    {
        codigo: "2176",
        name: "Rosa Mexicano",
        color: "#cf6080",
        product: "brillantes",
        cat: "aerosoles"
    },
    {
        codigo: "2177",
        name: "Morado",
        color: "#473f68",
        product: "brillantes",
        cat: "aerosoles"
    },
    {
        codigo: "2178",
        name: "Azul Ford",
        color: "#03023b",
        product: "brillantes",
        cat: "aerosoles"
    },
    {
        codigo: "2182",
        name: "Amarillo Limón",
        color: "#f1c52e",
        product: "brillantes",
        cat: "aerosoles"
    },
    {
        codigo: "2183",
        name: "Azul Holandés",
        color: "#467cb8",
        product: "brillantes",
        cat: "aerosoles"
    },
    {
        codigo: "2184",
        name: "Verde Hoja",
        color: "#3e6632",
        product: "brillantes",
        cat: "aerosoles"
    },
    {
        codigo: "2194",
        name: "Transparente",
        color: "bg-transparent",
        product: "brillantes",
        cat: "aerosoles"
    },
    {
        codigo: "2139",
        name: "Negro Alta Temperatura",
        color: "#000000",
        product: "alta_temperatura",
        cat: "aerosoles"
    },
    {
        codigo: "2162",
        name: "Aluminio Alta Temperatura",
        color: "#b7b7b9",
        product: "alta_temperatura",
        cat: "aerosoles"
    },
    {
        codigo: "2188",
        name: "Oro Intenso",
        color: "#966e3b",
        product: "niquelados",
        cat: "aerosoles"
    },
    {
        codigo: "2192",
        name: "Aluminio",
        color: "#a4a4a4",
        product: "niquelados",
        cat: "aerosoles"
    },
    {
        codigo: "2193",
        name: "Oro Brillante",
        color: "#ae9350",
        product: "niquelados",
        cat: "aerosoles"
    },
    {
        codigo: "2198",
        name: "Cromo",
        color: "#b4b4b4",
        product: "niquelados",
        cat: "aerosoles"
    },
    {
        codigo: "2199",
        name: "Cobre",
        color: "#9a6440",
        product: "niquelados",
        cat: "aerosoles"
    },
    {
        codigo: "2153",
        name: "Verde Fluorescente",
        color: "#88eb39",
        product: "fluorescentes",
        cat: "aerosoles",
    },
    {
        codigo: "2154",
        name: "Rosa Fluorescente",
        color: "#db1b8d",
        product: "fluorescentes",
        cat: "aerosoles",
    },
    {
        codigo: "2158",
        name: "Amarillo Fluorescente",
        color: "#eeff3c",
        product: "fluorescentes",
        cat: "aerosoles",
    },
    {
        codigo: "2159",
        name: "Naranja Fluorescente",
        color: "#dc4409",
        product: "fluorescentes",
        cat: "aerosoles",
    },
    {
        codigo: "2185",
        name: "Naranja",
        color: "#d6372a",
        product: "seguridad",
        cat: "aerosoles"
    },
    {
        codigo: "2186",
        name: "Amarillo Medio",
        color: "#e69033",
        product: "seguridad",
        cat: "aerosoles"
    },
    {
        codigo: "2189",
        name: "Gris Acero",
        color: "#7f8487",
        product: "seguridad",
        cat: "aerosoles"
    },
    {
        codigo: "2190",
        name: "Rojo",
        color: "#ae1213",
        product: "seguridad",
        cat: "aerosoles"
    },
    {
        codigo: "2142",
        name: "Lila Metálico",
        color: "#634d7c",
        product: "metalicos",
        cat: "aerosoles"
    },
    {
        codigo: "2143",
        name: "Negro Metálico",
        color: "#000000",
        product: "metalicos",
        cat: "aerosoles"
    },
    {
        codigo: "2174",
        name: "Azul Metálico",
        color: "#39619f",
        product: "metalicos",
        cat: "aerosoles"
    },
    {
        codigo: "2175",
        name: "Verde Metálico",
        color: "#3b674c",
        product: "metalicos",
        cat: "aerosoles"
    },
    {
        codigo: "2180",
        name: "Rojo Metálico",
        color: "#7b002e",
        product: "metalicos",
        cat: "aerosoles"
    },
    {
        codigo: "2195",
        name: "Primario Gris",
        color: "#83888e",
        product: "anticorrosivos",
        cat: "aeroloses"
    },
    {
        codigo: "2196",
        name: "Primario Rojo Óxido",
        color: "#85362f",
        product: "anticorrosivos",
        cat: "aeroloses"
    },

    {
        codigo: "2172",
        name: "Blanco Mate",
        color: "#ffffff",
        product: "mate",
        cat: "aerosoles"
    },
    {
        codigo: "2173",
        name: "Negro Mate",
        color: "#1f1f1f",
        product: "mate",
        cat: "aerosoles"
    },
    {
        codigo: "2141",
        name: "Transparente Mate",
        color: "bg-transparent",
        product: "mate",
        cat: "aerosoles"
    },

    {
        codigo: "2191",
        name: "Negro Satinado",
        color: "#040609",
        product: "satin_aerosol",
        cat: "aerosoles"
    },
    {
        codigo: "1521",
        name: "Negro",
        color: "#111315",
        product: "elite",
        cat: "ferre"
    },
  
    {
        codigo: "1500",
        name: "Blanco",
        color: "#ffffff",
        product: "elite",
        cat: "ferre"
    },
    {
        codigo: "1501",
        name: "Blanco Ostión",
        color: "#f2f3e2",
        product: "elite",
        cat: "ferre"
    },
    {
        codigo: "1512",
        name: "Arena",
        color: "#ebe4c2",
        product: "elite",
        cat: "ferre"
    },
    {
        codigo: "1511",
        name: "Marfil",
        color: "#f8dbb3",
        product: "elite",
        cat: "ferre"
    },
    {
        codigo: "1515",
        name: "Piñón",
        color: "#c7af96",
        product: "elite",
        cat: "ferre"
    },
    {
        codigo: "1507",
        name: "Amarillo Soleado",
        color: "#f5c67d",
        product: "elite",
        cat: "ferre"
    },
    {
        codigo: "1514",
        name: "Amarillo Limón",
        color: "#f6d46a",
        product: "elite",
        cat: "ferre"
    },
    {
        codigo: "1520",
        name: "Amarillo Napolitano",
        color: "#f4a360",
        product: "elite",
        cat: "ferre"
    },
    {
        codigo: "1516",
        name: "Amarillo Ocre",
        color: "#ae7f50",
        product: "elite",
        cat: "ferre"
    },
    {
        codigo: "1513",
        name: "Tangerina",
        color: "#f48a65",
        product: "elite",
        cat: "ferre"
    },{
        codigo: "1508",
        name: "Naranja",
        color: "#e95f48",
        product: "elite",
        cat: "ferre"
    },
    {
        codigo: "1517",
        name: "Rojo Teja",
        color: "#562620",
        product: "elite",
        cat: "ferre"
    },

    {
        codigo: "1523",
        name: "Rojo Bandera",
        color: "#be4342",
        product: "elite",
        cat: "ferre"
    },
    {
        codigo: "1519",
        name: "Durazno",
        color: "#f2b499",
        product: "elite",
        cat: "ferre"
    },
    {
        codigo: "1505",
        name: "Coral",
        color: "#f38b87",
        product: "elite",
        cat: "ferre"
    },
    {
        codigo: "1524",
        name: "Rosado",
        color: "#f4a3b2",
        product: "elite",
        cat: "ferre"
    },
    {
        codigo: "1503",
        name: "Violeta Intenso",
        color: "#434b97",
        product: "elite",
        cat: "ferre"
    },
    {
        codigo: "1510",
        name: "Verde Manzana",
        color: "#a2d681",
        product: "elite",
        cat: "ferre"
    },
    {
        codigo: "1525",
        name: "Milicia",
        color: "#2a3524",
        product: "elite",
        cat: "ferre"
    },
    {
        codigo: "1522",
        name: "Verde Esmeralda",
        color: "#1c4233",
        product: "elite",
        cat: "ferre"
    },
    {
        codigo: "1509",
        name: "Azul Rey",
        color: "#11203c",
        product: "elite",
        cat: "ferre"
    },
    {
        codigo: "1518",
        name: "Azul Medio",
        color: "#276fa8",
        product: "elite",
        cat: "ferre"
    },
    {
        codigo: "1502",
        name: "Azul Horizonte",
        color: "#6cc5d9",
        product: "elite",
        cat: "ferre"
    },


    // Imperial 

    {
        codigo: "800",
        name: "Blanco",
        color: "#f5efe1",
        product: "imperial",
         cat: "ferre"
    },
    {
        codigo: "813",
        name: "Blanco Ostión",
        color: "#f5f1e2",
        product: "imperial",
         cat: "ferre"
    },
    {
        codigo: "804",
        name: "Marfil",
        color: "#f7e2c3",
        product: "imperial",
         cat: "ferre"
    },
    {
        codigo: "803",
        name: "Arena",
        color: "#efcba3",
        product: "imperial",
         cat: "ferre"
    },
    
    {
        codigo: "805",
        name: "Chabacano",
        color: "#ecba88",
        product: "imperial",
         cat: "ferre"
    },
    {
        codigo: "811",
        name: "Salmón",
        color: "#edb694",
        product: "imperial",
         cat: "ferre"
    },
    
    {
        codigo: "806",
        name: "Naranja",
        color: "#e38768",
        product: "imperial",
         cat: "ferre"
    },
    {
        codigo: "801",
        name: "Flamingo",
        color: "#ce7888",
        product: "imperial",
         cat: "ferre"
    },
    
    {
        codigo: "812",
        name: "Azul Eterno",
        color: "#7090b1",
        product: "imperial",
         cat: "ferre"
    },
    {
        codigo: "809",
        name: "Azul",
        color: "#49bcd8",
        product: "imperial",
         cat: "ferre"
    },
    
    {
        codigo: "808",
        name: "Turquesa",
        color: "#54c9b6",
        product: "imperial",
         cat: "ferre"
    },
    {
        codigo: "810",
        name: "Verde Manzana",
        color: "#b1cc7b",
        product: "imperial",
         cat: "ferre"
    },

    {
        codigo: "5085",
        name: "Amarillo Limón",
        color: "#ffd74b",
        product: "esmalte_ferre",
        cat: "ferre"
    },
    {
        codigo: "5083",
        name: "Amarillo Cromo",
        color: "#fc9f3f",
        product: "esmalte_ferre",
         cat: "ferre"
    },
    {
        codigo: "5084",
        name: "Amarillo Óxido",
        color: "#ba6f36",
        product: "esmalte_ferre",
         cat: "ferre"
    },
    {
        codigo: "5088",
        name: "Marrón",
        color: "#7a1b34",
        product: "esmalte_ferre",
         cat: "ferre"
    },
    {
        codigo: "5077",
        name: "Café",
        color: "#3d1d17",
        product: "esmalte_ferre",
         cat: "ferre"
    },
    {
        codigo: "5078",
        name: "Chocolate Brillante",
        color: "#1d0e0d",
        product: "esmalte_ferre",
         cat: "ferre"
    },
    {
        codigo: "5081",
        name: "Verde Orgánico",
        color: "#157541",
        product: "esmalte_ferre",
         cat: "ferre"
    },
    {
        codigo: "5082",
        name: "Verde Pradera",
        color: "#268d49",
        product: "esmalte_ferre",
         cat: "ferre"
    },
    {
        codigo: "5076",
        name: "Rojo Óxido",
        color: "#7f3126",
        product: "esmalte_ferre",
         cat: "ferre"
    },
    {
        codigo: "5080",
        name: "Rojo",
        color: "#f13434",
        product: "esmalte_ferre",
         cat: "ferre"
    },

    {
        codigo: "5089",
        name: "Naranja",
        color: "#f6552e",
        product: "esmalte_ferre",
         cat: "ferre"
    },
    {
        codigo: "5079",
        name: "Chocolate Mate",
        color: "#1d0e0d",
        product: "esmalte_ferre",
         cat: "ferre"
    },
    {
        codigo: "5087",
        name: "Azul Holandés",
        color: "#0774ac",
        product: "esmalte_ferre",
         cat: "ferre"
    },
    {
        codigo: "5086",
        name: "Azul Orgánico",
        color: "#0f3988",
        product: "esmalte_ferre",
         cat: "ferre"
    },
    {
        codigo: "5075",
        name: "Aluminio",
        color: "#9caea2",
        product: "esmalte_ferre",
         cat: "ferre"
    },
    {
        codigo: "5090",
        name: "Gris Acero",
        color: "#7b8d8b",
        product: "esmalte_ferre",
         cat: "ferre"
    },
    {
        codigo: "5072",
        name: "Negro",
        color: "#111315",
        product: "esmalte_ferre",
         cat: "ferre"
    },
    {
        codigo: "5073",
        name: "Negro Mate",
        color: "#1c1f20",
        product: "esmalte_ferre",
         cat: "ferre"
    },
    {
        codigo: "5074",
        name: "Transparente",
        color: "bg-transparent",
        product: "esmalte_ferre",
         cat: "ferre"
    },
    {
        codigo: "5071",
        name: "Blanco Mate",
        color: "#ffffff",
        product: "esmalte_ferre",
         cat: "ferre"
    },
    {
        codigo: "5070",
        name: "Blanco",
        color: "#ffffff",
        product: "esmalte_ferre",
         cat: "ferre"
    },
    {
        codigo: "5052",
        name: "Amarillo Cromo",
        color: "#fd8d43",
        product: "esmalte_ferre2",
        cat: "ferre"
    },
    {
        codigo: "5057",
        name: "Amarillo Limón",
        color: "#ffd74b",
        product: "esmalte_ferre2",
        cat: "ferre"
    },
    {
        codigo: "5056",
        name: "Azul Holandés",
        color: "#0774ac",
        product: "esmalte_ferre2",
        cat: "ferre"
    },
    {
        codigo: "5054",
        name: "Verde Intenso",
        color: "#164b35",
        product: "esmalte_ferre2",
        cat: "ferre"
    },
    {
        codigo: "5053",
        name: "Rojo Cereza",
        color: "#a72930",
        product: "esmalte_ferre2",
        cat: "ferre"
    },
    {
        codigo: "5055",
        name: "Chocolate",
        color: "#191612",
        product: "esmalte_ferre2",
        cat: "ferre"
    },
    {
        codigo: "5062",
        name: "Chocolate Mate",
        color: "#1b1713",
        product: "esmalte_ferre2",
        cat: "ferre"
    },
    {
        codigo: "5059",
        name: "Gris Tornado",
        color: "#8c9a89",
        product: "esmalte_ferre2",
        cat: "ferre"
    },
    {
        codigo: "5058",
        name: "Blanco Ostión",
        color: "#d1d8c2",
        product: "esmalte_ferre2",
        cat: "ferre"
    },
    {
        codigo: "5061",
        name: "Negro",
        color: "#111315",
        product: "esmalte_ferre2",
        cat: "ferre"
    },
    {
        codigo: "5060",
        name: "Blanco",
        color: "#ffffff",
        product: "esmalte_ferre2",
        cat: "ferre"
    },
    {
        codigo: "5030",
        name: "Gris",
        color: "#46534d",
        product: "primario_herreros",
        cat: "ferre"
    },
    {
        codigo: "5031",
        name: "Rojo Óxido",
        color: "#733b31",
        product: "primario_herreros",
        cat: "ferre"
    },
    {
        codigo: "5008",
        name: "Gris",
        color: "#47534d",
        product: "primario_rtu",
        cat: "ferre"
    },
    {
        codigo: "5009",
        name: "Rojo Óxido",
        color: "#733b31",
        product: "primario_rtu",
        cat: "ferre"
    },
    {
        codigo: "3080-01",
        name: "Blanco",
        color: "#ffffff",
        product: "laca_ferre",
        cat: "ferre"
    },
    {
        codigo: "3092",
        name: "Chocolate Oscuro",
        color: "#07050a",
        product: "laca_ferre",
        cat: "ferre"
    },
    {
        codigo: "3093",
        name: "Chocolate Medio",
        color: "#11080e",
        product: "laca_ferre",
        cat: "ferre"
    },

    {
        codigo: "3074",
        name: "Blanco",
        color: "#ffffff",
        product: "primer_ferre",
        cat: "ferre"
    },
    {
        codigo: "3084",
        name: "Amarillo Oro",
        color: "#f19e34",
        product: "laca_century",
        cat: "maderas"
    },
    {
        codigo: "3080",
        name: "Blanco",
        color: "#fefefe",
        product: "laca_century",
        cat: "maderas"
    },
    {
        codigo: "3081",
        name: "Negro",
        color: "#010101",
        product: "laca_century",
        cat: "maderas"
    },
    {
        codigo: "3090",
        name: "Azul",
        color: "#030d31",
        product: "laca_century",
        cat: "maderas"
    },
    {
        codigo: "3089",
        name: "Wengue",
        color: "#010101",
        product: "laca_century",
        cat: "maderas"
    },
    {
        codigo: "3096",
        name: "Rojo Vivo",
        color: "#e41f28",
        product: "laca_century",
        cat: "maderas"
    },
    {
        codigo: "3082",
        name: "Amarillo Óxido",
        color: "#d38f3a",
        product: "laca_century",
        cat: "maderas"
    },
    {
        codigo: "3087",
        name: "Marrón",
        color: "#490115",
        product: "laca_century",
        cat: "maderas"
    },
    {
        codigo: "3083",
        name: "Amarillo Limón",
        color: "#f9d835",
        product: "laca_century",
        cat: "maderas"
    },
    {
        codigo: "3085",
        name: "Rojo Óxido",
        color: "#90391e",
        product: "laca_century",
        cat: "maderas"
    },
    {
        codigo: "3084",
        name: "Chocolate",
        color: "#010101",
        product: "laca_century",
        cat: "maderas"
    },
    
    {
        codigo: "3072",
        name: "Rojo Óxido",
        color: "#90391e",
        product: "primer_nitrocelulosa",
        cat: "maderas"
    },
    {
        codigo: "3073",
        name: "Chocolate",
        color: "#2a180e",
        product: "primer_nitrocelulosa",
        cat: "maderas"
    },

    {
        codigo: "3073",
        name: "Chocolate",
        color: "#2a180e",
        product: "primer_nitrocelulosa",
        cat: "maderas"
    },

    {
        codigo: "3209",
        name: "Maple",
        color_imagen: "/muestrario/maple.jpg",
        product: "barniz_entintado",
        cat: "maderas"
    },
    {
        codigo: "3212",
        name: "Nogal Clásico",
        color_imagen: "/muestrario/nogal_calsico.jpg",
        product: "barniz_entintado",
        cat: "maderas"
    },
    {
        codigo: "3210",
        name: "Magnolia",
        color_imagen: "/muestrario/magnolia.jpg",
        product: "barniz_entintado",
        cat: "maderas"
    },
    {
        codigo: "3211",
        name: "Caoba Clásico",
        color_imagen: "/muestrario/caoba_clsico.jpg",
        product: "barniz_entintado",
        cat: "maderas"
    },
    {
        codigo: "3206",
        name: "Chocolate",
        color_imagen: "/muestrario/chocolate.jpg",
        product: "barniz_entintado",
        cat: "maderas"
    },
    

    {
        codigo: "3215",
        name: "Nogal Americano",
        color_imagen: "/muestrario/nogal_americano.jpg",
        product: "barniz_entintado_ferre",
        cat: "ferre"
    },
    {
        codigo: "3216",
        name: "Chocolate",
        color_imagen: "/muestrario/chocolate.jpg",
        product: "barniz_entintado_ferre",
        cat: "ferre"
    },
    {
        codigo: "3217",
        name: "Caoba Clásico",
        color_imagen: "/muestrario/caoba_clsico.jpg",
        product: "barniz_entintado_ferre",
        cat: "ferre"
    },
    {
        codigo: "3218",
        name: "Amaranto",
        color_imagen: "/muestrario/amaranto.jpg",
        product: "barniz_entintado_ferre",
        cat: "ferre"
    },

    {
        codigo: "3033",
        name: "Chocolate",
        color_imagen: "/muestrario_tintas/chocolate.jpg",
        product: "tintas_aceite",
        cat: "maderas"
    },
    {
        codigo: "3039",
        name: "Olmo",
        color_imagen: "/muestrario_tintas/olmo.jpg",
        product: "tintas_aceite",
        cat: "maderas"
    },
    {
        codigo: "3040",
        name: "Early American",
        color_imagen: "/muestrario_tintas/early_american.jpg",
        product: "tintas_aceite",
        cat: "maderas"
    },
    {
        codigo: "3038",
        name: "Caoba Comercial",
        color_imagen: "/muestrario_tintas/caoba_comercial.jpg",
        product: "tintas_aceite",
        cat: "maderas"
    },
    {
        codigo: "3031",
        name: "Caoba Clásico",
        color_imagen: "/muestrario_tintas/caoba_clasico.jpg",
        product: "tintas_aceite",
        cat: "maderas"
    },
    {
        codigo: "3030",
        name: "Nogal Americano",
        color_imagen: "/muestrario_tintas/nogal_americano.jpg",
        product: "tintas_aceite",
        cat: "maderas"
    },
    {
        codigo: "3032",
        name: "Amaranto",
        color_imagen: "/muestrario_tintas/amaranto.jpg",
        product: "tintas_aceite",
        cat: "maderas"
    },
   
    {
        codigo: "3036",
        name: "Cedro",
        color_imagen: "/muestrario_tintas/cedro.jpg",
        product: "tintas_aceite",
        cat: "maderas"
    },


     {
        codigo: "3013",
        name: "Chocolate",
        color_imagen: "/muestrario_tintas/chocolate.jpg",
        product: "tintas_alcohol",
        cat: "maderas"
    },
    {
        codigo: "3019",
        name: "Olmo",
        color_imagen: "/muestrario_tintas/olmo.jpg",
        product: "tintas_alcohol",
        cat: "maderas"
    },
    {
        codigo: "3020",
        name: "Early American",
        color_imagen: "/muestrario_tintas/early_american.jpg",
        product: "tintas_alcohol",
        cat: "maderas"
    },
    {
        codigo: "3018",
        name: "Caoba Comercial",
        color_imagen: "/muestrario_tintas/caoba_comercial.jpg",
        product: "tintas_alcohol",
        cat: "maderas"
    },
    {
        codigo: "3011",
        name: "Caoba Clásico",
        color_imagen: "/muestrario_tintas/caoba_clasico.jpg",
        product: "tintas_alcohol",
        cat: "maderas"
    },
    {
        codigo: "3010",
        name: "Nogal Americano",
        color_imagen: "/muestrario_tintas/nogal_americano.jpg",
        product: "tintas_alcohol",
        cat: "maderas"
    },
    {
        codigo: "3012",
        name: "Amaranto",
        color_imagen: "/muestrario_tintas/amaranto.jpg",
        product: "tintas_alcohol",
        cat: "maderas"
    },
    {
        codigo: "3015",
        name: "Nogal Obscuro",
        color_imagen: "/muestrario_tintas/nogal_obscuro.jpg",
        product: "tintas_alcohol",
        cat: "maderas"
    },
    {
        codigo: "3014",
        name: "Magnolia",
        color_imagen: "/muestrario_tintas/magnolia.jpg",
        product: "tintas_alcohol",
        cat: "maderas"
    },
    {
        codigo: "3017",
        name: "Roble",
        color_imagen: "/muestrario_tintas/roble.jpg",
        product: "tintas_alcohol",
        cat: "maderas"
    },
    {
        codigo: "3016",
        name: "Cedro",
        color_imagen: "/muestrario_tintas/cedro.jpg",
        product: "tintas_alcohol",
        cat: "maderas"
    },
    {
        codigo: "2149",
        name: "Caoba",
        color: "#723206",
        product: "aerosol_madera",
        cat: "aerosoles"
    },
    {
        codigo: "2150",
        name: "Nogal",
        color: "#512906",
        product: "aerosol_madera",
        cat: "aerosoles"
    },

    {
        codigo: "5000",
        name: "Blanco",
        color: "#ffffff",
        product: "vulcan_anticorrosivo",
        cat: "vinilicas"
    },
    
    {
        codigo: "5001",
        name: "Rojo Óxido",
        color: "#90391e",
        product: "vulcan_anticorrosivo",
        cat: "vinilicas"
    },
    {
        codigo: "5002",
        name: "Gris",
        color: "#47534d",
        product: "vulcan_anticorrosivo",
        cat: "vinilicas"
    },
    {
        codigo: "5003",
        name: "Negro",
        color: "#000000",
        product: "vulcan_anticorrosivo",
        cat: "vinilicas"
    },
    {
        codigo: "5004",
        name: "Naranja",
        color: "#d6372a",
        product: "vulcan_miniogenuino",
        cat: "vinilicas"
    },
    {
        codigo: "5005",
        name: "Naranja",
        color: "#d6372a",
        product: "vulcan_minioeconomico",
        cat: "vinilicas"
    },
    {
        codigo: "5006",
        name: "Aamarillo",
        color: "#F59E0B",
        product: "vulcan_comatozinc",
        cat: "vinilicas"
    },
    {
        codigo: "5007",
        name: "Gris",
        color: "#47534d",
        product: "vulcan_secadorapido",
        cat: "vinilicas"
    },
    {
        codigo: "5040",
        name: "Blanco",
        color: "#ffffff",
        product: "vulcan_secadoexpress",
        cat: "vinilicas"
    },
    {
        codigo: "5041",
        name: "Rojo Óxido",
        color: "#90391e",
        product: "vulcan_secadoexpress",
        cat: "vinilicas"
    },
    {
        codigo: "5042",
        name: "Gris",
        color: "#47534d",
        product: "vulcan_secadoexpress",
        cat: "vinilicas"
    },
    {
        codigo: "5050",
        name: "Gris",
        color: "#47534d",
        product: "vulcan_herreros",
        cat: "vinilicas"
    },
    {
        codigo: "5051",
        name: "Rojo Óxido",
        color: "#90391e",
        product: "vulcan_herreros",
        cat: "vinilicas"
    },
    
    

]

export const novedades = [
    {
        id: 1,
        name: "¡Llegaron los nuevos colores metálicos TROPIMAR!",
        description: `Transforma cualquier superficie con el acabado espectacular de nuestros nuevos tonos: Oro, Aluminio y Cobre.
Perfectos para darle un toque sofisticado y artístico a tus proyectos.
Descubre cómo un color puede hacer que todo resalte.

.
`,
        imagen: "/promociones/tropimar.jpg",
        enlace: "/productos",
        categoria: "decorativa",
        microcategoria: "esmaltes"
        
    },{
        id: 2,
        name: "¡Ya está aquí el nuevo VULCAN® PRIMARIO ALTA ADHERENCIA de IPESA Pinturas!",
        description: `Un primario de calidad superior, formulado con resinas acrílicas para ofrecer una adherencia excepcional sobre lámina galvanizada previamente acondicionada.
Ideal para estructuras metálicas como tanques, puertas, maquinaria y más.

`,
        imagen: "/promociones/vulvan_511.jpg",
        enlace: "/productos",
        categoria: "decorativa",
        microcategoria: "primarios"
        
    },{
        id: 3,
        name: "Nueva línea de Pulimentos MENZERNA",
        description: `¡La perfección del pulido automotriz ha llegado a México! Presentamos la nueva línea de pulimentos MENZERNA, ahora disponible con tu distribuidor IPESA Pinturas. Esta tecnología de precisión alemana complementa a la perfección nuestra línea de repintado automotriz Color Cril, ofreciendo una solución completa: desde el color hasta el brillo final.
Con más de 50 años de experiencia, en IPESA Pinturas unimos innovación y calidad para brindarte acabados duraderos y profesionales. Menzerna e IPESA Pinturas, una alianza para lograr pintura impecable y protección superior. ¡Descúbrela hoy!
.
`,
        imagen: "/promociones/menzerna_2025.webp",
        enlace: "/productos",
        categoria: "automotriz",
        microcategoria: "pulimentos"
        
    },{
        id: 4,
        name: "\"Promoción como caída del cielo\"",
        description: `Prepárate para la temporada de lluvias con un 20% de descuento en impermeabilizantes seleccionados, vigente del 1 de marzo al 29 de agosto de 2025. Protege tu hogar con soluciones confiables como IMPER RUF®, IMPER LUX®, IMPER CRIL®, y nuestros impermeabilizantes de muro WALL COVER ECO® y WALL COVER PLUS®, en presentaciones de 18 y 19 litros.
Aprovecha esta oportunidad en tiendas participantes. Consulta productos participantes, restricciones y condiciones con tu distribuidor autorizado IPESA®.
.
`,
        imagen: "/promociones/imperm_2025.webp",
        enlace: "/productos",
        categoria: "decorativa",
        microcategoria: "impermeabilizantes"
        
    }
//     ,{
//         id: 5,
//         name: "Pinta la primavera con IPESA Pinturas",
//         description: `Dale color a la primavera con un 20% de descuento en nuestras pinturas vinílicas y selladores seleccionados. Del 24 de marzo al 30 de abril de 2025, aprovecha esta promoción exclusiva y renueva tus espacios con productos de alta calidad como VINTEKO, VINIPESA® Mate y Satín, REALTEK®, y selladores SELLATEK® 2 en 1 y SELLATEK® 5x1 en sus presentaciones de 1, 4 y 19 litros.
// Aplica solo en tiendas participantes y hasta agotar existencias. Consulta productos participantes, términos y condiciones con tu distribuidor autorizado IPESA®.
// `,
//         imagen: "/promociones/primavera_2025.webp",
//         enlace: "/productos",
//         categoria: "decorativa",
//         microcategoria: "vinilicas"
        
//     }
    // ,{
    //     id: 1,
    //     name: "Nuestra Visión es de colores",
    //     description: `Promoción válida del 10 de septiembre al 19 de octubre de 2024 o hasta agotar existencias. Aplica solo en tiendas participantes. Consulta productos, términos y condiciones. No aplica con otras promociones. Aplican restricciones. Productos participantes VINITEK®, REALTEK®, VINIPESA® MATE Y SATÍN, VINI+, SELLALTEK® 5X1	Y 2 en 1. Cualquier duda acerca de la promoción, consulta con tu distribuidor autorizado IPESA®`,
    //     imagen: "/promociones/1a1.png",
    //     enlace: "/productos",
    //     categoria: "decorativa",
    //     microcategoria: "impermeabilizantes"
    // },{
    //     id: 2,
    //     name: "Promocion caída del cielo, 20% de descuento en impermeabilizantes",
    //     description: `Promoción válida hasta el 30 de septiembre del 2024 o hasta agotar existencias. 
    //     Aplica solo en tiendas participantes. 
    //     Consulta productos, términos y condiciones,
    //     No aplica con otras promociones. Aplica restricciones. Productos participantes: 
    //     Imper Ruf® 3 años. Imper Lux® 5 años, Imper Lux Fibratado 5 años, Imper Cril® 7 años, impermeabilizantes de muro, Wall Cover Eco® 3 años y Wall Cover Plus® 5 años en presentaciones 18 y 19L.
    //     Cualquier duda acerca de la promoción consulta con tu distribuidor autorizado IPESA.`,
    //     imagen: "/promociones/caida_cielo/promo.jpg",
    //     enlace: "/productos",
    //     categoria: "decorativa",
    //     microcategoria: "impermeabilizantes"
    // },
    // {
    //     id: 3,
    //     name: "20% de descuento ",
    //     description: "Promoción válida hasta el 28 de abril del 2024 o hasta agotar existencias. Aplica solo en tiendas participantes. Consulta productos, términos y condiciones, No aplica con otras promociones. Aplica restricciones. Productos participantes: Pintura vinil acrilica VINIPESA® acabo mate o satín y esmalte Tropimar®, en presentaciones  1, 4 y 19 L. Cualquier duda acerca de la promoción consulta con tu distribuidor autorizado IPESA.",
    //     imagen: "/consumidores/promocion.webp",
    //     enlace: "/productos",
    //     categoria: "decorativa",
    //     microcategoria: "vinilicas"
    // },
    // {
    //     id: 4,
    //     name: "Nuestro Rellenador Premium Hyper Light",
    //     description: "Es un rellenador premium, al ser más ligero es mucho más fácil de lijar, reduce por mucho la porosidad y tiene excelente adherencia.",
    //     imagen: "/principal/nuevo_producto.webp",
    //     enlace: "/productos",
    //     categoria: "automotriz",
    //     microcategoria: "rellenadores"
    // },
    
]

export const consumidores = [
    {
        name: "Particulares",
        imagen: "/consumidores/particulares.webp",
        description: "Transforma tu hogar en un oasis de color y estilo con nuestra pintura IPESA® de la más alta calidad. Nuestros productos están diseñados para brindarte durabilidad, facilidad de aplicación y una amplia gama de colores para que puedas expresar tu creatividad en cada espacio de tu hogar.",
        clase: "card-animate"
    },
    {
        name: "Oficios",
        imagen: "/consumidores/oficio.webp",
        description: "Potencializa tu trabajo con nuestros portafolios de pintura. Nuestra línea de productos ofrece una excelente cobertura, resistencia y facilidad de aplicación, permitiéndote lograr resultados impecables en cada uno de tus proyectos.",
        clase: "card-animate2"
    },
    {
        name: "Profesional",
        imagen: "/consumidores/profesional.webp",
        description: "Eleva la calidad de tus proyectos con nuestro portafolio de recubrimientos, diseñados para satisfacer la demanda de los proyectos más exigentes, nuestras pinturas ofrecen: durabilidad, resistencia y una amplia variedad de colores para que puedas ofrecer a tus clientes resultados excepcionales en cada trabajo.",
        clase: "card-animate3"
    }
]

export const nosotros = [
    {
        id: 1,
        title: "Misión",
        description: "Aplicamos nuestra experiencia en pinturas y recubrimientos para transformar y dar vida a tus espacios, creando entornos inspiradores y funcionales de forma segura y eficiente.",
        
        clase: "card-animate",
        imagen: "/principal/n2.webp"
    },
    {
        id: 2,
        title: "Visión",
        description: "Nos comprometemos a preservar lo que más te importa, dando color y protección a tus espacios a través de soluciones innovadoras que cuiden y realcen tus objetos y espacios más valiosos.",
        
        clase: "card-animate2",
        imagen: "/principal/n0.webp",
    },
    {
        id: 3,
        title: "Valores",
        description: "",
        lista: ["Ayudar","Excelencia","Calidad","Innovación","Compromiso","Orientación al Cliente","Colaboración",
        "Honestidad","Integridad","Responsabilidad Social"],
        clase: "card-animate3",
        imagen: "/principal/n1.jpg",
    },
]

export const tipsparapintar = [
    {
        name: "IPESA, PRUEBA SUPERADA",
        target: "superada",
    },{
        name: "Sistema de aplicación Vinílicas",
        target: "vinilicas",
    },
    {
        name: "Sistema de aplicación Esmaltes",
        target: "esmaltes",
    },
    // {
    //     name: "Problemas y Soluciones Repintado Automotriz",
    //     target: "automotriz",
    // },
    {
        name: "Tutoriales",
        target: "tutoriales",
    },
]

export const contenidoTips = [
    {
        id: "vinilicas",
        title: "Preparado",
        color: "#2e75b5",
        imagen: "/principal/preparado.jpg",
        description: "Toda superficie deberá estar limpia y seca al momento de realizar la aplicación, deberá estar libre de polvo, grasa y humedad."
    },
    {
        id: "vinilicas",
        title: "Sellado",
        
        color: "#ffc000",
        imagen: "/principal/sellado.jpg",
        description: `Si es obra nueva o una pintura en malas condiciones, se recomienda aplicar un sellador "Vinílico" para promover la adherencia, gastando menos pintura y mejora el acabado.`
    },
    {
        id: "vinilicas",
        title: "Acabado",
        color: "#c55a11",
        imagen: "/principal/acabado.jpg",
        description: "Se recomienda aplicar 2 manos de pintura Vinílica con el color de su preferencia, dejando secar entre mano y mano."
    },

    {
        id: "esmaltes",
        title: "Preparado",
        color: "#2e75b5",
        imagen: "/principal/preparado.jpg",
        description: "La superficie debe de estar limpia, libre de óxido y contaminantes. Lija previamente."
    },
    {
        id: "esmaltes",
        title: "Sellado",
        color: "#ffc000",
        imagen: "/principal/sellado_esmaltes.jpg",
        description: `Aplica primario Vulcan, diluido del 15 al 30% con tíner, aplica una mano con brocha, pistola o airless.`
    },
    {
        id: "esmaltes",
        title: "Acabado",
        color: "#c55a11",
        imagen: "/principal/acabado.jpg",
        description: "Se recomienda aplicar 2 manos de esmalte con brocha, pistola o airless, dejando secar entre mano y mano."
    },



    {
        id: "tutoriales",
        name: "Vintek", 
        video: "https://www.youtube.com/watch?v=uVic436FqTA",
        enlace: "/producto/vintek",
        categoria: "decorativa",
        microcategoria: "vinilicas",
    },
    
    {
        id: "tutoriales",
        name: "Vinipesa", 
        video: "https://www.youtube.com/watch?v=60U-4T2KQIM",
        enlace: "/producto/vinipesa-satin",
        categoria: "decorativa",
        microcategoria: "vinilicas",
    },
    {
        id: "tutoriales",
        name: "Vini +", 
        video: "https://www.youtube.com/watch?v=6QYXimJi5CI",
        enlace: "/producto/vinimas",
        categoria: "decorativa",
        microcategoria: "vinilicas",
    },
    {
        id: "tutoriales",
        name: "Tropimar Sur", 
        video: "https://www.youtube.com/watch?v=UzDi2_ZJXwo",
        enlace: "/producto/tropimar-sur",
        categoria: "decorativa",
        microcategoria: "esmaltes",
    },
    {
        id: "tutoriales",
        name: "Tropimar", 
        video: "https://www.youtube.com/watch?v=ujiKUFdQd4s",
        enlace: "/producto/tropimar",
        categoria: "decorativa",
        microcategoria: "esmaltes",
    },{
        id: "superada",
        name: "Restauración con VULCAN y TROPIMAR metálicos", 
        video: "https://www.youtube.com/watch?v=d_iVRaVRDfA",
        enlace: "/producto/tropimar",
        categoria: "decorativa",
        microcategoria: "esmaltes",
    },{
        id: "superada",
        name: "Pulimos un auto con productos MENZERNA y el resultado es brutal", 
        video: "https://www.youtube.com/watch?v=cRtafg659gg&t=53s",
        enlace: "/producto/cut-force-pro",
        categoria: "decorativa",
        microcategoria: "esmaltes",
    },{
        id: "superada",
        name: "Transformamos esta pared en minutos con REALTEK", 
        video: "https://www.youtube.com/watch?v=WBEe17d_Kxw",
        enlace: "/producto/realtek",
        categoria: "decorativa",
        microcategoria: "esmaltes",
    },{
        id: "superada",
        name: "Pintado Automotriz Paso a Paso con Productos COLOR CRIL de Pinturas IPESA", 
        video: "https://www.youtube.com/watch?v=AQ97OqmCFoo&t=17s",
        enlace: "/producto/body-filler-2203",
        categoria: "decorativa",
        microcategoria: "esmaltes",
    },

]

export const pregunatsproductos = [
    {
        id: 1,
        question: '¿Cuál es la durabilidad de sus productos?',
        answer: "La durabilidad de nuestras pinturas vinílicas va de los 3 hasta los 18 años."
    },
    {
        id: 2,
        question: "¿Qué tipo de esmaltes ofrecen?",
        answer: "En nuestro portafolio contamos con  esmaltes alquidálicos de secado normal y secado rapido.",
    },
    {
        id: 3,
        question: "¿Tienen pintura para interiores/exteriores?",
        answer: "En IPESA contamos con un portafolio robusto de pinturas vinílicas y esmlates para interiores y exteriores.",
    },
    {
        id: 4,
        question: "¿Tienen productos anticorrosivos?",
        answer: `En IPESA tenemos primario Vulcan anticorrosivos y esmaltes como Tropimar y Tropinar SUR.`,
    },
    {
        id: 5,
        question: "¿Qué productos ofrecen?",
        answer: "En IPESA contamos con un amplio portafolio de vinílicas, esmaltes, automotriz, maderas, impermeabilizantes, complementos.",
        enlace: "/productos",
        labelEnlace: "Ver productos",
        categorie: "decorativa",
    },
    {
        id: 6,
        question: "¿Tienen fichas de seguridad?",
        answer: "Cada producto cuenta con su  ficha de seguridad y las puedes descargar en la página.",
        enlace: "/productos",
        labelEnlace: "Ver productos",
        categorie: "decorativa",
    },
    {
        id: 7,
        question: "¿Tienen productos para el cuidado de madera?",
        answer: "En IPESA contamos con un amplio portafolio para madera de la línea CENTURY.",
        enlace: "/productos",
        labelEnlace: "Ver productos",
        categorie: "maderas",
    },
    {
        id: 8,
        question: "¿Qué tipo de pintura recomendarían para interiores y por qué?",
        answer: "En IPESA recomendamos para interiores pintura vinilica como: VINTEK, REALTEK y VINIPESA, si buscan pintura para baño o cocina recomendamos esmalte como TROPINAR y TROPIMAR SUR",
    },
    {
        id: 10,
        question: "¿Cuál es la durabilidad promedio de sus pinturas para exteriores?",
        answer: "La durabilidad de las pinturas vinílicas va de los 3 a los 18 años, en el exterior dependerá de las condiciones climáticas y  exposición directa al sol.",
    },
    {
        id: 11,
        question: "¿Qué tipo de preparación de superficie recomiendan antes de aplicar la pintura?",
        answer: `En IPESA recomendamos preparar la superficie(aplanar y eliminar imperfecciones), sellar con un sellador IPESA 5X1 y aplicar 2 manos de pintura Vinílica`,
        enlace: "/tips",
    },
    {
        id: 12,
        question: "¿Tienen pinturas específicas para diferentes materiales como madera o metal?",
        answer: "En IPESA contamos con un amplio portafolio de productos para cada necesidad. Yeso: Portafolio de Vinílicas, Madera: portafolio de CENTURY, Metal: portafolio de esmaltes",
    },
    {
        id: 13,
        question: "¿Cuál es la diferencia entre pintura mate, satinada y brillante?",
        answer: `En IPESA contamos con productos mate, satinada; la diferencia es el nivel de brillo, en una pintura satinada la intensidad de brillo es superior.`,
    },
    {
        id: 14,
        question: "¿Ofrecen servicios de asesoramiento en colores y combinaciones?",
        answer: "En IPESA contamos con asesoramiento directo en las tiendas y por medio de los asesores de venta.",
    },
    {
        id: 15,
        question: "¿Cuál es la cobertura aproximada de sus pinturas por litro?",
        answer: "En los productos IPESA el rendimiento puede variar según el tipo de producto y desempeño del mismo. Los rendimientos podrás revisarlos en la página.",
    },
    {
        id: 16,
        question: "¿Cómo se determina el tiempo de secado de la pintura?",
        answer: "El secado puede cambiar según las condiciones climaticas, sustrato y tipo de producto, existen 2 tiempos de secado, 1.- para aplicar la segunda mano  y 2.- secado al tacto. El secado por cada producto lo puedes consultar en nuestras fichas técnicas.",
    },
    {
        id: 17,
        question: "¿Qué medidas de seguridad deben tenerse en cuenta al aplicar pintura?",
        answer: `
        Es importante seguir las siguientes medidas de seguridad al aplicar pintura:

            Uso de Equipo de Protección Personal: Incluye gafas de seguridad, guantes de nitrilo, mascarilla con filtro de partículas para evitar la inhalación de vapores y polvo de pintura, y ropa de trabajo adecuada.

            Ventilación: Asegúrate de trabajar en un área bien ventilada para reducir la concentración de vapores tóxicos.

            Evitar el contacto con los ojos y la piel: En caso de contacto, enjuaga inmediatamente con agua.

            Almacenamiento seguro: Almacena la pintura en un lugar seguro, alejado de fuentes de calor y fuera del alcance de los niños.
            No olvides siempre consultar las hojas de seguridad de nuestros productos`,
    },
    {
        id: 18,
        question: "¿Tienen productos que ayuden a prevenir la formación de moho, hongos y humedad en las paredes?",
        answer: `En IPESA todas nuestras pinturas Vinílicas están formuladas con aditivos que evitan la formación de moho y hongos.`,
        enlace: "/productos",
        labelEnlace: "Ver productos",
        categorie: "decorativa",
    },
    {
        id: 19,
        question: "¿Cómo se debe limpiar y mantener la pintura después de aplicarla?",
        answer: "En IPESA sugerimos realizar la limpieza de su pintura Vinílica con un paño seco o húmedo.",
        labelEnlace: "Conocer más",
        enlace: "/tips-tutoriales",
    },  
    {
        id: 21,
        question: "¿Pueden mezclar colores personalizados según las necesidades del cliente?",
        answer: "En IPESA podemos igualar 3,454 colores y cualquier color que el cliente  requiera con nuestro INFINITE COLOR.",
        labelEnlace: "Conocer más",
        enlace: "/sistema-tintometrico",
    },
    {
        id: 22,
        question: "¿Tienen pinturas que sean lavables o fáciles de limpiar?",
        answer: `En IPESA todas nuestras pinturas son lavables y fáciles de limpiar.`,
        enlace: "/productos",
        labelEnlace: "Ver productos",
        categorie: "decorativa",
    },
    {
        id: 23,
        question: "¿Ofrecen muestras o pruebas de color antes de comprar grandes cantidades de pintura?",
        answer: "En las tiendas especializadas IPESA podrás tener una muestra de color en un chip para identificar el color deseado.",
    },
    {
        id: 24,
        question: "¿Cómo puedo obtener asesoramiento sobre mis proyectos de pintura y recubrimientos?",
        answer: "En IPESA estamos comprometidos con tus proyectos y podrás recibir asesoría directamente en  tienda.",
        enlace: "/contacto"
    },
  
    {
        id: 26,
        question: "¿Manejan línea para pintar madera?",
        answer: `En IPESA contamos con un amplio portafolio de CENTUTY para madera.`,
        enlace: "/productos",
        labelEnlace: "Ver productos",
        categorie: "maderas",
        
    },
    {
        id: 27,
        question: "¿Manejan línea para pintar metal?",
        answer: `EN IPESA contamos con un amplio portafolio de primarios y esmlates para tus proyectos en metal`,
    },
    
    
]

export const preguntascontacto = [
    {
        id: 29,
        question: '¿Dónde están ubicadas sus sucursales?',
        answer: `Te invitamos a visitar nuestra página y ubicar la sucursal más cercana a tu domicilio.`,
        enlace: "/sucursales",
        labelEnlace: "Ver sucursales"
    },
    {
        id: 30,
        question: '¿Cuáles son los valores de la empresa?',
        answer: `
        Nuestros valores esenciales de son:`,
        labels: [ 
            "Ayudar: Nos concentramos en asistir a los clientes a alcanzar sus objetivos, ofreciendo asesoramiento experto y apoyo en proyectos de pintura y recubrimientos.",

            "Excelencia: Nos esforzamos en buscar la excelencia constantemente, mejorando continuamente productos, servicios y procesos.",
    
            "Calidad: Nos comprometemos a ofrecer productos y servicios de la más alta calidad.",
    
           " Innovación: Fomentamos la búsqueda constante de nuevas ideas, promoviendo la creatividad e innovación en todos los aspectos del negocio.",
    
           " Compromiso: Estamos comprometidos con nuestros clientes, empleados y comunidades, manteniendo altos estándares de ética y responsabilidad.",
    
           " Orientación al Cliente: Ponemos a los clientes en el centro de todo lo que hacen, entendiendo sus necesidades y superando sus expectativas.",
    
            "Colaboración: Fomentamos un ambiente de trabajo colaborativo, valorando y respetando las ideas de cada miembro del equipo.",
    
            "Honestidad: Nos comprometemos a actuar con integridad y sinceridad en todas las interacciones.",
    
            "Integridad: Actúamos con transparencia, construyendo relaciones sólidas y de confianza con nuestros clientes, proveedores y colaboradores.",]
    },
    {
        id: 31,
        question: '¿Cuál es el horario de atención al cliente de la empresa?',
        answer: "En IPESA el horario de atención es de 8:00 a 5: 30 de lunes a viernes."
    },
    {
        id: 32,
        question: '¿Cómo puedo contactar con la empresa?',
        answer: `Para contactarnos vía correo es: contacto@ipesamex.com y vía telefónica al número 5555691855.`
    },
    {
        id: 33,
        question: '¿Cuál es el número de teléfono de contacto de la empresa?',
        answer: `El número de contacto IPESA es: 5555691855.`
    },
    {
        id: 34,
        question: '¿Cuál es la dirección de correo electrónico principal para contactar a la empresa?',
        answer: "La dirección de correo electrónico principal para contactarnos es contacto@ipesamex.com."
    },
    {
        id: 35,
        question: '¿Tienen un formulario de contacto en su sitio web?',
        answer: "Sí, tenemos un formulario de contacto, también tenemos un número de WhatsApp y un correo oficial contacto@ipesamex.com."
    },
    {
        id: 37,
        question: '¿Tienen perfiles en redes sociales donde se pueda contactar a la empresa?',
        answer: `En la página de IPESA contamos con un apartado de contacto donde podrás dejarnos tus datos y un especialista se pondrá en contacto contigo.`,
       
    },
    {
        id: 38,
        question: '¿Tienen algún boletín informativo al que los clientes puedan suscribirse para recibir actualizaciones?',
        answer: "En IPESA te invitamos a seguir nuestras redes sociales y adicional por medio de tu vendedor te mantendremos informado.",
        redes: [
              
            {
                name: "Facebook",url:"https://www.facebook.com/IPESAPinturasOficial/"
            },

            {
                name: "Instagram", 
                url: "https://www.instagram.com/ipesa.pinturas.oficial/"
            },
            {
                name: "Tiktok", url: "https://www.tiktok.com/@ipesa.pinturas.oficial"
            },
            {
                name: "Linkedin", url: "https://www.linkedin.com/companys/ipesa-pinturas"
            },
                
        ]
    },
    {
        id: 39,
        question: '¿Pueden darme el precio de un producto?',
        answer: "En IPESA te agradecemos el interés y te invitamos a acercarte a tu tienda más cercana, puedes obtener la dirección en nuestra página."
    },
  
    
]

export const preguntasdistribuidor = [
    {
        id: 41,
        question: '¿Qué necesito para ser distribuidor?',
        answer: "En la página de IPESA contamos con un apartado de contacto donde podrás dejarnos tus datos y un especialista se pondrá en contacto contigo."
    },
    {
        id: 42,
        question: '¿Tienen una liga para poder dejar mis datos si quiero ser distribuidor?',
        answer: "En la página de IPESA contamos con un apartado de contacto donde podrás dejarnos tus datos y un especialista se pondrá en contacto contigo."
    },
    {
        id: 43,
        question: '¿Necesito invertir dinero para ser distribuidor?',
        answer: "En la página de IPESA contamos con un apartado de contacto donde podrás dejarnos tus datos y un especialista se pondrá en contacto contigo."
    },
    {
        id: 44,
        question: '¿Brindan apoyo técnico y asesorías de capacitación a los distribuidores?',
        answer: "En IPESA estamos comprometidos en todo momento con la asesoría personalizada a todos nuestros distribuidores."
    },
    {
        id: 45,
        question: '¿En cualquier estado de la república pueden afiliarse como distribuidores?',
        answer: "En la página de IPESA contamos con un apartado de contacto donde podrás dejarnos tus datos y un especialista se pondrá en contacto contigo."
    },
   
    {
        id: 48,
        question: '¿Cómo se realizan los pedidos y cómo se gestionan las entregas para los distribuidores?',
        answer: "En IPESA el cliente es nuestra prioridad, nuestras entregas son ágiles y oportunas, los pedidos y entregas los podrás monitorear con tu vendedor."
    },
    {
        id: 49,
        question: '¿Cómo los distribuidores pueden resolver dudas o contingencias con ustedes?',
        answer:  `En IPESA contamos con una línea directa de atención a clientes donde te podrán resolver dudas y seguimiento a tus pedidos.`
    },

    {
        id: 50,
        question: '¿La tienda la rotulan y arreglan ustedes?',
        answer: "En IPESA contamos con un plan de rotulación de fachadas que dependerá del tipo de cliente, para mayor información acércate con tu vendedor."
    },
    {
        id: 51,
        question: '¿Es necesario tener un local primero para ser distribuidor?',
        answer: "En IPESA buscamos clientes interesados en el modelo de negocio y puede ser con local establecido o en conjunto buscar un punto estratégico, para mayor información puedes comunicarte al número 5555691855."
    },
   
]

export const estados = [
    { id: 1, estado: "Aguascalientes" },
    { id: 2, estado: "Baja California" },
    { id: 3, estado: "Baja California Sur" },
    { id: 4, estado: "Campeche" },
    { id: 5, estado: "Chiapas" },
    { id: 6, estado: "Chihuahua" },
    { id: 7, estado: "Ciudad de México" },
    { id: 8, estado: "Coahuila" },
    { id: 9, estado: "Colima" },
    { id: 10, estado: "Durango" },
    { id: 11, estado: "Estado de México" },
    { id: 12, estado: "Guanajuato" },
    { id: 13, estado: "Guerrero" },
    { id: 14, estado: "Hidalgo" },
    { id: 15, estado: "Jalisco" },
    { id: 16, estado: "Michoacán" },
    { id: 17, estado: "Morelos" },
    { id: 18, estado: "Nayarit" },
    { id: 19, estado: "Nuevo León" },
    { id: 20, estado: "Oaxaca" },
    { id: 21, estado: "Puebla" },
    { id: 22, estado: "Querétaro" },
    { id: 23, estado: "Quintana Roo" },
    { id: 24, estado: "San Luis Potosí" },
    { id: 25, estado: "Sinaloa" },
    { id: 26, estado: "Sonora" },
    { id: 27, estado: "Tabasco" },
    { id: 28, estado: "Tamaulipas" },
    { id: 29, estado: "Tlaxcala" },
    { id: 30, estado: "Veracruz" },
    { id: 31, estado: "Yucatán" },
    { id: 32, estado: "Zacatecas" }
];

export const tintometricos = [
    {
        id: 1,
        title: "Equipo",
        description: " PC con software pre cargado para igualación de color.",
        imagen: "/tintometrico/maquinaFTA.png",
        clase: "card-animate"
    },
    {
        id: 2,
        title: "Dosificador",
        description: "Dosificador automático secuencial con ajuste para adaptar el tamaño de cada uno de los envases.",
        imagen: "/tintometrico/maquinaFTB.png",
        clase: "card-animate2"
    },
    {
        id: 3,
        title: "Mezclador",
        description: "Mezclador giroscópico de alto rendimiento y temporizador mecánico, apto para envases de 1 a 19 L.",
        imagen: "/tintometrico/mezcaldor_FT.png",
        clase: "card-animate3"
    },
    
]

export const espacios = [
    {
        id: 1,
        space: "comedor",
        title: "Comedor",
        imagen: "/descubrecolor/01.jpg"
    },
    {
        id: 2,
        space: "dormitorio",
        title: "Dormitorio",
        imagen: "/descubrecolor/02.jpg"
    },
    {
        id: 3,
        space: "sala",
        title: "Sala",
        imagen: "/descubrecolor/03.jpg"
    },
    {
        id: 4,
        space: "baño",
        title: "Baño",
        imagen: "/descubrecolor/04.jpg"
    },
]

export const estilos = [
    {
        id: 1,
        style: "contemporaneo",
        title: "Contemporáneo",
        imagen: "/principal/sala_principal.webp"
    },
    {
        id: 2,
        style: "minimalista",
        title: "Minimalista",
        imagen: "/descubrecolor/06.jpg"
    },
    {
        id: 3,
        style: "escandinavo",
        title: "Escandinavo",
        imagen: "/decorador/sala2.jpg"
    },
    {
        id: 4,
        style: "moderno",
        title: "Moderno",
        imagen: "/descubrecolor/05.jpg"
    },
]

export const coloresDiscover = [

    {
        id: 1,
        estilo: "contemporaneo",
        name: "Blanco Ostión",
        codigo: "#fcf8ef",
        codigo2: "1313"
    },
    {
        id: 2,
        estilo: "contemporaneo",
        name: "Champaña",
        codigo: "#f5e6cf",
        codigo2: "701"
    },
    {
        id: 3,
        estilo: "contemporaneo",
        name: "Crema",
        codigo: "#f8e2bb",
        codigo2: "704"
    },
    {
        id: 4,
        estilo: "contemporaneo",
        name: "Cantera Mexicana",
        codigo: "#e6c49f",
        codigo2: "747"
    },


    {
        id: 5,
        estilo: "moderno",
        name: "Aqua",
        codigo: "#8dc0bb",
        codigo2: "749"
    },
    {
        id: 6,
        estilo: "moderno",
        name: "Azul Océano",
        codigo: "#3157a0",
        codigo2: "748"
    },
    {
        id: 7,
        estilo: "moderno",
        name: "Verde Manzana",
        codigo: "#96D346",
        codigo2: "703"
    },
    {
        id: 8,
        estilo: "moderno",
        name: "Azul Vallarta",
        codigo: "#73b5e5",
        codigo2: "714"
    },


    {
        id: 9,
        estilo: "escandinavo",
        name: "Salmón",
        codigo: "#eec4ac",
        codigo2: "745"
    },
    {
        id: 10,
        estilo: "escandinavo",
        name: "Capuchino",
        codigo: "#94856e",
        codigo2: "745"
    },
    {
        id: 11,
        estilo: "escandinavo",
        name: "Verde Imperial",
        codigo: "#98a989",
        codigo2: "740"
    },
    {
        id: 12,
        estilo: "escandinavo",
        name: "Arena Real",
        codigo: "#f6e0c9",
        codigo2: "430"
    },



    {
        id: 13,
        estilo: "minimalista",
        name: "Blanco Mate",
        codigo: "#ffffff",
        codigo2: "770"
    },
    {
        id: 14,
        estilo: "minimalista",
        name: "Gris Oxford",
        codigo: "#929292",
        codigo2: "742"
    },
    {
        id: 15,
        estilo: "minimalista",
        name: "Gris Bahía",
        codigo: "#dcddd8",
        codigo2: "433"
    },
    {
        id: 16,
        estilo: "minimalista",
        name: "Arena",
        codigo: "#f2cf95",
        codigo2: "1303"
    },
    
]

export const decorador = [
   
    {
        id: 1,
        registro: "®",
        name: "vintek",
        categoria: "vintek",
        fondo: "rgba(0, 0, 0)",
        imagen: "/articulos/vinilicas/vintek.png",
        filter: "decorativa"
    },
    {
        id: 2,
        registro: "®",
        name: "realtek",
        categoria: "realtek",
        fondo: "rgba(0, 0, 0, 0.3)",
        imagen: "/articulos/vinilicas/realtek.png",
        filter: "decorativa"
    },
    {
        id: 3,
        registro: "®",
        name: "vinipesa",
        name2: "satín",
        categoria: "vinipesa_satin",
        fondo: "rgba(0, 0, 0)",
        imagen: "/articulos/vinilicas/vinipesa_satin.png",
        filter: "decorativa"
    },
    {
        id: 4,
        registro: "®",
        name: "vinipesa",
        name2: "mate",
        categoria: "vinipesa_mate",
        fondo: "rgba(0, 0, 0)",
        imagen: "/articulos/vinilicas/vinipesa.png",
        filter: "decorativa"
    },

    {
        id: 5,
        registro: "®",
        categoria: "vini_plus",
        name: "Vini +",
        fondo: "rgba(0, 0, 0, 0.3)",
        imagen: "/articulos/vinilicas/vini_plus.png",
        filter: "decorativa"
    },
    {
        id: 6,
        registro: "®",
        name: "colorbel",
        categoria: "colorbel",
        fondo: "rgba(0, 0, 0)",
        imagen: "/articulos/vinilicas/colorbel.png",
        filter: "decorativa"
    },
    {
        id: 7,
        registro: "®",
        name: "elite",
        categoria: "elite",
        fondo: "rgba(0, 0, 0)",
        imagen: "/articulos/ferreadvance/elite.png",
        filter: "ferre"
    },
    {
        id: 8,
        registro: "®",
        name: "imperial",
        categoria: "imperial",
        fondo: "rgba(0, 0, 0)",
        imagen: "/articulos/ferreadvance/imperial.png",
        filter: "ferre"
    },
]