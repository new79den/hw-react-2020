import {types} from './types';

const initialState = {
    data: [],
    isFetching: false,
    error: false,
}

export const filmsReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case types.FILMS_START_FETCH:
            return {...state, isFetching: true};
        case types.FILMS_STOP_FETCH:
            return {...state, isFetching: false};
        case types.FILMS_FILL:
            return {...state, data: payload};
        case types.FILMS_ERROR:
            return {...state, error: payload};

        default:
            return state;
    }
}