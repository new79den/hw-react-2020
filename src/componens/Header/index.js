import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import {book} from "../../navigation/books";
import style from './style.module.scss';
import {useHistory} from 'react-router-dom';

export const Header = ({setLogin, isLoginStage}) => {
    let history = useHistory();

    const toggleLogin = () => {
        if (isLoginStage === true) {
            setLogin(false);
        } else {
            history.push(book.login);
        }
    }

    return (
        <div className={style.wrap_header}>
            <NavLink exact activeClassName={style.activeLink} to={book.root}>Main</NavLink>
            <NavLink exact activeClassName={style.activeLink} to={book.news}>News</NavLink>
            <NavLink exact activeClassName={style.activeLink} to={book.registration}>Registration</NavLink>

            <div className='block'>
                <button onClick={toggleLogin}> {isLoginStage === true ? 'Logout' : 'Login'} </button>
            </div>
        </div>
    )
}