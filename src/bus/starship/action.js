import {types} from './types';

export const starshipsAction = Object.freeze({
    //Sync
    fill: (payload) => {
        return {
            type: types.STARSHIP_FILL,
            payload
        }
    },
    //Async
    fetchAsync: () => async (dispatch) => {
        dispatch({
            type: types.STARSHIP_FETCH_ASYNC
        })
        // More code later
    }
})