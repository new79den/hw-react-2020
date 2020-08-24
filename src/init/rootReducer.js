import {combineReducers} from 'redux';
import {peopleReducer as people} from '../bus/People/reducer'
import {personReducer as person} from '../bus/Person/reducer';

export const rootReducer = combineReducers({
    people, person
});
