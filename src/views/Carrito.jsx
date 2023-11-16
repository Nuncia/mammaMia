import { useContext, useEffect, useState } from 'react';
import { ContextPizza } from '../context/ContextPizza';
import { useNavigate } from 'react-router-dom';

const Carrito = () => {
   const [cargando, setCargando] = useState(true);
   const {
      listaProductos,
      montoTotal,
      setMontoTotal,
      setcantidadProductos,
      cantidadProductos,
   } = useContext(ContextPizza);
   const navigate = useNavigate();

   const decrementar = (producto) => {
      if (producto.cantidad > 0) {
         producto.cantidad = producto.cantidad - 1;
         setMontoTotal(montoTotal - producto.price);
         setcantidadProductos(cantidadProductos - 1);
         navigate(`/carrito`);
      } else {
         return;
      }
   };

   const sumar = (producto) => {
      producto.cantidad = producto.cantidad + 1;
      setMontoTotal(montoTotal + producto.price);
      setcantidadProductos(cantidadProductos + 1);
      navigate(`/carrito`);
   };

   const volverDetalle = (producto) => {
      navigate(`/pizza/${producto.id}`);
   };

   const volver = () => {
      navigate(`/`);
   };

   useEffect(() => {
      if (listaProductos.length > 0) {
         setCargando(false);
      } else {
         setCargando(false);
      }
   }, []);
   return (
      <div style={{ margin: '100px' }}>
         {cargando ? (
            <div
               style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignContent: 'center',
               }}
            >
               <div className="detalle__2">
                  <h3 style={{ textAlign: 'center' }}>
                     No tienes productos selecionados
                  </h3>
               </div>
               <button
                  className="btn btn-danger"
                  style={{ width: '70px' }}
                  onClick={volver}
               >
                  Volver...
               </button>
            </div>
         ) : (
            <div className="contenedor__carrito">
               <h3 style={{ textAlign: 'center' }}>Orden N° 1</h3>
               <table className="table">
                  <tbody>
                     {listaProductos.map((item) => (
                        <tr key={item.id}>
                           <td>
                              <img
                                 style={{ width: '50px' }}
                                 src={item.img}
                                 alt={item.name}
                              />
                           </td>
                           <td>
                              <p
                                 style={{ color: 'blue' }}
                                 onClick={() => volverDetalle(item)}
                              >
                                 {item.name.toUpperCase()}
                              </p>
                           </td>
                           <td>$ {item.price}</td>
                           <td>
                              <button
                                 style={{ marginRight: '6px' }}
                                 className="btn btn-info"
                                 onClick={() => decrementar(item)}
                              >
                                 -
                              </button>
                              {item.cantidad}
                              <button
                                 style={{ marginLeft: '6px' }}
                                 className="btn btn-danger"
                                 onClick={() => sumar(item)}
                              >
                                 +
                              </button>
                           </td>
                           <td style={{ marginLeft: '50px' }}>
                              $ {item.price * item.cantidad}
                           </td>
                        </tr>
                     ))}
                     {/* <tr> */}
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td style={{ fontSize: '24px' }}>
                        {/* <a>Ir a Pagar</a>$ {montoTotal} */}
                     </td>
                     {/* </tr> */}
                  </tbody>
               </table>
               <div style={{ display: 'flex' }}>
                  <button className="btn btn-danger">Ir a Pagar </button>
                  <p
                     style={{
                        fontSize: '25px',
                        fontWeight: 'bold',
                        marginLeft: '8px',
                     }}
                  >
                     $ {montoTotal}
                  </p>
               </div>
            </div>
         )}
      </div>
   );
};

export default Carrito;
