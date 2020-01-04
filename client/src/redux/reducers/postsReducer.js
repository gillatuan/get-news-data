import {
  ADD_POST,
  CLEAR_POST_STATE,
  DELETE_POST,
  EDIT_POST,
  GET_POSTS,
  GET_POST
} from "../actions/types"

const initialState = {
  items: [],
  item: {},
  updated: false,
  getItem: false
}

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_POSTS:
      return {
        ...state,
        items: action.items,
        item: null,
        updated: false
      }
    case GET_POST:
      return {
        ...state,
        item: action.data,
        getItem: true
      }

    case ADD_POST:
      return {
        ...state,
        item: action.item
      }
    case EDIT_POST:
      return {
        ...state,
        item: {
          ...state.item,
          ...action.item
        },
        updated: true
      }

    case DELETE_POST:
      return {
        ...state,
        items: state.items.filter(post => post._id !== action.payload)
      }

    case CLEAR_POST_STATE:
      return {
        ...state,
        updated: false
      }

    default:
      return state
  }
}
