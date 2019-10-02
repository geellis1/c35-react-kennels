import React, { Component } from 'react';
import OwnersManager from '../../modules/OwnersManager';
// import './AnimalDetail.css'

class OwnerDetail extends Component {

    state = {
        name: "",
        dogName: "",
        loadingStatus: true,
    }

    handleDelete = () => {
        //invoke the delete function in OwnerManger and re-direct to the owner list.
        this.setState({loadingStatus: true})
        OwnersManager.delete(this.props.ownerId)
        .then(() => this.props.history.push("/owners"))
    }

    componentDidMount(){
        console.log("LocationDetail: ComponentDidMount");
        //get(id) from OwnerManager and hang on to that data; put it into state
       OwnersManager.get(this.props.ownerId)
        .then((owner) => {
            this.setState({
                name: owner.name,
                dogName: owner.dogName,
                loadingStatus: false
            });
        });
    }

    render() {
      return (
        <div className="card">
          <div className="card-content">
            <picture>
              <img src={require('./man.svg')} alt="My Dog" />
            </picture>
            <h3>Name: <span style={{ color: 'darkslategrey' }}>{this.state.name}</span></h3>
            <p>Adopted Pet: {this.state.dogName}</p>
            <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>I've Adopted!</button>
          </div>
        </div>
      );
    }
}

export default OwnerDetail;