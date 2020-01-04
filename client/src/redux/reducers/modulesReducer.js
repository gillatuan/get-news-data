import {
  ADD_MODULE,
  CLEAR_MODULE_STATE,
  DELETE_MODULE,
  EDIT_MODULE,
  GET_MODULES,
  GET_MODULE
} from "../actions/types"

const initialState = {
  items: [],
  item: null,
  updated: false,
  getItem: false
}

export default function (state = initialState, action) {
  switch(action.type) {
    case GET_MODULES:
      return {
        ...state,
        items: action.items,
        getItem: true
      }
    case GET_MODULE:
      return {
        ...state,
        item: action.data,
        getItem: true,
        updated: false,
      }

    case ADD_MODULE:
      return {
        ...state,
        item: action.item,
        getItem: false
      }
    case EDIT_MODULE:
      return {
        ...state,
        item: action.item,
        getItem: false,
        updated: true
      }

    case DELETE_MODULE:
      return {
        ...state,
        items: state.items.filter(post => post._id !== action.payload)
      }

    case CLEAR_MODULE_STATE:
      return {
        ...state,
        updated: false
      }

    default:
      return state
  }
}
