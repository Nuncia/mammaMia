import { useContext, useEffect } from 'react';
import { ContextPizza } from '../context/ContextPizza';
import { useParams } from 'react-router-dom';

const Pizza = () => {
   const {
      pizza,
      consegirPizza,
      montoTotal,
      setMontoTotal,
      cantidadProductos,
      setcantidadProductos,
      agregarPizza,
   } = useContext(ContextPizza);
   const { id } = useParams();

   useEffect(() => {
      consegirPizza(id);
   }, []);
   return (
      <div className="detalle">
         {pizza === undefined ? (
            <p>Volver a seleccionar pizza</p>
         ) : (
            <div className="card pizzaDetalle" style={{ width: '18rem' }}>
               <img src={pizza.img} className="card-img-top" alt="..." />
               <div className="card-body">
                  <div
                     style={{ display: 'flex', justifyContent: 'space-evenly' }}
                  >
                     <h5 className="card-title">{pizza.name}</h5>
                     <p>$ {pizza.price}</p>
                  </div>
                  <div>
                     {/* {(pizza.ingredients).map((ingrediente) => (
                        <p key={ingrediente}>🍕{ingrediente}</p>
                     ))} */}
                  </div>
                  <p>{pizza.desc}</p>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                     &nbsp; &nbsp;
                     <a
                        href="#"
                        onClick={() => agregarPizza(pizza.price)}
                        className="btn btn-danger"
                     >
                        Agregar
                     </a>
                  </div>
               </div>
            </div>
         )}
      </div>
   );
};

export default Pizza;
