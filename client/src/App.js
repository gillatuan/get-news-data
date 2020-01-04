import React, { Component } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import jwt_decode from "jwt-decode"

import store from "./store"
import setAuthToken from "./utils/setAuthToken"
import { logoutUser, setCurrentUser } from "./redux/actions/authActions"
import { clearCurrentProfile } from "./redux/actions/profileActions"
import "./css/App.css"

import ProgressBar from "./components/progress_bars/ProgressBar"
import NewsComponent from "./components/news"
import NotFound from "./components/not_found"
import Register from "./components/register/Register"
import Login from "./components/login/Login"

// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken)
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken)
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded))

  // Check for expired token
  const currentTime = Date.now() / 1000
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser())
    // Clear current Profile
    store.dispatch(clearCurrentProfile())
    // Redirect to login
    window.location.href = "/login"
  }
}

class App extends Component {
  render() {
    const { history } = this.props

    return (
      <Router>
        <Switch>
          <Route path="/register" component={Register} history={history} />
          <Route path="/login" component={Login} history={history} />
          <Route path="/news" component={NewsComponent} history={history} />
          <Route exact path="/" component={ProgressBar} history={history} />
          <Route path="*" component={NotFound} history={history} />
        </Switch>
      </Router>
    )
  }
}

export default App
