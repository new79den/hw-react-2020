import {types} from './types';

const initialState = {
    data: [],
    isFetching: false,
    error: false
};

export const planetsReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case types.PLANETS_START_FETCH:
            return {...state, isFetching: true}
        case types.PLANETS_STOP_FETCH:
            return {...state, isFetching: false}
        case types.PLANETS_ERROR_FETCH:
            return {...state, error: payload}
        case types.PLANETS_FILL :
            return {...state, data: payload}
        default:
            return state;
    }
}