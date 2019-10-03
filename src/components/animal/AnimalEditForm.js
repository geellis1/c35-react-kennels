import React, { Component } from "react"
import AnimalManager from "../../modules/AnimalManager"
import "./AnimalForm.css"
import EmployeeManager from "../../modules/EmployeeManager"

class AnimalEditForm extends Component {
    //set the initial state
    state = {
      animalName: "",
      breed: "",
      employeeId: "",
      loadingStatus: true,
      employees: []
    };

    handleFieldChange = evt => {
      const stateToChange = {}
      stateToChange[evt.target.id] = evt.target.value
      this.setState(stateToChange)
    }

    updateExistingAnimal = evt => {
      evt.preventDefault()
      this.setState({ loadingStatus: true });
      const editedAnimal = {
        id: this.props.match.params.animalId,
        name: this.state.animalName,
        breed: this.state.breed,
        employeeId: parseInt(this.state.employeeId)
      };
// you had to put parseInt in the employeeId above because the id in json server is a string but we are pasing it an in
// integer, we need to parse it back into a number because we don't want to send a string to database
      AnimalManager.update(editedAnimal)
      .then(() => this.props.history.push("/animals"))
    }

    componentDidMount() {
      EmployeeManager.getAll()
      .then(allEmployees => {
        AnimalManager.get(this.props.match.params.animalId)
      .then(animal => {
        this.setState({
          animalName: animal.name,
          breed: animal.breed,
          employeeId: animal.employeeId,
          loadingStatus: false,
          employees: allEmployees
      });
      })
    })
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
                id="animalName"
                value={this.state.animalName}
              />
              <label htmlFor="animalName">Animal name</label>

              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="breed"
                value={this.state.breed}
              />
              <label htmlFor="breed">Breed</label>
              <select  className="form-control"
  id="employeeId"
  value={this.state.employeeId}
  onChange={this.handleFieldChange}
>
   {this.state.employees.map(employee =>
     <option key={employee.id} value={employee.id}>
       {employee.name}
     </option>
   )}
</select>
            </div>
            <div className="alignRight">
              <button
                type="button" disabled={this.state.loadingStatus}
                onClick={this.updateExistingAnimal}
                className="btn btn-primary"
              >Submit</button>
            </div>
          </fieldset>
        </form>
        </>
      );
    }
}

export default AnimalEditForm