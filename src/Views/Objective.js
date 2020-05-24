import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../contexts/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Link } from 'react-router-dom';

import '../Assets/CSS/subjective.css'
import ObjForm from '../Components/Forms/ObjForm'
import Cards from '../Components/Card'
import Buttons from '../Components/Buttons'
import CardsTest from '../Components/objCard'



import {
    Container,
    Col,
    Row,
    Button,
    Input,
} from "reactstrap";



const Objective = () => {

    const { axiosInstance } = useContext(AuthContext);
    const [encounter, setEncounter] = useState([]);

    const getEncounter = () => axiosInstance.get(`/api/v1/encounters/5ec85c1e06fe8500177665a8`);

    useEffect(() => {
        getEncounter()
            .then((response) => {
                console.log(response.data.subjetive);
                const encounter = response.data;
                // console.log(encounter);
                setEncounter(encounter);
            })
            .catch((err) => console.log(err));
    }, [])

    return (
        <div>
            <Container>
                <Row>
                    <Col className='container containerr-size d-flex flex-column justify-content-center  pr-0 pl-0' md={4} lg={4} xl={4}>
                        <div className='container container-card-size info-bg d-flex flex-column justify-content-between pt-4 pb-4'>
                            <Cards
                                rendering={encounter.subjetive ? encounter.subjetive.rendering : 'No Name'}
                                chiefComplaint={encounter.subjetive ? encounter.subjetive.chiefComplaint : 'No Name'}
                                id={encounter._id}
                                name={encounter.pt ? encounter.pt.name : 'No Name'}
                                lastName={encounter.pt ? encounter.pt.lastName : ''}
                                schedule={encounter.schedule}
                                dob={encounter.pt ? encounter.pt.dob : 'No DOB'}
                                sex={encounter.pt ? encounter.pt.sex : 'No Sex specified'}
                            />
                            <Buttons />
                            <img className="logo_navbar" src="./LogoEMRHColor(copia2).png" alt="La imagen no existe o cambió su ubicación"></img>
                        </div>
                    </Col>
                    <Col className='container containerr-size d-flex flex-column justify-content-center  pr-0 pl-0' md={8} lg={8} xl={8}>
                        <div className='container container-card-size info-bg pt-4 pb-4'>
                            <div className='container d-flex flex-row justify-content-between'>
                                <h6 style={{ fontSize: '30px' }}>(O) OBJECTIVE</h6>
                                <ObjForm />
                            </div>
                            <CardsTest
                                    highPressure={encounter.objective ? encounter.objective.HighPressure : 'No Value'}
                                    lowPressure={encounter.objective ? encounter.objective.LowPressure : 'No Value'}
                                    pulse={encounter.objective ? encounter.objective.Pulse : 'No Value'}
                                    temp={encounter.objective ? encounter.objective.Temperature : 'No Value'}
                                    height={encounter.objective ? encounter.objective.Height : 'No Value'}
                                    weight={encounter.objective ? encounter.objective.Weight : 'No Value'}
                                    bmi={encounter.objective ? encounter.objective.BMI : 'No Value'}
                                    
                                />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div >
    );
};

export default Objective;