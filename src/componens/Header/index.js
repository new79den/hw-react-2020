import React from 'react';
import {NavLink} from 'react-router-dom';
import {book} from "../../navigation/books";
import style from './style.module.scss';

export const Header = () => (
        <div className={style.wrap_header}>
            <NavLink exact activeClassName={style.activeLink} to={book.root}>Main</NavLink>
            <NavLink exact activeClassName={style.activeLink} to={book.news}>News</NavLink>
        </div>

)