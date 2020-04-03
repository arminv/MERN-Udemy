import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import Users from './users/pages/Users';
import NewPlace from './places/pages/NewPlace';

const App = () => {
  return (
    <Router>
      <Switch>
        {/* NOTE: Switch stops the page from always hitting the redirect and stops as soon as a route is hit: */}
        <Route path='/' exact>
          <Users />
        </Route>
        <Route path='/places/new' exact>
          <NewPlace />
        </Route>
        <Redirect to='/' />
      </Switch>
    </Router>
  );
};

export default App;
