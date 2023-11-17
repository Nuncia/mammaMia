import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ContextPizza } from '../context/ContextPizza';

const NavBar = () => {
   const { montoTotal, cantidadProductos } = useContext(ContextPizza);
   const setActive = (isActive) => (isActive ? 'active' : 'inActive');
   return (
      <div>
         <div
            style={{}}
            className="navbar navbar-expand-xxl navbar-dark bg-dark"
         >
            <div className="container-fluid">
               {/* <a className="navbar-brand"> */}
               <div style={{ display: 'flex' }}>
                  <NavLink className={setActive} to="/">
                     Pizzería Mamma Mia! 🍕
                  </NavLink>
               </div>
               {/* </a> */}
               <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNavAltMarkup"
                  aria-controls="navbarNavAltMarkup"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
               >
                  <span className="navbar-toggler-icon"></span>
               </button>
               <div
                  className="collapse navbar-collapse"
                  id="navbarNavAltMarkup"
                  style={{ justifyContent: 'flex-end' }}
               >
                  <div className="navbar-nav">
                     <div style={{ display: 'flex' }}>
                        <NavLink className={setActive} to="/carrito">
                           {montoTotal > 0 ? <p>$ {montoTotal}</p> : ''}
                        </NavLink>
                        &nbsp;&nbsp;&nbsp;
                        <div className="carrito">
                           <NavLink to="/carrito" className={setActive}>
                              <i
                                 style={{ marginTop: '14px' }}
                                 className="fa-solid fa-cart-shopping fa-lg"
                              >
                                 <div className="circulo">
                                    <p style={{ color: 'red' }} href="">
                                       {cantidadProductos}
                                    </p>
                                 </div>
                              </i>
                           </NavLink>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="pizzeria">
            <p style={{ marginTop: '6px' }}>MAMMAMIA, la otra pizza!!!</p>
         </div>
      </div>
   );
};

export default NavBar;
