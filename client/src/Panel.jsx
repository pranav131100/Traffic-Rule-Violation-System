import React from 'react'
import Cards from './Cards';
import { Navbar,Container } from 'react-bootstrap';

const Panel = ()=>{
    return(
    <>
    <Navbar bg="primary" variant="dark" fixed = "top">
    <Container>
    <Navbar.Brand href="#home"><span style = {{fontWeight: "bold"}}>Traffic Rule Violation System</span></Navbar.Brand>
    </Container>
    </Navbar>
    <br />
    <br />
    <br />
    <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home"><span style = {{fontWeight: "bold"}}>Panel</span></Navbar.Brand>
    </Container>
    </Navbar>
    <br />
    <br />
    <Cards title = "Traffic Police" icon = "👮" link="/home1"></Cards>
    <Cards title = "Civilian" icon = "👨‍💼" link = "/main"></Cards>
    </>
    )
}

export default Panel;