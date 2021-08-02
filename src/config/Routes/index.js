import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Login, MainApp, Register } from '../../pages'

function Routes() {
  return (
      <Router>
        <Switch>
          <Route path="/">
            <MainApp />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
      </Router>
  )
}

export default Routes
