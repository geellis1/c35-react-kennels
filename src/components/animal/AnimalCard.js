/*When viewing the Animals section, AnimalCard.js will load up and invoke render().
The AnimalCard component is basically creating a card component for each individual
animal on the animals list*/

import React, { Component } from 'react';
import { Link } from "react-router-dom";
//if using a link you have to import this to make the link work //


class AnimalCard extends Component {

  render() {
    console.log(this.props.animal)
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./dog.svg')} alt="My Dog" />
          </picture>
          <h3>Name: <span className="card-petname">{this.props.animal.name}</span></h3>
          <p>Breed: {this.props.animal.breed}</p>
          <button type="button" onClick={() => this.props.deleteAnimal(this.props.animal.id)}>Adopt Me Now!</button>
          <Link to={`/animals/${this.props.animal.id}`}><button>Details</button></Link>
          <button type="button"
        onClick={() => {this.props.history.push(`/animals/${this.props.animal.id}/edit`)}}>Edit</button>
        </div>
      </div>
    );
  }
}

export default AnimalCard;