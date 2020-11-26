import React from 'react';

import Home from './components/pages/Home';
import Navbar from './components/Navbar';

import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Routes() {
  return (
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/services" component={Services} />
          <Route path="/products" component={Products} />
          <Route path="/sign-up" component={SignUp} />
        </Switch>
      </Router>
  )
}

export default Routes;
