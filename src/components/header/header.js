import 'D:/projects/react-cv/src/components/header/header.scss';
import logo from 'D:/projects/react-cv/src/assets/burger.png';

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
                        <li className="list__item__main"><a href="#">home</a></li>
                        <li id="hover" className="list__item"><a href="#">works</a>
                            <ul className="sub-menu">
                                <li className="underline"><a href="calculator.html">Calculator</a></li>
                                <li className="underline"><a href="">To do list</a></li>
                            </ul>
                        </li>
                        <li className="list__item"><a href="contacts.html">contacts</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;
