import React from 'react';
import { Route } from 'react-router-dom';

// Views
import Register from './Views/Register';
import Login from './Views/Login';
import Home from './Views/Home';
import Signup from './Views/Signup';

export default [
  <React.Fragment>
      <Route exact path="/" component={ Login } ></Route>
      <Route exact path="/login" component={ Login } ></Route>
      <Route exact path="/register" component={ Register } ></Route>
  </React.Fragment>
];