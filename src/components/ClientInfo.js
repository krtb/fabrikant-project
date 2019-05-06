import './css/ClientInfo.css'
import React from 'react';

const ClientInfo = () => {
    return (
        <div>
        <div className="client-info-primary">
            <form>
                <div className="label-div">
                    <label>
                        First Name:
                    </label>
                </div>
                <div className="input-div">
                    <input class="form-input" name="first name" value="" />
                </div>
            </form>
        </div>
        <div className="client-info-secondary">
            secondary
        </div>
        </div>
    )
}

export default ClientInfo