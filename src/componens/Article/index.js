import React from 'react';
import { useHistory } from "react-router-dom";
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


export const Article = ({title, likes, created, poster, updated, description, tags, comments, objectId}) => {
    let history = useHistory();

    const openNews = (id) => {
        history.push(`/news/${id}`);
    }

    const getTags = () => {
        return tags.split(', ');
    }

    const dateArticle = updated || created;

    return (
    <div className="article_wrap">
        <div className="article_main">
            <img src={poster} alt=""/>
            {<div className="buttons_wrap">
                {getTags().map((tag, index) => (<Tag key={index} source={tag}/>))}
            </div>}
        </div>
        <div className="article_description">
            <h3 onClick={()=>openNews(objectId)}>{title}</h3>
            <p>{description}</p>
        </div>
        <div className="article_footer">
            <div className="article_footer_wrap">
                <div className="article_footer_body">
                    <div className="article_footer_time">
                        <p>{getDate(dateArticle)}</p>
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
)};
