import React from "react";
import "./Intro.css";

const Intro = () => {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hy! I am</span>
          <span>Drago</span>
          <span>
            secretary-general of the Communist Party of the Soviet Union
            (1922-53) and premier of the Soviet state (1941-53), who for a
            quarter of a century dictatorially ruled the Soviet Union and
            transformed it into a major world power.
          </span>
        </div>
        <button className="button i-button">Hire me</button>
      </div>
      <div className="i-right"></div>
    </div>
  );
};

export default Intro;
