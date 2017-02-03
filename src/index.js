import React from 'react'
import { AsyncStorage } from 'react-native'
import { persistStore } from 'redux-persist'
import { Provider } from 'react-redux'
import RootScene from './scenes/RootScene'
import configureStore from './store'
import { initializeStore } from './actions'


let store = configureStore()
persistStore(store, {storage: AsyncStorage}, () => {
  store.dispatch(initializeStore())
})

const App = (props) => (
  <Provider store={store}>
    <RootScene />
  </Provider>
)

export default App
