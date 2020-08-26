import {types} from './types';
import {api} from '../../api'

export const filmAction = Object.freeze({
    //sync
    startFetch: () => ({
        type: types.FILM_START_FETCH,
    }),
    stopFetch: () => ({
        type: types.FILM_STOP_FETCH,
    }),
    fill: (payload) => ({
        type: types.FILM_FILL,
        payload,
    }),
    error: (error) => ({
        type: types.FILM_ERROR,
        error: true,
        payload: error,
    }),

    //async
    fetchAsync: (id) => async (dispatch) => {
        dispatch({
            type: types.FILM_ASYNC_FETCH
        });

        dispatch(filmAction.startFetch());

        const response = await api.films(id);

        if (response.status === 200) {
            const result = await response.json();
            dispatch(filmAction.fill(result));
        } else {
            const error = {
                status: response.status
            }
            dispatch(filmAction.error(error));
        }

        dispatch(filmAction.stopFetch());
    }
})