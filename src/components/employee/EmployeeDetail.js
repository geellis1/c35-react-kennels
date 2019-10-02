import React, { Component } from 'react';
import EmployeeManager from '../../modules/EmployeeManager';
// import './AnimalDetail.css'

class EmployeeDetail extends Component {

    state = {
        name: "",
        title: "",
        loadingStatus: true,
    }

    handleDelete = () => {
        //invoke the delete function in OwnerManger and re-direct to the owner list.
        this.setState({loadingStatus: true})
        EmployeeManager.delete(this.props.ownerId)
        .then(() => this.props.history.push("/employees"))
    }

    componentDidMount(){
        console.log("LocationDetail: ComponentDidMount");
        //get(id) from EmployeeManager and hang on to that data; put it into state
       EmployeeManager.get(this.props.employeeId)
        .then((employee) => {
            this.setState({
                name: employee.name,
                title: employee.title,
                loadingStatus: false
            });
        });
    }

    render() {
      return (
        <div className="card">
          <div className="card-content">
            <picture>
              <img src={require('./girl.svg')} alt="My Dog" />
            </picture>
            <h3>Name: <span style={{ color: 'darkslategrey' }}>{this.state.name}</span></h3>
            <p>Title: {this.state.title}</p>
            <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Fire Employee!</button>
          </div>
        </div>
      );
    }
}

export default EmployeeDetail;