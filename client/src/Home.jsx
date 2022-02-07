import React, { useState} from 'react'
import Cards from './Cards';
import { Form,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import Axios from 'axios';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"


let Auth1 = false;

const Home = ()=>{

const[Lno,setLno] = useState();
const[dob,setdob] = useState();
const history = useHistory();

const License = (event)=>{
  
  setLno(event.target.value);
}

const BirthDate = (event)=>{
  setdob(event.target.value);
}

const onSubmits = (event)=>{
  event.preventDefault();
  Axios.post("http://localhost:3001/api/civilian/verification",{
    Lno:Lno,
    dob:dob
  }).then((result)=>{
    console.log(result.data);
    if(result.data.length == 1){
        Auth1 = true;
        localStorage.setItem("Lno",Lno);
        localStorage.setItem("clogged",true)
        history.push(`/login/civilian/${Lno}`);
    }else{
      alert("Invalid login credentials");
    }
  })
  
}

    return(
        <>
            
            {/* <Cards title = "Vehicle" icon = "🚗" ></Cards>
            <br/>
            <Cards title = "E-Challans" icon = "🧾"></Cards>
            <br/>
            <Cards title = "Civilian Report"icon = "👨‍✈️📋"></Cards>
            <br/>
            <Cards title = "Payment" icon = "💳"></Cards>
            <br/>
            <Cards title = "information" icon = "ℹ️"></Cards>
            <br/>
            <Cards title = "Contact Us" icon = "☎️"></Cards>
            <br/> */}
<div style = {{margin:"4vw"}}>
  <Form onSubmit = {onSubmits}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>License Number </Form.Label>
    <Form.Control type="text" placeholder="Enter License No" onChange = {License} value = {Lno}/>
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Date of Birth</Form.Label>
    <Form.Control type="date" placeholder="Password" min = "1960-01-01" onChange = {BirthDate} value = {dob}/>
  </Form.Group>
  
    <Button variant="primary" type="submit" onClick = {onSubmits}>
    Submit
    </Button>

  
</Form>
</div>
        </>
    )
}

export default Home;
export {Auth1};