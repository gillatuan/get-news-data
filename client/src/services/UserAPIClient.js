import axios from 'axios'
import jwt_decode from 'jwt-decode'
//
import { getError, returnAction } from '../redux/actions/commonActions'
import { setAuthToken } from '../utils/Utils'
import * as TYPES from '../constants/types'

const getUserInfo = (dataInfo) => {
  debugger
  return axios
    .post('/api/users/login', dataInfo)
    .then((res) => {
      debugger
      // Save to localStorage
      const { token } = res.data
      // Set token to ls
      localStorage.setItem('jwtToken', token)
      // Set token to Auth header
      setAuthToken(token)
      // Decode token to get user data
      return returnAction(TYPES.LOGIN_PROGRESS, jwt_decode(token))
    })
    .catch((err) => {
      let messageErr = (err.response && err.response.data) || err.message
      return getError(messageErr)
    })
}

const UserAPIClient = {
  getUserInfo
}

export default UserAPIClient
