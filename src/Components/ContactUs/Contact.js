import React from 'react'
import './Contact.css'
import Navbar from '../Navbar/Navbar'
function Contact() {
    
    return (
        <div>
         <div className='container-img'> 
         <form className='form-container'>  
            <div className='input-style'>

             <h1 className='title-form'>Contact Us</h1>
            <div>
            <div ><label>Masseges:</label></div>
            <input className='msg' type="text"  id="msg" />
            </div>
            <div className='second-form'>
           
            <div><label>Your Name:</label></div>
            <input type="text" placeholder="Name" id="name" />
            <div><label>Your Email:</label></div>
            <input htmlFor="email" placeholder="Email" id="email" />
            </div>
            </div>
           
            
        </form>
             </div>   
       

        </div>
    )
}

export default Contact
