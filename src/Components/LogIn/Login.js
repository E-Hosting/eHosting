import React, { useState } from 'react';
import './login.css';

export default function Login() {
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const [errorMessage ,useerrorMessage]=useState();
    


    const submit =(e)=> {
        e.preventDefault();
    
        for (let i=0;i<=localStorage.length;i++){
            const emailLocalstorge=JSON.parse(localStorage.getItem(localStorage.key(i)));
            console.log(emailLocalstorge)

            if(emailLocalstorge.email===email  && emailLocalstorge.password === password){
                console.log('login TTTTTTT ')
                localStorage.setItem('uerLogin',JSON.stringify(emailLocalstorge))
                alert("successful login")
                break;
            }else {
                alert('The username or password incorrect !!')
                // seterrorMessage()
            }
        }


    }
    return (
        <div className="LogInToqa">

        <div className="TitleLogInAndImg">
        <h3>Own Your Digital Presence</h3>
        <img src="../img/LogInRegestrationimg.png" />
        <p>Grow your website faster by using
        DreamHost as your foundation.</p>
        </div>
        
        <div className="LogInForm">
        <form className='contactLogInForm'>

        <h3>LogIn Form</h3>
        <input type='email' value={email} onChange={(e)=>{setEmail(e.target.value)}}  placeholder='Email'/>
        <input type='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='Password'/>
        <small>{errorMessage} </small> 
        

        <button onClick={submit} className='submitLoginForm'>Submit</button>

        </form>
        <p>You dont have already account ?  
        <a href="#"> Sign Up</a>
        </p>
        </div>
        </div>
    )
}
