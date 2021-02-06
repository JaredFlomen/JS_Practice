import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import Profile from './Profile';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={() => <App title="Jared's Home" />} />
        <Route
          exact
          path='/profile'
          component={() => <Profile title="Jared's Profile" />}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
