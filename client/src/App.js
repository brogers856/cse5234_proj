import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, Cart, Error404, Login, Register, Shipping, Payment, Confirm } from './pages';
import Header from './components/navigation/Header';


const App = () => {
  return (
    <>
      <Header />
      <div style={{ marginLeft: "2rem", marginRight: "2rem", display: "flex", flexDirection: "column" }}>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/shipping" component={Shipping} />
          <Route exact path="/payment" component={Payment} />
          <Route exact path="/confirm" component={Confirm} />
          <Route exact path="/" component={Home} />

          {/* Default path. All other (and undefined) routes go here. */}
          <Route component={Error404} />
        </Switch>
      </div>
    </>
  );
}

export default App;
