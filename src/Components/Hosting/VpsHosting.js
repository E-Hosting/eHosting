import React from "react";
import HostingAll from './HostingAll';
import '../Hosting/VpsHosting.css'

export default function VpsHosting(props){
    const HostingVpsArr=[
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

 const HostingVpsArrElement=HostingVpsArr.map((element)=>{
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
        <div className="HostingVpsHaneen">

            <div className="HostingVpstitleHaneen">
                <h2>VPS Hosting Plans</h2>
            </div>

           <div className="HostingVpsArrHaneen">
            {HostingVpsArrElement}
            </div>
        </div>
    )
}