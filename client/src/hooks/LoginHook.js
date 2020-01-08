// @flow
import { useState, useEffect } from "react"

const LoginHook = props => {
  const [state , setState] = useState({
    email : "",
    password : ""
  })
  debugger

  const initData = async () => {
  }

  const onChange = (e) => {
    const {name, value} = e.target
    let messageErr = {}
    let msgErr = ""

    if (value === '') {
      msgErr =  'This field is not empty'
    }

    setState(prevState => ({
      ...prevState,
      [name]: value,
      messageErr: {
        [name]: msgErr,
      },
    }))
  }

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // init User preference news
    initData()
  }, [])

  return [...state, initData]
}

export { LoginHook }
