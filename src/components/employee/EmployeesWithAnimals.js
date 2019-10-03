import React, { Component } from 'react'
import EmployeeManager from '../../modules/EmployeeManager'
import AnimalCard from '../animal/AnimalCard'
import AnimalManager from '../../modules/AnimalManager'

class EmployeeWithAnimals extends Component {
    state = {
      employee: {},
      animals: []
    }
/*this is a function, that  we are telling it to look at the id of the animal in animal manager and then delete
the animal with that id and then we are looking at the employee manager and the method within employee manager
called getWithAnimals (fetch call) and then takes that result and sets a new state for employee
and animal. APIResult is what we are passing -the placeholder. It is the result of the getWithanimals fetch call */

    deleteAnimal = id => {
        AnimalManager.delete(id)
        .then(() => {
            EmployeeManager.getWithAnimals(this.props.match.params.employeeId)
            .then((APIResult) => {
            this.setState({
              employee: APIResult,
              animals: APIResult.animals,
            })
          })
        })
}

//componentdidmount is  a react function that is preparing the function to be run an object aka the animal//
    componentDidMount() {
    this.deleteAnimal()
    }

    render(){
        return (
          <div className="card">
            <p>Employee: {this.state.employee.name}</p>
            {this.state.animals.map(animal =>
              <AnimalCard
                key={animal.id}
                animal={animal}
                deleteAnimal={this.deleteAnimal}
                {...this.props}
              />
            )}
          </div>
        )
      }
    }

export default EmployeeWithAnimals;