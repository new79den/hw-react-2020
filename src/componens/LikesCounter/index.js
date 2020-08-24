import React, {useState} from 'react';
import {useCounts} from './hooks/useCounts';

import './styles.scss';

import likesSvg from './svg/favorite.svg';
import likesActiveSvg from './svg/favorite_active.svg';

export const LikesCounter = ({counts}) => {
    const {count, increaseCount, decreaseCount} = useCounts(counts);
    const [isLike, setIsLike] = useState(false);

    const likeArticle = () => {
        if (isLike === false) {
            increaseCount();
        } else {
            decreaseCount();
        }
        setIsLike(value=>!value);
    }

    const classCount = ["count"];
    if (isLike) classCount.push("active");

    return (
        <div onClick={likeArticle} className="comments_wrap">
            <img src={isLike ? likesActiveSvg : likesSvg} alt=""/>
            <div className={classCount.join(' ')}>
                {count}
            </div>
        </div>
    );
};
