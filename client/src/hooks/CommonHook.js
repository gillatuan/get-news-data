// @flow
import { useState, useEffect } from 'react'
import NewsAPIClient from '../services/NewsAPIClient'

const CommonHook = (props) => {
  const { userInfo, setUserInfo } = useState(null)

  const initGetUserInfo = () => {
    if (props.isAuthenticated) {
      setUserInfo(props.user)
    }
  }

  useEffect(() => {
    debugger
    // check whether user is login
    initGetUserInfo()
  }, [userInfo])

  return [userInfo, setUserInfo]
}

export { CommonHook }
