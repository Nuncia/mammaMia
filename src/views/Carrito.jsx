import { useContext, useEffect, useState } from 'react';
import { ContextPizza } from '../context/ContextPizza';
import { NavLink, useNavigate } from 'react-router-dom';

const Carrito = () => {
   const setActive = (isActive) =>
      isActive ? 'active__carrito' : 'inActive__carrit';
   const [cargando, setCargando] = useState(true);
   const {
      listaProductos,
      montoTotal,
      setMontoTotal,
      setcantidadProductos,
      cantidadProductos,
   } = useContext(ContextPizza);
   const navigate = useNavigate();
   // const navigat = useNavigate();

   // const decrementar = (producto) => {
   //    producto.cantidad = producto.cantidad - 1;
   //    setMontoTotal(montoTotal - producto.price);
   //    setcantidadProductos(cantidadProductos - 1);
   //    navigate(`/carrito`);
   // };

   // const sumar = (producto) => {
   //    producto.cantidad = producto.cantidad + 1;
   //    setMontoTotal(montoTotal + producto.price);
   //    setcantidadProductos(cantidadProductos + 1);
   //    navigate(`/carrito`);
   // };

   const volverDetalle = (producto) => {
      console.log('volverDetalle: ', producto.id);

      navigate(`pizza/${producto.id}`);
   };

   useEffect(() => {
      if (listaProductos.length > 0) {
         setCargando(false);
      } else {
         setCargando(true);
      }
   }, []);
   return (
      <div style={{ margin: '100px' }}>
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
                           <td>
                              <p onClick={() => volverDetalle(item)}>
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
