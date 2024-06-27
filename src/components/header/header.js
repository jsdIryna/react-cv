import React, { useState } from "react";
import { Link } from "react-router-dom";
import burgerLogo from "assets/header-icons/burger.png";
import crossLogo from "assets/header-icons/cross.png";
import "components/header/header.scss";
import { handleUpClick } from "components/footer/footer.js";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const menuAnimationClass = menuOpen
    ? "menu-animation-open"
    : "menu-animation-close";

  return (
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
          <li className="list__item">
            <Link to="about-me" onClick={handleUpClick}>
              about me
            </Link>
          </li>
          <li id="hover" className="list__item">
            <Link to="projects" onClick={handleUpClick}>
              projects
            </Link>
          </li>
          <li className="list__item__main">
            <a
              href={`${process.env.PUBLIC_URL}/CV-IRYNA-KLONOVA-FULL.pdf`}
              target="_blank"
              rel="noopener noreferrer"
            >
              resume
            </a>
          </li>
        </ul>
      </div>
      <nav className={`show-nav ${menuAnimationClass}`}>
        <ul className="main__list">
          <li className="list__item">
            <Link to="about-me">about me</Link>
          </li>
          <li id="hover" className="list__item">
            <Link to="projects">projects</Link>
          </li>
          <li className="list__item__main">
            <a
              href="./public/CV-IRYNA-KLONOVA-FULL.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              resume
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
