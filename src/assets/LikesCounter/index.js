import React from 'react';

import './styles.scss';

import likesSvg from './favorite.svg';

export const LikesCounter = ({counts}) => {
    return (
        <div className="comments_wrap">
            <img src={likesSvg} alt=""/>
            <div className="count">
                {counts}
            </div>
        </div>
    );
};
