import './main.scss';
import React from 'react';
import ReactDOM from 'react-dom';

import asyncComponent from './asyncComponent';

/* eslint-disable */
const App = asyncComponent(() => {
    return import('./App');
});

const Some = asyncComponent(() => {
    return import('./Some');
});
/* eslint-enable */

import {BrowserRouter, Route} from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route exact path='/' component={App} />
            <Route path='/some' component={Some} />
        </div>
    </BrowserRouter>,
    document.getElementById('app')
);
