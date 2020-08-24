import React from 'react';
import {usePlanetsFetch} from './hooks/usePlanetsFetch';

export const Planets = () => {
    const {data, isFetching, error} = usePlanetsFetch();
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