import { combineReducers } from "redux"
import authReducer from "./authReducer"
import commonReducer from "./commonReducer"
import mediaReducer from "./mediaReducer"
import profileReducer from "./profileReducer"
import postReducer from "./postsReducer"
import modulesReducer from "./modulesReducer"

export default combineReducers({
  auth: authReducer,
  common: commonReducer,
  media: mediaReducer,
  modules: modulesReducer,
  profile: profileReducer,
  posts: postReducer,
})

/* export const mapStateToProps = (state, props) => {
  return state
} */
