import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
// reactstrap components
import {
    NavItem,
    NavLink,
    Nav,
    Row,
    Col,
  } from "reactstrap";

//styles

import '../../Assets/CSS/footer.css'

const Footersito = () => {
    return (
        <div id="footer" className="footer-bg">
          <footer className="footer">
          <Container-fluid>
            {/* <hr /> */}
            <Row className=" align-items-center justify-content-md-between">
              <Col md="6">
                <div className=" copyright">
                  © {new Date().getFullYear()}{" "}
                  <a className='text-color' href='http://www.devf.la'>
                    Dev.F-EMR
                  </a>
                </div>
              </Col>
              <Col md="6">
                <Nav className=" nav-footer justify-content-end">
                  <NavItem>
                    <NavLink
                      href="https://www.creative-tim.com/presentation?ref=adsr-footer"
                      target="_blank"
                      className='text-color'
                    >
                      About Us
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="http://blog.creative-tim.com?ref=adsr-footer"
                      target="_blank"
                      className='text-color'
                    >
                      Site Map
                    </NavLink>
                  </NavItem>
                </Nav>
              </Col>
            </Row>
          </Container-fluid>
        </footer>
        </div>
    );
};

export default Footersito;