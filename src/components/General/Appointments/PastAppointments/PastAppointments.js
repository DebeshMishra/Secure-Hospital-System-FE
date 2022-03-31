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
import { getAllAppointments, getAllFutureAppointments, getAllPastAppointments } from "../../../../services/users.service";

function PastAppointments(props) {

    const [appointments, setAppointments] = useState([]);
    const [key, setKey] = useState('Current');
    let navigate = useNavigate();

    const [cookies, setCookie, removeCookie] = useCookies([
        "JWTToken",
        "emailId",
    ]);
    const userInfo = useSelector((state) => state.user);

    // needs API integration
    useEffect(() => {
        getAllPastAppointments("").then(response => {
            setAppointments(response);
        })
    }, [])

    const viewPatient = (id) => {
        console.log(id);
        navigate("/userData", { state: { userId: id } })
    }


    return (
        <div className="coveragesParent">
            <Row className="justify-content-md-center header">
                <Col md="12">
                    <h3>Past Appointments</h3>
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
                            </tr>
                        </thead>
                        <tbody>
                            {
                                appointments.map((appointment, index) => {
                                    return (
                                        <tr key={index}>
                                            <td key={1}>{appointment.appointment.id}</td>
                                            <td key={9}>{appointment.appointment.appointmentType}</td>
                                            <td key={2}> {appointment.doctorFirstName!= null && appointment.doctorLastName != null ? appointment.doctorFirstName + " " + appointment.doctorLastName: "-"}</td>
                                            <td key={3}>{appointment.staffFirstname != null && appointment.staffLastName != null ? appointment.staffFirstname + " " + appointment.staffLastName: "-"}</td>
                                            <td key={4}> {appointment.appointment.startTime}</td>
                                            <td key={5}>{appointment.appointment.date}</td>
                                            <td key={7}>{appointment.appointment.status}</td>
                                            <td key={6}>
                                                {
                                                    appointment.appointment.status == "COMPLETED" && <Button variant="primary" className="submit-button" onClick={() => viewPatient(appointment.patientId)}>
                                                    View All diagnosis
                                                </Button>
                                                }
                                                
                                            </td>
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

export default PastAppointments;