import './css/ClientToggle.css'
import React from 'react'

const ClientToggle= () => {
    return(
        <div>
        <div className="client-toggle-container">
            <div className="add-client-toggle">
                ADD NEW CLIENT
            </div>
            <div className="edit-client-toggle">
                EDIT CLIENT
            </div>
        </div>
        </div>
    )
}

export default ClientToggle