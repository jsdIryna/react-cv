import React, { useState } from 'react';

import { Link } from "react-router-dom";

import burgerLogo from 'assets/burger.png';
import crossLogo from 'assets/cross.png'

import 'components/header/header.scss';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const menuAnimationClass = menuOpen ? 'menu-animation-open' : 'menu-animation-close';

    return (
        <div className="wrapper">
            <div className="header">
                <div className="header__row">
                    <div className="header__logo">
                        <div className="first__part">I</div>
                        <div>Klonova</div>
                    </div>
                    <div className={`burger`} onClick={toggleMenu}>
                        <img src={menuOpen ? crossLogo : burgerLogo} alt="burger" />
                    </div>
                    <ul className="header__list">
                        <li className="list__item"><Link to="about-me">about me</Link></li>
                        <li id="hover" className="list__item"><Link to="projects">projects</Link>
                        </li>
                        <li className="list__item__main"><a href="#">resume</a></li>
                    </ul>
                </div>
                <nav className={`show-nav ${menuAnimationClass}`}>
                    <ul className="main__list">
                        <li className="list__item"><Link to="about-me">about me</Link></li>
                        <li id="hover" className="list__item"><Link to="projects">projects</Link>
                        </li>
                        <li className="list__item__main"><a href="#">resume</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Header;
