// @flow
import { useState, useEffect } from "react"
import NewsAPIClient from "../services/NewsAPIClient"

const CommonHook = props => {
  const [detail, setDetail] = useState([])

  const initData = async () => {
    if (!props.url) {
      props.history.push({ pathname: `/news` })
    }
    // call api
    const data = await NewsAPIClient.getNewsApi()
    const detail = data.articles.find((item, key) => item.url === props.url)

    setDetail(detail)
  }

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // init User preference news
    initData()
  }, [])

  return [detail, initData]
}

export { CommonHook }
