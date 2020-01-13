import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './css/App.css'

import Login from './components/login'
import NewsComponent from './components/news'
import NotFound from './components/not_found'
import PrivateRoute from './components/common/PrivateRoute'
import Profile from './components/profile'
import ProgressBar from './components/progress_bars/ProgressBar'

class App extends Component {
  render() {
    const { history } = this.props

    return (
      <Router>
        <Switch>
          {/* <Route path='/register' component={Register} history={history} /> */}
          {/* <Route exact path='/' component={ProgressBar} history={history} /> */}
          <Route exact path="/login" component={Login} history={history} />
          <PrivateRoute
            exact
            path="/api/profile"
            component={Profile}
            history={history}
          />
          <PrivateRoute
            exact
            path="/news"
            component={NewsComponent}
            history={history}
          />
          <Route exact path="/" component={ProgressBar} history={history} />
          <Route path="*" component={NotFound} history={history} />
        </Switch>
      </Router>
    )
  }
}

export default App
