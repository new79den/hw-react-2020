import React from 'react';
import {Route, Switch} from 'react-router';
// Routes
import {book} from './books';

// Template
import * as Views from '../views'

// Domains
import {NotFound} from '../bus/NotFound';
import {Starship} from '../bus/Starship';
import {Planets} from '../bus/Planets';
import {Swapi} from '../bus/Swapi';

export const Routes = () => {
    return (
        <>
            <Switch>
                <Route path={book.root}>
                    <Views.Facade>
                        <Starship/>
                    </Views.Facade>
                </Route>
                <Route path={book.planets}>
                    <Views.Facade>
                        <Planets/>
                    </Views.Facade>
                </Route>
                <Route path={book.swapi}>
                    <Views.Facade>
                        <Swapi/>
                    </Views.Facade>
                </Route>
                <Route path="*">
                    <NotFound/>
                </Route>
            </Switch>
        </>
    )
};
