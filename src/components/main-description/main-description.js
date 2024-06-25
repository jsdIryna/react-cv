import HTMLLogo from "assets/main-icons/html.svg";
import CSSLogo from "assets/main-icons/css.svg";
import JSLogo from "assets/main-icons/js.svg";
import reactLogo from "assets/main-icons/react.svg";
import teilwindLogo from "assets/main-icons/teilwind.svg";

import "components/main-description/main-description.scss";

function MainDescription() {
  return (
    <div className="descr__me">
      <div className="container">
        <div className="descr__me__row">
          <div className="cover_descr">
            <h2>About Me</h2>
            <p className="descr_descr">
              Hello, I'm Iryna Klonova, a dedicated front-end developer with a
              strong passion for open-source collaborations and a knack for
              crafting beautiful and user-friendly websites. With a technical
              education and a knack for design, I thrive on turning ideas into
              digital reality.
            </p>
            <h3>Passion and Interests</h3>
            <p className="descr_descr">
              I'm passionate about creating web experiences that not only look
              great but also provide real value to users. I'm particularly
              interested in the intersection of design and development, where
              user-centered design principles meet cutting-edge technologies.
            </p>
            <h3>Personal Touch</h3>
            <p className="descr_descr">
              Outside of the programming world, I have several hobbies that
              inspire and balance me. I really enjoy dancing, dancing inspires
              me with its beautiful art, giving creative expression and freeing
              me from everyday worries. Sport, in turn, has become for me not
              just a hobby, but a way of life that helps maintain health and is
              a way to relax after a whole day of working with programming.
            </p>
            <h3>What Do I Offer</h3>
            <p className="descr_descr">
              I offer a wide range of services including programming.
            </p>
          </div>
          <div className="superpowers">
            <h3 className="title">My Superpowers</h3>
            <div className="teh_border">
              <div className="tech_logo">
                <img src={HTMLLogo} alt="HTML logo" />
                <img src={CSSLogo} alt="CSS logo" />
                <img src={JSLogo} alt="JS logo" />
                <img src={reactLogo} alt="React logo" />
                <img src={teilwindLogo} alt="Teilwind logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainDescription;
