import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './Header';
import d from './Pages/Dashboard';
import c from './Pages/CreateExpenses';
import h from './Pages/Help';
import e from './Pages/Edit';


const _404 = () => (<h1>404</h1>);

export default function mainBrowserRouter()
{
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path="/" component={d} exact={true} />
                <Route path="/create" component={c} exact={true} />
                <Route path="/help" component={h} exact={true} />
                <Route path="/edit/:id" component={e} exact={true} />
                <Route component={_404} exact={true} />
            </Switch>
        </BrowserRouter>
    );
}