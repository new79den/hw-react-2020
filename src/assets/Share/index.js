import React from 'react';

import './styles.scss';

import commentsSvg from './bubble.svg';

export const Comments = () => {
    return (
        <div className="comments_wrap">
            <img src={commentsSvg} alt=""/>
            <div className="count">
                123
            </div>
        </div>
    );
};
