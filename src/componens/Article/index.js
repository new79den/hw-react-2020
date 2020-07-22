import React from 'react';
import {Tag} from '../../assets/Tag';
import {CommentsCounter} from '../../assets/CommentsCounter';
import {LikesCounter} from '../../assets/LikesCounter';
import {Share} from '../../assets/Share';

import './styles.scss';

const formatDate = (date) => {
    return date.toString().length === 1 ? `0${date}` : date;
}

const getDate = (utcDate) => {
    const d = new Date(utcDate);
    const date = formatDate(d.getDate());
    const mount = formatDate(d.getMonth()+1);
    const year = d.getFullYear();
    return `${date}.${mount}.${year}`;
}


export const Article = ({title, description, likes, comments, image, tags, published}) => (
    <div className="article_wrap">
        <div className="article_main">
            <div className="buttons_wrap">
                {tags.map(tag => (<Tag source={tag}/>))}
            </div>
        </div>
        <div className="article_description">
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
        <div className="article_footer">
            <div className="article_footer_wrap">
                <div className="article_footer_body">
                    <div className="article_footer_time">
                        <p>{getDate(published)}</p>
                    </div>
                    <div className="article_footer_social_wrap">
                        <CommentsCounter counts={comments}/>
                        <LikesCounter counts={likes}/>
                        <Share/>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
