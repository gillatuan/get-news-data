import React from "react"
import { Route, Redirect } from "react-router-dom"
import { connect } from "react-redux"
import PropTypes from "prop-types"

import Spinner from "./Spinner"
import Login from '../login'
import FrontendLayout from "../../layout/FrontendLayout"

const PrivateRoute = ({
  component: Component,
  auth,
  loadingStatus,
  ...rest
}) => {
  const pathname = rest.location.pathname

  let isNeedToLogin = false
  if (pathname.indexOf("/api") >= 0 || pathname.indexOf("/news") >= 0) {
    isNeedToLogin = true
  }

  return (
    <Route
      {...rest}
      render={props => {
        if (isNeedToLogin) {
          let renderLayout = <Login />
          if (auth.isAuthenticated) {
            renderLayout = (
              <FrontendLayout pathname={pathname}>
                <Component {...props} />

                <Spinner loadingStatus={loadingStatus} />
              </FrontendLayout>
            )
          }

          return renderLayout
        } else {
          return <Redirect to={"/"} />
        }
      }}
    />
  )
}

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    loadingStatus: state.common.loadingStatus,
    messageErr: state.common.messageErr
  }
}

export default connect(mapStateToProps)(PrivateRoute)
