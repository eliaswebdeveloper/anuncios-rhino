export function translatePerformanceObjectives(targetAttribute: string): string {
    switch (targetAttribute) {
        case "reach":
            return "Alcance";
        case "impressions":
            return "Impresiones";
        case "remembrance":
            return "Recuerdo del anuncio";
        case "thru_play":
            return "Reproducciones ThruPlay";
        case "two_seconds":
            return "Reproducciones de 2 segundos";
        default:
            return "Objetivo desconocido";
    }
}

export const performanceObjectivesForFirstSet = {
    // "Objetivos de reconocimiento"
    "reach": {
        name: "Maximizar el alcance de los anuncios",
        desc: "Intentaremos mostrar tus anuncios a la mayor cantidad de personas posible",
    },
    "impressions": {
        name: "Maximizar el número de impresiones",
        desc: "Intentaremos mostrar tus anuncios a las personas tantas veces como sea posible",
    },
    "remembrance": {
        name: "Maximizar la mejora de recuerdo del anuncio",
        desc: "Intentaremos mostrar tus anuncios a las personas con probabilidades de recordar haberlos visto",
    },
    // "Objetivos de reproducción de video"
    "thru_play": {
        name: "Maximizar las reproducciones de ThruPlay",
        desc: "Intentaremos mostrar tus anuncios con video a las personas que verán el video completo si dura menos de 15 segundos. En el caso de los videos más largos, intentaremos mostrárselos a las personas con probabilidades de verlos durante al menos 15 segundos",
    },
    "two_seconds": {
        name: "Maximizar las reproducciones de video continuas de 2 segundos",
        desc: "Intentaremos mostrar tus anuncios con video a las personas con probabilidades de verlo durante 2 segundos seguidos o más. En la mayoría de estas reproducciones se mostrará en pantalla al menos el 50% de los píxeles",
    }
}

export const targetSettingsForFirstSet = {
    ubicacion: "Aguascalientes: colocar la flecha del mapa en Colosio, AGS. Radio: el mínimo (7 km)",
    rangoDeEdad: "18 - 40",
    sexo: "Hombres",
    intereses: "Intereses: Ejercicio físico (fitness)",
    idiomas: "Todos los idiomas",
};

export const GlobalAdSets = {
    reconocimiento_frio_uno: {
        targeting: targetSettingsForFirstSet,
        performanceObjectives: performanceObjectivesForFirstSet
    },
    reconocimiento_frio_dos: {
        targeting: targetSettingsForFirstSet,
        performanceObjectives: performanceObjectivesForFirstSet
    },
};