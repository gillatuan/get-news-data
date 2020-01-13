import { bindActionCreators } from 'redux'
import { push } from 'react-router-redux'
// import * as Auth from './authActions'
import * as Common from './commonActions'
import * as Login from './loginAction'

export const matchActionsToProps = (actions, dispatch) => {
  if (actions == null) actions = {}
  var obj = bindActionCreators(actions, dispatch)
  //always add push to props
  obj.push = (url) => {
    dispatch(push(`${url}`))
  }
  //always add show, hide main menu to props
  //obj.showHeaderMenu = ()=>{dispatch(App.showHeaderMenu())};
  //obj.hideHeaderMenu = ()=>{dispatch(App.hideHeaderMenu())};
  console.log('ACTIONS', obj)
  return obj
}

export { Common, Login }
