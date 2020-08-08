import React from 'react';
import {Route, Switch, Redirect} from 'react-router';
import {book} from './books';

import {News} from '../views/News';
import {Detail} from '../views/Detail';
import {NotFound} from '../views/NotFound';
import {Accordion} from '../views/Accordion';
import {Header} from '../componens/Header';


export const Routes = () => (
    <>
        <Route path={book.root}>
            <Header/>
        </Route>
        <Switch>
            <Route exact path={book.root}>
                <Accordion/>
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
);
