import React from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

import "../Assets/CSS/cardStyle.css";

const Cards = (props) => {
  return (
    <div>
      <Card>
        <CardBody className="card-text card-height">
          <CardTitle>PATIENT:</CardTitle>
          <CardText className="card-line-height">
            Name:{" "}
            <span style={{ fontWeight: "bold" }}>
              {props.name} {props.lastName}
            </span>{" "}
          </CardText>
          <CardText className="card-line-height">Date of Birthday:</CardText>
          <CardText style={{ fontWeight: "bold" }} className="card-line-height">
            {props.dob}
          </CardText>
          <CardText className="card-line-height">
            Gender: <span style={{ fontWeight: "bold" }}>{props.sex}</span>
          </CardText>
          <hr></hr>
          <CardTitle>APPOINTMENT:</CardTitle>
          <CardText className="card-line-height">
            Rendering:{" "}
            <span style={{ fontWeight: "bold" }}>{props.rendering}</span>
          </CardText>
          <CardText className="card-line-height">Date:</CardText>
          <CardText style={{ fontWeight: "bold" }} className="card-line-height">
            {props.schedule}
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default Cards;
