import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ContextPizza } from '../context/ContextPizza';

const NavBar = () => {
   const { montoTotal, cantidadProductos } = useContext(ContextPizza);
   const setActive = (isActive) => (isActive ? 'active' : 'inActive');
   return (
      <header>
         <div className="navBar">
            <div style={{ display: 'flex' }}>
               <NavLink to="/">Pizzería Mamma Mia! 🍕</NavLink>
               <div style={{ display: 'flex' }}>
                  <NavLink className={setActive} to="/">
                     Home
                  </NavLink>
               </div>
            </div>
            <div style={{ marginRight: '20px', display: 'flex' }}>
               <p>${montoTotal}</p>
               &nbsp;&nbsp;
               <div className="circulo">&nbsp;&nbsp; {cantidadProductos}</div>
               <i className="fa-solid fa-cart-shopping"></i>
            </div>
         </div>
         <div className="imagen">
            {/* <img className="imagen_2" src='../src/assets/pizza_4.jpg' alt="" /> */}
            <p className="titulo">Pizzería Mamma Mía!</p>
         </div>
      </header>
   );
};

export default NavBar;
