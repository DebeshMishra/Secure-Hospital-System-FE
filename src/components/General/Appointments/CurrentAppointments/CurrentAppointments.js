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
import { cancelAppointment, completeAppointment, getAllAppointments, getAllFutureAppointments } from "../../../../services/users.service";

function CurrentAppointments(props) {

    const [appointments, setAppointments] = useState([]);
    const [anyCancelled, setAnyCancelled] = useState(true);
    let navigate = useNavigate();
    const [fectching, setFecteching] = useState(true)


    const [cookies, setCookie, removeCookie] = useCookies([
        "JWTToken",
        "emailId",
    ]);
    const userInfo = useSelector((state) => state.user);

    // needs API integration
    useEffect(() => {
        setFecteching(true)
        getAllFutureAppointments("").then(response => {
            setAppointments(response);
            setFecteching(false);
        })
    }, [anyCancelled])

    const triggerBECall = (e) => {
        if (e) {

        }
    };

    const closeAppointment = (appointment) => {
        console.log(appointment);
        completeAppointment(appointment.appointment.id).then(res => {
            alert(res);
            getAllFutureAppointments("").then(response => {
                setAppointments(response);
            });
        })
        
    }

    const cancelAppointmt = (id) => {
        cancelAppointment(id).then(response => {
            alert(response);
            setAnyCancelled(!anyCancelled);
        })
    }

    const attendAppointment = (appointment) => {
        navigate("/appointmentConfirmation", { state: { app: appointment } });
    }

    const viewPatient = (id) => {
        console.log(id);
        navigate("/userData", { state: { userId: id } })
    }

    const createDiagnosis = (appointment) => {
        console.log(appointment)
        navigate("/createDiagnosis", { state: { appointment: appointment } })
    }

    const makeAPayment = (appointment) => {
        navigate("/payBill", {state: { appointment: appointment }});
    }

    const raiseaClaim = (appointment) => {
        navigate("/raiseClaim", {state: { appointment: appointment }})
    }


    return (
        <>
        
              {
            appointments.length > 0 ?
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
                                { userInfo.userData.role == "PATIENT" && <th>Payment</th>}
                            </tr>
                        </thead>
                        <tbody>
                            {
                                appointments.map((appointment, index) => {
                                    return (
                                        <tr key={index}>
                                            <td key={1}>{appointment.appointment.id}</td>
                                            <td key={2}>{appointment.appointment.appointmentType}</td>
                                            <td key={3}> {appointment.doctorFirstName != null && appointment.doctorLastName != null ? appointment.doctorFirstName + " " + appointment.doctorLastName : "-"}</td>
                                            <td key={4}>{appointment.staffFirstname != null && appointment.staffLastName != null ? appointment.staffFirstname + " " + appointment.staffLastName : "-"}</td>
                                            <td key={5}> {appointment.appointment.startTime}</td>
                                            <td key={6}>{appointment.appointment.date}</td>
                                            <td key={7} >{appointment.appointment.status}</td>
                                            <td key={8}>
                                                {
                                                    (userInfo.userData.role == "PATIENT" && 
                                                    <>
                                                    <Button variant="primary" className="submit-button" size="sm" disabled={appointment.appointment.status !== "REQUESTED"} onClick={() => cancelAppointmt(appointment.appointment.id)}>
                                                        {appointment.appointment.status === "CANCELED" ? "CANCELED" : "CANCEL"}
                                                    </Button>
                                                    <hr/>
                                                    </>
                                                    )
                                                }
                                                {
                                                    (userInfo.userData.role == "HOSPITAL_STAFF" || userInfo.userData.role == "ADMIN") &&
                                                    <>
                                                    <Button variant="primary" className="submit-button" size="sm" disabled={appointment.appointment.status !== "REQUESTED"} onClick={() => attendAppointment(appointment)}>
                                                        {appointment.appointment.status === "CANCELED" ? "CANCELED" : "APPROVE"}
                                                    </Button>
                                                    <hr/>
                                                    </>
                                                }
                                                 {
                                                    userInfo.userData.role == "DOCTOR"? appointment.appointment.status !== "PENDING"? 
                                                    <>
                                                    <Button variant="primary" className="submit-button" size="sm" disabled={appointment.appointment.status === "DIAGNOSIED" || appointment.appointment.status === "PAYMENT_AUTHORIZED" || appointment.appointment.status === "CANCELED" || appointment.appointment.status === "COMPLETED" } onClick={() => createDiagnosis(appointment)}>
                                                        { "WRITE DIAGNOSIS"}
                                                    </Button>
                                                    <hr/>
                                                    </>:
                                                    <>
                                                    <Button variant="primary" className="submit-button" size="sm" disabled={appointment.appointment.status === "DIAGNOSIED" || appointment.appointment.status === "PAYMENT_AUTHORIZED" || appointment.appointment.status === "CANCELED"} onClick={() => closeAppointment(appointment)}>
                                                        { "Complete Appointment"}
                                                    </Button>
                                                    <hr/>
                                                    </>: ""
                                                }
                                                <Button variant="primary" className="submit-button" size="sm"  onClick={() => viewPatient(appointment.patientId)}>
                                                        { "VIEW All DIAGNOSIS" }
                                                    </Button>
                                            </td>
                                            {
                                                userInfo.userData.role == "PATIENT" &&
                                                <td>
                                                    {
                                                        appointment.appointment.status === "DIAGNOSIED" &&
                                                        <Button variant="primary" className="submit-button" size="sm"  onClick={() => makeAPayment(appointment)}>
                                                            { "Make a Payment" }
                                                        </Button>

                                                    }
                                                    {
                                                        appointment.appointment.status === "DIAGNOSIED" &&
                                                        <Button variant="primary" className="submit-button" size="sm"  onClick={() => raiseaClaim(appointment)}>
                                                            { "Raise a Claim" }
                                                        </Button>

                                                    }
                                                
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


        </div>:
        fectching ? <h3>Feteching Appoinments!</h3>:
        <h3>No Appointments!</h3>
        }
        </>
  
       
    );
}

export default CurrentAppointments;