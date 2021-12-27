import React from "react";
import HostingServices from "./HostingServices";
import '../Services/Services.css';
import {Link} from 'react-router'
// import { Link} from "react-router-dom";

// export default function NewPathWordPress(){
//   const navigate=useNavigate();
//   const handleWordPress = () => {
//     navigate('/WorpressHosting');
//   };

//    return <ServicesWord handleWordPress={handleWordPress}/>
// }


export default function ServicesWord() {
  const ServicesArr = [
    {
      id: "0",
      src: "../img/WordPress.png",
      title: "WordPress Hosting",
      description: "Get up and running fast with WordPress. Optimized for performance and preconfigured for easy maintenance.",
      price: "Starting at: $1.99/mo",
    }
  ];
  // const ServicesWord = ServicesArr.map((element) => {
    return (
      <div>
      <HostingServices
        id={ServicesArr.id}
        src={ServicesArr.src}
        title={ServicesArr.title}
        description={ServicesArr.description}
        price={ServicesArr.price}
      />
      </div>
    );
  // }
  // );

  // const handleWordPressClick=()=>{
  //  props.handleWordPress();
  // }

  // return (
  // // <Link to="/login"> 
  //  <div className="ServicesWordHaneen" >
  //     {ServicesWord}
  //  </div>
  // //  </Link>
  // );
}
