import React from 'react';
import { Link } from 'react-router-dom';
import './_Menu.scss';

const Menu = () => {
    return (
        <nav className="menu">
            <ul className="menu__list">
                <li className="menu__item"><Link className="menu__link" to="/" >Home</Link></li>
                <li className="menu__item"><Link className="menu__link" to="/skills" >Skills</Link></li>
                <li className="menu__item"><Link className="menu__link" to="/projects" >Projects</Link></li>
                <li className="menu__item"><Link className="menu__link" to="/about" >About</Link></li>
                <li className="menu__item"><Link className="menu__link" to="/contact" >Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Menu;