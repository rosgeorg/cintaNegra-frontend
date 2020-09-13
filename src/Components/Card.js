import React from 'react';
import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';

const Cards = (props) => {
  return (
    <div>
      <Card>
        <div  className='d-flex justify-content-center' >
          <CardImg style={{height:'87%', width:'87%', paddingTop:'1rem'}} top width="100%" src="/silueta.jpg" alt="" />
        </div>
        <CardBody style={{fontSize:'12px'}}>
          <CardTitle>PATIENT:</CardTitle>
          <CardText style={{lineHeight:'3px'}}>Name: <span style={{fontWeight:'bold'}}>{props.name} {props.lastName}</span> </CardText>
          <CardText style={{lineHeight:'3px'}}>Date of Birthday: <span style={{fontWeight:'bold'}}>{props.dob}</span></CardText> 
          <CardText style={{lineHeight:'3px'}}>Gender: <span style={{fontWeight:'bold'}}>{props.sex}</span></CardText> 
          <hr></hr>
          <CardTitle>APPOINTMENT:</CardTitle>
          <CardText style={{lineHeight:'3px'}}>Rendering: <span style={{fontWeight:'bold'}}>{props.rendering}</span></CardText>
          <CardText style={{lineHeight:'3px'}}>Date: <span style={{fontWeight:'bold'}}>{props.schedule}</span></CardText> 
        </CardBody>
      </Card>
    </div>
  );
};

export default Cards;