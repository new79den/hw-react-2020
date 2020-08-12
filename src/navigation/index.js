import React from 'react';
import {Route, Switch, Redirect} from 'react-router';
import {book} from './books';

import {News} from '../views/News';
import {Detail} from '../views/Detail';
import {NotFound} from '../views/NotFound';
import {Accordion} from '../views/Accordion';
import {Login} from '../views/Login';
import {Header} from '../componens/Header';
import {useLogin} from "../assets/hooks/useLogin";


export const Routes = () => {
    const {isLoginStage, setLogin} = useLogin()
    return (
        <>
            <Route path={book.root}>
                <Header setLogin = {setLogin} isLoginStage = {isLoginStage}/>
            </Route>
            <Switch>
                <Route exact path={book.root}>
                    <Accordion/>
                </Route>
                <Route path={book.login}>
                    <Login setLogin = {setLogin} isLoginStage = {isLoginStage} />
                </Route>
                <Route path={book.newsDetail}>
                    <Detail/>
                </Route>
                <Route path={book.news}>
                    <News/>
                </Route>
                <Route path="*">
                    <NotFound/>
                </Route>
            </Switch>
        </>
    )
};
