import {combineReducers} from 'redux';
import { starshipsReducer as starship} from '../bus/Starship/reducer';
import {planetsReducer as planets} from '../bus/Planets/reducer';

export const rootReducer = combineReducers({
    starship,
    planets
})