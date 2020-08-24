import {combineReducers} from 'redux';
import {userReducer as user} from '../bus/user/reducer';
import {studentReducer as student} from '../bus/student/reducer';
import { starshipsReducer as starship} from '../bus/starship/reducer';
import {planetsReducer as planets} from '../bus/planets/reducer';

export const rootReducer = combineReducers({
    user,
    student,
    starship,
    planets
})