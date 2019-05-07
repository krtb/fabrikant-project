import './css/ClientToggle.css'
import React from 'react'

const ClientToggle= (props) => {

    return(
        <div>
        <div className="client-toggle-container">
            <div className="add-client-toggle" onClick={props.onClick}>
                ADD NEW CLIENT
            </div>
                <div className="edit-client-toggle" onClick={props.onClick}>
                EDIT CLIENT
            </div>
        </div>
        </div>
    )
}

export default ClientToggle