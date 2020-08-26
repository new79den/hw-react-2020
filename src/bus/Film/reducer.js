import {types} from './types';

const initialState = {
    data: [],
    isFetching: false,
    error: false,
}

export const filmReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case types.FILM_START_FETCH:
            return {...state, isFetching: true};
        case types.FILM_STOP_FETCH:
            return {...state, isFetching: false};
        case types.FILM_FILL:
            return {...state, data: payload};
        case types.FILM_ERROR:
            return {...state, error: payload};

        default:
            return state;
    }
}