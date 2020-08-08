import React from 'react';
import {NavLink} from 'react-router-dom';
import {book} from "../../navigation/books";

export const Header = () => (
    <div>
        <NavLink to={book.root}>Main</NavLink>
        <NavLink to={book.news}>News</NavLink>
    </div>
)