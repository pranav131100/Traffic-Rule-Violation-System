import React from 'react'
import { Nav,Col,Row,Tab } from 'react-bootstrap';
import OffenceForm from './Insert Forms/OffenceForm';
import DriverForm from './Insert Forms/DriverForm';
import VehicleForm from './Insert Forms/VehicleForm';
import ViolationForm from './Insert Forms/ViolationForm';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"

const Insert = ()=>{
    return(
    <>
    <div style = {{margin: "2vw 7.6vw"}}>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
  <Row>
    <Col sm={3}>
      <Nav variant="pills" className="flex-column">
        <Nav.Item>
          <Nav.Link eventKey="first">Driver</Nav.Link>
        </Nav.Item>
        <br />
        <Nav.Item>
          <Nav.Link eventKey="second">Vehicle</Nav.Link>
        </Nav.Item>
        <br />
        <Nav.Item>
          <Nav.Link eventKey="third">Offence</Nav.Link>
        </Nav.Item>
        <br />
        <Nav.Item>
          <Nav.Link eventKey="fourth">Violation</Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
    <Col sm={9}>
      <Tab.Content>
        <Tab.Pane eventKey="first">
          <DriverForm text = "Insert"></DriverForm>
        </Tab.Pane>
        <Tab.Pane eventKey="second">
          <VehicleForm text = "Insert"></VehicleForm>
        </Tab.Pane>
        <Tab.Pane eventKey="third">
          <OffenceForm text = "Insert"></OffenceForm>
        </Tab.Pane>
        <Tab.Pane eventKey="fourth">
          <ViolationForm text = "Insert"></ViolationForm>
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
</div>
    </>
    )
}

export default Insert;