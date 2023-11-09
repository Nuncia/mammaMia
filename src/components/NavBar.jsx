import { NavLink } from "react-router-dom";

const NavBar = () => {
    const setActive = ((isActive) => (isActive ? 'active' : 'inActive'));
    return (
        <div>
            <div className="navBar">
            <div style={{display: 'flex'}}>
                        <div>
                            Pizzería Mamma Mia! 🍕
                        </div>
                        <div style={{display: 'flex'}}>
                            <NavLink className={setActive} to='/'>
                                Home
                            </NavLink>
                            |
                            <NavLink className={setActive} to='/pizza'>
                                Pizza
                            </NavLink>
                            <NavLink className={setActive} to='/carrito'>
                                Carrito
                            </NavLink>
                        </div>
                </div>
                <div>
                    Carrito
                </div>
            </div>
            <div className="imagen">
                {/* <img className="imagen_2" src='../src/assets/pizza_4.jpg' alt="" /> */}
                <p className="titulo">Pizzería Mamma Mía!</p>
            </div>
        </div>
    )
}

export default NavBar;