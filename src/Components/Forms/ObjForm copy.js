import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Input,
    Container,
    Row,
    Col,
    CustomInput,
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
            await axiosInstance.patch('/api/v1/encounters/5ec81999ef7b760017314507', jsonSend);
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
            <Button style={{ height: '70%', fontSize: '70%', fontWeight: 'bold', color: 'white', backgroundColor: '#089fc6' }} onClick={toggle}>FILL NEW FORM</Button>
            <Modal size='lg' isOpen={modal} toggle={toggle} className=' container model-size'>
                <ModalHeader toggle={toggle}>New Form</ModalHeader>
                <ModalBody onSubmit={handleSubmit}>
                    <div className='container subjective-bg d-flex flex-column justify-content-center pt-4 pb-4'>
                        <div className=''>
                            <h6>Vitals</h6>
                            <Container onSubmit={handleSubmit} style={{ borderStyle: 'solid', borderColor: 'black', borderWidth: '1px', padding: '1rem', height: '10rem' }}>
                                <Row style={{ height: '100%' }}>
                                    <Col md={3} lg={3} xl={3}>
                                        <Container style={{ height: '100%' }} className='d-flex flex-column justify-content-around'>
                                            <Container style={{}} className='d-flex flex-column justify-content-center'>
                                                <h6 style={{ fontSize: '90%', verticalAlign: 'middle', marginBottom: '0rem' }}>BP_High</h6>
                                            </Container>
                                            <Container style={{}} className='d-flex flex-column justify-content-center'>
                                                <h6 style={{ fontSize: '90%', verticalAlign: 'middle', marginBottom: '0rem' }}>Pulse</h6>
                                            </Container>
                                            {/* <Container style={{}} className='d-flex flex-column justify-content-center'>
                                                        <h6 style={{ fontSize: '90%', verticalAlign: 'middle', marginBottom: '0rem' }}>Temperature</h6>
                                                    </Container> */}
                                        </Container>
                                    </Col>
                                    <Col md={3} lg={3} xl={3}>
                                        <Container style={{ height: '100%' }} className='d-flex flex-column justify-content-around'>
                                            <Input
                                                style={{ width: '5rem', height: '2rem' }}
                                                type="number"
                                                name="BP_High"
                                                value={highPressure}
                                                onChange={(e) => setHighPressure(e.target.value)}
                                                placeholder="BP High"
                                            >
                                            </Input>
                                            <Input
                                                style={{ width: '5rem', height: '2rem' }}
                                                type="number"
                                                name="Pulse"
                                                value={pulse}
                                                onChange={(e) => setPulse(e.target.value)}
                                                placeholder="Pulse"
                                            >

                                            </Input>
                                            {/* <Input style={{ width: '5rem', height: '2rem' }}></Input> */}
                                        </Container>
                                    </Col>
                                    <Col md={3} lg={3} xl={3}>
                                        <Container style={{ height: '100%' }} className='d-flex flex-column justify-content-around'>
                                            <Container style={{}} className='d-flex flex-column justify-content-center'>
                                                <h6 style={{ fontSize: '90%', verticalAlign: 'middle', marginBottom: '0rem' }}>BP_Low</h6>
                                            </Container>
                                            <Container style={{}} className='d-flex flex-column justify-content-center'>
                                                <h6 style={{ fontSize: '90%', verticalAlign: 'middle', marginBottom: '0rem' }}>Temperature</h6>
                                            </Container>
                                        </Container>
                                    </Col>
                                    <Col md={3} lg={3} xl={3}>
                                        <Container style={{ height: '100%' }} className='d-flex flex-column justify-content-around'>
                                            <Input
                                                style={{ width: '5rem', height: '2rem' }}
                                                type="number"
                                                name="BP_Low"
                                                value={lowPressure}
                                                onChange={(e) => setLowPressure(e.target.value)}
                                                placeholder="BP_Low"
                                            ></Input>
                                            <Input
                                                style={{ width: '5rem', height: '2rem' }}
                                                type="number"
                                                name="Temperature"
                                                value={temperature}
                                                onChange={(e) => setTemperature(e.target.value)}
                                                placeholder="Temperature"
                                            ></Input>
                                        </Container>
                                    </Col>
                                </Row>
                            </Container>
                            <hr></hr>
                            <h6>Additional Information</h6>
                            <Container style={{ borderStyle: 'solid', borderColor: 'black', borderWidth: '1px', padding: '1rem', height: '10rem' }}>
                                <Row style={{ height: '100%' }}>
                                    <Col md={2} lg={2} xl={2}>
                                        <Container style={{ height: '100%' }} className='d-flex flex-column justify-content-around'>
                                            <Container style={{}} className='d-flex flex-column justify-content-center'>
                                                <h6 style={{ fontSize: '90%', verticalAlign: 'middle', marginBottom: '0rem' }}>Height</h6>
                                            </Container>
                                        </Container>
                                    </Col>
                                    <Col md={2} lg={2} xl={2}>
                                        <Container style={{ height: '100%' }} className='d-flex flex-column justify-content-around'>
                                            <Input 
                                            style={{ width: '100%', height: '2rem' }}
                                            type="number"
                                                name="Height"
                                                value={height}
                                                onChange={(e) => setHeight(e.target.value)}
                                                placeholder="Height"
                                            ></Input>
                                        </Container>
                                    </Col>
                                    <Col md={2} lg={2} xl={2}>
                                        <Container style={{ height: '100%' }} className='d-flex flex-column justify-content-around'>
                                            <Container style={{}} className='d-flex flex-column justify-content-center'>
                                                <h6 style={{ fontSize: '90%', verticalAlign: 'middle', marginBottom: '0rem' }}>Weight</h6>
                                            </Container>
                                        </Container>
                                    </Col>
                                    <Col md={2} lg={2} xl={2}>
                                        <Container style={{ height: '100%' }} className='d-flex flex-column justify-content-around'>
                                            <Input 
                                            style={{ width: '100%', height: '2rem' }}
                                            type="number"
                                                name="Weight"
                                                value={weight}
                                                onChange={(e) => setWeight(e.target.value)}
                                                placeholder="Weight"
                                            ></Input>
                                        </Container>
                                    </Col>
                                    <Col md={2} lg={2} xl={2}>
                                        <Container style={{ height: '100%' }} className='d-flex flex-column justify-content-around'>
                                            <Container style={{}} className='d-flex flex-column justify-content-center'>
                                                <h6 style={{ fontSize: '90%', verticalAlign: 'middle', marginBottom: '0rem' }}>BMI</h6>
                                            </Container>
                                        </Container>
                                    </Col>
                                    <Col md={2} lg={2} xl={2}>
                                        <Container style={{ height: '100%' }} className='d-flex flex-column justify-content-around'>
                                            <Input 
                                            style={{ width: '100%', height: '2rem' }}
                                            type="number"
                                                name="BMI"
                                                value={bmi}
                                                onChange={(e) => setBmi(e.target.value)}
                                                placeholder="BMI"
                                            ></Input>
                                        </Container>
                                    </Col>
                                </Row>
                            </Container>
                            <Button>Submit</Button>
                        </div>
                    </div>
                    
                </ModalBody>

            </Modal>
        </div>
    );
}

export default ObjForm;