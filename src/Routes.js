import React from 'react';
import { Route } from 'react-router-dom';

// Views
import Register from './Views/Register';
import Login from './Views/Login';
import Logout from './Views/Logout';
import Schedule from './Views/Schedule';
import Subjective from './Views/Subjective';
import Objective from './Views/Objective';

export default [
  <React.Fragment>
      <Route exact path="/" component={ Login } ></Route>
      <Route exact path="/login" component={ Login } ></Route>
      <Route exact path="/register" component={ Register } ></Route>
      <Route exact path="/schedule" component={ Schedule } ></Route>
      <Route exact path="/subjective" component={ Subjective } ></Route>
      <Route exact path="/objective" component={ Objective } ></Route>
      <Route exact path="/logout" component={ Logout } ></Route>
  </React.Fragment>
];