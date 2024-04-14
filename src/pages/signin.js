import React from 'react';
import './signin.css';
import googleicon from './Assets/Group 24.jpg';
import appleicon from './Assets/Path 15.jpg';
import lady from './Assets/Rectangle 26.png';
import { FaEyeSlash } from "react-icons/fa";
import {Link} from "react-router-dom";

function Signin(){
    return(
        <div className='container'>
            <div className='header'>
                <div className= 'logo'> <b>Your Logo</b></div>
            </div>
            <div className='inputs'>
                <div className = "signin"> <b>Sign in</b> </div>
                <div className = "email">
                    <input type = "text" placeholder='Enter email or user name'/>
                </div>
                <div className = "password1">
                    <input type = "text" className = "passwordfield" placeholder='Password'/>
                    <span className = 'eyeslash'><FaEyeSlash/></span>
                </div>
                <div className='forgotpassword'> <span className = 'forgotpasswordtext'>Forgot Password?</span></div>
                <div className='loginButton'>
                    <button>Login</button>
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
                    If you don't have an account, register. <br/>
                    <div className = 'lowerregistertext'>You can <Link to = "/signup"><span className = 'registerhere'>Register Here!</span></Link> </div>
                </div>
                <div className='splashimage'>
                    <img src = {lady} alt = " "/>
                </div>
            </div>
        </div>
    )
}
export default Signin;