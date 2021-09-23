import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './pages/authentication/Login';
import Register from './pages/authentication/Register';
import { Home, Cart, Shipping } from './pages';
import Header from './components/navigation/Header';
import NotFound from './pages/404/NotFound';

const App = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(JSON.parse(window.localStorage.getItem('cart') || "[]"));
  }, []);

  useEffect(() => {
    window.localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart]);

  function addHandler(newItem) {
    let oldCart = JSON.parse(window.localStorage.getItem('cart'))
    let found = false;
    for(var i = 0; i < oldCart.length; i++) {
      var obj = oldCart[i];
      if(newItem.key === obj.key){
        found = true;
        obj.quantity++;
      }
    }
    if(found === false) {
      var joined = cart.concat(newItem)
      setCart(joined)
    } else {
      setCart(oldCart)
    }
  }

  function removeHandler(removeItem){
    setCart(cart.filter(function(item) {
      return item.key !== removeItem.key
    }))
  }
  return (
    <>
      <Header />
      <div style={{ marginLeft: "2rem", marginRight: "2rem", display: "flex", flexDirection: "column" }}>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/shipping" component={Shipping} />
          <Route exact path="/" render={(props) => <Home {...props} handler={addHandler}/>} />

          {/* Default path. All other (and undefined) routes go here. */}
          <Route component={NotFound} />
        </Switch>
      </div>
    </>
  );
}

export default App;
