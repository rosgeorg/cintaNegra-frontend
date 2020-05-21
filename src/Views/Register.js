/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

//Styles
import '../Assets/CSS/main-content.css';

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";


const Register = () => {



  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleInput = (e) => {
    switch (e.target.name) {
      case "inputUserName":
        setUserName(e.target.value)
        break;
      case "email":
        setEmail(e.target.value)
        break;
      case "password":
        setPassword(e.target.value)
        break;
      default:
        break;
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const jsonSend = {
      username: userName,
      email,
      password,
    }
    try {
      const res = await axios.post('https://erm-devf-backend.herokuapp.com/api/v1/users/signup', jsonSend);
      alert('Successful signup')
    } catch (error) {
      alert('Error on signup')
    }
  }


  return (
    <div id="register" className='container d-flex align-items-center container-size'>
      <Container className="pt-lg-7 pt-5">
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
                        placeholder="Username"
                        type="text"
                        id="userName"
                        name="inputUserName"
                        value={userName}
                        onChange={handleInput}
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
                        placeholder="Email"
                        type="email"
                        name="email"
                        id="exampleEmail"
                        value={email}
                        onChange={handleInput} />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-lock-circle-open" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Password"
                        type="password"
                        autoComplete="off"
                        name="password"
                        id="examplePassword"
                        value={password}
                        onChange={handleInput} />
                    </InputGroup>
                  </FormGroup>

                  {/* Additional Sign Up Fields */}

                  <div className="text-white font-italic">
                    <small>
                      password strength:{" "}
                      <span className="text-success font-weight-700 shadow-sm p-1 mb-0 bg-white rounded">
                        strong
                            </span>
                    </small>
                  </div>
                  <Row className="my-4">
                    <Col xs="12">
                      <div className="custom-control custom-control-alternative custom-checkbox">
                        <input
                          className="custom-control-input"
                          id="customCheckRegister"
                          type="checkbox"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="customCheckRegister"
                        >
                          <span>
                            I agree with the{" "}
                            <a
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Privacy Policy
                                  </a>
                          </span>
                        </label>
                      </div>
                    </Col>
                  </Row>

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
  )
}
export default Register;
