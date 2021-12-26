import React from "react";
import HostingAll from "./HostingAll";
import "../Hosting/Hosting.css";
import { Link } from "react-router-dom";
export default function Hosting() {
  const HostingArr = [
    {
      id: "0",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png",
      title1: "JavaScript",
      title2: "WordPress Basic",
      description:
        "JavaScript is the world's most popular programming language. JavaScript is the programming language of the Web.",
      price: "$1.99/mo",
      Saveup: "Save up to 68% with a 3-Year Plan",
      type: "wordpress",
    },
    {
      id: "1",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/640px-Python-logo-notext.svg.png",
      title1: "Python",
      title2: "DreamPress",
      description:
        "Python is a popular programming language. Python can be used on a server to create web applications.",
      price: "$16.95/mo",
      Saveup: "Save up to 17% with an Annual Plan",
      type: "wordpress",
    },
    {
      id: "2",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png",
      title1: "TypeScript",
      title2: "VPS for WordPress",
      description:
        "TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale",
      price: "$27.50/mo",
      Saveup: "Save up to 8% with an Annual Plan",
      type: "wordpress",
    },
    //     {
    //        id:'3',
    //        src :'../img/Website.png',
    //        title1:'SAVE 68% Over Monthly',
    //        title2:'Shared Starter',
    //        description:'A great place to start! Website hosting with an entry level price for new sites, including WordPress.',
    //        price: '$2.59/mo',
    //        Saveup:'',
    //        type:'website'
    //    },
    //     {
    //        id:'4',
    //        src :'../img/website1.png',
    //        title1:'SAVE 72% Over Monthly',
    //        title2:'Shared Unlimited',
    //        description:'Great for multiple websites, including WordPress, and anyone who wants email hosting @ your domain.',
    //        price: '$3.95/mo',
    //        Saveup:'',
    //        type:'website'
    //    },

    //     {
    //        id:'5',
    //        src :'../img/vps2.png',
    //        title1:'VPS Business',
    //        title2:'Built for Small Business',
    //        description:'',
    //        price: '$20.00/mo',
    //        Saveup:'',
    //        type:'vps'
    //    },
    //     {
    //        id:'6',
    //        src :'../img/vps1.png',
    //        title1:'VPS Basic',
    //        title2:'For new & small websites',
    //        description:'',
    //        price: '$10.00/mo',
    //        Saveup:'',
    //        type:'vps'
    //    },
    //    {
    //        id:'7',
    //        src :'../img/VPS.png',
    //        title1:'VPS Professional',
    //        title2:'For resource intensive sites',
    //        description:'',
    //        price: '$40.00/mo',
    //        Saveup:'',
    //        type:'vps'
    //    },
  ];
  //    localStorage.setItem('HostingArr',JSON.stringify(HostingArr))
  localStorage.setItem("HostingArr", JSON.stringify(HostingArr));

  const Hosting = HostingArr.map((element) => {
    return (
      <HostingAll
        id={element.id}
        src={element.src}
        title1={element.title1}
        description={element.description}
        price={element.price}
      />
    );
  });

  return (
    <>
        <ol class="breadcrumb customBreadcrumb">
        <li class="breadcrumb-item"><Link to="/">Home</Link></li>
        <li class="breadcrumb-item"> <Link to="/programs">Programs & Courses</Link> </li>
        <li class="breadcrumb-item active" aria-current="page">Courses</li>
        </ol>
          <h1 className="text-center">Courses</h1>
      <div className="HostingCoures">
        {Hosting}
        {/* <WordPressHosting  HostingArr={HostingArr}/> */}
      </div>
    </>
  );
}
