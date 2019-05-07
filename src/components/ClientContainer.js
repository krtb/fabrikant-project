import React, {Component} from 'react';

import ClientForm from './ClientForm'
import './css/ClientToggle.css'


export class ClientContainer extends React.Component {
    state = {
        viewAddPage: true,
        viewEditPage: false,
    }

    editClient = (props) => {        
        this.setState({
            viewAddPage: false,
            viewEditPage: true,
        })
    }

    addClient = (props) => {
        this.setState({
            viewAddPage: true,
            viewEditPage: false,
        })
    }

    render(){
        return(
            <div>
                <div className="client-toggle-container">
                    <div className="add-client-toggle" onClick={this.addClient}>
                        ADD NEW CLIENT
            </div>
                    <div className="edit-client-toggle" onClick={this.editClient} >
                        EDIT CLIENT
            </div>
                </div>
                <ClientForm pageState={this.state}/>
            </div>
        );
    }
}

export default ClientContainer