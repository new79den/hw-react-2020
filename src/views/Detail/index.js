import React from 'react';
import {ArticleDetail} from '../../componens/ArticleDetail';
import {useDetail} from './hooks/useDetail';
import {useParams} from 'react-router-dom';
import {Redirect} from 'react-router-dom';

export const Detail = () => {
    const {id} = useParams();
    const {detail} = useDetail(id);

    return (detail.isError === false)
        ? <ArticleDetail detail={detail}/>
        : <Redirect to="/404" />
};
