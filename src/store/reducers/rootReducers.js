import {combineReducers} from 'redux'
import processReducer from './processReducer'
import createNewUser from './checkInNewUser'

export default combineReducers({
  processes: processReducer,
  create: createNewUser
})