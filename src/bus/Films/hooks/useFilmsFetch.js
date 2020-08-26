import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useHistory } from "react-router-dom";
import {filmsAction} from '../action';
import {book} from "../../../navigation/books";


export const useFilmsFetch = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const handleRedirect = (id) => {
        history.push(book.film.replace(':id', id))
    }

    useEffect(() => {
        dispatch(filmsAction.fetchAsync())
    }, [dispatch])

    const {data, isFetching, error} = useSelector(state => state.films);

    return {data, isFetching, error, handleRedirect}
}