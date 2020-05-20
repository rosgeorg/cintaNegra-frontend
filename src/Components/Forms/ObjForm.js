import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Container, Row, Col} from 'reactstrap';

import '../../Assets/CSS/ObjForm.scss'

const ObjForm = (props) => {
    const {
        buttonLabel,
        className
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div>
            <Button style={{ height: '70%', fontSize: '70%', fontWeight: 'bold', color: 'white', backgroundColor: '#089fc6' }} onClick={toggle}>FILL NEW FORM</Button>
            <Modal size='lg' isOpen={modal} toggle={toggle} className=' container model-size'>
                <ModalHeader toggle={toggle}>New Form</ModalHeader>
                <ModalBody>
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
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>Save</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default ObjForm;