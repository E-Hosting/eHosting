import React from "react";
import HostingAll from './HostingAll';
import '../Hosting/WordPressHosting.css'

export default function WordPressHosting(props){
    const HostingWordArr=[
        {
            id:'0',
            src :'../img/word1.png',
            title1:'WORDPRESS FOR NEW SITES',
            title2:'WordPress Basic',
            description:'The most affordable way to get all the basics for your WordPress website — perfect if you’re new to WordPress.',
            price: '$1.99/mo',
            Saveup:'Save up to 68% with a 3-Year Plan',
            wordpress:true,
        },
          {
            id:'1',
            src :'../img/word2.png',
            title1:'MANAGED WORDPRESS',
            title2:'DreamPress',
            description:'Fast, optimized WordPress Hosting with professional staging, daily & on-demand backups, custom caching + email.',
            price: '$16.95/mo',
            Saveup:'Save up to 17% with an Annual Plan',
            wordpress:true,
        },
         {
            id:'2',
            src :'../img/word3.png',
            title1:'POWER MANY SITES',
            title2:'VPS for WordPress',
            description:'The ideal way to support 5 WordPress websites. A high-performance platform with isolated resources and more backend control.',
            price: '$27.50/mo',
            Saveup:'Save up to 8% with an Annual Plan',
            wordpress:true,
        },
    ]
    // const HostingArr=localStorage.getItem('HostingArr')
    // console.log(HostingArr)
    
//    const WordPressHosting= HostingWordArr.filter((element)=>element.type==='wordpress').map((element)=>{
//         return  <HostingAll
//                    id={element.id}
//                    src={element.src}
//                    title1={element.title1}
//                    title2={element.title2}
//                    description={element.description}
//                    price={element.price}
//                    Saveup={element.Saveup}
//                    />
//       } )

 const HostingWordArrElement=HostingWordArr.map((element)=>{
    return  <HostingAll id={element.id}
                       src={element.src}
                       title1={element.title1}
                       title2={element.title2}
                       description={element.description}
                       price={element.price}
                       Saveup={element.Saveup}
                       />
})



    return(
        <div className="HostingWordHaneen">

            <div className="HostingWordtitleHaneen">
                <h2>WordPress Hosting Plans</h2>
            </div>

           <div className="HostingWordArrHaneen">
            {HostingWordArrElement}
            </div>
        </div>
    )
}