import React, { Component } from 'react';
import { Link } from "react-router-dom";

class LocationCard extends Component {
    render() {
      console.log(this.props.user)
      return (
        <div className="card">
          <div className="card-content">
            <picture>
              <img src={require('./veterinarian.svg')} alt="Vet" />
            </picture>
            <h3>Name: <span className="card-locationame">{this.props.locale.name}</span></h3>
            <p>Address: {this.props.locale.address}</p>
            <Link to={`/locations/${this.props.locale.id}`}><button>Details</button></Link>
            {(this.props.user) ?
            <button type="button" onClick={() => this.props.deleteLocation(this.props.locale.id)}>Remove Location</button>
            : ""
            }
          </div>
        </div>
      );
    }
  }


  export default LocationCard;