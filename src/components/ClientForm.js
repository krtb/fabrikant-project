import './css/ClientForm.css';
import React from 'react';

import ClientInfo from './ClientInfo';

const ClientForm = (props) => {
    console.log('client form', props);
    
    return(
        <div className="client-form-container">
            <div className="client-form-submit-button">
            {
                    props.viewDifferentPage ?
                        <button>Add New Client</button> :
                        <button>Edit Client</button>
            }
            </div>
            <ClientInfo/>
        </div>
    )
}

export default ClientForm