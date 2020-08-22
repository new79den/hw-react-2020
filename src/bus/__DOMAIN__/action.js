import {types} from './types';

export const domainAction = Object.freeze({
    domainAction: (payload) => {
        return {
            type: types.DOMAIN_ACTION,
            payload
        }
    }
})