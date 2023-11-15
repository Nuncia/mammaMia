import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ContextPizza } from '../context/ContextPizza';

const NavBar = () => {
   const { montoTotal, cantidadProductos } = useContext(ContextPizza);
   const setActive = (isActive) => (isActive ? 'active' : 'inActive');
   return (
      <div style={{ marginBottom: '20px' }}>
         <nav className="navbar navbar-expand-xxl navbar-dark bg-dark">
            <div className="container-fluid">
               <a className="navbar-brand" href="#">
                  <div style={{ display: 'flex' }}>
                     <NavLink className={setActive} to="/">
                        Pizzería Mamma Mia! 🍕
                     </NavLink>
                  </div>
               </a>
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
                     <a
                        className="nav-link active"
                        aria-current="page"
                        href="#"
                     ></a>
                     <a className="nav-link" href="#"></a>
                     {montoTotal > 0 ? (
                        <a className="nav-link" href="#">
                           <div className="contenedor_carrito">
                              <NavLink className={setActive} to="/carrito">
                                 {montoTotal > 0 ? <p>$ {montoTotal}</p> : ''}
                              </NavLink>
                              &nbsp;&nbsp;&nbsp;
                              <div className="carrito">
                                 <NavLink to="/carrito">
                                    <i className="fa-solid fa-cart-shopping fa-1x icono">
                                       <p className="circulo">
                                          {cantidadProductos}
                                       </p>
                                    </i>
                                 </NavLink>
                              </div>
                           </div>
                        </a>
                     ) : (
                        ''
                     )}
                  </div>
               </div>
            </div>
         </nav>
         <div>
            {/* <div>
               <p className="titulo">Pizzería Mamma Mía!</p>
            </div> */}
         </div>
      </div>
   );
};

export default NavBar;
