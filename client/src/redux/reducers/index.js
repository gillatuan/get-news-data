import { combineReducers } from "redux"
import { routerReducer } from 'react-router-redux'
import authReducer from "./authReducer"
import commonReducer from "./commonReducer"
import loginReducer from "./loginReducer"

export default combineReducers({
  routing: routerReducer,
  auth: authReducer,
  common: commonReducer,
  login: loginReducer,
})

export const mapStateToProps = (state, props) => {
  return state
}
