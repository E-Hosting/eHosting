import React from "react";
import HostingAll from "./HostingAll";
import WordPressHosting from "./WordPressHosting";
import '../Hosting/Hosting.css'

export default function Hosting(){
   const HostingArr=[
       {
           id:'0',
           src :'../img/word1.png',
           title1:'WORDPRESS FOR NEW SITES',
           title2:'WordPress Basic',
           description:'The most affordable way to get all the basics for your WordPress website — perfect if you’re new to WordPress.',
           price: '$1.99/mo',
           Saveup:'Save up to 68% with a 3-Year Plan',
           type:'wordpress'
       },
         {
           id:'1',
           src :'../img/word2.png',
           title1:'MANAGED WORDPRESS',
           title2:'DreamPress',
           description:'Fast, optimized WordPress Hosting with professional staging, daily & on-demand backups, custom caching + email.',
           price: '$16.95/mo',
           Saveup:'Save up to 17% with an Annual Plan',
           type:'wordpress'
       },
        {
           id:'2',
           src :'../img/word3.png',
           title1:'POWER MANY SITES',
           title2:'VPS for WordPress',
           description:'The ideal way to support 5 WordPress websites. A high-performance platform with isolated resources and more backend control.',
           price: '$27.50/mo',
           Saveup:'Save up to 8% with an Annual Plan',
           type:'wordpress'
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
   ]
//    localStorage.setItem('HostingArr',JSON.stringify(HostingArr))
        localStorage.setItem('HostingArr',JSON.stringify(HostingArr));

    const Hosting=HostingArr.map((element)=>{
      return  <HostingAll id={element.id}
                    src={element.src}
                    title1={element.title1}
                    description={element.description}
                    price={element.price}/>
    })

    return(
     
        <div className="HostingCoures">
     
             {Hosting}
        {/* <WordPressHosting  HostingArr={HostingArr}/> */}
        </div>
       
    )
}