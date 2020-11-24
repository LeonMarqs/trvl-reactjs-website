import React from 'react';

import Home from './components/pages/Home';
import Navbar from './components/Navbar';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Routes() {
  return (
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}/>
        </Switch>
      </Router>
  )
}

export default Routes;
