// @flow
import { useState, useEffect } from "react"
import NewsAPIClient from "../services/NewsAPIClient"

const ListNewsHook = () => {
  const [items, setItems] = useState([])

  const initData = async () => {
    // call api
    const data = await NewsAPIClient.getNewsApi()
    setItems(data.articles)
  }

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // init User preference news
    initData()
  }, [])

  return [items, initData]
}

export { ListNewsHook }
