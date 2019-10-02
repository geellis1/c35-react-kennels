import React, { Component } from 'react';
import OwnersManager from '../../modules/OwnersManager';
import './OwnerForm.css'

class OwnerForm extends Component {
    state = {
        Name: "",
        dogName: "",
        loadingStatus: false,
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    /*  Local method for validation, set loadingStatus, create animal bject, invoke the AnimalManager post method, and redirect to the full animal list
    */
    constructNewOwner = evt => {
        evt.preventDefault();
        if (this.state.name === "" || this.state.dogName === "") {
            window.alert("Please input an location name and address");
        } else {
            this.setState({ loadingStatus: true });
            const owner = {
                name: this.state.name,
                dogName: this.state.dogName,
            };

            // Create the animal and redirect user to animal list
            OwnersManager.post(owner)
            .then(() => this.props.history.push("/owners"));
        }
    };

    render(){

        return(
            <>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="name"
                        placeholder="Owner Name"
                        />
                        <label htmlFor="name">Owner Name</label>
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="dogName"
                        placeholder="Pet Name"
                        />
                        <label htmlFor="dogName">Who are you adopting?</label>
                    </div>
                    <div className="alignRight">
                        <button
                        type="button"
                        disabled={this.state.loadingStatus}
                        onClick={this.constructNewOwner}
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
        )
    }
}

export default OwnerForm