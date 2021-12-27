import React from "react";
import { Link } from "react-router-dom";
import HostingServices from "./HostingServices";

export default function ServicesWebsite(){
    const ServicesArr = [
        {
          id: "1",
          src: "https://cdn.schoolstream.com.au/wp-content/uploads/2019/08/Campaign_-Blog-headers-2.png",
          title: "Courses",
          description: "Courses You Can Complete in a Day",
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
        <Link to="/courses">
        <div className="ServicesWebsiteHaneen" >
        {ServicesWebsite}
        
        </div>
        </Link>
    )
}