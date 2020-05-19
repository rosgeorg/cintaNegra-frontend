import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Link } from 'react-router-dom';

import {
    Container,
    Col,
    Row,
    Button,
    Input,
} from "reactstrap";

import '../Assets/CSS/subjective.css'

import Cards from '../Components/Card'
import Buttons from '../Components/Buttons'
import Gastro from '../Components/Body-Areas/Gastrointestinal'
import Respiratory from '../Components/Body-Areas/Respiratory'

const Subjective = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col className='container container-size d-flex flex-column justify-content-center  pr-0 pl-0' md={4} lg={4} xl={4}>
                        <div className='container container-card-size info-bg d-flex flex-column justify-content-between pt-4 pb-4'>
                            <Cards />
                            <Buttons />
                            <img className="logo_navbar" src="./LogoEMRHColor(copia2).png" alt="La imagen no existe o cambió su ubicación"></img>
                        </div>
                    </Col>
                    <Col className='container container-size d-flex flex-column justify-content-center  pr-0 pl-0' md={8} lg={8} xl={8}>
                        <div className='container container-card-size info-bg pt-4 pb-4'>
                            <div className='container d-flex flex-row justify-content-between'>
                                <h6 style={{ fontSize: '30px' }}>(O) OBJECTIVE</h6>
                                <Button style={{ height: '70%', fontSize: '70%', fontWeight: 'bold' }}>SAVE</Button>
                            </div>
                            <div className='container subjective-bg d-flex flex-column justify-content-center pt-4 pb-4'>
                                <div className=''>
                                    <h6>Vitals</h6>
                                    <Container style={{ borderStyle: 'solid', borderColor: 'black', borderWidth: '1px', padding: '1rem', height: '10rem' }}>
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
                                                    <Input style={{ width: '5rem', height: '2rem' }}></Input>
                                                    <Input style={{ width: '5rem', height: '2rem' }}></Input>
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
                                                    <Input style={{ width: '5rem', height: '2rem' }}></Input>
                                                    <Input style={{ width: '5rem', height: '2rem' }}></Input>
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
                                                    <Input style={{ width: '100%', height: '2rem' }}></Input>
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
                                                    <Input style={{ width: '100%', height: '2rem' }}></Input>
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
                                                    <Input style={{ width: '100%', height: '2rem' }}></Input>
                                                </Container>
                                            </Col>
                                        </Row>
                                    </Container>
                                    {/* <h6 className='pb-2 pt-3'>Body Area/Organ System</h6>
                                        <div>
                                            <Gastro />
                                            <Respiratory />
                                        </div> */}
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div >
    );
};

export default Subjective;