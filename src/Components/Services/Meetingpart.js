import React from "react";
import { Link } from "react-router-dom";
import HostingServices from "./HostingServices";

export default function ServicesVps(){
    const ServicesArr = [
        {
          id: "2",
          src: "https://www.softwareone.com/-/media/global/social-media-and-blog/hero/whats-the-best-way-to-approach-huddle-spaces-and-small-meeting-rooms-hero.jpg?rev=0bba0501afe24332a45efd66eb684d10&sc_lang=en&hash=EB941A8344E242371E0E5C0F24F91CE1",
          title: "Book a meeting",
          description:"Schedule your meetings and appointments faster",
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