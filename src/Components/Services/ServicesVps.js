import React from "react";
import HostingServices from "./HostingServices";

export default function ServicesVps(){
    const ServicesArr = [
        {
          id: "2",
          src: "../img/VPS.png",
          title: "VPS Hosting",
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
        <div className="ServicesVpsHaneen">
            {ServicesVps}
        </div>
    )
}