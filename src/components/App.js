import './css/App.css'
import React from 'react';

import Navbar from './Navbar'
import ClientForm from './ClientContainer'
import ClientContainer from './ClientContainer';

const App = () => {
    return (
        <div className="main-container">
            <div className="container">
                <div className="navbar-container">
                    <Navbar/>
                </div>
                <ClientContainer />
            </div>
        </div>
    )
}

export default App