import React, { useState } from 'react'
import { Form,Button } from 'react-bootstrap';
import Axios from 'axios'

const OffenceForm = (props)=>{
    let someDate = new Date();
    /* let date = someDate.toISOString().substr(0, 10);
    let h = someDate.getHours();
    let m = someDate.getMinutes();
    let s = someDate.getSeconds();
    // let time = h + ":" + m + ":" + s;*/
    
    const [section,setSection] = useState();
    const [location,setLocation] = useState();
    // const [date1,setDate] = useState();
    // const [time1,setTime] = useState();

    const submitData = (event)=>{
      event.preventDefault();
      Axios.post("http://localhost:3001/api/offence/insert",{
        section :section,
        location:location,
        // date1:date1,
        // time1:time1

      }).then(()=>{
        alert("Offence Data Inserted Successfully!");
      })
    }

    return(
        <>
        
<Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Section</Form.Label>
    <Form.Control type="text" placeholder="Offence under section" value = {section} onChange = {(event)=>{
        setSection(event.target.value);
    }}/>
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Location</Form.Label>
    <Form.Control type="text" placeholder="Location" value = {location} onChange = {(event)=>{
      setLocation(event.target.value);
    }}/>
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>
{/*   
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Date</Form.Label>
    <Form.Control type="date"  defaultValue = {date}  value = {date1} value ={time1} onChange  = {(event)=>{
        setDate(event.target.value);
    }}/>
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>
  
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Time</Form.Label>
    <Form.Control type="time" defaultValue = {time} onChange = {(event)=>{
      setTime(event.target.value);
    }}/> */}
    {/* <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group> */}

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label><span style = {{marginRight:"10px"}}>Evidance:</span></Form.Label>
    <Form.Control type="file" accept = "video/*,image/*"/>
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>


  <Button variant="primary" type="submit" onClick = {submitData}>
    {props.text}
  </Button>
</Form>
        </>
        
    )
}

export default OffenceForm;