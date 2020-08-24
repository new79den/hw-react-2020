import {combineReducers} from 'redux';
import {userReducer as user} from '../bus/User/reducer';
import {studentReducer as student} from '../bus/Student/reducer';
import { starshipsReducer as starship} from '../bus/Starship/reducer';
import {planetsReducer as planets} from '../bus/Planets/reducer';

export const rootReducer = combineReducers({
    user,
    student,
    starship,
    planets
})