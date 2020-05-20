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
import ObjForm from '../Components/Forms/ObjForm'

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
                                <ObjForm />
                            </div>
                            
                        </div>
                    </Col>
                </Row>
            </Container>
        </div >
    );
};

export default Subjective;