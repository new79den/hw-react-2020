import React from 'react';

import './styles.scss';

import shareSvg from './share.svg';

export const Share = () => {
    return (
        <div className="comments_wrap">
            <img src={shareSvg} alt=""/>
            <div className="count">
                123
            </div>
        </div>
    );
};
