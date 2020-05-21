import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';

const ModalAdd = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  // Contexto
  const { isAuth, axiosInstance } = useContext(AuthContext);

  // Estado
  const [schedule, setSchedule] = useState('');
  const [rendering, setRendering] = useState('');
  const [chiefComplaint, setChiefComplaint] = useState('');
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDob] = useState('');

  // Redireccionar si el usuario no esta autentica
  if (!isAuth) return (<Redirect to="/login" />)

  // Funciones
  const formCleanup = () => {
    setSchedule('');
    setRendering('');
    setChiefComplaint('');
    setName('');
    setLastName('');
    setDob('');
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const jsonSend = {
      schedule,
      subjetive: {
        rendering: rendering,
        chiefComplaint: chiefComplaint
      },
      pt: {
        name: name,
        lastName: lastName,
        dob: dob
      }
    }
  
      try {
        await axiosInstance.post('/api/v1/encounters', jsonSend);
        formCleanup();
        alert('encounter successfully added');
      } catch(error) {
        alert(error);
      }
    };

    return (
      <div>
        <Button
          style={{
            width: '40.85px',
            height: '28.5px',
            borderRadius: '28px',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            backgroundColor: '#089fc6',
            borderColor: '#089fc6',
            fontSize: '0.55rem',
            textAlign: 'center'
          }}
          onClick={toggle}
        >
          Add
      </Button>
        <Modal size='lg' isOpen={modal} toggle={toggle} className={className}>
          <ModalHeader toggle={toggle}>New Appointment</ModalHeader>
          <ModalBody>
            <h1 className="mb-4">Add a new Appointment</h1>
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label>Date</Label>
                <Input
                  type="date"
                  name="Date"
                  value={schedule}
                  onChange={(e) => setSchedule(e.target.value)}
                  placeholder="Date" />
              </FormGroup>
              <FormGroup>
                <Label>First Name</Label>
                <Input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name" />
              </FormGroup>
              <FormGroup>
                <Label>Last Name</Label>
                <Input
                  type="text"
                  name="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Last Name" />
              </FormGroup>
              <FormGroup>
                <Label>DOB</Label>
                <Input
                  type="date"
                  name="dob"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  placeholder="Date of Birthday" />
              </FormGroup>
              <Button>Submit</Button>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }

  export default ModalAdd;