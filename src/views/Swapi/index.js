import React from 'react';
import {Planets} from '../Planets';
import {Starship} from '../Starship';
import styles from './styles.module.scss';

export const Swapi = () => {
    return <div className={styles.wrap}>
        <div>
            <h3>Planets</h3>
            <Planets/>
        </div>
       <div>
           <h3>Starship</h3>
           <Starship/>
       </div>

    </div>
}