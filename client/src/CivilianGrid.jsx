import React from 'react';
import { Container,Col,Row } from 'react-bootstrap';
import Cards from './Cards';
import View from './Police Grid/View';
import Rule from './Police Grid/Rule';
import { Switch,Route } from 'react-router';
import Navbar from './Navbar'

const CivilianGrid = ()=>{
    return(
        <>
        <Navbar></Navbar>
        <br />
        <br />
<Container>
  <Row>
    <Col><Cards title = "View" link = "/login/civilian/view"></Cards></Col>
    <Col><Cards title = "Rules" link = "/login/civilian/rule"></Cards></Col>
    <Col><Cards title = "Payment" link = "/payment"></Cards></Col>
    
  </Row>
  <br />
  <Row>
    <Col><Cards title = "FeedBack" link = "/feedback"></Cards></Col>
    <Col></Col>
    <Col></Col>
    
  </Row>
</Container>

<Switch>
  {/* <Route path = "/update" component = {Update}></Route>
        <Route path = "/delete" component = {Delete}></Route> */}
        <Route path = "/login/civilian/view" component = {View}></Route>
        <Route path = "/login/civilian/rule" component = {Rule}></Route>
</Switch>
        </>
    )
}

export default CivilianGrid;