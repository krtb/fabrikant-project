import React, {Component} from 'react';

import ClientToggle from './ClientToggle';
import ClientForm from './ClientForm'

export class ClientContainer extends React.Component {
    state = {
        viewDifferentPage: false,
    }

    changePage = () => {
        console.log('is clicked!');
        this.setState({
            viewDifferentPage: !this.state.viewDifferentPage
        })
    }

    render(){
        return(
            <div>
                <ClientToggle onClick={this.changePage} />
                <ClientForm viewDifferentPage={this.state.viewDifferentPage} />
            </div>
        );
    }
}

export default ClientContainer