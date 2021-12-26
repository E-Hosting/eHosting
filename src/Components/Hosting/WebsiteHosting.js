import React from "react";
import HostingAll from './HostingAll';
import '../Hosting/WebsiteHosting.css'

export default function WebsiteHosting(props){
    const HostingWebsiteArr=[
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