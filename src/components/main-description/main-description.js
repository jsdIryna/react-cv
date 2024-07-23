import { useState } from "react";
import Tooltip from "components/main-description/tooltip";
import {
  BASIC_INFORMATION,
  SUPERPOWERS_DATA,
} from "components/main-description/main-description.constans";

import "components/main-description/main-description.scss";

function MainDescription() {
  const [tooltipText, setTooltipText] = useState("");

  const handleMouseEnter = (text) => {
    setTooltipText(text);
  };

  const handleMouseLeave = () => {
    setTooltipText("");
  };

  return (
    <div className="descr__me">
      <div className="container">
        <div className="descr__me__row">
          <div className="cover_descr">
            {BASIC_INFORMATION.map(({ sectionTitle, title, description }) => (
              <>
                {sectionTitle ? <h2>{sectionTitle}</h2> : <h3>{title}</h3>}
                <p className="descr_descr">{description}</p>
              </>
            ))}
          </div>
          <div className="superpowers">
            <h3 className="title">My Superpowers</h3>
            <div className="teh_border">
              <div className="tech_logo">
                {SUPERPOWERS_DATA.map(
                  ({ tooltipText: text, altText, source }, index) => (
                    <div
                      key={text}
                      onMouseEnter={() => handleMouseEnter(text)}
                      onMouseLeave={handleMouseLeave}
                      className="tooltip_wrapper"
                    >
                      <img src={source} alt={altText} />
                      {tooltipText === text && <Tooltip text={tooltipText} />}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainDescription;
