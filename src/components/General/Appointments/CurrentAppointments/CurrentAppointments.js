import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

import {
    Form,
    Row,
    Container,
    Col,
    InputGroup,
    FormControl,
    Button,
    Table,
    DropdownButton,
    Dropdown,
    Tabs,
    Tab
} from "react-bootstrap";
import { Navigate } from "react-router";
import React, { useEffect, useState } from "react";
import { cancelAppointment, getAllAppointments, getAllFutureAppointments } from "../../../../services/users.service";

function CurrentAppointments(props) {

    const [appointments, setAppointments] = useState([]);
    const [anyCancelled, setAnyCancelled] = useState(true);
    let navigate = useNavigate();


    const [cookies, setCookie, removeCookie] = useCookies([
        "JWTToken",
        "emailId",
    ]);
    const userInfo = useSelector((state) => state.user);

    // needs API integration
    useEffect(() => {
        getAllFutureAppointments("").then(response => {
            setAppointments(response);
        })
    }, [anyCancelled])

    const triggerBECall = (e) => {
        if (e) {

        }
    };

    const cancelAppointmt = (id) => {
        cancelAppointment(id).then(response => {
            alert(response);
            setAnyCancelled(!anyCancelled);
        })
    }

    const attendAppointment = (appointment) => {
        navigate("/appointmentConfirmation", {state :{ app: appointment}});
    }

    const viewPatient = (id) => {
        
    }


    return (
        <div className="coveragesParent">
            <Row className="justify-content-md-center header">
                <Col md="12">
                    <h3>Current Appointments</h3>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Appointment Id</th>
                                <th>Appoointment Type</th>
                                <th>Doctor Assigned</th>
                                <th>Hosiptal Staff</th>
                                <th>Time Slot</th>
                                <th>Date</th>
                                <th>Status</th>
                                <th>Modifications</th>
                                {userInfo.userData.role != "PATIENT"  && <th>Patient Record</th>}
                            </tr>
                        </thead>
                        <tbody>
                            {
                                appointments.map((appointment, index) => {
                                    return (
                                        <tr key={index}>
                                            <td key={1}>{appointment.appointment.id}</td>
                                            <td key={9}>{appointment.appointment.appointmentType}</td>
                                            <td key={2}> {appointment.doctorFirstName != null && appointment.doctorLastName != null ? appointment.doctorFirstName + " " + appointment.doctorLastName : "-"}</td>
                                            <td key={3}>{appointment.staffFirstname != null && appointment.staffLastName != null ? appointment.staffFirstname + " " + appointment.staffLastName : "-"}</td>
                                            <td key={4}> {appointment.appointment.startTime}</td>
                                            <td key={5}>{appointment.appointment.date}</td>
                                            <td key={7} >{appointment.appointment.status}</td>
                                            <td key={6}>
                                                
                                                {
                                                    (userInfo.userData.role == "DOCTOR" ||  userInfo.userData.role == "HOSPITAL_STAFF") && <div>
                                               
                                                    <Button variant="primary" className="submit-button"size="sm" disabled={appointment.appointment.status==="CANCELED" || appointment.appointment.appointmentType==="SPECIFIC"} onClick={() => attendAppointment(appointment)}>
                                                        {appointment.appointment.status=="COMPLETED"? "View" : appointment.appointment.status==="CANCELED"? "Rejected": appointment.appointment.appointmentType==="SPECIFIC"? "Booked" : "Approve"}
                                                    </Button>
                                                    </div>
                                                }

                                            </td>
                                            
                                            {
                                                    (userInfo.userData.role == "DOCTOR" ||  userInfo.userData.role == "HOSPITAL_STAFF") && 
                                                    <td>
                                                        <Button variant="primary" className="submit-button"size="sm" onClick={() => viewPatient(appointment.patientId)}>
                                                        {appointment.patientFirstName + " " + appointment.patientLastName}
                                                    </Button>
                                                    </td>
                                                }
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                </Col>
            </Row>


        </div>
    );
}

export default CurrentAppointments;