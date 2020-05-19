import React from 'react';
import { Route } from 'react-router-dom';

// Views
import Register from './Views/Register';
import Login from './Views/Login';
import Home from './Views/Home';
import Schedule from './Views/Schedule';
import Subjective from './Views/Subjective';

export default [
  <React.Fragment>
      <Route exact path="/" component={ Login } ></Route>
      <Route exact path="/login" component={ Login } ></Route>
      <Route exact path="/register" component={ Register } ></Route>
      <Route exact path="/schedule" component={ Schedule } ></Route>
      <Route exact path="/subjective" component={ Subjective } ></Route>
  </React.Fragment>
];