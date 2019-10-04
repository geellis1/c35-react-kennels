import React, { Component } from 'react';
import { Link } from "react-router-dom";

class OwnerCard extends Component {
    render() {
      return (
        <div className="card">
          <div className="card-content">
            <picture>
              <img src={require('./man.svg')} alt="Vet" />
            </picture>
            <h3>Name: <span className="card-ownerName">{this.props.owner.name}</span></h3>
            <p>Dog Name: {this.props.owner.dogName}</p>
            <button type="button" onClick={() => this.props.deleteOwner(this.props.owner.id)}>I've Adopted!</button>
            <Link to={`/owners/${this.props.owner.id}`}><button>Details</button></Link>
            <button type="button"
        onClick={() => {this.props.history.push(`/owners/${this.props.owner.id}/edit`)}}>Edit</button>
          </div>
        </div>
      );
    }
  }



  export default OwnerCard;