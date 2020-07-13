import { AUTH_SUCCES } from "./actionsType"
import { EDIT_USER_DATA_SUCCES } from "./actionsType"

export function authentication(email, password, mutate) {
  return async dispatch => {
    const response = await mutate({  variables: {
      email: email,
      password: password
      }
    })
    
    const data = response.data.login
    console.log(data)

    localStorage.setItem('token', data.token)
    localStorage.setItem('userId', data.user.id)

    dispatch(authSucces(data))
  }
}

export function createNewUserData(newUser, mutate){
  return async dispatch => {
    const userData = newUser
    const reqest = await mutate({  variables: {
        firstName: userData.name,
        secondName: userData.secondName,
        email: userData.email,
        password: userData.password
        }
    })
      
    const data = reqest.data.login
    console.log(reqest)

    localStorage.setItem('userId', data.user.id)
    localStorage.setItem('token', data.token)

    dispatch(authSucces(data))
  }  
}

export function editUserData(newUserData, mutate) {
  return async dispatch => {
    
    const variablesToMutate = {...newUserData}
    

    if (variablesToMutate.password === '') delete variablesToMutate.password

    console.log({...variablesToMutate})
    const response = await mutate( {  
      variables: { ...variablesToMutate }
    })

    const userData = response.data.editUser
    dispatch(editSucces(userData))
  }
}

export function editSucces(user) {
  return {
    type: EDIT_USER_DATA_SUCCES,
    user
  }
}


export function authSucces(data) {
  return {
    type: AUTH_SUCCES,
    data
  }
}