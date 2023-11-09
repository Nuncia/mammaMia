import { createContext, useEffect, useState } from "react"
import pizzasJSON from '../js/pizzas.json'


export const ContextPizza = createContext();

export const ProviderPizza = ({children}) => {
    const [pizzas, setpizzas] = useState([])

    const obtenerPizas = () => {
        const url = pizzasJSON;
        console.log(url)
        setpizzas(url)
    }

    useEffect(() => {
        obtenerPizas();
    }, []);

    return(
        <ContextPizza.Provider value = {{pizzas, obtenerPizas}} >
            {children}
        </ContextPizza.Provider>
    );
};