import React from 'react';
import {usePersonFetch} from './hooks/usePersonFetch';
import {Loading} from '../../componens/Loading'

export const Person = () => {
    const {data, isFetching, error} = usePersonFetch();
    const detail = isFetching || (
        <div>
            <p>Name: {data.name}</p>
            <p>Email: {data.email}</p>
            <p>Phone: {data.phone}</p>
        </div>
    )
    const errorMessage = error.status === 404 && (
        <p>Not found</p>
    );
    const loading = isFetching && <Loading/>;

    return (
        <div>
            {errorMessage}
            {loading}
            {detail}
        </div>
    )
}