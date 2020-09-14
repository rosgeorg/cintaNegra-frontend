import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Input,
    Form,
    FormGroup,
    Label,
} from 'reactstrap';


import '../../Assets/CSS/ObjForm.scss'

const ObjForm = (props) => {

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    // Contexto
    const { isAuth, axiosInstance } = useContext(AuthContext);

    // Estado
    const [highPressure, setHighPressure] = useState('');
    const [lowPressure, setLowPressure] = useState('');
    const [pulse, setPulse] = useState('');
    const [temperature, setTemperature] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [bmi, setBmi] = useState('');

    // Redireccionar si el usuario no esta autentica
    if (!isAuth) return (<Redirect to="/login" />)

    // Funciones
    const formCleanup = () => {
        setHighPressure('');
        setLowPressure('');
        setPulse('');
        setTemperature('');
        setHeight('');
        setWeight('');
        setBmi('');
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const jsonSend = {
            objective: {
                HighPressure: highPressure,
                LowPressure: lowPressure,
                Pulse: pulse,
                Temperature: temperature,
                Height: height,
                Weight: weight,
                BMI: bmi,
            }
        }


        try {
            await axiosInstance.patch('/api/v1/encounters/5ec85c1e06fe8500177665a8', jsonSend);
            console.log(jsonSend);
            formCleanup();
            alert('info successfully added');
            window.location.reload();
        } catch (error) {
            alert(error);
        }
    };


    return (
        <div>
            <Button style={{ height: '70%', fontSize: '70%', fontWeight: 'bold', color: 'white', backgroundColor: '#089fc6' }} onClick={toggle}>UPDATE FORM</Button>
            <Modal size='lg' isOpen={modal} toggle={toggle} className=' container model-size'>
                <ModalHeader toggle={toggle}>Update Form</ModalHeader>
                <ModalBody>
                    <h1 className="mb-4">Add Objective Info</h1>
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label>Blood Pressure (High)</Label>
                            <Input
                                type="number"
                                name="BP-High"
                                value={highPressure}
                                onChange={(e) => setHighPressure(e.target.value)}
                                placeholder="BP High" />
                        </FormGroup>
                        <FormGroup>
                            <Label>Blood Pressure (Low)</Label>
                            <Input
                                type="number"
                                name="BP-Low"
                                value={lowPressure}
                                onChange={(e) => setLowPressure(e.target.value)}
                                placeholder="BP Low" />
                        </FormGroup>
                        <FormGroup>
                            <Label>Pulse</Label>
                            <Input
                                type="number"
                                name="Pulse"
                                value={pulse}
                                onChange={(e) => setPulse(e.target.value)}
                                placeholder="Pulse" />
                        </FormGroup>
                        <FormGroup>
                            <Label>Temperature</Label>
                            <Input
                                type="number"
                                name="Temperature"
                                value={temperature}
                                onChange={(e) => setTemperature(e.target.value)}
                                placeholder="Temperature" />
                        </FormGroup>
                        <FormGroup>
                            <Label>Height</Label>
                            <Input
                                type="number"
                                name="Height"
                                value={height}
                                onChange={(e) => setHeight(e.target.value)}
                                placeholder="Height" />
                        </FormGroup>
                        <FormGroup>
                            <Label>Weight</Label>
                            <Input
                                type="number"
                                name="Weight"
                                value={weight}
                                onChange={(e) => setWeight(e.target.value)}
                                placeholder="Weight" />
                        </FormGroup>
                        <FormGroup>
                            <Label>BMI</Label>
                            <Input
                                type="number"
                                name="BMI"
                                value={bmi}
                                onChange={(e) => setBmi(e.target.value)}
                                placeholder="BMI" />
                        </FormGroup>
                        <Button>Submit</Button>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    );
}

export default ObjForm;