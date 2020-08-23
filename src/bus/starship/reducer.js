import {types} from './types';

const initialState = {
    data: [],
    isFetching: false,
    error: false
};

export const starshipsReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case types.STARSHIP_START_FETCH:
            return {...state, isFetching: true}
        case types.STARSHIP_STOP_FETCH:
            return {...state, isFetching: false}
        case types.STARSHIP_ERROR_FETCH:
            return {...state, error: payload}
        case types.STARSHIP_FILL :
            return {...state, data: payload}
        default:
            return state;
    }
}