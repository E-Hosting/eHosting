import React from "react";
import HostingAll from './HostingAll';
import '../Hosting/VpsHosting.css'

export default function VpsHosting(props){
    const HostingVpsArr=[
        {
            id:'5',
            src :'../img/vps2.png',
            title1:'VPS Business',
            title2:'Built for Small Business',
            description:'',
            price: '$20.00/mo',
            Saveup:'',
            type:'vps'
        },
         {
            id:'6',
            src :'../img/vps1.png',
            title1:'VPS Basic',
            title2:'For new & small websites',
            description:'',
            price: '$10.00/mo',
            Saveup:'',
            type:'vps'
        },
        {
            id:'7',
            src :'../img/VPS.png',
            title1:'VPS Professional',
            title2:'For resource intensive sites',
            description:'',
            price: '$40.00/mo',
            Saveup:'',
            type:'vps'
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