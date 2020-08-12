import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import {book} from './books'

export const PrivateRoute = ({children, ...rest}) => {
    return (
        <Route
            {...rest}
            render={({location}) => {
                const loginJson = localStorage.getItem('login');
                const isLogin = JSON.parse(loginJson);
                return isLogin ?
                    children
                 : (
                    <Redirect
                        to={{
                            pathname: book.login,
                            state: {from: location}
                        }}
                    />
                )
            }
            }
        />
    );
}