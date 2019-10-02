import React, { Component } from 'react'
    //import the components we will need
    import OwnerCard from './OwnerCard'
    import OwnersManager from '../../modules/OwnersManager'

    class OwnerList extends Component {
        //define what this component needs to render
        state = {
            owners: [],
        }
        deleteOwner = id => {
            OwnersManager.delete(id)
            .then(() => {
              OwnersManager.getAll()
              .then((newOwner) => {
                this.setState({
                    owners: newOwner
                })
              })
            })
        }
/*componentDidMount is a function of react we can't change the name of but what it is saying
is basically it is an event listener that is holding a function that won't run until after
a render happens and then it will also render again. */
    componentDidMount(){
        console.log("OWNER LIST: ComponentDidMount");
        //getAll from OwnerManager and hang on to that data; put it in state
        OwnersManager.getAll()
        .then((owners) => {
            this.setState({
                owners: owners
            })
        })
    }
//locationCard function also has a render component tied to it that will be run again too.
    render(){
        console.log("OWNERS LIST: Render");
        console.log(this.state.owners)

        return(
            <>
            <section className="section-content">
  <button type="button"
      className="btn"
      onClick={() => {this.props.history.push("/owners/new")}}>
      Create new Owner
  </button>
</section>
            <div className="container-cards">
                {this.state.owners.map(owner => <OwnerCard owner={owner} key={owner.id}
                  deleteOwner={this.deleteOwner}/>)}
            </div>
            </>
        )
    }
}

export default OwnerList