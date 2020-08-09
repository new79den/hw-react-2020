import React from 'react';
import styles from './styles.module.scss';
import {CommentsCounter} from '../../assets/CommentsCounter';
import {LikesCounter} from '../../assets/LikesCounter';


export const ArticleDetail = ({detail}) => {

    return (
        <div className={`news_wrap wrap ${styles.articleDetail}`}>

            <div className={styles.image_wrap}>
                <img src={detail.poster} alt=""/>
            </div>
            <div className={styles.detail_wrap}>
                <h1>{detail.title}</h1>
                <p>{detail.description}</p>
                <div className={styles.like_wrap}>
                    <LikesCounter counts={detail.likes}/>
                    <CommentsCounter counts={detail.comments}/>
                </div>
            </div>
        </div>
    )
}