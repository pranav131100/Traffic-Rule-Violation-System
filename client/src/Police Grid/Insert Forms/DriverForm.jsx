import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import Axios from 'axios';

const DriverForm = ()=>{

  const [Lno,setLno] = useState();
  const [name,setName] = useState();
  const [date,setDate] = useState();
  const [gender,setGender] = useState();
  const [phone1,setPhone1] = useState();
  const [phone2,setPhone2] = useState();
  const [add1,setadd1] = useState();
  const [add2,setadd2] = useState();

  const SubmitData = (event)=>{
    event.preventDefault();
    Axios.post("http://localhost:3001/api/driver/insert",{
    Lno:Lno,
    name:name,
    date:date,
    gender:gender,
    add1:add1,
    add2:add2,
    phone1:phone1,
    phone2:phone2

    }).then((result)=>{
      alert("Driver Data Inserted Successfully.");
    }).catch((err)=>{
      console.log(err);
    })
  };
  
  const handleChange = (event)=>{
        event.preventDefault();
        setGender(event.target.value);
  }

return(
        <>
  <Form >
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>License Number </Form.Label>
    <Form.Control type="text" placeholder="License No" value = {Lno} onChange = {(event)=>{
      setLno(event.target.value);
    }}/>
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Name" value = {name} onChange = {(event)=>{
        setName(event.target.value);
    }}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Date Of Birth</Form.Label>
    <Form.Control type="date" value = {date} onChange ={(event)=>{
        setDate(event.target.value);
    }}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Gender</Form.Label>
    <span style = {{margin: "0.5vw"}}></span>
    <input type="radio" name="gender" value = "male" id = "male" onChange = {handleChange}/><label htmlFor ="male"> Male</label><span style = {{margin: "0.5vw"}}></span>
    <input type="radio" name="gender" value = "female" id = "female" onChange = {handleChange}/><label htmlFor ="female">Female</label>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Address 1</Form.Label>
    <Form.Control type="text" placeholder="address1" value = {add1} onChange = {(event)=>{
      setadd1(event.target.value);
    }}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Address 2</Form.Label>
    <Form.Control type="text" placeholder="address2" value= {add2} onChange = {(event)=>{
        setadd2(event.target.value);
    }}/>
  </Form.Group>
  
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Mobile No 1</Form.Label>
    <Form.Control type="phone" placeholder="phone1"  value ={phone1} onChange = {(event)=>{
        setPhone1(event.target.value);
    }}/>
  </Form.Group>
  
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Mobile No 2</Form.Label>
    <Form.Control type="phone" placeholder="phone2"  value = {phone2} onChange = {(event)=>{
        setPhone2(event.target.value);
    }}/>
  </Form.Group>

  <Button variant="primary" type="submit" onClick = {SubmitData}>
    Insert
  </Button>
</Form>
        </>
    )
}

export default DriverForm;