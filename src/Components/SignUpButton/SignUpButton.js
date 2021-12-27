import React from "react";
import "../SignUpButton/SignUpButton.css";
import HostingAll from "../Hosting/HostingAll";
import { Link } from "react-router-dom";

export default function SignUpButton(props) {
  const handelClickSignUp = () => {
    const obj1 = props.obj;
    localStorage.setItem("TitleCourse", JSON.stringify(obj1));
  };

  return (
    <div className="SignUpDiv">
      <Link to="/OurCourse">
        <button className="SignUpButton" onClick={handelClickSignUp}>
          Book Now
        </button>
      </Link>
    </div>
  );
}
