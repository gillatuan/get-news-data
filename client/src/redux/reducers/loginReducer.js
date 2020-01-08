import { isEmpty } from '../../utils/validationLib'

import { LOGIN_ASYNC } from '../../constants/types'

const initialState = {
  isAuthenticated: false,
  user: {}
}

export default function(state = initialState, action) {
  switch (action.type) {
    case LOGIN_ASYNC:
      debugger
      state = {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      }
      break;
  }

  return state
}
