import React, { useState } from 'react'
import Axios from 'axios'
import { Form,Button } from 'react-bootstrap';

const ViolationUpdateForm = ()=>{
    
  const [Lno,setLno] = useState();
  const [ruleId,setRuleId] = useState();
  const [offenceId,setOffenceId] = useState();
  const [status,setStatus] = useState();
  const [info,setInfo] = useState([]);
  const [Paid,setPaid] = useState();
  const [NotPaid,setNotPaid] = useState();
  
  const GetData =(event)=>{
      event.preventDefault();
      Axios.get(`http://localhost:3001/api/update/get/violates/${Lno}/${ruleId}/${offenceId}`).then((result)=>{
          setInfo(result.data);
          
          if(result.data[0].status == "paid"){
            setPaid(true);
          }
          else{
            setNotPaid(true);
          }
      })
  }

  const SubmitData = (event)=>{
    event.preventDefault();
    Axios.put("http://localhost:3001/api/violation/update",{
      Lno :Lno,
      ruleId:ruleId,
      offenceId:offenceId,
      status:status
    }).then(()=>{
      alert("Update Successful.");
    })

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

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Rule ID </Form.Label>
    <Form.Control type="text" placeholder="Rule ID" value = {ruleId} onChange = {(event)=>{
        setRuleId(event.target.value);
    }}/>
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Offence ID </Form.Label>
    <Form.Control type="text" placeholder="Offence ID" value = {offenceId} onChange = {(event)=>{
        setOffenceId(event.target.value);
    }}/>
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>

  <Button variant="primary" type="submit" onClick = {GetData}>
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
    <Form.Label>Payment Status: </Form.Label>
    <span style = {{margin: "0.5vw"}}></span>
    <input type="radio" name="status" value = "paid" id = "paid" onChange = {(event)=>{
      setStatus(event.target.value);
    }} checked = {Paid}/><label htmlFor ="paid"> Paid</label><span style = {{margin: "0.5vw"}}></span>
    <input type="radio" name="status" value = "not-paid" id = "not-paid" onChange = {(event)=>{
      setStatus(event.target.value);
    }} checked = {NotPaid}/><label htmlFor ="not paid">Not-Paid</label>
  </Form.Group>

  <Button variant="success" type="submit" onClick = {SubmitData}>
    Update
  </Button>
</Form>
</>
      )
  })}

  
        </>
    )
}

export default ViolationUpdateForm;