import { useContext, useEffect, useState } from 'react';
import { ContextPizza } from '../context/ContextPizza';
import { useNavigate } from 'react-router-dom';

const Pizzas = () => {
   const {
      pizzas,
      obtenerPizzas,
      // montoTotal,
      // setMontoTotal,
      // listaProductos,
      // setListaProductos,
      // cantidadProductos,
      // setcantidadProductos,
      agregarPizza,
   } = useContext(ContextPizza);
   const [cargando, setCargando] = useState(true);
   const navigate = useNavigate();

   const mostrarPizza = (id) => {
      navigate(`pizza/${id}`);
   };

   //  const agregarPizza = (producto) => {
   //     const productoExiste = listaProductos.find(
   //        (item) => item.id === producto.id
   //     );
   //     if (productoExiste) {
   //        //actualiza cantidad de producto existente
   //        const productoActualizados = listaProductos.map((item) =>
   //           item.id === producto.id
   //              ? { ...item, cantidad: item.cantidad + 1 }
   //              : item
   //        );
   //        setListaProductos(productoActualizados);
   //     } else {
   //        //agrega producto nuevo a la lista
   //        setListaProductos([...listaProductos, { ...producto, cantidad: 1 }]);
   //     }
   //     //Actualiza cantidad total y monto
   //     setcantidadProductos(cantidadProductos + 1);
   //     setMontoTotal(montoTotal + producto.price);
   //  };

   useEffect(() => {
      if (pizzas.length === 0) {
         obtenerPizzas();
         setCargando(false);
      } else {
         setCargando(false);
      }
   }, []);
   return (
      <div className="container contenedor__1">
         {cargando
            ? 'Cargando...'
            : pizzas.map((item) => (
                 <div key={item.id}>
                    <div
                       key={item.id}
                       className="card pizzas"
                       style={{ width: '18rem' }}
                    >
                       <img src={item.img} className="card-img-top" alt="..." />
                       <div className="card-body">
                          <h5 className="card-title">{item.name}</h5>
                          <div>
                             {item.ingredients.map((ingrediente) => (
                                <p key={ingrediente}>🍕{ingrediente}</p>
                             ))}
                          </div>
                          <p>${item.price}</p>
                          <div
                             style={{
                                display: 'flex',
                                justifyContent: 'center',
                             }}
                          >
                             <a
                                href="#"
                                onClick={() => mostrarPizza(item.id)}
                                className="btn btn-primary"
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
                 </div>
              ))}
      </div>
   );
};

export default Pizzas;
