import React from 'react'
import logo from './img.jpg';

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Col, Row,
  } from 'reactstrap';

const renj  = ({ onClick}) =>  {

    return (
    <div>
        <Row>
        <Col md={4}>
        <Card>
        <CardImg top width="100%"  src={logo} alt="Logo" />
        <CardBody>
          <CardTitle tag="h5">Bike Rent</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Rent amount 1000</CardSubtitle>
          <CardText> Plese fill the card-Detailes by clicking button below
            Note: Your are the responsible for any damage</CardText>
        </CardBody>
        <Button onClick={onClick}>clike here</Button>
      </Card>
      </Col>
      <Col md={4}>
        <Card>
        <CardImg top width="100%"  src={logo} alt="Logo" />
        <CardBody>
          <CardTitle tag="h5">Bike Rent</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Rent amount 1000</CardSubtitle>
          <CardText> Plese fill the card-Detailes by clicking button below
            Note: Your are the responsible for any damage</CardText>
        </CardBody>
        <Button onClick={onClick}>clike here</Button>
      </Card>
      </Col>
      <Col md={4}>
        <Card>
        <CardImg top width="100%"  src={logo} alt="Logo" />
        <CardBody>
          <CardTitle tag="h5">Bike Rent</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Rent amount 1000</CardSubtitle>
          <CardText> Plese fill the card-Detailes by clicking button below
            Note: Your are the responsible for any damage</CardText>
        </CardBody>
        <Button onClick={onClick}>clike here</Button>
      </Card>
      </Col>
      </Row>

    </div>
  );
};

export default renj;