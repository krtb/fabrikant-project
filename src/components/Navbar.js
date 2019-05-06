import './css/Navbar.css'
import React from 'react';
import Logo from '../assets/images/fabrikantLogo5.6.19.png';

const Navbar= () => {
    return(
        <div className='navbar-container'>
            <div className="logo-container">
                <img src={Logo} alt="fabrikant" />
            </div>
        </div>
    )
}

export default Navbar