import React from "react";
// import '../Services/HostingServices.css';
import '../Hosting/HostingAll.css'

export default function HostingAll (props){



    return(
        <div className="HostingAllHaneen">
          

          <div className="HostingAllHaneenImg">
          <img src={props.src} alt={props.title}/>
          </div>
           

            <div className="HostingAllHaneenInformation">

                <div className="HostingAllTitle1Haneen">
                    <p>{props.title1}</p>
                </div>

            <div className="HostingAllTitle2Haneen">
                <h4>{props.title2}</h4>
            </div>

            <div className="HostingAllDescriptionHaneen">
                    <p>{props.description}</p>
            </div>

            <div className="HostingAllPriceHaneen">
                <p>{props.price}</p>
            </div>
           
           <div className="HostingAllsaveupHaneen">
               <p>{props.Saveup}</p>
           </div>

            </div>
            
            </div>
          
    
    )
}