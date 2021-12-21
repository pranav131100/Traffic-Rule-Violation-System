import React, {useState } from 'react'
import { Form,Button } from 'react-bootstrap';
import Axios from 'axios';
import { Table } from 'react-bootstrap';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const View = ()=>{
  
  const [Lno,setLno] = useState("");
  const [select,setSelect] = useState("");
  const[info,setInfo] = useState([]);
  const dummy = ["dummy"];

  const selectData = (event)=>{
    setSelect(event.target.value);
 
  }

  const submitData = (event)=>{
    event.preventDefault();
    
  Axios.get(`http://localhost:3001/api/view/${Lno}/${select}`).then((result)=>{
  setInfo(result.data);
  
}).catch((err)=>{
  console.log(err);
})

  }

  const onDelete = (event)=>{
    event.preventDefault();

    if(select === "driver"){

    }
    else if(select === "address"){

    }
    else if(select === "mobile_no"){

    }
    else if(select === "violates"){

    }
    else if(select === "vehicle"){
      
    }

  }
  
  return(
        <>
<div style = {{margin: "2vw 7.6vw"}}>
<Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>License Number</Form.Label>
    <Form.Control type="text" placeholder="License No"  value = {Lno} onChange = {(event)=>{
        setLno(event.target.value);
    }}/>
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>
  <label>
          <span style = {{marginRight : "1vw"}}>Select what to View/Delete: </span>
          <select value = {select} onChange = {selectData}>
            <option value=""> </option>
            <option value="driver">Driver</option>
            <option value="address">Address</option>
            <option value="mobile_no">Mobile No</option>
            <option value="vehicle">Vehicle</option>
        
            <option value="violates">Violation</option>
          </select>
        </label><br /><br/>
  <Button variant="primary" type="submit" onClick = {submitData}>
    Submit
  </Button>
  <br />
  <br />
   
  {dummy.map(()=>{
    if(select === "driver"){  
        return(
          <Table striped bordered hover>
  <thead>
    <tr>
      <th style = {{width: "20vw"}}>License No</th>
      <th style = {{width: "35vw"}}>Name</th>
      <th style = {{width: "15vw"}}>Date of Birth</th>
      <th>Gender</th>
      <th style = {{width: "5vw"}}>Delete Record</th>
    </tr>
  </thead>
  </Table>)}

  if(select === "address"){  
        return(
          <Table striped bordered hover>
  <thead>
    <tr>
    <th style = {{width: "20vw"}}>License No</th>
      <th>Address</th>
      <th style = {{width: "5vw"}}>Delete Record</th>
    </tr>
  </thead>
  </Table>)}

  if(select === "mobile_no"){
     return  (<Table striped bordered hover>
  <thead>
    <tr>
      <th style = {{width: "20vw"}}>License No</th>
      <th>Mobile No</th>
      <th style = {{width: "5vw"}}>Delete Record</th>
    </tr>
  </thead>
</Table>)
   }

   if(select === "violates"){
     return  (
      <Table striped bordered hover>
  <thead>
    <tr>
      <th style = {{width: "25vw"}}>License No</th>
      <th style = {{width: "25vw"}}>Rule Id</th>
      <th style = {{width: "25vw"}}>Offence Id</th>
      <th style = {{width: "25vw"}}>Payment Status</th>
      <th style = {{width: "5vw"}}>Delete Record</th>
    </tr>
  </thead>
</Table>
       
       )
   }

   if(select === "vehicle"){
     return  (
      <Table striped bordered hover>
  <thead>
    <tr>
      <th style = {{width: "25vw"}}>License No</th>
      <th style = {{width: "25vw"}}>Vehicle No</th>
      <th style = {{width: "25vw"}}>Model</th>
      <th style = {{width: "25vw"}}>Chasis No</th>
      <th style = {{width: "5vw"}}>Delete Record</th>
    </tr>
  </thead>
</Table>
       
       )
   }
   else{
     return(
       <>
       </>
     )
   }

   
  


  })}




  {info.map((val)=>{
  console.log("Pranav");
  console.log(select);
  console.log(typeof select);
  if(select === "driver"){  
        return(
          <Table striped bordered hover>
  <tbody>
    <tr>
      <td style = {{width: "20vw"}}>{val.License_No}</td>
      <td style = {{width: "35vw"}}>{val.Name}</td>
      <td style = {{width: "15vw"}}>{val.DOB}</td>
      <td>{val.Gender}</td>
      <td style = {{width: "5vw"}}><Button variant="danger" onClick = {onDelete}>Delete</Button></td>
    </tr>
  </tbody>
</Table>
        )
        }
    

    if(select === "address"){
     return  (<Table striped bordered hover>
  
  <tbody>
    <tr>
      <td style = {{width: "20vw"}}>{val.License_No}</td>
      <td>{val.address}</td>
      <td style = {{width: "5vw"}}><Button variant="danger" onClick = {onDelete}>Delete</Button></td>
    </tr>
  </tbody>
</Table>)
   }
   
   if(select === "mobile_no"){
     return  (<Table striped bordered hover>
  
  <tbody>
    <tr>
      <td style = {{width: "20vw"}}>{val.License_No}</td>
      <td>{val.phone}</td>
      <td style = {{width: "5vw"}}><Button variant="danger" onClick = {onDelete}>Delete</Button></td>
    </tr>
  </tbody>
</Table>)
   }

   if(select === "violates"){
     return  (
      <Table striped bordered hover>
 
  <tbody>
    <tr>
    <td style = {{width: "25vw"}}>{val.License_No}</td>
            <td style = {{width: "25vw"}}>{val.RULE_Id}</td>
            <td style = {{width: "25vw"}}>{val.Offence_Id}</td>
            <td style = {{width: "25vw"}}>{val.status}</td>
            <td style = {{width: "5vw"}}><Button variant="danger" onClick = {onDelete}>Delete</Button></td>
    </tr>
  </tbody>
</Table>
       
       )
   }

   if(select === "vehicle"){
     return  (
      <Table striped bordered hover>
  
  <tbody>
    <tr>
    <td style = {{width: "25vw"}}>{val.License_No}</td>
            <td style = {{width: "25vw"}}>{val.Vehicle_No}</td>
            <td style = {{width: "25vw"}}>{val.Model}</td>
            <td style = {{width: "25vw"}}>{val.chasis_No}</td>
            <td style = {{width: "5vw"}}><Button variant="danger" onClick = {onDelete}>Delete</Button></td>
    </tr>
  </tbody>
</Table>
       
       )
   }

   if(select === "offence"){
     return  (<table>
       <tbody>
        <tr>
            <td>{val.Offence_Id}</td>
            <td>{val.section}</td>
            <td>{val.Location}</td>
            <td>{val.date}</td>
            <td>{val.time}</td>
            <td>{val.Evidance}</td>
            <td style = {{width: "5vw"}}><Button variant="danger" onClick = {onDelete}>Delete</Button></td>
        </tr>
        </tbody>
        </table>)
   }
   else{
     return(
       <>
       </>
     )
   }
         })}

</Form>



</div>
        </>
    )
}

export default View;