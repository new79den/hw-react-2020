import {types} from './types';
import {api} from '../../api'

export const filmsAction = Object.freeze({
    //sync
    startFetch: () => ({
        type: types.FILMS_START_FETCH,
    }),
    stopFetch: () => ({
        type: types.FILMS_STOP_FETCH,
    }),
    fill: (payload) => ({
        type: types.FILMS_FILL,
        payload,
    }),
    error: (error) => ({
        type: types.FILMS_ERROR,
        error: true,
        payload: error,
    }),

    //async
    fetchAsync: () => async (dispatch) => {
        dispatch({
            type: types.FILMS_ASYNC_FETCH
        });

        dispatch(filmsAction.startFetch());

        const response = await api.films();

        if (response.status === 200) {
            const result = await response.json();
            dispatch(filmsAction.fill(result));
        } else {
            const error = {
                status: response.status
            }
            dispatch(filmsAction.error(error));
        }

        dispatch(filmsAction.stopFetch());
    }
})