import React from 'react';
import {useStarshipFetch} from './hooks/useStarshipFetch';

export const Starship = () => {
    const {data, isFetching, error} = useStarshipFetch();
    const list = isFetching || data.map(({id, title}) => {
        return (<li key={id}>{title}</li>)
    })
    const errorMessage = error.status === 404 && (
        <p>Not found</p>
    )
    const loading = isFetching && <p>Loading from API...</p>;

    return (
        <ul>
            {errorMessage}
            {loading}
            {list}
        </ul>
    )
}