import  {React, Component } from "react";
import { Container, Row, Col } from 'react-grid-system';
import alProfile from "../img/alProfile.jpg";
export class Grid extends Component {

  

    render() {
      return (
<Container>
  <Row>
    <Col xs={6} md={4}>
      <image src="alProfile/171x180" rounded />
    </Col>
    <Col xs={6} md={4}>
      <image src="alProfile/171x180" roundedCircle />
    </Col>
    <Col xs={6} md={4}>
      <image src="alProfile/171x180" thumbnail />
    </Col>
  </Row>
      </Container>
      );
    }
  }
  
  export default Grid;
  