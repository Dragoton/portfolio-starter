import React from "react";
import "./Intro.css";
import LinkedIn from "../../img/linkedin.png";
import Github from "../../img/github.png";

import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import Drago from "../../img/drago1.png";
import thumbup from "../../img/thumbup.png";
import WebDev from "../../img/develop.png";
import glassesimoji from "../../img/glassesimoji.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { motion } from "framer-motion";

const Intro = () => {
  const transition = { duration: 2, type: "spring" };

  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hi! I am</span>
          <span>DRAGO</span>
          <div>
            Frontend / Multimedia design student
            <br />
            looking for internship
            <br />
            and much more.
          </div>
        </div>
        <div className="i-icons">
          <a href="https://linkedin.com/in/drago-tomasic">
            <img src={LinkedIn} alt="" />
          </a>
          <a href="https://github.com/Dragoton">
            <img src={Github} alt="" />
          </a>
          <a href="https://github.com/Dragoton">
            <img src={Github} alt="" />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={Drago} alt="" />
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-14%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />
        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "56%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatingDiv image={WebDev} txt1="Web" txt2="Developing" />
        </motion.div>
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          <FloatingDiv image={thumbup} txt1="Ideation" txt2="and design" />
        </motion.div>
        {/*blur divs*/}
        <div className="blur" style={{ background: "var(--black)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
