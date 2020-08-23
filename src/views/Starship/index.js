import React from 'react';
import {useStarshipFetch} from './hooks/useStarshipFetch';

export const Starship = () => {
    const {data, isFetching} = useStarshipFetch();
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