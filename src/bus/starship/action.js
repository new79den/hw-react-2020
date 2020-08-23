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
            payload
        }
    },
    //Async
    fetchAsync: () => async (dispatch) => {
        dispatch({
            type: types.STARSHIP_FETCH_ASYNC
        })

        dispatch(starshipsAction.startFetch());

        const response = await api.starship.fetch();
        const result = await response.json();

        dispatch(starshipsAction.stopFetch());
        dispatch(starshipsAction.fill(result))
    }
})