import React, { useState } from 'react';
import { Form,Button } from 'react-bootstrap';
import Axios from 'axios'

const ViolationForm = (props)=>{

  const [Lno,setLno] = useState();
  const [ruleId,setRuleId] = useState();
  const [offenceId,setOffenceId] = useState();
  const [status,setStatus] = useState();

  const SubmitData = (event)=>{
    event.preventDefault();
    Axios.post("http://localhost:3001/api/violation/insert",{
    Lno:Lno,
    ruleId:ruleId,
    offenceId:offenceId,
    status:status
    }).then(()=>{
      alert("Violation Data Inserted Successfully");
    })
  };

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

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Payment Status: </Form.Label>
    <span style = {{margin: "0.5vw"}}></span>
    <input type="radio" name="status" value = "paid" id = "paid" onChange = {(event)=>{
      setStatus(event.target.value);
    }}/><label htmlFor ="paid"> Paid</label><span style = {{margin: "0.5vw"}}></span>
    <input type="radio" name="status" value = "not-paid" id = "not-paid" onChange = {(event)=>{
      setStatus(event.target.value);
    }}/><label htmlFor ="not-paid">Not-Paid</label>
  </Form.Group>

  <Button variant="primary" type="submit" onClick = {SubmitData}>
    {props.text}
  </Button>
</Form>
        </>
        

    )
}

export default ViolationForm;