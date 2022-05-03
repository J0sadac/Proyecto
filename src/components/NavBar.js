import React from "react";
import {Link} from 'react-router-dom';

const NavBar = () => {

    return(
            <nav className="navbar">
                <ul>
                    <li><Link to='/' className="lista">Home</Link></li>
                    <li><Link to='/platillos' className="lista">Platillos</Link></li>
                    <li><Link to='/bebidas'  className="lista">Bebidas</Link></li>
                </ul>
            </nav>
    );
};

export default NavBar;