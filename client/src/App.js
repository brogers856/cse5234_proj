import React from 'react';
import styles from'./App.css'
import { Switch, Route } from 'react-router-dom';
import { About, Error404, Login, Register, Confirm } from './pages';
import { Header, CartHandler, Footer } from './components'

const App = () => {
  return (
    <>
    <div className={styles.content}>
      <Header />
      <div style={{ minHeight:"50rem",marginTop: "1rem", marginLeft: "2rem", marginRight: "2rem", display: "flex", flexDirection: "column" }}>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/confirmation" component={Confirm} />
          <Route exact path="/about" component={About} />
          <CartHandler></CartHandler>

          {/* Default path. All other (and undefined) routes go here. */}
          <Route component={Error404} />
        </Switch>
      </div>
      <Footer />
    </div>
    </>
  );
}

export default App;
