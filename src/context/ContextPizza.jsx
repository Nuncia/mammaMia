import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const ContextPizza = createContext();

export const ProviderPizza = ({ children }) => {
   const [pizzas, setPizzas] = useState([]);
   const [pizza, setPizza] = useState({});
   const [listaProductos, setListaProductos] = useState([]);
   const [montoTotal, setMontoTotal] = useState(0);
   const [cantidadProductos, setcantidadProductos] = useState(0);

   //Funcion asincrona papa cargar datos desde archivo json
   const obtenerPizzas = async () => {
      try {
         const respuesta = await fetch('pizzas.json');
         const json = await respuesta.json();
         const productos = json.map((item) => ({ ...item, cantidad: 0 }));
         setPizzas(productos);
      } catch (e) {
         console.error('Error al cargar los datos: ', e);
      }
   };

   const consegirPizza = (id) => {
      const detalle = pizzas.find((item) => item.id == id);
      setPizza(detalle);
   };

   const agregarPizza = (producto) => {
      event.preventDefault();
      const productoExiste = listaProductos.find(
         (item) => item.id === producto.id
      );
      if (productoExiste) {
         //actualiza cantidad de producto existente
         const productoActualizados = listaProductos.map((item) =>
            item.id === producto.id
               ? { ...item, cantidad: item.cantidad + 1 }
               : item
         );
         setListaProductos(productoActualizados);
      } else {
         //agrega producto nuevo a la lista
         setListaProductos([...listaProductos, { ...producto, cantidad: 1 }]);
      }
      //Actualiza cantidad total y monto
      setcantidadProductos(cantidadProductos + 1);
      setMontoTotal(montoTotal + producto.price);
   };

   useEffect(() => {
      obtenerPizzas();
   }, []);

   return (
      <ContextPizza.Provider
         value={{
            pizzas,
            obtenerPizzas,
            pizza,
            consegirPizza,
            montoTotal,
            setMontoTotal,
            listaProductos,
            setListaProductos,
            cantidadProductos,
            setcantidadProductos,
            agregarPizza,
         }}
      >
         {children}
      </ContextPizza.Provider>
   );
};

ProviderPizza.propTypes = {
   children: PropTypes.any,
};
