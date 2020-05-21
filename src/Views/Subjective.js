import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../contexts/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Link } from 'react-router-dom';

import CardsTest from '../Components/cardPrueba'

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
import NewForm from '../Components/Forms/NewForm'



const Subjective = () => {

    const { axiosInstance } = useContext(AuthContext);
    const [encounter, setEncounter] = useState([]);

    const getEncounter = () => axiosInstance.get('/api/v1/encounters/5ec635481d2f1600173af914');

    useEffect( () => {
        getEncounter()
          .then((response) => {
            console.log(response.data);
            const encounter = response.data;
            // console.log(encounter);
            setEncounter(encounter);
          })
          .catch((err) => console.log(err));
      }, [])

    // useEffect(() => {
    //     axios.get('https://erm-devf-backend.herokuapp.com/api/v1/encouners/5ec63de31d2f1600173af923')
    //         .then((result) => {
    //             console.log(result.data);
    //             setEncounter(result.data);
    //         }).catch((err) => {
    //             console.log(err);
    //         });
    // }, []);

    return (
        <div>
            <Container>
                <Row className='roww-size'>
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
                                <h6 style={{ fontSize: '30px' }}>(S) SUBJECTIVE</h6>
                                <NewForm />
                                {/* <Button style={{ height: '70%', fontSize: '70%', fontWeight: 'bold' }}>FILL NEW FORM</Button> */}
                            </div>
                            <div>
                                <CardsTest
                                    rendering={encounter.rendering}
                                    chefComplaint={encounter.chiefComplaint}
                                />
                            </div>
                            {/* <div className='container subjective-bg d-flex flex-column justify-content-center pt-4 pb-4'>
                                <div className=''>
                                    <h6>Notes (Chief Complaint)</h6>
                                    <Input style={{height:'5rem', wordWrap:'break-word'}} placeholder="username" />
                                    <hr></hr>
                                    <h6 className='pb-2 pt-3'>Body Area/Organ System</h6>
                                    <div>
                                    <Gastro />
                                    <Respiratory />
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div >
    );
};

export default Subjective;