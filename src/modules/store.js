import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import reducer from './'

const store = createStore(
    reducer, 
    undefined, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;