import React, { useState } from 'react'
import { Form,Button } from 'react-bootstrap';
import Axios from 'axios'

const VehicleForm = ()=>{

const [Lno,setLno] = useState();
const [VehicleNo,setVehicleNo] = useState();
const [Model,setModel] = useState();
const [chasisNo,setChasisNo] = useState();

const onSubmits = (event)=>{
  event.preventDefault();
  Axios.post("http://localhost:3001/api/vehicle/insert",{
    Lno:Lno,
    VehicleNo:VehicleNo,
    Model:Model,
    chasisNo:chasisNo
  }).then(()=>{
    alert("Vehicle Data Inserted Successfully");
  }
  )
}

    return(
        <>
<Form>
<Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>License Number </Form.Label>
    <Form.Control type="text" placeholder="License No" value = {Lno} onChange = {(event)=>{
          setLno(event.target.value);
    }}
    />
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>

<Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label>Vehicle Number </Form.Label>
<Form.Control type="text" placeholder="Vehicle No" value = {VehicleNo} onChange = {(event)=>{
      setVehicleNo(event.target.value);
}}/>
<Form.Text className="text-muted">
</Form.Text>
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicPassword">
<Form.Label>Model</Form.Label>
<Form.Control type="text" placeholder="Model" value = {Model} onChange = {(event)=>{
    setModel(event.target.value);
}}/>
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicPassword">
<Form.Label>Chasis Number</Form.Label>
<Form.Control type="number" placeholder="Chasis Number" value ={chasisNo} onChange = {(event)=>{
  setChasisNo(event.target.value);
}}/>
</Form.Group>

<Button variant="primary" type="submit" onClick = {onSubmits}>
Insert
</Button>
</Form>
  </>
    )
}

export default VehicleForm;