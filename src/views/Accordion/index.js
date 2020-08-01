import React from 'react';
import source from '../../sourceAccordion.json';
import {Questions} from '../../componens/Questions'
import './styles.scss';

export const Accordion = () => {
    return (
        <div className="accordion_wrap">
            <h3>Accordion wrap</h3>
            <Questions source={source}/>
        </div>
    )
}
