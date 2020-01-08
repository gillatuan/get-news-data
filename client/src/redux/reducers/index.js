import { combineReducers } from "redux"
import authReducer from "./authReducer"
import commonReducer from "./commonReducer"
import loginReducer from "./loginReducer"

export default combineReducers({
  auth: authReducer,
  common: commonReducer,
  login: loginReducer,
})

export const mapStateToProps = (state, props) => {
  return state
}
