import {types} from './types';
import {api} from '../../api'

export const planetsAction = Object.freeze({
    //Sync
    startFetch: () => {
        return {
            type: types.PLANETS_START_FETCH,
        }
    },
    stopFetch: () => {
        return {
            type: types.PLANETS_STOP_FETCH,
        }
    },
    fill: (payload) => {
        return {
            type: types.PLANETS_FILL,
            payload,
        }
    },
    error: (error) => {
        return {
            type: types.PLANETS_ERROR_FETCH,
            error: true,
            payload: error,
        }
    },

    //Async
    fetchAsync: () => async (dispatch) => {
        dispatch({
            type: types.PLANETS_FETCH_ASYNC
        })
        dispatch(planetsAction.startFetch());

        const response = await api.starship.fetch();

        if (response.status === 200) {
            const result = await response.json();
            dispatch(planetsAction.fill(result));
        } else {
           const error = {
               status: response.status
           }
           dispatch(planetsAction.error(error));
        }

        dispatch(planetsAction.stopFetch());
    }
})