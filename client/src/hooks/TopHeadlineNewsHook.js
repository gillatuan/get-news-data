// @flow
import { useState, useEffect  } from 'react'
import NewsAPIClient from '../services/NewsAPIClient'

const TopHeadlineNewsHook = () => {
  const [items, setItems] = useState([])
    
  // get top headline news
  const getTopHeadlineNews = async () => {
    // get News list from api
    const data = await NewsAPIClient.getTopHeadlineNewsApi()
    setItems(data.articles)
  }
  
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // init Top Headline News 
    getTopHeadlineNews()
  }, [items]);

  return [items]
}

export { TopHeadlineNewsHook }
