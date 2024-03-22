// import { useEffect, useState } from "react";
// import { getGifs } from '../helpers/getGifs'
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hook/useFetchGifs";

export const GifGrid = ({ category }) => {
  const {gifs, isLoading} = useFetchGifs(category);

  /*
  // Metodo 1. Se traslada logica a custom hook useFetchGifs(), a dif. no recibe props si no parametros
  const [gifs, setGifs] = useState([]);
  const get_Gifs = async () => {
    const newGifs = await getGifs(category);
    setGifs(newGifs);
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
  */




  return (
    <>
      <h3>{category}</h3>

      { isLoading && ( <h2>Cargando...</h2>)}

      <div className="card-grid">
        {gifs.map((gif) => (
          <GifItem
            key={gif.id}
            {...gif} // Esparcir propiedades
          />
        ))}
      </div>




      {/* <ol>
        {gifs.length > 0 &&
          (
            gifs.map(({ id, title, url }) => (
              <li key={id}>
                <label>{title}</label>
                <img src={url} height="100" />
              </li>
            ))
          )
        }
      </ol > */}
    </>
  )
}
