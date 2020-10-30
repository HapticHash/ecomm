import React ,{ useEffect } from 'react';
import './App.css';
import { useStateValue } from './StateProvider'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import Login from './Login'
import Checkout from './Checkout'
import { auth } from './firebase';
import ProductDetail from './ProductDetail';

function App() {

  const [{ basket }, dispatch] = useStateValue();

  useEffect(() => {
      const unsub = auth.onAuthStateChanged((authUser) => {
        if(authUser) {

          dispatch({
            type: "SET_USER",
            user: authUser
          })

        } else {

          dispatch({
            type: "SET_USER",
            user: null
          })
        
        }
      })

      return() => {
        unsub()
      }

  }, [])

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <Header/>
            <Checkout/>
          </Route>
          <Route path="/productDetail">
            <Header/>
            <ProductDetail/>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Header/>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

//35:45