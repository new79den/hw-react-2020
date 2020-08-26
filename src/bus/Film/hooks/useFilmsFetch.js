import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {filmAction} from '../action';
import {useParams} from 'react-router-dom';

export const useFilmsFetch = () => {
    const dispatch = useDispatch();
    const {id} = useParams();

    useEffect(() => {
        dispatch(filmAction.fetchAsync(id))
    }, [dispatch])

    const {data, isFetching, error} = useSelector(state => state.film);

    return {data, isFetching, error}
}