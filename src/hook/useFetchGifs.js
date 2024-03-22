import { useEffect, useState } from "react";
import { getGifs } from '../helpers/getGifs'

export const useFetchGifs = (category) => {
    // Un hook es una funcion que regresa algo

    const [gifs, setGifs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const get_Gifs = async () => {
        const newGifs = await getGifs(category);
        setGifs(newGifs);
        setIsLoading(false);
    }

    // useEffect -> Disparar efectos secundarios (cambios de estado)
    useEffect(() => {
        // NO se permite el await en useEffect debido a que es una funcion y eso lo trasforma en promesa (Metodo 1 & 2).

        // Metodo 1: Obtener las imagenes
        // getGifs(category).then(response => {
        //   setGifs(response);
        // })

        // Metodo 2: Obtener las imagenes
        get_Gifs();
    }, []); // [] =>Lista de dependencias, [] vacio indica que solo una vez o que no este atento a ninguna dependencia

    return (
        {
            gifs, // gifs: gifs, -> Si la propiedad apunta a su mismo nombre se puede omitir
            isLoading // isLoading: true
        }
    )
}

