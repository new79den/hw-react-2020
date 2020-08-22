import {types} from './types';

export const studentAction = Object.freeze({
    setStudent: (payload) => ({
        type: types.SET_STUDENT,
        payload
    })
})