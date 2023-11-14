import { useContext, useEffect } from 'react';
import { ContextPizza } from '../context/ContextPizza';
import { useNavigate, useParams } from 'react-router-dom';

const Pizza = () => {
   const { pizza, consegirPizza, agregarPizza } = useContext(ContextPizza);
   const { id } = useParams();
   const navigate = useNavigate();

   const volver = () => {
      navigate(`/`);
   };

   useEffect(() => {
      consegirPizza(id);
      console.log(pizza);
   }, []);
   return (
      <div className="detalle">
         {pizza === undefined ? (
            <div>
               <p>Volver a seleccionar pizza</p>
               <button onClick={volver}>Volver...</button>
            </div>
         ) : (
            <div className="carcasa">
               {/* <h2 className="titulo__2">{pizza.name}</h2> */}
               <div className="card pizzaDetalle">
                  <img src={pizza.img} className="card-img-top" alt="..." />
                  <div className="card-body">
                     <div
                        style={{
                           display: 'flex',
                           justifyContent: 'space-around',
                        }}
                     >
                        <h4
                           className="card-title"
                           style={{ textAlign: 'left' }}
                        >
                           {pizza.name}
                        </h4>
                        <h4 style={{ fontWeight: '800', textAlign: 'center' }}>
                           $ {pizza.price}
                        </h4>
                     </div>
                     <hr />
                     {/* <div style={{ marginBottom: '40px' }}>
                        {pizza.ingredients.map((ingrediente) => (
                           <p key={ingrediente}>🍕{ingrediente}</p>
                        ))}
                     </div> */}
                     <p>{pizza.desc}</p>
                     <hr />
                     <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <a
                           href="#"
                           onClick={volver}
                           className="btn btn-primary"
                        >
                           Volver
                        </a>
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
