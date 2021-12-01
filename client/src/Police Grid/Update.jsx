import React, { useState } from 'react'
import { Form,Tabs,Tab,Button } from 'react-bootstrap'
import Axios from 'axios'
import DriverUpdateForm from './Update Forms/DriverUpdateForm'
import OffenceUpdateForm from './Update Forms/OffenceUpdateForm'
import VehicleUpdateForm from './Update Forms/VehicleUpdateForm'
import ViolationUpdateForm from './Update Forms/ViolationUpdateForm'


const Update = ()=>{
  

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

  
  <br />
 
  <Tabs
  defaultActiveKey="home"
  transition={false}
  id="noanim-tab-example"
  className="mb-3"
>
  <Tab eventKey="Driver" title="Driver" onClick = {()=>{
    setSelect("driver");
    Axios.get(`/api/update/driver/${Lno}`).then((result)=>{
      console.log(result);
    })
  }}>
    <DriverUpdateForm text = "Update"></DriverUpdateForm>
  </Tab>
  <Tab eventKey="Offence" title="Offence" onClick = {()=>{
    setSelect("offence");
    Axios.get(`/api/update/offence/${Lno}`).then((result)=>{
      console.log(result);
})
  }}>
    <OffenceUpdateForm></OffenceUpdateForm>
  </Tab>
  <Tab eventKey="Vehicle" title="Vehicle" onClick = {()=>{
    setSelect("vehicle");
    Axios.get(`/api/update/vehicle/${Lno}`).then((result)=>{
      console.log(result);
})
  }}>
    <VehicleUpdateForm text = "Update"></VehicleUpdateForm>
  </Tab>
  <Tab eventKey="Violation" title="Violation" onClick = {()=>{
    setSelect("violates");
    Axios.get(`/api/update/violates/${Lno}`).then((result)=>{
      console.log(result);
})
  }}>
      <ViolationUpdateForm text = "Update"></ViolationUpdateForm>
  </Tab>
</Tabs>
  <br />
 
 
</div>
    </>
        
    )
}

export default  Update;