import React, { Fragment } from 'react';
import BreakpointProvider from 'react-socks';

// Components
import Navigation from './Components/Navbars/Navbar';
import Footersito from './Components/Footers/Footer';

// Contexts
import AuthContextProvider from './contexts/AuthContext';

// Misc
import { Container } from 'reactstrap';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Routes from './Routes';


function App() {
  return (
    //<BreakpointProvider>
      <Fragment>
      <Router>
        <AuthContextProvider>
          <Navigation />
          <Container>
            <Switch>
              { Routes }
            </Switch>
          </Container>
          <Footersito />
        </AuthContextProvider>
      </Router>
    </Fragment>
    //</BreakpointProvider>
  );
}

export default App;



