import React from "react";
import "./Services.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
import Resume from "./resume.pdf";
import { motion } from "framer-motion";

const Services = () => {
  const transition = { duration: "1", type: "spring" };

  return (
    <div className="services" id="Services">
      {/*left side*/}
      <div className="awesome">
        <span>My Awesome</span>
        <span>services</span>
        <span>
          During his apprenticeship, Broz was encouraged to mark May Day in 1909
          <br />
          After completing his apprenticeship in September 1910
        </span>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>

        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/*right side*/}
      <div className="cards">
        <motion.div
          whileInView={{ left: "14rem" }}
          initial={{ left: "25%" }}
          transition={transition}
          style={{ left: "14rem" }}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"Figma, UX, Bold, Sky"}
          />
        </motion.div>
        {/*Secodn card */}
        <div style={{ top: "12rem", left: "-4rem" }}>
          <Card
            emoji={Glasses}
            heading={"So smart"}
            detail={"Photoshop, UX, Soup, Sky"}
          />
        </div>
        {/*3 card */}

        <div style={{ top: "19rem", left: "12rem" }}>
          <Card
            emoji={Humble}
            heading={"Mega smart"}
            detail={"Photoshop, UX, Soup, Sky"}
          />
        </div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
