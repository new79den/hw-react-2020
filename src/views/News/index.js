import React from 'react';
import {Articles} from '../../componens/Articles';
import {useNews} from './hooks/useNews';

import './styles.scss';

export const News = () => {
    const { posts } = useNews();

    return (
    <div className="news_wrap wrap">
        <Articles source={posts}/>
    </div>
)};
