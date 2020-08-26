import {combineReducers} from 'redux';
import {peopleReducer as people} from '../bus/People/reducer'
import {personReducer as person} from '../bus/Person/reducer';
import {filmsReducer as films} from '../bus/Films/reducer';
import {filmReducer as film} from '../bus/Film/reducer';

export const rootReducer = combineReducers({
    people, person, films, film
});
