import React, { useState } from 'react'
import './register.css'
import { Link } from 'react-router-dom';
export default function Register() {

    const [userName,setUserName]=useState();
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const [repassword,setRepassword]=useState();
    const [massegPassword , setMassegPassword] = useState("");
    const [remassegPassword , setreMassegPassword] = useState("");
    const [massegEmail , setMassegEmail] = useState("");
    const [massegName , setMassegName] = useState("");
    let countLocaleStorge = 0;
    


    const submit =(e) =>{
        e.preventDefault();

        countLocaleStorge = 0;

        if(userName == "")
        {
            setMassegName ("pleese enter your name")
            countLocaleStorge =countLocaleStorge +1;
        } else
        setMassegName ("")

        if (password.length < 6 || password == "" )
        {
            setMassegPassword("the password shoud be more than 5")
            countLocaleStorge =countLocaleStorge +1;

        }else 
        setMassegPassword("")

        if (repassword !== password)
        {
            setreMassegPassword("the password not matching")
            countLocaleStorge =countLocaleStorge +1;
        }else
        setreMassegPassword("")

        if (email == null)
        {
            setMassegEmail("the Email is not validate")
            countLocaleStorge =countLocaleStorge +1;

        }else
        setMassegEmail("")

        
        if(countLocaleStorge === 0)
        {
            console.log("ttttttttt")
            let infoUser={
                email : email,
                userName : userName,
                password : password,
            }
            localStorage.setItem(email,JSON.stringify(infoUser));
            alert("succefully register");
            
        }else 
        console.log("eeeeeeeeeeee")

        // console.log("tttttttt")
    }


    return (
        <div className="RegisterToqa">

        <div className="TitleRegisterAndImg">
        <h3>Own Your Digital Presence</h3>
        <img src="../img/LogInRegestrationimg.png" />
        <p>Grow your website faster by using
        DreamHost as your foundation.</p>
        </div>
        
        <div className="RegisterForm">
        <h2>Create an account</h2>
        <form className='contactRegisterForm'>
        <input type='email' value={email} onChange={(e)=>{setEmail(e.target.value)}} required placeholder='Email'/> 
        <small>{massegEmail} </small> 
        
        <input type='text' value={userName} onChange={(e)=>{setUserName(e.target.value)}} required placeholder='Name'/>
        <small>{massegName} </small> 

        <input type='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}  placeholder='Password'/>
        <small >{massegPassword} </small>
        
        <input type='password' value={repassword} onChange={(e)=>{setRepassword(e.target.value)}} required placeholder='Repeat Password'/>
        <small >{remassegPassword} </small>

        <button onClick={submit} className='submitRegisterForm'>Submit</button>
        </form>
        <p>You have already account ?  
        <Link to="/login"> Login</Link>
        </p>
        </div>
        </div>
    )
}
