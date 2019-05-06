import './css/Navbar.css'
import React from 'react';

// import farbikantLogo from '../assets/images/fabrikantLogo5.6.19.png'

const Navbar= () => {
    return(
        <div className='navbar-container'>
            <div className="logo-container">
                <img source={require(`../assets/images/fabrikantLogo5.6.19.png`)} />
            </div>
        </div>
    )
}

export default Navbar