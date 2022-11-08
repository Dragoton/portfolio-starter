import React from "react";
import "./Card.css";

const Card = ({ emoji, heading, detail, detail2, detail3 }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={emoji} alt="" />
      </div>
      <div className="card-text">
        <span className="card-heading">{heading}</span>
        <br />
        <div className="heading-span">
          <span>{detail}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
