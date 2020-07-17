import React from 'react';

import './styles.scss';

import likesSvg from './favorite.svg';

export const Likes = () => {
    return (
        <div className="comments_wrap">
            <img src={likesSvg} alt=""/>
            <div className="count">
                123
            </div>
        </div>
    );
};
