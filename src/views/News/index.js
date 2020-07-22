import React from 'react';
import { Articles } from '../../componens/Articles';
import source from '../../source.json';
import './styles.scss';

export const News = () => (
    <div className="news_wrap wrap">
            <Articles source = {source}/>
    </div>
);
