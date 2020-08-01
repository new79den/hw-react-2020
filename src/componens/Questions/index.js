import React from 'react';
import {Question} from '../Question';
import {useActiveTarget} from './hooks/useActiveTarget';

import './styles.scss';

export const Questions = ({source}) => {
    const {isShowAnswer, showAnswer} = useActiveTarget();

    return (
        <div className="questions_wrap">
            {source.map((question, index) => <Question
                key={index}
                question={question}
                isShowAnswer = {isShowAnswer(index)}
                showAnswer = {showAnswer.bind(null, index)}
            />)}
        </div>
    )
}