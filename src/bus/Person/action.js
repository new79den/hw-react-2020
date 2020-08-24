import {types} from './types';
import {api} from '../../api';

export const personAction = Object.freeze({

    //Sync
    startFetch: () => {
        return {
            type: types.PERSON_START_FETCH,
        }
    },
    stopFetch: () => {
        return {
            type: types.PERSON_STOP_FETCH,
        }
    },
    fill: (payload) => {
        return {
            type: types.PERSON_FILL,
            payload,
        }
    },
    error: (error) => {
        return {
            type: types.PERSON_ERROR_FETCH,
            error: true,
            payload: error,
        }
    },

    //Async
    fetchAsync: (id) => async (dispatch) => {
        dispatch({
            type: types.PERSON_FETCH_ASYNC
        })
        dispatch(personAction.startFetch())

        const response = await api.person.fetch(id);

        if (response.status === 200) {
            const result = await response.json();
            dispatch(personAction.fill(result));
        } else {
            const error = {
                status: response.status
            }
            dispatch(personAction.error(error));
        }
        dispatch(personAction.stopFetch());
    }
})