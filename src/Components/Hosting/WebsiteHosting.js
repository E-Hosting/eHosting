import React from "react";
import HostingAll from './HostingAll';
import '../Hosting/WebsiteHosting.css'

export default function WebsiteHosting(props){
    const HostingWebsiteArr=[
        {
            id:'3',
            src :'../img/Website.png',
            title1:'SAVE 68% Over Monthly',
            title2:'Shared Starter',
            description:'A great place to start! Website hosting with an entry level price for new sites, including WordPress.',
            price: '$2.59/mo',
            Saveup:'',
            type:'website'
        },
         {
            id:'4',
            src :'../img/website1.png',
            title1:'SAVE 72% Over Monthly',
            title2:'Shared Unlimited',
            description:'Great for multiple websites, including WordPress, and anyone who wants email hosting @ your domain.',
            price: '$3.95/mo',
            Saveup:'',
            type:'website'
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

 const HostingWebsiteArrElement=HostingWebsiteArr.map((element)=>{
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
        <div className="HostingWebsiteHaneen">

            <div className="HostingWebsitetitleHaneen">
                <h2>Website Hosting Plans</h2>
            </div>

           <div className="HostingWebsiteArrHaneen">
            {HostingWebsiteArrElement}
            </div>
        </div>
    )
}