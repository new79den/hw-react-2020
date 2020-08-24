import React from 'react';
import {Route, Switch, Redirect} from 'react-router';
import {book} from './books';
import {PrivateRoute} from './PrivateRout';
import {News} from '../views/News';
import {Detail} from '../views/Detail';
import {NotFound} from '../views/NotFound';
import {Accordion} from '../views/Accordion';
import {Login} from '../views/Login';
import {Header} from '../componens/Header';
import {useLogin} from "../assets/hooks/useLogin";
import {StudentRegistration} from '../views/StudentRegistration';
import {Student} from '../views/Student';
import {User} from "../views/User";
import {Starship} from '../views/Starship';
import {Planets} from '../views/Planets';

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
                <PrivateRoute path={book.newsDetail}>
                    <Detail/>
                </PrivateRoute>
                <Route path={book.news}>
                    <News/>
                </Route>
                <Route path={book.registration}>
                    <StudentRegistration/>
                </Route>
                <Route path={book.student}>
                    <Student/>
                </Route>
                <Route path={book.user}>
                    <User/>
                </Route>
                <Route path={book.starship}>
                       <Starship/>
                </Route>
                <Route path={book.planets}>
                    <Planets/>
                </Route>
                <Route path="*">
                    <NotFound/>
                </Route>
            </Switch>
        </>
    )
};
