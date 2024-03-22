import { useState } from 'react';
import { AddCategory, GifGrid } from './components'; // optimizacion import { AddCategory } from './components/AddCategory'; import { GifGrid } from './components/GifGrid';



export const GiftExpertApp = () => {
    const [categories, setCategories] = useState([]);

    const onAddCategory = (value) => {
        if (categories.includes(value)) return;

        setCategories([value, ...categories]);
        // setCategories(cat => [ ...cat, value]);
    }
    console.log();
    console.log();
    console.log();

    return (
        <>
            {/* TITULO */}
            <h1>GiftExpertApp</h1>

            {/* INPUT */}
            {/* METODO 1:  <AddCategory categories={categories} setCategories={setCategories}/> */}
            <AddCategory onNewCategory={(value) => onAddCategory(value)} />

            {/* LISTADO */}
            {/* <button onClick={onAddCategory}>Agregar</button> */}
            {
                categories.map((category) =>
                (
                    <GifGrid
                        key={category}
                        category={category}
                    />
                ))
            }
        </>
    )


    {/* LISTADO */ }
    // {
    //     categories.map((category) =>
    //     (
    //         <GifGrid
    //             key={index + category}
    //             category={category}
    //         />
    //     ))
    // }
    // <ol>
    //     {/* {categories.map((category, index) => { return <li key={index + category}>{category}</li> })}  React recomienda no utilizar el inice solo para el key */}
    //     {categories.map((category, index) => // => {return( ... )} Retorno acortado. Al ser varias cosas se utiliza ()
    //     (
    //         <div>
    //             <small>Key: {index + category}</small>
    //             <li key={index + category}>{category}</li>
    //         </div>
    //     )
    //     )}
    // </ol >
}