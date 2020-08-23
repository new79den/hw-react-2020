import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {starshipsAction} from '../../bus/starship/action';


export const Starship = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(starshipsAction.fetchAsync())
    }, [dispatch])

    const {data, isFetching} = useSelector(state => state.starship);
    const list = isFetching || data.map(({id, title}) => {
        return (<li key={id}>{title}</li>)
    })
    const loading = isFetching && <p>Loading from API...</p>;

    return (
        <ul>
            {loading}
            {list}
        </ul>
    )
}