import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ContextPizza } from '../context/ContextPizza';

const NavBar = () => {
   const { montoTotal, cantidadProductos } = useContext(ContextPizza);
   const setActive = (isActive) => (isActive ? 'active' : 'inActive');
   return (
      <header style={{ height: '50px' }}>
         <div className="navBar__uno">
            <div style={{ display: 'flex' }}>
               <NavLink className={setActive} to="/">
                  Pizzería Mamma Mia! 🍕
               </NavLink>
            </div>
            <div className="contenedor_carrito">
               <NavLink className={setActive} to="/carrito">
                  {montoTotal > 0 ? <p>$ {montoTotal}</p> : ''}
               </NavLink>
               &nbsp;&nbsp;&nbsp;
               <div className="carrito">
                  <NavLink to="/carrito">
                     <i className="fa-solid fa-cart-shopping fa-1x icono">
                        <p className="circulo">{cantidadProductos}</p>
                     </i>
                  </NavLink>
               </div>
            </div>
         </div>
         <div className="imagen">
            <div>
               <p className="titulo">Pizzería Mamma Mía!</p>
            </div>
         </div>
      </header>
   );
};

export default NavBar;
