import './css/ClientForm.css';
import React from 'react';

import ClientInfo from './ClientInfo';
import LeftContainer from './LeftContainer';

const ClientForm = (props) => {
    console.log('client form', props.pageState.viewAddPage);
    
    return(
        <div className="client-form-container">
            <div className="client-form-submit-button">
            {
                    props.pageState.viewAddPage ?
                        <button>Add New Client</button> :
                        <button>Edit Client</button> 
            }

            </div>
            <ClientInfo/>
        </div>
    )
}

export default ClientForm