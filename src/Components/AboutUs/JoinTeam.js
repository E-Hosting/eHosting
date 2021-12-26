import React from "react";
import CoreValue from "./CoreValue";
import "./digital.css";
import { Link } from "react-router-dom";
function JoinTeam() {
  return (
    <div>
      <section className="section-aboutus-joining">
        <div className="section-about-header">
          <h2 className="text-center">
            The only learning management system you need
          </h2>
          <p className="text-center">
            With extensive experience and continuous innovation in learning
            management technologies, we know you are unique!
          </p>
          <Link to="/Register">
            {" "}
            <button>Join us now </button>{" "}
          </Link>
        </div>
      </section>
    </div>
  );
}

export default JoinTeam;
