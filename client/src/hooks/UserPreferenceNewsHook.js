// @flow
import { useState, useEffect } from "react"
import NewsAPIClient from "../services/NewsAPIClient"

const UserPreferenceNewsHook = () => {
  const [items, setItems] = useState([])
  const [userPreference, setUserPreference] = useState("bitcoin")

  const initData = async userPreference => {
    // call api
    const data = await NewsAPIClient.getUserPrefenceNews(userPreference)
    setItems(data.articles)
  }

  const handleChange = async value => {
    setUserPreference(value)

    initData(value)
  }

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // init User preference news
    initData(userPreference)
  }, [userPreference])

  return [items, userPreference, handleChange]
}

export { UserPreferenceNewsHook }
