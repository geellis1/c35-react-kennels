//index.js is invoked first and it renders the <Router> with Kennel.js

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom"
import Kennel from './components/Kennel'

ReactDOM.render(
  <Router>
    <Kennel />
  </Router>
  , document.getElementById('root'))