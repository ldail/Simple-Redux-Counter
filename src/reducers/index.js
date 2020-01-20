import {combineReducers} from 'redux'
import counterReducer from './counter'
import isLogged from './isLogged'

const rootReducer = combineReducers({counterReducer, isLogged});

export default rootReducer;