import React from 'react';
import {useFilmsFetch} from './hooks/useFilmsFetch';
import {Loading} from '../../componens/Loading';

export const Film = () => {
    const {data, isFetching, error} = useFilmsFetch();
    const loading = isFetching && <Loading/>
    const errorMsg = error.status === 404 && (<p>Not found</p>);
    const detail = isFetching || (
        <div>
            <h1>{data.title}</h1>
            <img src={data.url} alt={data.title}/>
        </div>
    )

    return (
        <>
            {loading}
            {errorMsg}
            {detail}
        </>
    )
}