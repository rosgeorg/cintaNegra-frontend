import React, { useEffect, useState, useContext } from "react";

import { AuthContext } from "../contexts/AuthContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import CardsTest from "../Components/cardPrueba";

import { Container, Col, Row } from "reactstrap";

import "../Assets/CSS/subjective.css";

import Cards from "../Components/Card";
import Buttons from "../Components/Buttons";
import NewForm from "../Components/Forms/NewForm";

const Subjective = (props) => {
  const { axiosInstance } = useContext(AuthContext);
  const [encounter, setEncounter] = useState([]);

  const getEncounter = () =>
    axiosInstance.get(`/api/v1/encounters/5ec85c1e06fe8500177665a8`);

  useEffect(() => {
    getEncounter()
      .then((response) => {
        console.log(response.data.subjetive);
        const encounter = response.data;
        // console.log(encounter);
        setEncounter(encounter);
      })
      .catch((err) => console.log(err));
  });

  return (
    <div>
      <Container className="centered-content">
        <Row className="row-container">
          <Col
            className="container col-height d-flex flex-column justify-content-center  pr-0 pl-0"
            md={4}
            lg={4}
            xl={4}
          >
            <div className="container col-height info-bg d-flex flex-column justify-content-between pt-4 pb-4">
              <Cards
                rendering={
                  encounter.subjetive
                    ? encounter.subjetive.rendering
                    : "No Name"
                }
                chiefComplaint={
                  encounter.subjetive
                    ? encounter.subjetive.chiefComplaint
                    : "No Name"
                }
                id={encounter._id}
                name={encounter.pt ? encounter.pt.name : "No Name"}
                lastName={encounter.pt ? encounter.pt.lastName : ""}
                schedule={encounter.schedule}
                dob={encounter.pt ? encounter.pt.dob : "No DOB"}
                sex={encounter.pt ? encounter.pt.sex : "No Sex specified"}
              />
              <Buttons />
              <img
                className="logo_navbar"
                src="./LogoEMRHColor.png"
                alt="La imagen no existe o cambió su ubicación"
              ></img>
            </div>
          </Col>
          <Col
            className="container col-height containerr-size d-flex flex-column justify-content-center  pr-0 pl-0"
            md={8}
            lg={8}
            xl={8}
          >
            <div className="container col-height info-bg pt-4 pb-4">
              <div className="container d-flex flex-row justify-content-between">
                <h6 className="title-size">(S) SUBJECTIVE</h6>
                <NewForm />
                {/* <Button style={{ height: '70%', fontSize: '70%', fontWeight: 'bold' }}>FILL NEW FORM</Button> */}
              </div>
              <div>
                <CardsTest
                  rendering={
                    encounter.subjetive
                      ? encounter.subjetive.rendering
                      : "No Name"
                  }
                  chiefComplaint={
                    encounter.subjetive
                      ? encounter.subjetive.chiefComplaint
                      : "No Name"
                  }
                  id={encounter._id}
                  //gastro={encounter.subjetive ? encounter.subjetive.gastroIntestinal : 'No Gastro'}
                  // abdominal={encounter.subjetive ? encounter.subjetive.gastroIntestinal.abdominalPain : ''}
                  howLong={
                    encounter.subjetive
                      ? encounter.subjetive.gastroIntestinal.abdominalPain
                          .howLongHaveYouHadAbdominalPain
                      : ""
                  }
                  whereIs={
                    encounter.subjetive
                      ? encounter.subjetive.gastroIntestinal.abdominalPain
                          .whereIsYourAbdominalPainLocated
                      : ""
                  }
                  painLocation={
                    encounter.subjetive
                      ? encounter.subjetive.gastroIntestinal.abdominalPain
                          .doesThePainRadiateOfMoveToAnotherLocation
                      : ""
                  }
                  painAppear={
                    encounter.subjetive
                      ? encounter.subjetive.gastroIntestinal.abdominalPain
                          .DidYourAbdominalPainStartAllOfASuddenOrDidItComeOnSlowly
                      : ""
                  }
                  eatingPain={
                    encounter.subjetive
                      ? encounter.subjetive.gastroIntestinal.abdominalPain
                          .DoesYourAbdominalPainOccurAfterEating
                      : ""
                  }
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Subjective;
