import './css/App.css'
import React from 'react';

import Navbar from './Navbar'

const App = () => {
    return (
        <div class="main-container">
            <div class="container">
                <div class="navbar-container">
                    <Navbar/>
                </div>
            </div>
        </div>
    )
}

export default App