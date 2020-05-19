import React from 'react';
import { Card, CardBody, Button, CardTitle, CardText, CardImg } from 'reactstrap';

const Cards = (props) => {
  return (
    <div>
      <Card>
        <div  className='d-flex justify-content-center' >
        <CardImg style={{height:'87%', width:'87%', paddingTop:'1rem'}} top width="100%" src="/silueta.jpg" alt="" />
        </div>
        <CardBody style={{fontSize:'12px'}}>
          <CardTitle>PATIENT:</CardTitle>
          <CardText style={{lineHeight:'3px'}}>REFERENCIA A: NAME</CardText>
          <CardText style={{lineHeight:'3px'}}>REFERENCIA A: AGE</CardText> 
          <CardText style={{lineHeight:'3px'}}>REFERENCIA A: GENDER</CardText> 
          <CardTitle>APPOINTMENT:</CardTitle>
          <CardText style={{lineHeight:'3px'}}>REFERENCIA A: TIME</CardText>
          <CardText style={{lineHeight:'3px'}}>05-22-2020</CardText> 
        </CardBody>
      </Card>
    </div>
  );
};

export default Cards;