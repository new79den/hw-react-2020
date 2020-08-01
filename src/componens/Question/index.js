import React from 'react';
import './styles.scss';
import open from './svg/plus.svg';
import close from './svg/minus.svg';

export const Question = ({question, isShowAnswer, showAnswer}) => {

    return (
        <div className="question_wrap">

            <div className="title" onClick={showAnswer}>
                <div><p>{question.question}</p></div>
                <div className="target">
                    <img src={isShowAnswer ? close : open} alt="target"/>
                </div>
            </div>
            {isShowAnswer && (
                <div className="answer">
                    <p>{question.answer}</p>
                </div>
            )}

        </div>
    )
}