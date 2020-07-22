import React from 'react';
import {Article} from '../Article';
import './styles.scss';

export const Articles = ({source = []}) => (
    <ul className="articles_wrap">
        {source.map(({key, title, description, likes, comments, image, tags, published}, index) => <Article
            key={index}
            title={title}
            description={description}
            likes={likes}
            comments={comments}
            image={image}
            tags={tags}
            published={published}
        />)}
    </ul>
)