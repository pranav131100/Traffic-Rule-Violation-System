import React from 'react'
import {Button,Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

const Cards = (props)=>{
    return(
        <>
<Card className="text-center">
  <Card.Header><span style = {{fontSize:"50px"}}>{props.icon}</span></Card.Header>
  <Card.Body>
    <Card.Title>{props.title}</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
      <Link to = {props.link}>
      <Button variant="primary" value = "Submit" >Click here</Button>
      </Link>
    
 
  </Card.Body>

</Card>
        </>
    )
}

export default Cards;