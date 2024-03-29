import React, { Component } from 'react';
import { Link } from "react-router-dom";

class LocationCard extends Component {
    render() {
      return (
        <div className="card">
          <div className="card-content">
            <picture>
              <img src={require('./veterinarian.svg')} alt="Vet" />
            </picture>
            <h3>Name: <span className="card-locationame">{this.props.location.name}</span></h3>
            <p>Address: {this.props.location.address}</p>
            <button type="button" onClick={() => this.props.deleteLocation(this.props.location.id)}>Remove Location</button>
            <Link to={`/locations/${this.props.location.id}`}><button>Details</button></Link>
          </div>
        </div>
      );
    }
  }


  export default LocationCard;