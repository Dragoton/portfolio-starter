import React from "react";
import "./Intro.css";

import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import Martina from "../../img/martina.png";
import thumbup from "../../img/thumbup.png";
import WebDev from "../../img/develop.png";
import glassesimoji from "../../img/bulb.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { motion } from "framer-motion";

const Intro = () => {
  const transition = { duration: 2, type: "spring" };

  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hi! I am</span>
          <span>MARTINA</span>
          <span>
            Production Technology student looking for internship and much more.
          </span>
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <div>
          <img src={Martina} alt="" />
        </div>

        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-14%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />
        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "53%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatingDiv image={WebDev} txt1="Process" txt2="optimization" />
        </motion.div>
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "-2rem" }}
          transition={transition}
          className="floating-div"
        >
          <FloatingDiv
            image={thumbup}
            txt1="Teamwork and"
            txt2="communication"
          />
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
