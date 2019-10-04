import React, { Component } from "react"
import OwnersManager from "../../modules/OwnersManager"
import "./OwnerForm.css"

class OwnerEditForm extends Component {
    //set the initial state
    state = {
      name: "",
      dogName: "",
      loadingStatus: true,
    };

    handleFieldChange = evt => {
      const stateToChange = {}
      stateToChange[evt.target.id] = evt.target.value
      this.setState(stateToChange)
    }

    updateExistingEmployee = evt => {
      evt.preventDefault()
      this.setState({ loadingStatus: true });
      const editedOwner = {
        id: this.props.match.params.ownerId,
        name: this.state.name,
        dogName: this.state.dogName
      };

      OwnersManager.update(editedOwner)
      .then(() => this.props.history.push("/owners"))
    }

    componentDidMount() {
      OwnersManager.get(this.props.match.params.ownerId)
      .then(owner => {
          this.setState({
            name: owner.name,
            dogName: owner.dogName,
            loadingStatus: false,
          });
      });
    }

    render() {
      return (
        <>
        <form>
          <fieldset>
            <div className="formgrid">
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="name"
                value={this.state.name}
              />
              <label htmlFor="name">Owner Name</label>

              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="dogName"
                value={this.state.dogName}
              />
              <label htmlFor="title">Who Are You Adopting?</label>
            </div>
            <div className="alignRight">
              <button
                type="button" disabled={this.state.loadingStatus}
                onClick={this.updateExistingEmployee}
                className="btn btn-primary"
              >Submit</button>
            </div>
          </fieldset>
        </form>
        </>
      );
    }
}

export default OwnerEditForm