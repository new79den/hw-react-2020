import React from 'react';
import {Article} from '../Article';
import {Loading} from '../../assets/Loading';

import './styles.scss';

export const Articles = ({source}) => {
    return source.length ? (
        <ul className="articles_wrap">
            {source.map(({
                             title, likes, created, poster, updated, objectId, description, tags, comments
                         }) => <Article
                key={objectId}
                title={title}
                likes={likes}
                created={created}
                poster={poster}
                updated={updated}
                description={description}
                tags={tags}
                comments={comments}
            />)}
        </ul>
    ) : 'загрузка'
}