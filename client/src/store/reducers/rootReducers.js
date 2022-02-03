import {combineReducers} from "redux";

import HardBlockReducer from './hardBlockReducer';

const rootReducer = combineReducers({
    hardblock:HardBlockReducer
})
export default rootReducer;