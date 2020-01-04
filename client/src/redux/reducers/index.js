import { combineReducers } from "redux"
import authReducer from "./authReducer"
import commonReducer from "./commonReducer"
import profileReducer from "./profileReducer"

export default combineReducers({
  auth: authReducer,
  common: commonReducer,
  profile: profileReducer
})

/* export const mapStateToProps = (state, props) => {
  return state
} */
