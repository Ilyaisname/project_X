import { CREATE_NEW_USER } from './actionsType'

export function createNewUserData(newUser) {
  return {
    type: CREATE_NEW_USER,
    newUser
  }
}

