import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Error404, Login, Register } from './pages';
import { Header, Footer, CartHandler } from './components'

const App = () => {
  return (
    <>
      <Header />
      <div style={{ minHeight:"50rem",marginTop: "1rem", marginLeft: "2rem", marginRight: "2rem", display: "flex", flexDirection: "column" }}>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <CartHandler></CartHandler>

          {/* Default path. All other (and undefined) routes go here. */}
          <Route component={Error404} />
        </Switch>
      </div>
      <Footer />
    </>
  );
}

export default App;
