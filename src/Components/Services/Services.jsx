import React from "react";
import "./Services.css";
import Material from "../../img/material.png";
import Automatisation from "../../img/robot.png";
import BusTech from "../../img/cpu.png";
import ProductDev from "../../img/Launch.png";
import Quality from "../../img/speed.png";
import Card from "../Card/Card";
import Resume from "./Martina-Peck-Tijeglic-CV.pdf";
import { motion } from "framer-motion";

const Services = () => {
  const transition = { duration: "1", type: "spring" };

  return (
    <div className="services" id="Services">
      {/*left side*/}
      <div className="awesome">
        <span>MY AWESOME</span>
        <span>EDUCATION</span>
        <span className="span-text-intro">
          During my
          <br />
          <a
            className="techLink"
            href="https://kea.dk/en/programmes/academy-profession-degree/production-technology"
          >
            Production technology education
          </a>
          at
          <br />
          <a className="keaLink" href="https://kea.dk/">
            KEA - Copenhagen School of Design
          </a>
          ,
          <br />I learned various professional
          <br />
          and personal skills.
        </span>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
      </div>
      {/*right side*/}
      <div className="cards">
        <motion.div
          whileInView={{ left: "35%" }}
          initial={{ left: "50%" }}
          transition={transition}
        >
          <Card
            emoji={Material}
            heading={"MATERIAL SELECTION"}
            detail={
              "Material properties, sustainability and the right choice of materials."
            }
          />
        </motion.div>
        {/*Secodn card */}
        <motion.div
          initial={{ left: "-1%", top: "15rem" }}
          whileInView={{ left: "-3%", top: "15rem" }}
          transition={transition}
        >
          <Card
            emoji={Automatisation}
            heading={"INDUSTRIAL AUTOMATION"}
            detail={
              "PLC programming, simulations and system testing, building of a functional prototype."
            }
          />
        </motion.div>
        {/*3 card */}

        <motion.div
          whileInView={{ left: "52%", top: "18rem" }}
          initial={{ top: "18rem", left: "70%" }}
          transition={transition}
        >
          <Card
            emoji={ProductDev}
            heading={"PRODUCT DEVELOPMENT"}
            detail={
              "From idea to realization using key methods, Solidworks and 3D printing."
            }
          />
        </motion.div>
        <motion.div
          whileInView={{ left: "52%", top: "39rem" }}
          initial={{ left: "70%", top: "39rem" }}
          transition={transition}
        >
          <Card
            emoji={Quality}
            heading={"QUALITY MANAGEMENT SYSTEM"}
            detail={
              "Project planning and implementation, product optimization and LEAN method."
            }
          />
        </motion.div>
        <motion.div
          initial={{ left: "-1%", top: "36rem" }}
          whileInView={{ left: "-3%", top: "36rem" }}
          transition={transition}
        >
          <Card
            emoji={BusTech}
            heading={"BUSINESS TECHNOLOGY"}
            detail={"Data collection, economic considerations."}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
