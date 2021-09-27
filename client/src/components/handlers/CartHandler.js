import React, { useEffect, useState } from "react";
import { Switch, Route } from 'react-router-dom';
import { Home, Cart, Payment, Summary, Shipping} from '../../pages';

const CartHandler = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        setCart(JSON.parse(window.localStorage.getItem('cart') || "[]"));
    }, []);

    useEffect(() => {
        window.localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart]);

    function removeHandler(removeItem) {
        setCart(cart.filter(function (item) {
            return item.key !== removeItem.key
        }))
    }

    function removeAllHandler() {
        setCart([]);
    }

    function addHandler(newItem) {
        let oldCart = JSON.parse(window.localStorage.getItem('cart'))
        let found = false;
        for (let i = 0; i < oldCart.length; i++) {
          let obj = oldCart[i];
          if (newItem.key === obj.key) {
            found = true;
            obj.quantity += newItem.quantity;
          }
        }
        if (found === false) {
          let joined = cart.concat(newItem)
          setCart(joined)
        } else {
          setCart(oldCart)
        }
      }

      function changeHandler(value, record) {
        let newCart = cart.map((item) => {
            if (item.key === record.key) {
                item.quantity = value;
            }
            return item
        })
        setCart(newCart)
        window.localStorage.setItem('cart', JSON.stringify(newCart))
    }

    return (    
    <Switch>
        <Route exact path="/" render={(props) => <Home {...props} cart={cart} addHandler={addHandler} /> } />
        <Route exact path="/cart" render={(props) => <Cart {...props} cart={cart} addHandler={addHandler} removeAllHandler={removeAllHandler} removeHandler={removeHandler} changeHandler={changeHandler} />} />
        <Route exact path="/shipping" render={(props) => <Shipping {...props} cart={cart} /> } />
        <Route exact path="/payment" render={(props) => <Payment {...props} cart={cart} /> } />
        <Route exact path="/summary" render={(props) => <Summary {...props} cart={cart} /> } />
      </Switch>
      )
}

export default CartHandler