// @flow
import { useState, useEffect } from 'react'

const LoginHook = (props) => {
  const [state, setState] = useState({
    email: '',
    password: '',
    messageErr: {
      email: '',
      password: ''
    }
  })

  const onChangeHook = (data) => {
    setState(data)
  }

  const initData = async () => {
    if (props.isAuthenticated) {
      props.history.push('/')
    }
  }

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // init User preference news
    initData()
  }, [state])

  return { state, initData, onChangeHook }
}

export { LoginHook }
