import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import autenticated from './auth/auth';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

const RoutePrivate = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            autenticated() ? (
            <Component {...props} />
        ) : (
            <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
        )
        }
    />
);

export default function Router() {
  return (
    <BrowserRouter>
        <Switch>
            <Route path="/login" component={Login} />
            <RoutePrivate exact path="/" component={Dashboard} />
            <Route path="*" component={() => <h1>Page not found</h1>} />
        </Switch>
    </BrowserRouter>
  );
}
