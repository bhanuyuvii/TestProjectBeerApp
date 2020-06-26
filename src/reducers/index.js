import { combineReducers } from 'redux';
//import itemReducer fro
import itemReducer from './itemReducer';
export default combineReducers({
    item:itemReducer
});