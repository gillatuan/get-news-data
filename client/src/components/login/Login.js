import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { ButtonGroup } from "@material-ui/core"

import TextFieldRow from "../common/TextFieldRow"
import ButtonField from "../common/ButtonField"
import { loadWrapper } from "../common/LoadingWrapper"

import { loginUser } from "../../redux/actions/authActions"
import { getError } from "../../redux/actions/commonActions"

import { redirectAfterAuthen } from "../../utils/Utils"

import "./login.css"

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: "",
      password: "",
      messageErr: {}
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  componentDidMount() {
    const { auth, history } = this.props

    redirectAfterAuthen(auth, history)
  }

  componentWillReceiveProps(nextProps) {
    const { history } = this.props

    if (nextProps.messageErr) {
      this.setState({ messageErr: nextProps.messageErr })
    }

    redirectAfterAuthen(nextProps.auth, history)
  }

  onSubmit(e) {
    e.preventDefault()

    const { email, password } = this.state
    if (!email || !password) {
      this.setState({
        messageErr: {
          email: "Email is not empty",
          password: "Password is not empty"
        }
      })

      return
    }

    const userData = {
      email,
      password
    }

    this.props.loginUser(userData)
  }

  onChange(e) {
    if (e.target.value === "") {
      this.setState({
        [e.target.name]: e.target.value,
        messageErr: {
          [e.target.name]: "This field is not empty"
        }
      })

      return
    }

    this.setState({
      [e.target.name]: e.target.value,
      messageErr: {
        [e.target.name]: ""
      }
    })
  }

  render() {
    const { messageErr } = this.state

    return (
      <div className="login">
        <div className="container">
          <div className="row">
            <div className="col-md-push-3 col-md-6 m-auto">
              <h1 className="display-4 text-center">Log In</h1>
              <TextFieldRow
                id="email"
                label="Email Address"
                placeholder="Email Address"
                name="email"
                type="email"
                value={this.state.email}
                onChange={this.onChange}
                error={messageErr.email}
              />

              <TextFieldRow
                id="password"
                label="Password"
                placeholder="Password"
                name="password"
                type="password"
                value={this.state.password}
                onChange={this.onChange}
                error={messageErr.password}
              />
              <ButtonGroup className="btn-group-def right">
                <ButtonField
                  id="login"
                  className="btn btn-info btn-block mt-4"
                  disabled={
                    ((messageErr.email || messageErr.password) && true) || false
                  }
                  label="Login"
                  onClick={this.onSubmit}
                />
              </ButtonGroup>
              {/* </form> */}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => {
  return {
    messageErr: (state.common && state.common.messageErr) || "",
    auth: state.auth
  }
}

export default connect(mapStateToProps, { getError, loginUser })(
  loadWrapper(Login)
)
