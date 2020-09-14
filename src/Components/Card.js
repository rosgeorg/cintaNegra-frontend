import React from 'react';
import { Card, CardBody, CardTitle, CardText} from 'reactstrap';

import '../Assets/CSS/cardStyle.css'

const Cards = (props) => {
  return (
    <div>
      <Card>
        <CardBody style={{fontSize:'12px'}}>
          <CardTitle>PATIENT:</CardTitle>
          <CardText style={{lineHeight:'3px'}}>Name: <span style={{fontWeight:'bold'}}>{props.name} {props.lastName}</span> </CardText>
          <CardText style={{lineHeight:'3px'}}>Date of Birthday:</CardText> 
          <CardText style={{lineHeight:'3px', fontWeight:'bold'}}>{props.dob}</CardText> 
          <CardText style={{lineHeight:'3px'}}>Gender: <span style={{fontWeight:'bold'}}>{props.sex}</span></CardText> 
          <hr></hr>
          <CardTitle>APPOINTMENT:</CardTitle>
          <CardText style={{lineHeight:'3px'}}>Rendering: <span style={{fontWeight:'bold'}}>{props.rendering}</span></CardText>
          <CardText style={{lineHeight:'3px'}}>Date:</CardText>
          <CardText style={{lineHeight:'3px', fontWeight:'bold'}}>{props.schedule}</CardText> 
        </CardBody>
      </Card>
    </div>
  );
};

export default Cards;