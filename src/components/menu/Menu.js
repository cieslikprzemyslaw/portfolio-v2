import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './_Menu.scss';

const Menu = () => {
    const [isActiveNavbar, setIsActiveNavbar] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 220)(setIsActiveNavbar(true))
        if(window.scrollY <220)(setIsActiveNavbar(false))
    }

    window.addEventListener("scroll", changeBackground);

    return (
        <nav className={isActiveNavbar ? "menu--active":"menu"}>
            <ul className="menu__list">
                <li className="menu__item"><NavLink className="menu__link" exact to="/" >Home</NavLink></li>
                <li className="menu__item"><NavLink className="menu__link" to="/skills" >Skills</NavLink></li>
                <li className="menu__item"><NavLink className="menu__link" to="/projects" >Projects</NavLink></li>
                <li className="menu__item"><NavLink className="menu__link" to="/about" >About</NavLink></li>
                <li className="menu__item"><NavLink className="menu__link" to="/contact" >Contact</NavLink></li>
            </ul>
        </nav>
    );
};

export default Menu;