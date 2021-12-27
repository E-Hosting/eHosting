import React from "react";
import '../Services/HostingServices.css';

export default function HostingServices (props){



    return(
        <div className="HostingHaneen">
          

          <div className="HostingHaneenImg">
          <img src={props.src} alt={props.title}/>
          </div>
           

            <div className="HostingHaneenInformation">

            <div className="HostingTitleHaneen">
                <h4>{props.title}</h4>
            </div>

            <div className="HostingDescriptionHaneen">
                    <p>{props.description}</p>
            </div>

            <div className="HostingPriceHaneen">
                <p>{props.price}</p>
            </div>
            </div>
            </div>
          
    
    )
}