import axios from "axios"
// 
import { APP_API_URL_NEWS_LIST } from "../constants/api"

const getNewsApi = () => {
  console.log('APP_API_URL_NEWS_LIST', `${APP_API_URL_NEWS_LIST}&q=bitcoin&sortBy=publishedAt`)
  return axios
    .get(`${APP_API_URL_NEWS_LIST}&q=bitcoin&from=2019-12-30&sortBy=publishedAt`)
    .then(res => {
      return res.data
    })
    .catch(err => {
      debugger
      return err
    })
}

const NewsAPIClient = {
  getNewsApi,
}

export default NewsAPIClient
