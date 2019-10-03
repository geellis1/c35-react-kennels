import React, { Component } from 'react';
import { Link } from "react-router-dom";

class EmployeeCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./girl.svg')} alt="Employee" />
          </picture>
          <h3>Name: <span className="card-employeename">{this.props.employee.name}</span></h3>
          <p>Title: {this.props.employee.title}</p>
          <button type="button" onClick={() => this.props.deleteEmployee(this.props.employee.id)}>Fire Employee</button>
          <Link to={`/employees/${this.props.employee.id}/details`}><button>Details</button></Link>
        </div>
      </div>
    );
  }
}



export default EmployeeCard;