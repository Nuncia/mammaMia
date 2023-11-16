import { useContext, useEffect, useState } from 'react';
import { ContextPizza } from '../context/ContextPizza';
import { useNavigate } from 'react-router-dom';

const Carrito = () => {
   const [cargando, setCargando] = useState(true);
   const {
      listaProductos,
      setListaProductos,
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
         if (producto.cantidad === 0) {
            const productos = listaProductos.filter(
               (item) => item.id !== producto.id
            );
            setListaProductos(productos);

            navigate(`/carrito`);
         }
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
   }, [listaProductos]);

   return (
      <div
         style={{ margin: '100px', display: 'flex', justifyContent: 'center' }}
      >
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
         ) : listaProductos.length > 0 ? (
            <div className="contenedor__carrito">
               <h3 style={{ textAlign: 'center' }}>Orden N° 1</h3>
               <table className="table">
                  <tbody>
                     {listaProductos.map((item) =>
                        item.cantidad > 0 ? (
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
                        ) : (
                           ''
                        )
                     )}
                  </tbody>
               </table>
               <div style={{ display: 'flex' }}>
                  <button className="btn btn-danger">Ir a Pagar </button>
                  <p className="boton">$ {montoTotal}</p>
               </div>
            </div>
         ) : (
            <div className="detalle__2" style={{}}>
               Debes agregar productos al carrito
            </div>
         )}
      </div>
   );
};

export default Carrito;
