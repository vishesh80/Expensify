import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import {history} from '../script';

import d from './Pages/Dashboard';
import c from './Pages/CreateExpenses';
import h from './Pages/Help';
import e from './Pages/Edit';
import l from './Pages/Login';
import PrivateRoute from './PrivateRoute';

const _404 = () => (<h1>404</h1>);

export default function mainBrowserRouter()
{
    return (
        <Router history={history}>
            <Switch>
                <Route path="/" component={l} exact={true} />
                <PrivateRoute path="/dashboard" component={d} exact={true} />
                <PrivateRoute path="/create" component={c} exact={true} />
                <Route path="/help" component={h} exact={true} />
                <PrivateRoute path="/edit/:id" component={e} exact={true} />
                <Route component={_404} exact={true} />
            </Switch>
        </Router>
    );
}