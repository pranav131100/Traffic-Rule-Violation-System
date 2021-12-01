import React, { useEffect, useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import Axios from 'axios'

const DriverUpdateForm = (props)=>{
  const [Lno,setLno] = useState();
  const [info,setInfo] = useState([]);
  const [name,setName] = useState();
  const [dob,setDOB] = useState();
  const [gender,setGender] = useState();
  const [Male,setMale] = useState();
  const [Female,setFemale]  = useState();

 
  
  
  const SubmitData = (event)=>{
    event.preventDefault();
    Axios.get(`http://localhost:3001/api/update/get/driver/${Lno}`).then((result)=>{
      setInfo(result.data);
      console.log(result.data);
      setName(result.data[0].Name);
      setDOB(result.data[0].Age);
      
      if(result.data[0].Gender == "male"){
        setMale(true);
        setGender("male");
       
      }
      else if(result.data[0].Gender == "female"){
        setFemale(true);
        setGender("female");

      }
      else{
        setGender("");
      }

    })
  } 

  const UpdateData = (event)=>{
   event.preventDefault();
    Axios.put("http://localhost:3001/api/driver/update",{
      Lno:Lno,
      name:name,
      dob:dob,
      gender:gender
    }).then(()=>{
      alert("Update Successfull");
    })

  }

  const handleChange = (event)=>{
    setGender(event.target.value);
  }
    
  return(
    <>    
    <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>License Number </Form.Label>
    <Form.Control type="text" placeholder="License No" value = {Lno} onChange = {(event)=>{
      setLno(event.target.value);
    }}/>
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>

  <Button variant="primary" type="submit" onClick = {SubmitData}>
    Get Data
  </Button>
  </Form>
  <br />
  <br />
  {info.map((val)=>{
   console.log(val);
    return(
      <>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Name" defaultValue = {val.Name}  value = {name} onChange = {(event)=>{
      setName(event.target.value);
    }}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Age</Form.Label>
    <Form.Control type="date" placeholder="Date of Birth" defaultValue = {val.DOB} value = {dob} onChange = {(event)=>{
      setDOB(event.target.value); 
    }}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Gender</Form.Label>
    <span style = {{margin: "0.5vw"}}></span>
    <input type="radio" name="gender" value = "male" id = "male" defaultValue = {val.gender} onChange = {handleChange} checked = {Male}/><label for ="male"> Male</label><span style = {{margin: "0.5vw"}}></span>
    <input type="radio" name="gender" value = "female" id = "female" defaultValue = {val.gender} onChange ={handleChange} checked ={Female}/><label for ="female">Female</label>
  </Form.Group>
  
  <Button variant="success" type="submit" onClick = {UpdateData}>
    Update
  </Button>
  </Form>
      </>
    )
  })}
        </>
    )
}

export default DriverUpdateForm;