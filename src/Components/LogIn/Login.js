import React, { useState } from 'react';
import './login.css';
import { Link,useNavigate } from 'react-router-dom';

export default function NewPath(){
    const navigate=useNavigate();
    const handelUseNavigate=()=>{
 localStorage.getItem("timeOfCourse")? navigate('/OurCourse'):navigate("/")
       
       
    }
    return <Login handelUseNavigate={handelUseNavigate}/>
}

 function Login(props) {
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
                props.handelUseNavigate();
                break;
              
            }else {
                useerrorMessage('The Email  or password incorrect !!')
            }
        }


    }
    return (
        <div className="LogInToqa">

        <div className="TitleLogInAndImg">
        <h3>Own Your Digital Presence</h3>
        <img src="../img/LogInRegestrationimg.png" alt="Login picture" />
        <p>Grow your website faster by using
        DreamHost as your foundation.</p>
        </div>
        
        <div className="LogInForm">
        <form className='contactLogInForm'>

        <h3>Sign in</h3>
        <input type='email' value={email} onChange={(e)=>{setEmail(e.target.value)}}  placeholder='Email'/>
        <input type='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='Password'/>
        <small>{errorMessage} </small> 
        

        <button onClick={submit} className='submitLoginForm'>Submit</button>

        </form>
        <p>You dont have already account ?  
        <Link to="/register"> Sign Up</Link>
        </p>
        </div>
        </div>
    )
}
