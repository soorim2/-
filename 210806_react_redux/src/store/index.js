//index애서 내보내주는거 잊지 말기

import { combineReducers } from 'redux';
import color from './modules/color'
import count from './modules/count'
import counter from './modules/counter'
import todos from './modules/todos'


export default combineReducers({
    // combineReducers 에서 reducer들을 취합해준다.
    // color : color
    color,
    count,
    counter,
    todos
})