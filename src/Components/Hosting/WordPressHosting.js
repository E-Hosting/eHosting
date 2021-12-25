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