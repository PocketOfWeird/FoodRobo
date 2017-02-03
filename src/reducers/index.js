import { combineReducers } from 'redux'
import user from './userReducer'
import view from './viewReducer'
import filter from './filterReducer'


const rootReducer = combineReducers({
  filter,
  user,
  view
})

export default rootReducer
