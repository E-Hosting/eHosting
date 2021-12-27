import React from "react";
import ServicesWebsite from "./ServicesWebsite";
import "./Services.css";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <>
      <ol className="breadcrumb customBreadcrumb">
        <li className="breadcrumb-item">
          <Link to="/">Home</Link>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          Programs & Courses
        </li>
      </ol>
      <div className="ServicesArr">
        <div className="ElementServicesArrTitle">
          <h2>Programs & Courses </h2>
        </div>

        <div className="ServicesArrParagraph">
          <p>Choose a platform below.</p>
        </div>

        <div className="ServicesArrHosting">
          <ServicesWebsite />
        </div>
      </div>
    </>
  );
}
