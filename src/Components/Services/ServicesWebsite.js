import React from "react";
import HostingServices from "./HostingServices";

export default function ServicesWebsite(){
    const ServicesArr = [
        {
          id: "1",
          src: "../img/Website.png",
          title: "Website Hosting",
          description: "Shared Website Hosting gives you a free domain name, fast SSD storage and email hosting for your website",
          price: "Starting at: $1.99/mo",
        },
    ]  
    
    const ServicesWebsite=ServicesArr.map((element)=>{
        return <HostingServices
                id={element.id}
                src={element.src}
                title={element.title}
                description={element.description}
                price={element.price}/>

        
    })
    return(
        <div className="ServicesWebsiteHaneen">
               {ServicesWebsite}
        </div>
    )
}