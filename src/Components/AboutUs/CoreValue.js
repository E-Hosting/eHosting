import React from "react";
import "../AboutUs/digital.css";
function CoreValue() {
  return (
    <div>
      <section className="section-core-Value">
        <div className="section-about-header">
          <h2 className="text-center">Our Core Values.</h2>
          <p className="text-center">
            We're passionate people. We eat, sleep and live this stuff.
          </p>
        </div>
        <div className="core-value-img">
          <img src="../img/value-img-aboutus.png" alt="core-img" />
        </div>
      </section>
    </div>
  );
}

export default CoreValue;
