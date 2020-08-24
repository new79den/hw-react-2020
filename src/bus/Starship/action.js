import {types} from './types';
import {api} from '../../apiStarship'

export const starshipsAction = Object.freeze({
    //Sync
    startFetch: () => {
        return {
            type: types.STARSHIP_START_FETCH,
        }
    },
    stopFetch: () => {
        return {
            type: types.STARSHIP_STOP_FETCH,
        }
    },
    fill: (payload) => {
        return {
            type: types.STARSHIP_FILL,
            payload,
        }
    },
    error: (error) => {
        return {
            type: types.STARSHIP_ERROR_FETCH,
            error: true,
            payload: error,
        }
    },

    //Async
    fetchAsync: () => async (dispatch) => {
        dispatch({
            type: types.STARSHIP_FETCH_ASYNC
        })

        dispatch(starshipsAction.startFetch());

        const response = await api.starship.fetch();

        if (response.status === 200) {
            const result = await response.json();
            dispatch(starshipsAction.fill(result));
        } else {
           const error = {
               status: response.status
           }
           dispatch(starshipsAction.error(error));
        }


        dispatch(starshipsAction.stopFetch());
    }
})