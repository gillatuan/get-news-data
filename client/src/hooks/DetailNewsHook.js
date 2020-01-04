// @flow
import { useState, useEffect } from "react"
import NewsAPIClient from "../services/NewsAPIClient"

const DetailNewsHook = props => {
  const [detail, setDetail] = useState([])

  const initData = async () => {
    if (!props.itemId) {
      props.history.push({ pathname: `/news` })
    }
    // call api
    const data = await NewsAPIClient.getNewsApi()
    const detail = data.articles.find((item, key) => key === props.itemId)

    setDetail(detail)
  }

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // init User preference news
    initData()
  }, [])

  return [detail, initData]
}

export { DetailNewsHook }
