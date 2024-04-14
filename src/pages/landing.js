import React from 'react';
import './landing.css';
import notif from './Assets/Group 3.jpg';
import settings from './Assets/Group 4.jpg';
import christina from './Assets/pexels-christina-morillo-1181690 1.png';
import { IoSearch } from "react-icons/io5";
import bankdash from './Assets/bankdash.png'

function Landing(){
    return(
        <div className='container'>
            <div className='navbar'>
                <div className='header'>Overview</div>
                <div className = 'search-box'>
                    <input className='search-field' placeholder = 'Search for something'/>
                    <div className = 'search-icon'> <IoSearch color='8BA3CB' size={20}/></div>
                </div>
                <div className='settings-icon'> <img src = {settings} alt = " "/></div>
                <div className='notif-icon'> <img src = {notif} alt = " "/></div>
                <div className='profile-icon'><img src = {christina} alt = " "/></div>
            </div>
            <div className='sidebar'>
                <div className='bankdashlogo'><img src = {bankdash} alt = " "/></div>
                <div className='bankdash'>BankDash</div>
                <div className='dashboard'>Dashboard</div>
                <div className='transactions'>Transactions</div>
                <div className='accounts'>Accounts</div>
                <div className='investments'>Investments</div>
                <div className='creditcards'>Credit Cards</div>
                <div className='loans'>Loans</div>
                <div className='services'>Services</div>
                <div className='privileges'>My Privileges</div>
                <div className='settings'>Settings</div>
            </div>
        </div>
    )
}
export default Landing;