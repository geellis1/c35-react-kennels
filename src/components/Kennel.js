//Kennel.js renders the <NavBar> and <ApplicationRouter>

import React, { Component } from 'react'
//React is a built in component//
import './Kennel.css'
import NavBar from './nav/NavBar';
import ApplicationRouter from './ApplicationRouter';
import './animal/Animal.css'
//animal.css is the style for the individual cards//


/*we are creating a class that has methods, properties and meaning to it and then extends component is a react specific
thing that adds more methods and properties. Components are the building blocks of any React app and a typical
React app will have many of these. Simply put, a component is a JavaScript class or function that optionally
accepts inputs i.e. properties(props) and returns a React element that describes how a section of the
UI (User Interface) should appear. A class component can have some additional features such as the
ability to contain logic (for example methods that handle onClick events) */
class Kennel extends Component {
  state = {
    user: false
  }

  // Check if credentials are in local storage
  //returns true/false
  isAuthenticated = () => localStorage.getItem("credentials") !== null

  setUser = (authObj) => {
    /*
      For now, just store the email and password that
      the customer enters into local storage.
    */
    sessionStorage.setItem(
      "credentials",
      JSON.stringify(authObj)
    )
    this.setState({
      user: this.isAuthenticated()
    });
  }

  componentDidMount(){
    this.setState({
      user: this.isAuthenticated()
    })
  }

render() {
  return (
    <>
      <NavBar user={this.state.user} />
      <ApplicationRouter user={this.state.user}
                        setUser={this.setUser} />
    </>
  )
}
}

export default Kennel