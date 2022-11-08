import React from "react";
import "./Works.css";
import Granta from "../../img/granta2.png";
import SolidWorks from "../../img/solidworksicon2.png";
import Tia from "../../img/tia2.png";
import Robo from "../../img/robo2.png";
import Ent from "../../img/ed2.png";
import { motion } from "framer-motion";

const Works = () => {
  return (
    <div className="works">
      <div className="awesome">
        <span>WORKING WITH</span>
        <span>ALL THIS TOOLS</span>
        <span>
          Different projects require different tools.
          <br />
          At KEA, I worked with a lot of diverse tools.
          <br />
          These are just some of them.
        </span>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/*right side */}
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          transition={{ duration: 4.5, type: "spring" }}
          viewport={{ margin: "-40px" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <a href="https://www.ansys.com/products/materials/granta-edupack">
              <img src={Granta} alt="" />
            </a>
          </div>
          <div className="w-secCircle">
            <a href="https://robodk.com/">
              <img src={Robo} alt="" />
            </a>
          </div>
          <div className="w-secCircle">
            <a href="https://www.solidworks.com/">
              <img src={SolidWorks} alt="" />
            </a>
          </div>
          <div className="w-secCircle">
            <a href="https://www.incontrolsim.com/enterprise-dynamics-10-5-released/">
              <img src={Ent} alt="" />
            </a>
          </div>
          <div className="w-secCircle">
            <a href="https://new.siemens.com/global/en/products/automation/topic-areas/tia.html">
              <img src={Tia} alt="" />
            </a>
          </div>
        </motion.div>
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
