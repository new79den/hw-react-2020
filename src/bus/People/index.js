import React from 'react';
import {Loading} from '../../componens/Loading'
import {usePeopleFetch} from './hooks/usePeopleFetch';

export const People = () => {
    const {data, isFetching, error, handleRedirect} = usePeopleFetch();

    const list = isFetching || data.map(({id, name}) => {
        return (<li onClick={handleRedirect.bind(null, id)} key={id}>{name}</li>)
    })
    const errorMessage = error.status === 404 && (
        <p>Not found</p>
    )
    const loading = isFetching && <Loading/>;

    return (
        <ul>
            {errorMessage}
            {loading}
            {list}
        </ul>
    )
}