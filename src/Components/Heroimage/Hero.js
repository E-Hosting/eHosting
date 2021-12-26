import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";
function Hero() {
  return (
    <div>
      <div>
        <div
          className="hero-img"
          style={{
            background: `linear-gradient(190deg, #ffffff , rgba(0, 0, 1, 0)), url('../img/hero/zoom-for-education.jpg')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
          <div className="content">

          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
