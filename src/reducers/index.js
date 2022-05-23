import { combineReducers } from 'redux';
import displayItem from './displayItem';

export default combineReducers({
    items:displayItem
});