import './css/ClientForm.css';
import React from 'react';

import ClientInfo from './ClientInfo';

const ClientForm = () => {
    return(
        <div className="client-form-container">
            <div className="client-form-submit-button">
                <button>Add New Client</button>
            </div>
            <ClientInfo/>
        </div>
    )
}

export default ClientForm