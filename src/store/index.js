import { createStore, compose } from 'redux'
import { autoRehydrate } from 'redux-persist'
import rootReducer from '../reducers'
import configureMiddleware from '../middleware'


const configureStore = () => createStore(
  rootReducer,
  {},
  compose(
    autoRehydrate(),
    configureMiddleware()
  )
)

export default configureStore
