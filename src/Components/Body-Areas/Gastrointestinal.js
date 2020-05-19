import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

import AbPain from '../Diseases/AbPain'
import Diarrhea from '../Diseases/Diarrhea'
import Vomiting from '../Diseases/Vomiting'

const Gastro = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Button onClick={toggle} style={{ margin:'1rem', color:'white', backgroundColor:'#089fc6'}}>Gastrointestinal</Button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody className='d-flex flex-row'>
            <AbPain />
            <Diarrhea />
            <Vomiting />
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}

export default Gastro;