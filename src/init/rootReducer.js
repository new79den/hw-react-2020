import {combineReducers} from 'redux';
import {userReducer as user} from '../bus/user/reducer';
import {studentReducer as student} from '../bus/student/reducer';

export const rootReducer = combineReducers({
    user,
    student
})