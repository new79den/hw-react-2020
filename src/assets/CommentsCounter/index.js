import React from 'react';

import './styles.scss';

import commentsSvg from './bubble.svg';

export const CommentsCounter = ({counts}) => {
    return (
        <div className="comments_wrap">
            <img src={commentsSvg} alt=""/>
            <div className="count">
                {counts}
            </div>
        </div>
    );
};
