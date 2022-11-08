import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";

import LinkedIn from "../../img/linkedin.png";
import Gmail from "../../img/gmail.png";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <div className="i-icons">
          <a href="https://www.linkedin.com/in/martina-peck-tijeglic/">
            <img src={LinkedIn} alt="" />
          </a>
          <a href="mailto:mptijeglic@gmail.com">
            <img src={Gmail} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
