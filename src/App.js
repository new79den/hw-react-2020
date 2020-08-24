import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from 'react-redux';
import {store} from './init/store';
import {history} from "./navigation/history";
import {Routes} from "./navigation";

export const App = () => (
    <Provider store={store}>
        <Router history={history}>
            <Routes/>
        </Router>
    </Provider>
);
