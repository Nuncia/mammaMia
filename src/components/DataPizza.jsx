import { useState, useEffect } from 'react';

const DataPizza = () => {
   const [datos, setDatos] = useState([]);
   //Fucion asincrona papa cargar datos desde archivo json
   const cargaDatos = async () => {
      try {
         const respuesta = await fetch('../data/pizzas.json');
         const json = await respuesta.json();
         setDatos(json);
      } catch (e) {
         console.error('Error al cargar los datos: ', e);
      }
   };
   useEffect(() => {
      cargaDatos();
   }, []);

   return (
      <div>
         {datos.length > 0 ? (
            <ul>
               {datos.map((item, index) => (
                  <li key={index}>{JSON.stringify(item)}</li>
               ))}
            </ul>
         ) : (
            <p>Cargando datos...</p>
         )}
      </div>
   );
};

export default DataPizza;
