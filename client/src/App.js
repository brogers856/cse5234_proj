import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Login from './pages/authentication/Login';
import Register from './pages/authentication/Register';
import { Home } from './pages';
import Header from './components/navigation/Header';
import NotFound from './pages/404/NotFound';

const App = () => {
  return(
    <>
      <Header />
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/" component={Home} />

        {/* Default path. All other (and undefined) routes go here. */}
        <Route component={NotFound}/>
      </Switch>
    </>
  );
}

export default App;
