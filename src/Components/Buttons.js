import React from 'react';
import { Link } from 'react-router-dom';
import { Button, ButtonGroup } from 'reactstrap';

const Buttons = (props) => {
  return (
    <ButtonGroup>
      <Button tag={Link} to="/subjective">S</Button>
      <Button tag={Link} to="/objective">O</Button>
      <Button>A</Button>
      <Button>P</Button>
    </ButtonGroup>
  );
}

export default Buttons;