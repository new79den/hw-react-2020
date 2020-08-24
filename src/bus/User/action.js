import {types} from './types';

export const userAction = Object.freeze({
    setName: (payload) => {
        return {
            type: types.SET_NAME,
            payload
        }
    }
})
