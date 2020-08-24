import React from 'react';
import {Planets} from '../Planets';
import {Starship} from '../Starship';
import {useLoading} from './hooks/useLoading'
import styles from './styles.module.scss';

export const Swapi = () => {
    const {isDataLoading} = useLoading();

    return <div >
        <h1>Swapi {isDataLoading && '(Loading)'}</h1>
        <div className={styles.wrap}>
            <div>
                <h3>Planets</h3>
                <Planets/>
            </div>
            <div>
                <h3>Starship</h3>
                <Starship/>
            </div>
        </div>

    </div>
}