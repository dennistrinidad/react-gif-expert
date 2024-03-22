import { useState } from 'react'

export const AddCategory = ({categories, setCategories, onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = (event) => {
        setInputValue(event.target.value)
    };

    const onSubmit = (event) => {
        event.preventDefault();
        if(inputValue.trim().length <= 1) return;

        // Metodo 1
        // setCategories( cat => [inputValue, ...cat ]); // Sin prop
        // setCategories([inputValue, ...categories ]) // Con prop
        
        // Metodo 2
        onNewCategory(inputValue.trim())
        setInputValue('');
    };

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                value={inputValue}
                placeholder="Buscar Gifs"
                onChange={onInputChange}
            />
        </form>
    )
}