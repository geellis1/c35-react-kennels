//Kennel.js renders the <NavBar> and <ApplicationRouter>

import React, { Component } from 'react'
import './Kennel.css'
import NavBar from './nav/NavBar';
import ApplicationRouter from './ApplicationRouter';
import './animal/Animal.css'

class Kennel extends Component {
    render() {
        return (
                    <>
                      <NavBar />
                      <ApplicationRouter />
                    </>
                  )
                }
              }


export default Kennel