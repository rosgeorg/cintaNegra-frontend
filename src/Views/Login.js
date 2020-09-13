import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


import '../Assets/CSS/main-content.css';

import {
    Button,
    Form,
    FormGroup,
    Input,
    Card,
    CardBody,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col,
} from "reactstrap";


function Login() {

    const { isAuth, setTokenAndLogin } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    if (isAuth) return (<Redirect to="/schedule" />)

    const handleSubmit = async (e) => {
        e.preventDefault();
        const jsonSend = { email, password }
        try {
            const res = await axios.post('https://erm-devf-backend.herokuapp.com/api/v1/users/login', jsonSend);
            setTokenAndLogin(res.data.token)
            alert('Successful login')
        } catch (error) {
            alert(error);
        }
    };


    return (
        <div id="login" className="container d-flex flex-column justify-content-center containerr-size">
            {/* <h3 className="text-center text-white pt-5 d-block">Please enter your credentials</h3> */}
            <div id="register" className='container d-flex align-items-center containerr-size'>
                <Container className="">
                    <Row className="justify-content-center">
                        <Col lg="5">
                            <Card className="register_color shadow border-0">
                                <CardBody className="px-lg-5 py-lg-5">
                                    <div className="text-center text-white mb-4">
                                        <small>Enter with credentials</small>
                                    </div>
                                    <Form role="form" onSubmit={handleSubmit}>

                                        {/* Sign Up Form */}

                                        <FormGroup>
                                            <InputGroup className="input-group-alternative mb-3">
                                                <InputGroupAddon addonType="prepend">
                                                    <InputGroupText>
                                                        <i className="ni ni-hat-3" />
                                                    </InputGroupText>
                                                </InputGroupAddon>
                                                <Input
                                                    type="email"
                                                    name="email"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    id="exampleEmail"
                                                    placeholder="type your email" 
                                                />
                                            </InputGroup>
                                        </FormGroup>
                                        <FormGroup>
                                            <InputGroup className="input-group-alternative mb-3">
                                                <InputGroupAddon addonType="prepend">
                                                    <InputGroupText>
                                                        <i className="ni ni-email-83" />
                                                    </InputGroupText>
                                                </InputGroupAddon>
                                                <Input
                                                    type="password"
                                                    name="password"
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                    id="examplePassword"
                                                    placeholder="type your password here" 
                                                />
                                            </InputGroup>
                                        </FormGroup>

                                        {/* Signup Button */}

                                        <div className="text-center">
                                            <Button
                                                className="mt-4"
                                                color="primary"
                                            // type="button"
                                            >
                                                Submit
                                            </Button>
                                        </div>

                                    </Form>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Login;






