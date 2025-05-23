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
              <div className="details__text">
                I'm a front-end developer specializing in building responsive,
                pixel-perfect websites using React.js, Next.js, TypeScript, and
                Tailwind CSS. I focus on creating intuitive and performant web
                experiences, combining a strong eye for design with a solid
                technical background.
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
