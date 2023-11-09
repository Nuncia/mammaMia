import { useContext, useEffect, useState } from "react"
import { ContextPizza } from "../context/ContextPizza"

const Pizzas = () => {
    const {pizzas, obtenerPizas} = useContext(ContextPizza)
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        
            obtenerPizas();
            console.log(pizzas)
            setCargando(false);
    },[]);
  return (
    <div style={{top: '100px'}}>
        
        {cargando ? 'Cargando...' : 
            pizzas.map((item) => (
                <div key={item.id}>
                    <img src={item.img} alt={item.name} />
                    <h3>{item.name}</h3>
                </div>
            ))
        }
    </div>
  )
}

export default Pizzas