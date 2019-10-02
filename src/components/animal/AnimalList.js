import React, { Component } from 'react'
    //import the components we will need
    import AnimalCard from './AnimalCard'
    import AnimalManager from '../../modules/AnimalManager'

    class AnimalList extends Component {
        //define what this component needs to render
        state = {
            animals: [],
        }
            deleteAnimal = id => {
                AnimalManager.delete(id)
                .then(() => {
                  AnimalManager.getAll()
                  .then((newAnimals) => {
                    this.setState({
                        animals: newAnimals
                    })
                  })
                })
        }
/*componentDidMount is a function of react we can't change the name of but what it is saying
is basically it is an event listener that is holding a function that won't run until after
a render happens and then it will also render again. */
    componentDidMount(){
        console.log("ANIMAL LIST: ComponentDidMount");
        //getAll from AnimalManager and hang on to that data; put it in state
        AnimalManager.getAll()
        .then((animals) => {
            this.setState({
                animals: animals
            })
        })
    }
//animalCard function also has a render component tied to it that will be run again too.
render(){
    console.log("AnimalList: Render");
    return(
      <>
      <section className="section-content">
  <button type="button"
      className="btn"
      onClick={() => {this.props.history.push("/animals/new")}}>
      Admit Animal
  </button>
</section>
      <div className="container-cards">
        {this.state.animals.map(animal =>
          <AnimalCard
            key={animal.id}
            animal={animal}
            deleteAnimal={this.deleteAnimal}
            {...this.props}
          />
        )}
      </div>
      </>
    )
  }

}

export default AnimalList