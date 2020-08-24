import React from 'react';
import styles from './styles.module.scss';

export const Facade = ({children}) => {
    return (
        <div className={styles.wrap}>
            {children}
        </div>
    )
}