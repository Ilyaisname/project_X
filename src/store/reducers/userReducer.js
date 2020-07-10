import { AUTH_SUCCES } from "../actions/actionsType"
import { EDIT_USER_DATA_SUCCES } from "../actions/actionsType"

const initialState = {
  token: null,
  user: {}
}


export default function userData(state = initialState, action) {
  switch (action.type) {
    case AUTH_SUCCES:
      return {
        ...state,
        token: action.data.token,
        user: action.data.user
      }
    case EDIT_USER_DATA_SUCCES:
      return {
        ...state,
        user: action.user
      }
    default: 
      return state
  }
  
}