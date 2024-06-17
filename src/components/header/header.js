import { Link } from "react-router-dom";

import logo from 'assets/burger.png';

import 'components/header/header.scss';

function Header() {
    return (
        <div className="header">
            <div className="container">
                <div className="header__row">
                    <div className="header__logo">
                        <div>ik</div>
                    </div>
                    <div className="burger">
                        <img src={logo} alt="burger" />
                    </div>
                    <ul className="header__list">
                        <li className="list__item__main"><Link to="about-me">home</Link></li>
                        <li id="hover" className="list__item"><Link to="works">works</Link>
                        </li>
                        <li className="list__item"><a href="contacts.html">contacts</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;
