// @flow
import { useState, useEffect  } from 'react'
import NewsAPIClient from '../services/NewsAPIClient'

const UserPreferenceNewsHook = () => {
  const [items, setItems] = useState([])
  const [userPreference, setUserPreference] = useState('bitcoin')

  const handleChangeUserPreference = (e) => setUserPreference(e.target.value)

  // get user preference news
  const getUserPrefenceNews = async () => {
    // get News list from api
    const data = await NewsAPIClient.getUserPrefenceNews(userPreference)
    setItems(data.articles)
  }
  
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // init User preference news 
    getUserPrefenceNews()
  }, [items]);

  return [items, userPreference, handleChangeUserPreference]
}

export { UserPreferenceNewsHook }
