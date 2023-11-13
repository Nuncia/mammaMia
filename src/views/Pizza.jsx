import { useContext, useEffect } from 'react';
import { ContextPizza } from '../context/ContextPizza';
import { useParams } from 'react-router-dom';

const Pizza = () => {
   const {
      pizza,
      consegirPizza,
      // montoTotal,
      // setMontoTotal,
      // cantidadProductos,
      // setcantidadProductos,
      agregarPizza,
   } = useContext(ContextPizza);
   const { id } = useParams();

   useEffect(() => {
      consegirPizza(id);
      console.log(pizza);
   }, []);
   return (
      <div className="detalle">
         {pizza === undefined ? (
            <p>Volver a seleccionar pizza</p>
         ) : (
            <div className="carcasa">
               <h2 className="titulo__2">{pizza.name}</h2>
               <div className="card pizzaDetalle">
                  <img
                     style={{ width: '300px' }}
                     src={pizza.img}
                     className="card-img-top"
                     alt="..."
                  />
                  <div className="card-body">
                     <div
                        style={{
                           display: 'flex',
                           justifyContent: 'space-evenly',
                        }}
                     >
                        <h5 className="card-title">{pizza.name}</h5>
                        <h4 style={{ fontWeight: '800' }}>$ {pizza.price}</h4>
                     </div>
                     <div style={{ marginBottom: '40px' }}>
                        {pizza.ingredients.map((ingrediente) => (
                           <p key={ingrediente}>🍕{ingrediente}</p>
                        ))}
                     </div>
                     <p>{pizza.desc}</p>
                     <div style={{ display: 'flex', justifyContent: 'center' }}>
                        &nbsp; &nbsp;
                        <a
                           href="#"
                           onClick={() => agregarPizza(pizza)}
                           className="btn btn-danger"
                        >
                           Agregar
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         )}
      </div>
   );
};

export default Pizza;
