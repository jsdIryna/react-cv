import { useState } from "react";
import Twitter from "assets/main-icons/twitter.svg";
import LinkedIn from "assets/main-icons/Linkedin.svg";
import GitHub from "assets/main-icons/Github.svg";
import Mail from "assets/main-icons/Mail.svg";

import "components/main-contact/main-contact.scss";

function MainContact() {
  const [images] = useState([
    { img: Twitter, alt: "Twitter" },
    { img: LinkedIn, alt: "LinkedIn" },
    { img: GitHub, alt: "GitHub" },
    { img: Mail, alt: "Mail" },
  ]);

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
              {images.map(({ img, alt }) => (
                <img src={img} alt={alt} />
              ))}
            </div>
          </div>
          <div className="input__forms">
            <input type="text" placeholder="Name:" className="input__name" />
            <input
              type="text"
              placeholder="Email:"
              className="input__name mail"
            />
            <textarea placeholder="Message:" className="input__name mes" />
            <button>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContact;
