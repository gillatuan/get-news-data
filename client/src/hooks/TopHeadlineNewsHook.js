// @flow
import { useState, useEffect } from "react"
import NewsAPIClient from "../services/NewsAPIClient"

const TopHeadlineNewsHook = () => {
  const [items, setItems] = useState([])

  // get top headline news
  const getTopHeadlineNews = async () => {
    // get News list from api
    return await NewsAPIClient.getTopHeadlineNewsApi()
  }

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // init Top Headline News
  }, [items])

  return [items, getTopHeadlineNews]
}

export { TopHeadlineNewsHook }
