import React, { Component }  from 'react';
import './appointments.css';
import { Form, Button, FormGroup, InputGroup,FormControl, ControlLabel } from "react-bootstrap";
function HSAppointments() {
return (
	<div className="App">
    <InputGroup className="mb-3">
    <FormControl
      placeholder="search"
     // aria-label="search"
    //  aria-describedby="basic-addon2"
    />
    <Button variant="outline-secondary" id="button-addon2">
    Search
    </Button>
  </InputGroup>


	<table>
		<tr>
		<th>Patient ID      </th>
		<th>Patient Name    </th>
        <th>Appointment ID  </th>
        <th>Name            </th>
		<th>Date and time   </th>
        <th>Status          </th>
        <th>Approved By     </th>
        <th></th>
        <th>
   </th> 
		</tr>
		<tr>
		<td>1</td>
		<td>Rama</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
         <td></td>
		<td><Button variant="" type="" className=""> Accept</Button> <Button variant="" type="" className="">Reject</Button></td>
		</tr>
		<tr>
		<td>2</td>
		<td>Sitha</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
         <td></td>
		<td><Button variant="" type="" className=""> Accept</Button> <Button variant="" type="" className="">Reject</Button></td>
		</tr>
		<tr>
		<td>3</td>
		<td>Laxman</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
         <td></td>
		<td><Button variant="" type="" className=""> Accept</Button> <Button variant="" type="" className="">Reject</Button></td>
		</tr>
	</table>
    {/* <Routes>
                {routes.map((item, index) => {
                    return <PrivateRoute key={index} exact path="/dashboard" element={<Dashboard />}/>
                })}
                <ProtectRouteLogin exact path='/' element={<Dashboard />} />
                <ProtectRouteLogin exact path="/login" element={<Login />} />
                <ProtectRouteLogin exact path="/signup" element={<Signup />} />
                <Route exact path="/hs_appointments" element={<HSAppointments/>}/>
              </Routes> */}
      
	</div>
);
}



export default HSAppointments;


