import Twitter from "assets/main-icons/twitter.svg";
import LinkedIn from "assets/main-icons/Linkedin.svg";
import GitHub from "assets/main-icons/Github.svg";
import Mail from "assets/main-icons/Mail.svg";

import "components/main-contact/main-contact.scss";

function MainContact() {
  return (
    <div className="contacts" id="contacts">
      <div className="container">
        <div className="contact__row">
          <div className="get__in__touch">
            <div className="contact__title">Get in Touch</div>
            <p className="title__descr">
              For business and partnership inquiry please contact me below!
            </p>
            <div className="networks__logo">
              <img src={Twitter} alt="Twitter" />
              <img src={LinkedIn} alt="LinkedIn" />
              <img src={GitHub} alt="GitHub" />
              <img src={Mail} alt="Mail" />
            </div>
          </div>
          <div className="input__forms">
            <input type="text" placeholder="Name:" className="input__name" />
            <input
              type="text"
              placeholder="Email:"
              className="input__name mail"
            />
            <textarea
              placeholder="Message:"
              className="input__name mes"
            ></textarea>
            <button>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContact;
