import './css/App.css'
import React from 'react';

import Navbar from './Navbar'
import ClientForm from './ClientForm'

const App = () => {
    return (
        <div className="main-container">
            <div className="container">
                <div className="navbar-container">
                    <Navbar/>
                </div>
                <ClientForm />
            </div>
        </div>
    )
}

export default App