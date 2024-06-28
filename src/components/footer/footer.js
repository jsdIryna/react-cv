import { Link } from "react-router-dom";

import "components/footer/footer.scss";

export const handleUpClick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

function Footer() {
  const handleAnchorClick = (anchorId) => {
    const anchorElement = document.getElementById(anchorId);
    if (anchorElement) {
      anchorElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="footer">
      <div className="footer__row">
        <div className="footer__row__top">
          <div className="footer__logo">
            <div className="first__letter">I</div>
            <div>Klonova</div>
          </div>
          <ul className="footer__list">
            <div className="footer__column">
              <li className="list__item">
                <Link to="about-me" onClick={handleUpClick}>
                  about me
                </Link>
              </li>
              <li className="list__item get">
                <Link
                  to="about-me"
                  onClick={() => handleAnchorClick("contacts")}
                >
                  - get in touch
                </Link>
              </li>
            </div>
            <div className="footer__column">
              <li className="list__item">
                <Link to="projects" onClick={handleUpClick}>
                  projects
                </Link>
              </li>
              <li className="list__item">
                <Link to="projects/calculator" onClick={handleUpClick}>
                  - calculator
                </Link>
              </li>
              <li className="list__item">
                <Link to="projects/todo-list" onClick={handleUpClick}>
                  - to do list
                </Link>
              </li>
              <li className="list__item">
                <Link to="projects/game" onClick={handleUpClick}>
                  - game
                </Link>
              </li>
            </div>
            <div className="footer__column">
              <li className="list__item__main">
                <a
                  href={`${process.env.PUBLIC_URL}/CV-IRYNA-KLONOVA-FULL.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  resume
                </a>
              </li>
            </div>
          </ul>
        </div>
        <hr className="horizontal__line" />
        <div className="copyright">
          © Copyright 2024 Iryna Klonova Inc. All rights reserved.
        </div>
      </div>
    </div>
  );
}
export default Footer;
