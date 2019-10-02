import React, { Component } from 'react'
    //import the components we will need
    import LocationCard from './LocationCard'
    import LocationManager from '../../modules/LocationManager'

    class LocationList extends Component {
        //define what this component needs to render
        state = {
            locations: [],
        }
        deleteLocation = id => {
            LocationManager.delete(id)
            .then(() => {
              LocationManager.getAll()
              .then((newLocation) => {
                this.setState({
                    locations: newLocation
                })
              })
            })
        }
/*componentDidMount is a function of react we can't change the name of but what it is saying
is basically it is an event listener that is holding a function that won't run until after
a render happens and then it will also render again. */
    componentDidMount(){
        console.log("LOCATIOn LIST: ComponentDidMount");
        //getAll from LocationManager and hang on to that data; put it in state
        LocationManager.getAll()
        .then((locations) => {
            this.setState({
                locations: locations
            })
        })
    }
//locationCard function also has a render component tied to it that will be run again too.
    render(){
        console.log("LOCATION LIST: Render");
        console.log(this.state.locations)

        return(
            <>
            <section className="section-content">
  <button type="button"
      className="btn"
      onClick={() => {this.props.history.push("/locations/new")}}>
     Add New Location
  </button>
</section>
            <div className="container-cards">
                {this.state.locations.map(location => <LocationCard deleteLocation={this.deleteLocation} location={location} key={location.id} />)}
            </div>
            </>
        )
    }
}

export default LocationList