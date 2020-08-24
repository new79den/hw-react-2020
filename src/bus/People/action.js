import {types} from './types';
import {api} from '../../api'

export const peopleAction = Object.freeze({
    //Sync
    startFetch: () => {
        return {
            type: types.PEOPLE_START_FETCH,
        }
    },
    stopFetch: () => {
        return {
            type: types.PEOPLE_STOP_FETCH,
        }
    },
    fill: (payload) => {
        return {
            type: types.PEOPLE_FILL,
            payload,
        }
    },
    error: (error) => {
        return {
            type: types.PEOPLE_ERROR_FETCH,
            error: true,
            payload: error,
        }
    },

    //Async
    fetchAsync: () => async (dispatch) => {
        dispatch({
            type: types.PEOPLE_FETCH_ASYNC
        })
        dispatch(peopleAction.startFetch());

        const response = await api.people.fetch();

        if (response.status === 200) {
            const result = await response.json();
            dispatch(peopleAction.fill(result));
        } else {
            const error = {
                status: response.status
            }
            dispatch(peopleAction.error(error));
        }

        dispatch(peopleAction.stopFetch());
    }
})