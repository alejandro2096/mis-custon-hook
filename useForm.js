import { useState } from "react";

//este hook sirve para leer el campo de texto de un input, es decir cuandi cambia su estado

export const useForm = (initialState = {}) => {
  
    const [values, setValues] = useState(initialState);

    const reset = () =>{
        setValues(initialState);
    }

    const handleInputChange = ({ target }) => {
        setValues({
            ...values,
            [target.name]: target.value
        })
    }

    return [values, handleInputChange, reset];

}
