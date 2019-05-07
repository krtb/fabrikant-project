import React from 'react';

const Primary = () => {
    return(
        <div className="client-info-primary">
            <form>
                <div className="inner-form-div">
                    <div className="label-div">
                        <label>
                            First Name:
                    </label>
                    </div>
                    <div className="input-div">
                        <input class="form-input" name="first name" value="" />
                    </div>
                </div>
                <div className="inner-form-div">
                    <div className="label-div">
                        <label>
                            Last Name:
                </label>
                    </div>
                    <div className="input-div">
                        <input class="form-input" name="last name" value="" />
                    </div>
                </div>
                <div className="inner-form-div">
                    <div className="label-div">
                        <label>
                            Email:
                </label>
                    </div>
                    <div className="input-div">
                        <input class="form-input" name="email" value="" />
                    </div>
                </div>
                <div className="inner-form-div">
                    <div className="label-div">
                        <label>
                            Phone:
                </label>
                    </div>
                    <div className="input-div">
                        <input class="form-input" name="phone" value="" />
                    </div>
                </div>
                <div className="inner-form-div">
                    <div className="label-div">
                        <label>
                            Instagram:
            </label>
                    </div>
                    <div className="input-div">
                        <input class="form-input" name="Instagram" value="" />
                    </div>
                </div>
                <div className="inner-form-div">
                    <div className="label-div">
                        <label>
                            Birthdate:
            </label>
                    </div>
                    <div className="input-div">
                        <input class="form-input" name="birthdate" value="" />
                    </div>
                </div>
                <div className="inner-form-div">
                    <div className="label-div">
                        <label>
                            Ringsize:
            </label>
                    </div>
                    <div className="input-div">
                        <input class="form-input" name="ringsize" value="" />
                    </div>
                </div>

            </form>
        </div>
    )
}

export default Primary