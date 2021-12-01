import React, { useState } from 'react'
import { Form,Button } from 'react-bootstrap';
import Axios from 'axios'
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';


let Auth = false;

const Home1 = ()=>{

const [Reg,setReg] = useState("");
const [Password,setPassword] = useState("")
const history = useHistory();


const verification = (event)=>{
  event.preventDefault();
  Axios.post("http://localhost:3001/api/police/verification",{
    Reg:Reg,
    Password:Password
  }).then((response)=>{
    if(response.data.length === 1){
     Auth = true;
     history.push('/login/police');
    }
    else{
      alert("Incorrect username or password");
    }
  })
}


    return(
        <>
   <div style = {{margin:"4vw"}}>
  <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Registeration Number </Form.Label>
    <Form.Control type="text" placeholder="Enter Registeration No" value = {Reg} onChange = {(event)=>{
      setReg(event.target.value);
    }}/>
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" val = {Password} onChange = {(event)=>{
      setPassword(event.target.value);
    }}/>
  </Form.Group>
  <Link to = {`/login/police`}>
  <Button variant="primary" type="submit"  onClick  = {verification}>
    Submit
  </Button>
  </Link>
  
</Form>


</div>


        </>
    )
}

export default Home1;
export{Auth}
