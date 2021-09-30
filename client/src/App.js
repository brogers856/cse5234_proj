import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/authentication/Login';
import Register from './pages/authentication/Register';
import { Shipping, Confirm } from './pages';
import Header from './components/navigation/Header';
import { CartHandler, StepHandler } from './components';
import NotFound from './pages/404/NotFound';

const App = () => {
  return (
    <>
      <Header />
      <div style={{ marginLeft: "2rem", marginRight: "2rem", display: "flex", flexDirection: "column" }}>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/shipping" component={Shipping} />
          <Route exact path="/confirmation" component={Confirm} />
          <CartHandler></CartHandler>

          {/* Default path. All other (and undefined) routes go here. */}
          <Route component={NotFound} />
        </Switch>
        <Switch>
          <Route exact path="/shipping" component={StepHandler} />
          <Route exact path="/payment" component={StepHandler} />
          <Route exact path="/summary" component={StepHandler} />
        </Switch>
      </div>
    </>
  );
}

export default App;
