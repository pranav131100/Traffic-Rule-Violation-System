import React from 'react';
import Cards from './Cards';
import { Row,Col,Container } from 'react-bootstrap';
import { Route,Switch } from 'react-router';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Rule from './Police Grid/Rule';
import View from './Police Grid/View';
import Insert from './Police Grid/Insert';
import Update from './Police Grid/Update';
import Delete from './Police Grid/Delete';
import Navbar from './Navbar'

const PoliceGrid = ()=>{
    return(
<>
<Navbar></Navbar>
<br />
<br />
<Container>
  <Row>
    <Col><Cards title = "Insert" link = "/login/police/insert"></Cards></Col>
    <Col><Cards title = "Update" link = "/login/police/update"></Cards></Col>
    <Col><Cards title = "Delete" link = "/login/police/delete"></Cards></Col>
  </Row>
  <br />
  <Row>
    <Col><Cards title = "View" link = "/login/police/view"></Cards></Col>
    <Col><Cards title = "Rules" link = "/login/police/rule"></Cards></Col>
    <Col></Col>
  </Row>
</Container>

<Switch>
        <Route path = "/login/police/insert" component = {Insert}></Route>
        <Route path = "/login/police/update" component = {Update}></Route>
        <Route path = "/login/police/delete" component = {Delete}></Route>
        <Route path = "/login/police/view" component = {View}></Route>
        <Route path = "/login/police/rule" component = {Rule}></Route>
</Switch>

</>
    )
}

export default PoliceGrid;