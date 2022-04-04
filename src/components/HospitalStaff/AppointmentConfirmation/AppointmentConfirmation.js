import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router";
import { useCookies } from "react-cookie";
import './AppointmentConfirmation.css'
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
import { cancelAppointment, getAllAvailableDoctorsForaTimeSlot, updateAppointment} from "../../../services/users.service";

function AppointmentConfirmation (props) {
    
    let navigate = useNavigate();
    const [appointmentData, setAppointmentData] = useState({});
    const [doctors, setDoctors] = useState([]);
    const [doctorsAvailability, setDoctorsAvailability] = useState({});
    const {state} = useLocation();
    const {app} = state;

    const [cookies, setCookie, removeCookie] = useCookies([
        "JWTToken",
        "emailId",
    ]);
    const userInfo = useSelector((state) => state.user);

    useEffect(() => {
        const appt = app.appointment;
        setAppointmentData(appt);
        if(app.appointment.appointmentType === "GENERAL"){
            getAllAvailableDoctorsForaTimeSlot({
                "date": app.appointment.date,
                "appointmentType": app.appointment.appointmentType,
                "startTime": app.appointment.startTime
              }).then(response => {
                const doctors = []
                Object.keys(response).forEach(res => {
                    doctors.push(res + " - Name: " + response[res] )
                });
                setDoctors(doctors);
                setDoctorsAvailability(response);
                // if(doctors.length == 1){
                //     const newdata = {...appointmentData}
                //     newdata['doctorId'] = doctors[0];
                //     setAppointmentData(newdata);
                // }
              });
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
    };

    const handleChange = (e) => {
        const newdata = { ...appointmentData };
        newdata[e.target.id] = e.target.value;
        setAppointmentData(newdata);
    };

    const updateAppointmt = (e) => {
        updateAppointment({
            doctorId: parseInt(appointmentData.doctorId.split(" - Name: ")[0]),
            appointmentId: parseInt(app.appointment.id),
            staffId: parseInt(userInfo.userData.user.id),
            status: "APPROVED",
            staffNote: ""
        }).then(response => {
            alert(response);
            navigate("/appointments");
        })
    }

    function DisabilityCheck(){
        if(appointmentData.doctorId != null && doctors.length > 0){
            return(
                <Button variant="primary" type="submit" className="submit-button" onClick={updateAppointmt}>
                            Approve Appointment
                        </Button>
            )
        }else{
            return (<Button variant="primary" disabled type="submit" className="submit-button">
                            Approve Appointment
                        </Button>);
        }
    }

    const cancelAppointmt = (id) => {
        cancelAppointment(id).then(res => {
            alert(res);
            navigate("/appointments");
        }, error => {
            alert("Error occurred!");
        })
        
    }

    return (
        <Container>
            <Row className="justify-content-md-center header">
                <h3>Approve Appointment</h3>
                {doctors.length <= 0 && <b className="red">No Available Doctors, Please reject the Request!</b>}
            </Row>
            <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
                    <Col md="6">
                    <Form.Group>
                        <Form.Label id="basic-addon1" className='label-css'>Patient Name: </Form.Label>
                        <FormControl
                            placeholder="Patient Name"
                            aria-label="Patient Name"
                            id="paitentName"
                            autoComplete="off"
                            value={app.patientFirstName + " " + app.patientLastName}
                            required
                            disabled
                            type="text"
                        />
                    </Form.Group>
                    </Col>
                    <Col md="6">
                    <Form.Group>
                        <Form.Label id="basic-addon1" className='label-css'>Patient Date of Birth: </Form.Label>
                        <FormControl
                            placeholder="DOB"
                            aria-label="DOB"
                            id="patientDOB"
                            autoComplete="off"
                            value={app.paitentDOB}
                            required
                            disabled
                            type="text"
                        />
                    </Form.Group>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col md="6">
                    <Form.Group>
                        <Form.Label id="basic-addon1" className='label-css'>Appointment Type: </Form.Label>
                        <FormControl
                            placeholder="Appointment Type"
                            aria-label="Appointment Type"
                            id="appointmentType"
                            autoComplete="off"
                            value={appointmentData.appointmentType}
                            onChange={handleChange}
                            required
                            disabled
                            type="text"
                        />
                    </Form.Group>
                    </Col>
                    <Col md="6">
                    <Form.Group>
                        <Form.Label id="basic-addon1" className='label-css'>Date: </Form.Label>
                        <FormControl
                            placeholder="Appointment Date"
                            aria-label="appointment Date"
                            id="date"
                            autoComplete="off"
                            value={appointmentData.date}
                            onChange={handleChange}
                            required
                            disabled
                            type="text"
                        />
                    </Form.Group>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col md="6">
                    <Form.Group>
                        <Form.Label id="basic-addon1" className='label-css'>Start Time: </Form.Label>
                        <FormControl
                            placeholder="Start Time"
                            aria-label="Start Time"
                            id="startTime"
                            autoComplete="off"
                            value={appointmentData.startTime}
                            onChange={handleChange}
                            required
                            disabled
                            type="text"
                        />
                    </Form.Group>
                    </Col>
                    <Col md="6">
                    <Form.Group>
                        <Form.Label id="basic-addon1" className='label-css'>Fees: </Form.Label>
                        <FormControl
                            placeholder="Fees"
                            aria-label="Fees"
                            id="fee"
                            autoComplete="off"
                            value={appointmentData.fees}
                            onChange={handleChange}
                            required
                            disabled
                            type="text"
                        />
                    </Form.Group>
                    </Col>
                </Row>
                 <Row className="mb-3">
                    <Col md="6">
                    <Form.Group>
                        <Form.Label id="basic-addon1" className='label-css'>Select a doctor:</Form.Label>
                        <Form.Select
                            aria-label="Default select example"
                            value={appointmentData.doctorId}
                            id="doctorId"
                            required
                            onChange={handleChange}
                        >
                            <option>Select A Doctor</option>
                            {
                                doctors.map((doctor, index) => {
                                    return (
                                        <option key={index} value={doctor}>{'id: '+ doctor}</option>
                                    )
                                })
                            }
                        </Form.Select>
                    </Form.Group>
                    </Col>
                </Row>
                <Row className="justify-content-md-center mb-3">
                    <Col md="3">
                    <Form.Group className="mb-3">
                        <DisabilityCheck />
                    </Form.Group>
                    </Col>
                    <Col md="3">
                    <Form.Group className="mb-3">
                        <Button variant="primary" type="submit" className="submit-button" onClick={() => cancelAppointmt(appointmentData.id) }>
                            Reject Appointment
                        </Button>
                    </Form.Group>
                    </Col>
                    
                </Row>
            </Form>
        </Container>
        
    )
}

export default AppointmentConfirmation;