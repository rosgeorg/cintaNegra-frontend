import React, { Fragment } from 'react';

// Components
import Navigation from './Components/Navbars/Navbar';
import Footersito from './Components/Footers/Footer';

// Misc
import { Container } from 'reactstrap';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Routes from './Routes';

function App() {
  return (
    <Fragment>  
      <Router>
        <Navigation />
        <Container>
          <Switch>
            { Routes }
          </Switch>
        </Container>
        <Footersito />
      </Router>
    </Fragment>
  );
}

export default App;