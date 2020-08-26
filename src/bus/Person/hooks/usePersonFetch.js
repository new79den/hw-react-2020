import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from "react-router-dom";

import {personAction} from '../action';

export const usePersonFetch = () => {
    const dispatch = useDispatch();
    let { id } = useParams();

    useEffect(() => {
        dispatch(personAction.fetchAsync(id))
    }, [dispatch, id]);

    const {data, isFetching, error} = useSelector(state => state.person)

    return {data, isFetching, error}
}