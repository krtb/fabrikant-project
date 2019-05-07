import './css/LeftContainer.css'
import React from 'react';

const LeftContainer = () => {
    return(
        <div className="left-container">
            <div className="searchbar-container">
                <button className="clear-button">Clear</button>
            </div>
            <div className="clients-container">
                clients panel
            </div>
        </div>
    )
}

export default LeftContainer