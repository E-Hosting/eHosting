import React from "react";
import "./digital.css";

function DigitalList(props) {
  return (
    <div>
      <div className="digital-div">
        <img className="digital-img" src={props.img} alt="digital-icons" />
        <h3 className="digital-title">{props.title}</h3>
        <div className="digital-description">{props.descriptions}</div>
      </div>
    </div>
  );
}

export default DigitalList;
