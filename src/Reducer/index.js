import { combineReducers } from 'redux'
import { saveData } from './saveddata'

export default combineReducers({
	saveData: saveData
})