import React, { useState } from 'react'
import Axios from 'axios'
import { Table, ToastHeader } from 'react-bootstrap';

const Rule  = ()=>{
    const [rule,setRule] = useState([]);

    Axios.get("http://localhost:3001/api/rules").then((result)=>{
    setRule(result.data);
})
    return(
        <>
          <div style = {{margin: "2vw 7.6vw"}}>
          {/* <Table striped bordered hover>
  <thead>
    <tr>
      <th>License No</th>
      <th>Name</th>
      <th>Age</th>
      <th>Gender</th>
    </tr>
        

        <table >
                        <tbody>
                        <tr>
                           
                        </tr>
                        </tbody>
                        </table> */}
                        <Table striped bordered hover>
  
                        <thead>
                        <tr>
                            <th style = {{width: "3.9vw"}}>Rule Id</th>
                            <th style = {{width: "50vw"}}>Rule Name</th>
                            <th style = {{width: "15vw"}}>Fine</th>
                            <th>Vehicle Type</th>
                        </tr>
                        </thead>
                        </Table>
            {rule.map((val)=>{
                return (
                        
                        <Table striped bordered hover>
  
                        <tbody>
                        <tr>
                            <td style = {{width: "3.9vw"}}>{val.Rule_ID}</td>
                            <td style = {{width: "50vw"}}>{val.Rule_Name}</td>
                            <td style = {{width: "15vw"}}>{val.Fine}</td>
                            <td>{val.Vehicle_Type}</td>
                        </tr>
                        </tbody>
                        </Table>
                        
                        )
            })}
            </div>
        </>
    )
}

export default Rule;