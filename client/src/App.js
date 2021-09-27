import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, Error404, Login, Register, Confirm } from './pages';
import { Header, CartHandler } from './components'

const App = () => {
  return (
    <>
      <Header />
      <div style={{ marginLeft: "2rem", marginRight: "2rem", display: "flex", flexDirection: "column" }}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/confirmation" component={Confirm} />
          <CartHandler></CartHandler>
          {/* Default path. All other (and undefined) routes go here. */}
          <Route component={Error404} />
        </Switch>
      </div>
    </>
  );
}

export default App;
