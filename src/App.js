import React ,{ useEffect } from 'react'
import './App.css';
import { useStateValue } from './StateProvider'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import Orders from './Orders'
import Login from './Login'
import Checkout from './Checkout'
import { auth } from './firebase'
import Payment from './Payment'
import NewReview from './NewReview'
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"
import ProductList from './ProductList';
import Products from './Products';
import NewRev from './NewRev';

const promise = loadStripe(
  "pk_test_51HnBe1AfPjopGlx4q8NiU2JPXIMliwXMwo3vmCm1f8QCesvHOairxAuZ8eCIt7CpvLNEBxYagghUsQNQDEvIE8mM00OurNR6sQ"
)

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
          <Route path="/create-review">
            <Header/>
            <NewReview/>
          </Route>
          <Route path="/checkout">
            <Header/>
            <Checkout/>
          </Route>
          <Route path="/products">
            <Header/>
            <ProductList/>
          </Route>
          <Route path="/products/:id">
            <Header/>
            <Products/>
          </Route>
          <Route path="/orders">
            <Header/>
            <Orders />
          </Route>
          <Route path="/newReview">
            <Header/>
            <NewRev />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/payment">
            <Header/>
            <Elements stripe={promise}>
              <Payment/>
            </Elements>
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