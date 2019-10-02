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

class ApplicationRouter extends Component {
  isAuthenticated = () => localStorage.getItem("credentials") !== null
  // Check if credentials are in local storage
  //returns true/false
  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <Home />
        }} />
        {/* Make sure you add the `exact` attribute here */}
        <Route exact path="/animals" render={props => {
          if (this.isAuthenticated()) {
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
          if (this.isAuthenticated()) {
            return <EmployeeList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route path="/employees/:employeeId(\d+)" render={(props) => {
          return <EmployeeDetail employeeId={parseInt(props.match.params.employeeId)} {...props} />
        }} />
        <Route path="/employees/new" render={(props) => {
          return <EmployeeForm {...props} />
        }} />
        <Route exact path="/owners" render={(props) => {
          if (this.isAuthenticated()) {
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
          if (this.isAuthenticated()) {
            return <LocationList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route path="/locations/:locationId(\d+)" render={(props) => {
          return <LocationDetail locationId={parseInt(props.match.params.locationId)} {...props} />
        }} />
        <Route path="/locations/new" render={(props) => {
          return <LocationForm {...props} />
        }} />
        <Route path="/login" component={Login} />

      </React.Fragment>
    )
  }
}

//we are just using component instead of render in the route path/login because we aren't passing anything into it//

export default ApplicationRouter
