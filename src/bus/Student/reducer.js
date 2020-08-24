import {types} from './types';

const initialValues = {
    firstName: '',
    surname: '',
    age: 0,
    email: '',
    sex: 'male',
    speciality: 'designer',
}

export const studentReducer = (state = initialValues, {type, payload}) => {
    switch (type) {
        case types.SET_STUDENT:
            return {...state, ...payload};
        default:
            return state;
    }
}