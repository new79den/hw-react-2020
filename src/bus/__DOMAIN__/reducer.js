import {types} from './types';

const initialState = {
    property: ''
};

export const domainReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.DOMAIN_ACTION :
            return {...state, property: 'new'}
        default:
            return state;
    }
}