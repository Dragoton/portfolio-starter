import React from "react";
import "./Services.css";
import Planning from "../../img/planning.png";
import Design from "../../img/design.png";
import Developing from "../../img/developing.png";
import Card from "../Card/Card";
import Resume from "./resume.pdf";
import { motion } from "framer-motion";

const Services = () => {
  const transition = { duration: "1", type: "spring" };

  return (
    <div className="services" id="Services">
      {/*left side*/}
      <div className="awesome">
        <span>MY AWESOME</span>
        <span>EDUCATION</span>
        <span>
          During my Multimedia Design education at
          <br />
          KEA - Copenhagen School of Design,
          <br />I learned various skills in the
          <br />
          design and IT world.
        </span>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
      </div>
      {/*right side*/}
      <div className="cards">
        <motion.div
          whileInView={{ left: "15rem" }}
          initial={{ left: "60%" }}
          transition={transition}
        >
          <Card
            emoji={Planning}
            heading={"Business"}
            detail={"...researching, testing, planning..."}
          />
        </motion.div>
        {/*Secodn card */}
        <motion.div
          initial={{ left: "-6rem", top: "12rem" }}
          whileInView={{ left: "2rem" }}
          transition={transition}
        >
          <Card
            emoji={Design}
            heading={"Design"}
            detail={"...blend, drawing, recording..."}
          />
        </motion.div>
        {/*3 card */}

        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "16rem" }}
          transition={transition}
        >
          <Card
            emoji={Developing}
            heading={"Developing"}
            detail={"...coding, saving, fixing..."}
          />
        </motion.div>
        <div className="blur s-blur2" style={{ background: "#ADD8E5" }}></div>
      </div>
    </div>
  );
};

export default Services;
