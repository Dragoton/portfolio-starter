import React from "react";
import "./Navbar.css";
import Toggle from "../Toggle/Toggle";
import { Link } from "react-scroll";
import Logo from "../../img/logo.svg";

const Navbar = () => {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">
          <img src={Logo} alt="" />
        </div>
        <Toggle />
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <Link
              spy={true}
              to="Navbar"
              smooth={true}
              activeClass="activeClass"
            ></Link>
            <Link spy={true} to="Services" smooth={true}>
              {" "}
              <li>SKILLS</li>
            </Link>

            <Link spy={true} to="Experience" smooth={true}>
              {" "}
              <li>TOOLS</li>
            </Link>

            <Link spy={true} to="Portfolio" smooth={true}>
              {" "}
              <li>PORTFOLIO</li>
            </Link>

            <Link spy={true} to="Contact" smooth={true}>
              {" "}
              <li>CONTACT</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
