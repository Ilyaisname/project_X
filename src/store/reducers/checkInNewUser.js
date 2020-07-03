import { CREATE_NEW_USER } from '../actions/actionsType'
import { v4 as uuidv4 } from 'uuid'

const initialState = {
  newUser: {}
}

export default function createNewUser(state = initialState, action) {
  console.log(state)
  switch (action.type) {
    case CREATE_NEW_USER:
      return {
        ...state,
        newUser: { ...action.newUser, id: uuidv4() }
      }
    default: 
      return state
  }
}