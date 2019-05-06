import './css/App.css'
import React from 'react';

import Navbar from './Navbar'

const App = () => {
    return (
        <div className="main-container">
            <div className="container">
                <div className="navbar-container">
                    <Navbar/>
                </div>
            </div>
        </div>
    )
}

export default App