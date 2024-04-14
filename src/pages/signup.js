import React from 'react';
import './signup.css';
import googleicon from './Assets/Group 24.jpg';
import appleicon from './Assets/Path 15.jpg';
import lady from './Assets/Rectangle 26.png';
import { FaEyeSlash } from "react-icons/fa";
import {Link} from "react-router-dom";

function Signup(){
    return(
        <div className='container'>
            <div className='header'>
                <div className= 'logo'> <b>Your Logo</b></div>
            </div>
            <div className='inputs'>
                <div className = "signin"> <b>Sign Up</b> </div>
                <div className = "email">
                    <input type = "text" placeholder='Enter email or user name'/>
                </div>
                <div className = "username">
                    <input type = "text" placeholder='Create User name'/>
                </div>
                <div className = "contact">
                    <input type = "text" placeholder='Contact number'/>
                </div>
                <div className = "password">
                    <input type = "text" placeholder='Password'/>
                    <span className = 'eyeslash-one'><FaEyeSlash/></span>
                </div>
                <div className = "confirmpassword">
                    <input type = "text" placeholder='Confirm Password'/>
                    <span className = 'eyeslash-two'><FaEyeSlash/></span>
                </div>
                <div className="loginButton">
                    <button>Register</button>
                </div>
                <div className = 'alternatesignin'>
                    <div>or continue with</div>
                    <img src = {googleicon} alt = " "/>
                    <img src = {appleicon} alt = " "/>
                </div>
            </div>
            <div className='splashtext'>
                <div className = 'signinsplashtext'> 
                <div className = 'uppersplashtext'> <b>Sign in to</b> </div>
                <div className = 'lowersplashtext'>Lorem Ipsum is simply</div> 
                </div>
                <div className='registertext'>
                    If you already have an account <br/>
                    <div className = 'lowerregistertext'>You can <Link to = "/"> <span className = 'registerhere'>Login Here!</span> </Link> </div>
                </div>
                <div className='splashimage'>
                    <img src = {lady} alt = " "/>
                </div>
            </div>
        </div>
    )
}
export default Signup;