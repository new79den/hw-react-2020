import React from 'react';
import {Route, Switch} from 'react-router';
import {book} from './books';

// Template
import * as views from '../views'

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

                    <Starship/>
                </Route>
                <Route path={book.planets}>
                    <Planets/>
                </Route>
                <Route path={book.swapi}>
                    <Swapi/>
                </Route>
                <Route path="*">
                    <NotFound/>
                </Route>
            </Switch>
        </>
    )
};
