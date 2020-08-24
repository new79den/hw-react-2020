import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useHistory } from "react-router-dom";
import {peopleAction} from '../action';
import {book} from '../../../navigation/books';

export const usePeopleFetch = () => {
    const dispatch = useDispatch();
    let history = useHistory();

    const handleRedirect = (id) => {
        history.push(book.person.replace(':id', id))
    }

    useEffect(() => {
        dispatch(peopleAction.fetchAsync())
    }, [dispatch])
    const {data, isFetching, error} = useSelector(state => state.people);

    return  {data, isFetching, error, handleRedirect}
}