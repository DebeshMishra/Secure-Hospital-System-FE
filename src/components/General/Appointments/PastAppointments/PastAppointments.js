

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

function PastAppointments(props) {

    const [appointments, setAppointments] = useState([]);
    const [key, setKey] = useState('Current');

    const [cookies, setCookie, removeCookie] = useCookies([
        "JWTToken",
        "emailId",
    ]);
    const userInfo = useSelector((state) => state.user);

    // needs API integration
    useEffect(() => {
        setAppointments([
            {
                appointmentId: 1,
                DoctorName: "Sham",
                hospitalStaffName: "Ram",
                time: "09:30am",
                date: "03/29/2022"
            },
            {
                appointmentId: 1,
                DoctorName: "Sham",
                hospitalStaffName: "Ram",
                time: "09:30am",
                date: "03/29/2022"
            }
        ])
    }, [])

    const triggerBECall = (e) => {
        if (e) {

        }
    };


    return (
        <div className="coveragesParent">
            <Row className="justify-content-md-center header">
                <Col md="12">
                    <h3>Past Appointments</h3>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Appointment Id</th>
                                <th>Doctor Assigned</th>
                                <th>Hosiptal Staff</th>
                                <th>Time Slot</th>
                                <th>Date</th>
                                <th>Modifications</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                appointments.map((appointment, index) => {
                                    return (
                                        <tr key={index}>
                                            <td key={1}>{appointment.appointmentId}</td>
                                            <td key={2}> {appointment.DoctorName}</td>
                                            <td key={3}>{appointment.hospitalStaffName}</td>
                                            <td key={4}> {appointment.time}</td>
                                            <td key={5}>{appointment.date}</td>
                                            <td key={6}>
                                                <Button variant="success" className="submit-button">
                                                    View Diagnosis
                                                </Button>
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