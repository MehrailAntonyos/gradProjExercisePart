import {combineReducers}from 'redux'
import { favReducer } from './favReducer'
import { deleteReducer } from './deleteReducer'

export default combineReducers({favReducer}, {deleteReducer})