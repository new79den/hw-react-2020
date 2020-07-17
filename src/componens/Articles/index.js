import React from 'react';
import {Article} from '../Article';

import './styles.scss';

const articles = [
    {
        key: 'asfFAs2',
        title: 'Article 1',
        description: 'text 1 text 1 text 1 text 1',
    },
    {
        key: 'asdfs#4e',
        title: 'Article 3',
        description: 'text 2 text 2 text 2 text 2',
    },
    {
        key: 'ASDF32f',
        title: 'Article 4',
        description: 'text 3 text 3 text 3 text 3',
    },
    {
        key: 'ASDF32f1',
        title: 'Article 4',
        description: 'text 3 text 3 text 3 text 3',
    }
]

export const Articles = () => (
    <ul className="articles_wrap">
        {articles.map(({key, title, description}) => <Article
            key={key}
            title={title}
            description={description}
        />)}
    </ul>
)