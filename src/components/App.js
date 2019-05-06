import './css/App.css'
import React from 'react';

import Navbar from './Navbar'
import ClientContainer from './ClientContainer';

const App = () => {
    return (
        <div className="main-container">
            <div className="container">
                <Navbar/>
                <ClientContainer />
            </div>
        </div>
    )
}

export default App