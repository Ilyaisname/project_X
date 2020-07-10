import {combineReducers} from 'redux'
import processReducer from './processReducer'
import userData from './userReducer'


export default combineReducers({
  processes: processReducer,
  userData: userData
})