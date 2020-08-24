import {types} from './types';

const initialState = {
    data: [],
    isFetching: false,
    error: false
};

export const personReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case types.PERSON_START_FETCH:
            return {...state, isFetching: true};
        case types.PERSON_STOP_FETCH:
            return {...state, isFetching: false};
        case types.PERSON_ERROR_FETCH:
            return {...state, error: payload};
        case types.PERSON_FILL:
            return {...state, data: payload};
        default:
            return state;
    }
}