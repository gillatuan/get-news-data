import { isEmpty } from '../../utils/validationLib'

import * as TYPES from '../../constants/types'

const initialState = {
  isAuthenticated: false,
  user: {}
}

export default function(state = initialState, action) {
  switch (action.type) {
    case TYPES.LOGIN_PROGRESS:
      state = {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      }
      break;
    default:
      break;
  }

  return state
}
