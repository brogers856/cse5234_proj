import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { About, Error404, Login, Register, Confirm } from './pages';
import { Header, CartHandler, StepHandler } from './components'

const App = () => {
  return (
    <>
      <Header />
      <div style={{ marginLeft: "2rem", marginRight: "2rem", display: "flex", flexDirection: "column" }}>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/confirmation" component={Confirm} />
          <Route exact path="/about" component={About} />
          <CartHandler></CartHandler>
          {/* Default path. All other (and undefined) routes go here. */}
          <Route component={Error404} />
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
