import React from "react";
import ServicesVps from "./ServicesVps";
import ServicesWebsite from "./ServicesWebsite";
import ServicesWord from "./ServicesWord";
import './Services.css'

// <ServicesWord/>
export default function Services(){
    return(
        <div className="ServicesArr">

    <div className="ElementServicesArrTitle">
      <h2>Hosting Services</h2>
    </div>

    <div className="ServicesArrParagraph">
      <p>Choose a platform below.</p>
    </div>

    <div className="ServicesArrHosting">
       <ServicesWebsite/>
       <ServicesVps/>
    </div>
      
  </div>
    )
}