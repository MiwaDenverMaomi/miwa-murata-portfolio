import { combineReducers } from "redux";
import task from "./Task";
import { debug } from './../components/func/Func';

debug('Reducers/index.js');

const reducer = combineReducers({
    task
});

export default reducer;
debug('Reducers/index.js export reducer');
