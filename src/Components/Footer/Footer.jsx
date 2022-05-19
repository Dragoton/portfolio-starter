import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";

import LinkedIn from "../../img/linkedin.png";
import Github from "../../img/github.png";
import Gmail from "../../img/gmail.png";
import newLogo from "../../img/newlogo.png";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <div className="i-icons">
          <a href="https://linkedin.com/in/drago-tomasic">
            <img src={LinkedIn} alt="" />
          </a>
          <a href="https://github.com/Dragoton">
            <img src={Github} alt="" />
          </a>
          <a href="https://github.com/Dragoton">
            <img src={Gmail} alt="" />
          </a>
        </div>
        <div class="newLogo">
          <img src={newLogo} alt=""></img>
        </div>
      </div>
    </div>
  );
};

export default Footer;
