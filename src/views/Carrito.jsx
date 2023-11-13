import { useContext, useEffect, useState } from 'react';
import { ContextPizza } from '../context/ContextPizza';

const Carrito = () => {
   const { listaProductos, setListaProductos, montoTotal } =
      useContext(ContextPizza);
   const [cargando, setCargando] = useState(true);
   useEffect(() => {
      console.log(listaProductos);
   });
   return (
      <div style={{ position: 'relative', top: '330px', width: '500px' }}>
         <table className="table">
            <thead>
               <tr>
                  <th scope="col">id</th>
                  <th scope="col">imagen</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">precio</th>
                  <th scope="col">SubMonto</th>
               </tr>
            </thead>
            <tbody>
               {listaProductos.map((item) => (
                  <tr key={item.id}>
                     <th scope="row">{item.id}</th>
                     <td>
                        <img style={{ width: '50px' }} src={item.img} alt="" />
                     </td>
                     <td>{item.name}</td>
                     <td>{item.cantidad}</td>
                     <td>{item.price}</td>
                  </tr>
               ))}
               <tr>
                  <th scope="row">1</th>
               </tr>
            </tbody>
         </table>
         <div>
            <p>{montoTotal}</p>
         </div>
      </div>
   );
};

export default Carrito;
