import React from "react";
import { Link } from "react-router-dom";
import HostingServices from "./HostingServices";

export default function ServicesVps(){
    const ServicesArr = [
        {
          id: "2",
          src: "../img/VPS.png",
          title: "Meeting",
          description:"Virtual Private Servers with ultra-fast SSDs and flexibility with HTTP/2, Ubuntu, IPv6, Nginx, Node.js and more.",
          price: "Starting at: $10.00/mo",
        },
      ];

    const  ServicesVps=ServicesArr.map((element)=>{
     return    <HostingServices
               id={element.id}
               src={element.src}
               title={element.title}
               description={element.description}
               price={element.price}/>
     
    })

    return(
      <Link to="/Meeting">
      <div className="meeting-section">
      {ServicesVps}
      </div>
      </Link>
    )
}