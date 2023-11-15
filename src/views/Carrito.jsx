import { useContext, useEffect, useState } from 'react';
import { ContextPizza } from '../context/ContextPizza';
import { useNavigate } from 'react-router-dom';

const Carrito = () => {
   const [cargando, setCargando] = useState(true);
   const { listaProductos, montoTotal, setMontoTotal } =
      useContext(ContextPizza);
   const navigate = useNavigate();

   const decrementar = (producto) => {
      producto.cantidad = producto.cantidad - 1;
      setMontoTotal(montoTotal - producto.price);
      navigate(`/carrito`);
   };

   const sumar = (producto) => {
      producto.cantidad = producto.cantidad + 1;
      setMontoTotal(montoTotal + producto.price);
      navigate(`/carrito`);
   };

   useEffect(() => {
      if (listaProductos.length > 0) {
         setCargando(false);
      } else {
         setCargando(true);
      }
   }, []);
   return (
      <div>
         {cargando ? (
            <p>No hay productos seleccionados</p>
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
                           <td>{item.name}</td>
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
                     <td style={{ fontSize: '24px' }}>$ {montoTotal}</td>
                     {/* </tr> */}
                  </tbody>
               </table>
            </div>
         )}
      </div>
   );
};

export default Carrito;
