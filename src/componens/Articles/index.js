import React from 'react';
import {Article} from '../Article';
import './styles.scss';

export const Articles = ({source}) => {

    return (
        <ul className="articles_wrap">
            {source.map(({
                             title, likes, created, poster, updated, objectId, description, tags, comments
                         }) => <Article
                key={objectId}
                objectId={objectId}
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
    )
}