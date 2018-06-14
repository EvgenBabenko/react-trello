import { combineReducers } from 'redux'

import user from './user' 
import hasModal from './modal' 
import dashboard from './dashboard' 
import hasActive from './active' 

export default combineReducers({
    user,
    hasModal,
    dashboard,
    hasActive
})