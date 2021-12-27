import React from 'react'
import './Contact.css'
import Navbar from '../Navbar/Navbar'
function Contact() {
    
    return (
        <div>
            
         <div  className='hero-' 
        //  style={{ background: `linear-gradient(190deg, #ffffff , rgba(0, 0, 1, 0)), url('../img/contact.jpg')`,backgroundRepeat:'no-repeat',backgroundSize:'cover', backgroundPosition: 'center'  }}
        > 
         <form className='form-container'>  
            <div className='input-style'>

             <h1 className='title-form' style={{color:'darkblue'}}>Contact Us</h1>
           
            <div className='second-form'>
           <div>
            <div><label>Your Name:</label></div>
            <input type="text" placeholder="Name" id="name" />
            </div>
            <div>
            <div><label>Your Email:</label></div>
            <input htmlFor="email" placeholder="Email" id="email" />
            </div>
            <div>
            <div><label>Your Number:</label></div>
            <input type="text" placeholder="Phone" id="phone" />
            </div>
            </div>

            <div>
            <div ><label>Masseges:</label></div>
            <input className='msg' type="text"  id="msg" />
            </div>

            </div>
           
            
        </form>
             </div>   
       

        </div>
    )
}

export default Contact
