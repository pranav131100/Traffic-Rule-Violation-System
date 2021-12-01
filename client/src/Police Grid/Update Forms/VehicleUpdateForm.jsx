import React, { useState } from "react";
import { Form,Button } from "react-bootstrap";
import Axios from "axios";

const VehicleUpdateForm = ()=>{
   const [Lno,setLno] = useState();
   const [VehicleNo,setVehicleNo] = useState();
   const [Model,setModel] = useState();
   const [chasisNo,setChasisNo] = useState();
   const [info,setInfo] = useState([]);
   
    const onSubmits = (event)=>{
        event.preventDefault();

        Axios.put("http://localhost:3001/api/vehicle/update",{
            Lno:Lno,
            VehicleNo:VehicleNo,
            Model:Model,
            chasisNo:chasisNo,
        }).then(()=>{
            alert("Update Successful.");
        })
    }

    const SubmitData = (event)=>{
        event.preventDefault();
        Axios.get(`http://localhost:3001/api/update/get/vehicle/${Lno}/${VehicleNo}`).then((result)=>{
            setInfo(result.data);
            setModel(result.data[0].model);
            setChasisNo(result.data[0].chasis_No);
        })
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

<Button variant="primary" type="submit" onClick = {SubmitData}>
    Get Data
  </Button>
  </Form>

{info.map((val)=>{
    return(
        <>
        <br />
        <br />
        <Form>

<Form.Group className="mb-3" controlId="formBasicPassword">
<Form.Label>Model</Form.Label>
<Form.Control type="text" placeholder="Model" value = {Model} defaultValue ={val.Model} onChange = {(event)=>{
    setModel(event.target.value);
}}/>
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicPassword">
<Form.Label>Chasis Number</Form.Label>
<Form.Control type="number" placeholder="Chasis Number" value ={chasisNo} defaultValue ={val.chasis_No} onChange = {(event)=>{
  setChasisNo(event.target.value);
}}/>
</Form.Group>

<Button variant="success" type="submit" onClick = {onSubmits}>
Update
</Button>
</Form>
</>
    )
})}
  

        </>
    )
}

export default VehicleUpdateForm;