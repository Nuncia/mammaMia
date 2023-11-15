import { useContext, useEffect, useState } from 'react';
import { ContextPizza } from '../context/ContextPizza';
import { useNavigate } from 'react-router-dom';

const Pizzas = () => {
   const { pizzas, obtenerPizzas, agregarPizza } = useContext(ContextPizza);
   const [cargando, setCargando] = useState(true);
   const navigate = useNavigate();

   const mostrarPizza = (id) => {
      navigate(`pizza/${id}`);
   };

   useEffect(() => {
      if (pizzas.length === 0) {
         obtenerPizzas();
         setCargando(false);
      } else {
         setCargando(false);
      }
   }, []);
   return (
      <div className="contenedor">
         {cargando ? (
            <p>Cargando...</p>
         ) : (
            pizzas.map((item) => (
               <div key={item.id} className="card " style={{ width: '18rem' }}>
                  <img src={item.img} className="card-img-top" alt="..." />
                  <div className="card-body">
                     <h5 style={{ textAlign: 'center' }} className="card-title">
                        {item.name.toUpperCase()}
                     </h5>
                     <hr />
                     <div>
                        {item.ingredients.map((ingrediente) => (
                           <p key={ingrediente}>🍕{ingrediente}</p>
                        ))}
                     </div>
                     <hr />
                     <p style={{ textAlign: 'center', fontWeight: '700' }}>
                        ${item.price}
                     </p>
                     <div
                        style={{
                           display: 'flex',
                           justifyContent: 'center',
                        }}
                     >
                        <a
                           href="#"
                           onClick={() => mostrarPizza(item.id)}
                           className="btn btn-dark"
                        >
                           Ver ...
                        </a>
                        &nbsp; &nbsp;
                        <a
                           href="#"
                           className="btn btn-danger"
                           onClick={() => agregarPizza(item)}
                        >
                           + Agregar
                        </a>
                     </div>
                  </div>
               </div>
            ))
         )}
      </div>
   );
};

export default Pizzas;
