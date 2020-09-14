import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';


const Respiratory = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Button onClick={toggle} style={{ margin:'1rem', color:'white', backgroundColor:'#089fc6' }}>Respiratory</Button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody className='d-flex flex-row'>

          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}

export default Respiratory;