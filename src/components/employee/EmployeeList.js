import React, { Component } from 'react'
    //import the components we will need
    import EmployeeCard from './EmployeeCard'
    import EmployeeManager from '../../modules/EmployeeManager'

    class EmployeeList extends Component {
        //define what this component needs to render
        state = {
            employees: [],
        }
        deleteEmployee = id => {
            EmployeeManager.delete(id)
            .then(() => {
              EmployeeManager.getAll()
              .then((newEmployees) => {
                this.setState({
                    employees: newEmployees
                })
              })
            })
    }
/*componentDidMount is a function of react we can't change the name of but what it is saying
is basically it is an event listener that is holding a function that won't run until after
a render happens and then it will also render again. */
    componentDidMount(){
        console.log("EMPLOYEE LIST: ComponentDidMount");
        //getAll from AnimalManager and hang on to that data; put it in state
        EmployeeManager.getAll()
        .then((employees) => {
            this.setState({
                employees: employees
            })
        })
    }
//employeeCard function also has a render component tied to it that will be run again too.
    render(){
        console.log("EMPLOYEE LIST: Render");
        console.log(this.state.employees)

        return(
            <>
            <section className="section-content">
  <button type="button"
      className="btn"
      onClick={() => {this.props.history.push("/employees/new")}}>
      Add New Employee
  </button>
</section>
            <div className="container-cards">
                {this.state.employees.map(employee => <EmployeeCard
                employee={employee}
                key={employee.id}
                deleteEmployee={this.deleteEmployee}/>)}
            </div>
            </>
        )
    }
}

export default EmployeeList