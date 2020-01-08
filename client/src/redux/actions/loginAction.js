import { LOGIN_ASYNC } from '../../constants/types'

// Set logged in user
export const setCurrentUser = (decoded) => {
  return {
    type: LOGIN_ASYNC,
    payload: decoded,
  }
}