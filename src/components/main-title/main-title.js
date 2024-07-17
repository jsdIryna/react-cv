import { Link } from "react-router-dom";
import myPhoto from "assets/main-icons/me.jpg";
import "components/main-title/main-title.scss";

function MainTitle() {
  const handleHireMeClick = () => {
    window.location.href =
      "https://www.linkedin.com/in/iryna-klonova-a6359328b";
  };

  return (
    <div className="meet__me">
      <div className="container">
        <div className="meet__me__row">
          <div className="introduction">
            <div className="hello">Hello, I'm</div>
            <div className="details">
              <div className="details__name">Iryna Klonova</div>
              <div className="datails__text">
                An ambitious front-end developer striving to craft stunning web
                experiences. I specialize in creating responsive and
                pixel-perfect websites, driven by my enthusiasm and dedication
                to every project
              </div>
              <div className="details__buttons">
                <Link to="/projects" className="projectsButton">
                  Projects
                </Link>
                <button className="hire-me" onClick={handleHireMeClick}>
                  Hire Me
                </button>
              </div>
            </div>
          </div>
          <div className="personal_photo">
            <img src={myPhoto} alt="Me" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainTitle;
