import React from 'react';
import {useFilmsFetch} from './hooks/useFilmsFetch';
import {Loading} from "../../componens/Loading";

export const Films = () => {
    const {data, isFetching, error, handleRedirect} = useFilmsFetch();

    const list = isFetching || data.map(({id, title, thumbnailUrl}) => {
        return (
            <li onClick={()=>handleRedirect(id)} key={id}>
                <img src={thumbnailUrl} alt={title}/>
                <p>title</p>
            </li>
        )
    })
    const errorMessage = error.status === 404 && (<p>Not found</p>);
    const loading = isFetching && <Loading/>;

    return (
        <div>
            {list}
            {errorMessage}
            {loading}
        </div>
    )
}