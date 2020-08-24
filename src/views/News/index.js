import React from 'react';
import {Articles} from '../../componens/Articles';
import {useNews} from './hooks/useNews';
import {Loading} from '../../componens/Loading';

import './styles.scss';


export const News = () => {
    const {posts} = useNews();

    return (
        <div className="news_wrap wrap">
            {posts.isLoaded
                ? <Articles source={posts.data}/>
                : <Loading/>
            }
        </div>
    )
};
