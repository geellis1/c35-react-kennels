//<ApplicationRouter> renders routes based on the URL.

import { Route, Redirect } from "react-router-dom"
import React, { Component } from 'react'
import Home from './home/Home'
import AnimalList from './animal/AnimalList'
//only include these once they are built - previous practice exercise
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnerList from './owner/OwnerList'
import AnimalDetail from './animal/AnimalDetail'
import EmployeeDetail from './employee/EmployeeDetail'
import LocationDetail from './location/LocationDetail'
import OwnerDetail from './owner/OwnerDetail'
import AnimalForm from './animal/AnimalForm'
import EmployeeForm from './employee/EmployeeForm'
import LocationForm from './location/LocationForm'
import OwnerForm from './owner/OwnerForm'
import Login from './Auth/Login'
import AnimalEditForm from './animal/AnimalEditForm'
import EmployeesWithAnimals from './employee/EmployeesWithAnimals'


/*React.Fragment allows you to pass around multiple elements without having to add any extra markup
When rendered to the DOM, its children will be rendered by themselves, making it possible to pass
around groups of elements without introducing unnecessary markup. Fragments are also great for working
with table and list markup (like the above), where it’s just not possible to add an extra <div>. It is
basically a <div> element.*/

class ApplicationRouter extends Component {
  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <Home />
        }} />
        {/* Make sure you add the `exact` attribute here. Exact path allows you to basically separate
        each component from the users view. Or basically switches the "page" */}
        <Route exact path="/animals" render={props => {
          if (this.props.user) {
            return <AnimalList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route exact path="/animals/:animalId(\d+)" render={(props) => {
          // Pass the animalId to the AnimalDetailComponent
          return <AnimalDetail animalId={parseInt(props.match.params.animalId)} {...props} />
        }} />
        <Route path="/animals/new" render={(props) => {
          return <AnimalForm {...props} />
        }} />
        <Route
          path="/animals/:animalId(\d+)/edit" render={props => {
            return <AnimalEditForm {...props} />
          }}
        />
        <Route exact path="/employees" render={(props) => {
          if (this.props.user) {
            return <EmployeeList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route path="/employees/new" render={(props) => {
          return <EmployeeForm {...props} />
        }} />
        <Route path="/employees/:employeeId(\d+)/details" render={(props) => {
          return <EmployeesWithAnimals {...props} />
        }} />
        <Route exact path="/owners" render={(props) => {
          if (this.props.user) {
            return <OwnerList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route path="/owners/:ownerId(\d+)" render={(props) => {
          return <OwnerDetail ownerId={parseInt(props.match.params.ownerId)} {...props} />
        }} />
        <Route path="/owners/new" render={(props) => {
          return <OwnerForm {...props} />
        }} />
        <Route exact path="/locations" render={(props) => {
            return <LocationList {...props} />
        }} />
        <Route path="/locations/:locationId(\d+)" render={(props) => {
          return <LocationDetail locationId={parseInt(props.match.params.locationId)} {...props} />
        }} />
        <Route path="/locations/new" render={(props) => {
          return <LocationForm {...props} />
        }} />

        <Route path="/login" render={props => {
          return <Login setUser={this.props.setUser} {...props} />
        }} />

      </React.Fragment>
    )
  }
}

/*The term “render prop” refers to a technique for sharing code between React components using a prop whose
value is a function. In React and React Native the data flows in one direction -> From the parent to the child.
You can write your own components that use props. The idea behind props is that you can make a single component
that is used in many different places in your app. Props are variables that are passed from parent
to child.*/

//we are just using component instead of render in the route path/login because we aren't passing anything into it//

export default ApplicationRouter
