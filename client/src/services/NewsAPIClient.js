import axios from "axios"
//
import {
  APP_API_URL_NEWS_LIST,
  APP_API_URL_TOP_HEADLINE_NEWS_LIST,
  APP_API_URL_USER_PREFERENCE_NEWS
} from "../constants/api"

const getNewsApi = async () => {
  return await axios
    .get(`${APP_API_URL_NEWS_LIST}&q=bitcoin&limit=20`)
    .then(res => {
      return res.data
    })
    .catch(err => {
      return err.response.data.message
    })
}
const getTopHeadlineNewsApi = async () => {
  return await axios
    .get(`${APP_API_URL_TOP_HEADLINE_NEWS_LIST}&country=ja&limit=20`)
    .then(res => {
      return res.data
    })
    .catch(err => {
      return err.response.data.message
    })
}
const getUserPrefenceNews = async q => {
  return await axios
    .get(`${APP_API_URL_USER_PREFERENCE_NEWS}&q=${q}`)
    .then(res => {
      return res.data
    })
    .catch(err => {
      return err.response.data.message
    })
}

const NewsAPIClient = {
  getNewsApi,
  getTopHeadlineNewsApi,
  getUserPrefenceNews
}

export default NewsAPIClient
