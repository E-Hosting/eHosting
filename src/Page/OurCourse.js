import React from "react";
import { Link,useNavigate } from "react-router-dom";
import Calender from "../Components/Calender/Calender";
import Hosting from "../Components/Hosting/Hosting";
import HostingAll from "../Components/Hosting/HostingAll";
import '../Page/OurCourse.css'
import CourseDateils from "./CourseDateils";





export default function OurCourse(props){
    
 

  
        const TitleCourse=localStorage.getItem("TitleCourse")
        ?JSON.parse(localStorage.getItem("TitleCourse")):[];
    
       console.log(TitleCourse);

       console.log(TitleCourse.id);
       console.log(TitleCourse.title1)

    return(

        <div className="OurCourseMain">
        
        <div className="OurCourseTitle">
         <h1>OurCourse</h1>
         </div>

         <div className="OurCourseServiceMain">

         <div className="OurCourseHosting ">
        <CourseDateils 
                    id={TitleCourse.id}
                    src={TitleCourse.src}
                    title1={TitleCourse.title1}
                    description={TitleCourse.description}
                   price={TitleCourse.price}  />
        </div>

        <div className="CalenderOurCourse">
         <Calender/>
       </div>

        </div>

        </div>
    )
}