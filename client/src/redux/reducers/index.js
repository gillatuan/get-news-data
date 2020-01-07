import { combineReducers } from "redux"
import authReducer from "./authReducer"
import commonReducer from "./commonReducer"

export default combineReducers({
  auth: authReducer,
  common: commonReducer,
})

/* export const mapStateToProps = (state, props) => {
  return state
} */
