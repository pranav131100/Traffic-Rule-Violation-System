import React, { useState } from 'react'
import { Form,Tabs,Tab,Button } from 'react-bootstrap'
import Axios from 'axios'
import DriverUpdateForm from './DriverUpdateForm'
import OffenceForm from './OffenceForm'
import VehicleForm from './VehicleForm'
import ViolationForm from './ViolationForm'


const UpdateCopy = ()=>{
  

  const [Lno,setLno] = useState();
  const [select,setSelect] = useState();

  const selectData = (event)=>{
    
  }

  const SubmitData = (event)=>{
    event.preventDefault();
  }
  
  return(
        <>
<div style = {{margin: "2vw 7.6vw"}}>
<Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>License Number </Form.Label>
    <Form.Control type="text" placeholder="License No" onChange = {(event)=>{
        setLno(event.target.value);
    }}/>
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>
  
  {/* <label>
          <span style = {{marginRight : "1vw"}}>Select what to view: </span>
          <select value = {select} onChange = {selectData}>
            <option value=""> </option>
            <option value="driver">Driver</option>
            <option value="address">Address</option>
            <option value="mobile_no">Mobile No</option>
            <option value="vehicle">Vehicle</option>
            <option value="offence">Offence</option>
            <option value="violates">Violation</option>
          </select>
        </label><br /><br/>  */}

  {/* <Button variant="primary" type="submit" onClick = {SubmitData}>
    Select
  </Button> */}

 
  <br />
  <br />
  <h4>** Enter below the data to be updated **</h4>
  <br />
 
  <Tabs
  defaultActiveKey="home"
  transition={false}
  id="noanim-tab-example"
  className="mb-3"
>
  <Tab eventKey="Driver" title="Driver" onClick = {()=>{
    setSelect("driver");
    Axios.get(`http://localhost:3001/api/update/driver/${Lno}`).then((result)=>{
      console.log(result);
    })
    
  }}>
    <DriverUpdateForm text = "Update"></DriverUpdateForm>
  </Tab>
  <Tab eventKey="Offence" title="Offence" onClick = {()=>{
    setSelect("offence");
    Axios.get(`http://localhost:3001/api/update/offence/${Lno}`).then((result)=>{
      console.log(result);
})
  }}>
    <OffenceForm text = "Update"></OffenceForm>
  </Tab>
  <Tab eventKey="Vehicle" title="Vehicle" onClick = {()=>{
    setSelect("vehicle");
    Axios.get(`http://localhost:3001/api/update/vehicle/${Lno}`).then((result)=>{
      console.log(result);
})
  }}>
    <VehicleForm text = "Update"></VehicleForm>
  </Tab>
  <Tab eventKey="Violation" title="Violation" onClick = {()=>{
    setSelect("violates");
    Axios.get(`http://localhost:3001/api/update/violates/${Lno}`).then((result)=>{
      console.log(result);
})
  }}>
      <ViolationForm text = "Update"></ViolationForm>
  </Tab>
</Tabs>
  <br />
 
</Form>  
</div>
    </>
        
    )
}

export default  UpdateCopy;