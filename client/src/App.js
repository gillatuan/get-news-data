import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './css/App.css'

import Login from './components/login'
import NewsComponent from './components/news'
import NotFound from './components/not_found'

class App extends Component {
  render() {
    const { history } = this.props

    return (
      <Router>
        <Switch>
          {/* <Route path='/register' component={Register} history={history} /> */}
          {/* <Route exact path='/' component={ProgressBar} history={history} /> */}
          <Route path="/login" component={Login} history={history} />
          <Route path='/' component={NewsComponent} history={history} />
          <Route path='*' component={NotFound} history={history} />
        </Switch>
      </Router>
    )
  }
}

export default App
