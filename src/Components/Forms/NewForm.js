import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';

import Gastro from '../../Components/Body-Areas/Gastrointestinal'
import Respiratory from '../../Components/Body-Areas/Respiratory'

const NewForm = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button style={{ hheight: '70%', fontSize: '70%', fontWeight: 'bold', color: 'white', backgroundColor: '#089fc6' }} onClick={toggle}>FILL NEW FORM</Button>
      <Modal size='xl' isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>New Form</ModalHeader>
        <ModalBody>
          <div className='container subjective-bg d-flex flex-column justify-content-center pt-4 pb-4'>
            <div className=''>
              <h6>Notes (Chief Complaint)</h6>
              <Input style={{ height: '5rem', wordWrap: 'break-word' }} placeholder="username" />
              <hr></hr>
              <h6 className='pb-2 pt-3'>Body Area/Organ System</h6>
              <div>
                <Gastro />
                <Respiratory />
              </div>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Save</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default NewForm;