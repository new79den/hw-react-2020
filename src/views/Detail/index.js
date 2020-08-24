import React from 'react';
import {ArticleDetail} from '../../componens/ArticleDetail';
import {useDetail} from './hooks/useDetail';
import {useParams} from 'react-router-dom';
import {Redirect} from 'react-router-dom';
import {Loading} from '../../componens/Loading';

export const Detail = () => {
    const {id} = useParams();
    const {detail} = useDetail(id);
    if (detail.isError === true) {
        return <Redirect to="/404" />;
    }
    return (detail.isLoaded === true)
        ? <ArticleDetail detail={detail.data}/>
        : <Loading/>
};
