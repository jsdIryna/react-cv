import myPhoto from "assets/main-icons/me.jpg";
import "components/main-title/main-title.scss";

function MainTitle() {
  return (
    <div className="meet__me">
      <div className="container">
        <div className="meet__me__row">
          <div className="introduction">
            <div className="hello">Hello, I'm</div>
            <div className="details">
              <div className="name">Iryna Klonova</div>
              <div className="dateils_text">
                I'm an ambitious front-end developer striving to craft stunning
                web experiences. I specialize in creating responsive and
                pixel-perfect websites, driven by my enthusiasm and dedication
                to every project
              </div>
              <div className="buttons">
                <button className="projectsButton">Projects</button>
                <button className="hire_me">Hire Me</button>
              </div>
            </div>
          </div>
          <div className="personal_photo">
            <img src={myPhoto} alt="My Photo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainTitle;
