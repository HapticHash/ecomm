import React from 'react';
import './App.css';
import { useStateValue } from './StateProvider'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import Login from './Login'
import Checkout from './Checkout'

function App() {

  const [{ basket }, dispatch] = useStateValue();

  useEffect(() => {
    
  }, [])

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <Header/>
            <Checkout/>
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