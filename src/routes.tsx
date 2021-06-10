import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Index }from './domains/index/index';

export const Routes = () =>
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Index} />
        </Switch>
    </BrowserRouter>
