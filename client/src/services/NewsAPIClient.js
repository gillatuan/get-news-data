import axios from 'axios'
//
import {
  APP_API_URL_NEWS_LIST,
  APP_API_URL_TOP_HEADLINE_NEWS_LIST,
  APP_API_URL_USER_PREFERENCE_NEWS
} from '../constants/api'

const getNewsApi = () => {
  return axios
    .get(
      `${APP_API_URL_NEWS_LIST}&q=bitcoin&from=2019-12-30&sortBy=publishedAt`
    )
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      debugger
      return err
    })
}
const getTopHeadlineNewsApi = () => {
  return axios
    .get(`${APP_API_URL_TOP_HEADLINE_NEWS_LIST}&country=us`)
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      debugger
      return err
    })
}
const getUserPrefenceNews = (q) => {
  return axios
    .get(`${APP_API_URL_USER_PREFERENCE_NEWS}&q=${q}`)
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      debugger
      return err
    })
}

const NewsAPIClient = {
  getNewsApi,
  getTopHeadlineNewsApi,
  getUserPrefenceNews
}

export default NewsAPIClient
