import React from 'react';
import {Route, Switch} from 'react-router';
// Routes
import {book} from './books';

// Template
import * as Views from '../views'

// Domains
import {People} from '../bus/People';
import {Person} from '../bus/Person';
import {NotFound} from '../bus/NotFound';
import {Film} from '../bus/Film';
import {Films} from '../bus/Films';

export const Routes = () => {
    return (
        <>
            <Switch>
                <Route exact path={book.root}>
                    <Views.Facade>
                        <People/>
                    </Views.Facade>
                </Route>
                <Route path={book.person}>
                    <Views.Facade>
                        <Person/>
                    </Views.Facade>
                </Route>
                <Route exect path={book.film}>
                    <Views.Facade>
                        <Film/>
                    </Views.Facade>
                </Route >
                <Route path={book.films}>
                    <Views.Facade>
                        <Films/>
                    </Views.Facade>
                </Route >
                <Route path="*">
                    <NotFound/>
                </Route>
            </Switch>
        </>
    )
};
