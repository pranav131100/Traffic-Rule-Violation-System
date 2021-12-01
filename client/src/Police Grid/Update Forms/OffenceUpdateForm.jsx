import React, { useState } from "react";
import { Form,Button } from "react-bootstrap";
import Axios from "axios";

const OffenceUpdateForm = ()=>{
   
    const [section,setSection] = useState();
    const [location,setLocation] = useState();
    const [OId,setOId] = useState();
    const [info,setInfo] = useState([]);

    const SubmitData = (event)=>{
        event.preventDefault();

        Axios.get(`http://localhost:3001/api/update/get/offence/${OId}`).then((result)=>{   
        setInfo(result.data);
        setSection(result.data[0].section);
        setLocation(result.data[0].Location);

        })
    }

    const updateData = (event)=>{
        event.preventDefault();
      Axios.put("http://localhost:3001/api/offence/update",{
      OId:OId,
      section:section,
      location:location
     
    }).then(()=>{
      alert("Update Successfull");
    })
    }

    return(
        <>
            
    <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Offence Id</Form.Label>
    <Form.Control type="text" placeholder="Offence ID" value = {OId} onChange = {(event)=>{
      setOId(event.target.value);
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
      return(
        <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Section</Form.Label>
    <Form.Control type="text" placeholder="Offence under section" value = {section} defaultValue = {val.section} onChange = {(event)=>{
        setSection(event.target.value);
    }}/>
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Location</Form.Label>
    <Form.Control type="text" placeholder="Location" value = {location} defaultValue = {val.Location} onChange = {(event)=>{
      setLocation(event.target.value);
    }}/>
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label><span style = {{marginRight:"10px"}}>Evidance:</span></Form.Label>
    <Form.Control type="file" accept = "video/*,image/*" defaultValue = {val.Evidance} />
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>


  <Button variant="success" type="submit" onClick = {updateData}>
    Update
  </Button>
</Form>
      )
  
  })}

          
        </>
    )
}

export default OffenceUpdateForm;