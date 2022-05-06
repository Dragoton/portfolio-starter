import React from "react";
import "./Navbar.css";
import Toggle from "../Toggle/Toggle";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Drago</div>
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
            >
              <li>Home</li>
            </Link>
            <Link spy={true} to="Services" smooth={true}>
              {" "}
              <li>Services</li>
            </Link>

            <Link spy={true} to="Experience" smooth={true}>
              {" "}
              <li>Portfolio</li>
            </Link>

            <Link spy={true} to="Portfolio" smooth={true}>
              {" "}
              <li>Drago</li>
            </Link>

            <Link spy={true} to="Testimonial" smooth={true}>
              {" "}
              <li>Game</li>
            </Link>
          </ul>
        </div>
        <button className="button n-button">Contact</button>
      </div>
    </div>
  );
};

export default Navbar;
