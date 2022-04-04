import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

import {
    Form,
    Row,
    Col,
    InputGroup,
    FormControl,
    Button,
} from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { bookAppointment, getAllUsersByRole, getAppointmentTimings } from "../../../../services/users.service";

function CreateAppointment() {
    const [appointmentData, setAppointmentData] = useState({});
    const [doctors, setDoctors] = useState([]);
    const [timeSlots, setTimeSlots] = useState([])
    const [appointmentType, setAppointmentType] = useState("");
    let navigate = useNavigate();
    
    const [submit, setsubmit] = useState(false);

    const today = new Date()
    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)
    // true for general

    const [cookies, setCookie, removeCookie] = useCookies([
        "JWTToken",
        "emailId",
    ]);
    const userInfo = useSelector((state) => state.user);

    const handleSubmit = async (e) => {
        setsubmit(true);
        e.preventDefault();
        bookAppointment(appointmentData).then(response => {
            alert(response);
            setAppointmentData({});
            setDoctors([]);
            setTimeSlots([]);
            navigate('/');
            setsubmit(!submit);
        });
        
    };

    const handleChange = (e) => {
        const newdata = { ...appointmentData };
        newdata[e.target.id] = e.target.value;
        if(e.target.id=='date'){
            newdata[e.target.id] = e.target.value;
            newdata['startTime'] = 'Select';
            getAppointmentTimings({
                'appointmentType': appointmentType,
                "doctorId": Number(appointmentData.doctorId),
                "date": e.target.value
            }).then(response => {
                setTimeSlots(response);
            });
        }
        if(e.target.id=='doctorId'){
            newdata[e.target.id] = e.target.value;
            newdata['startTime'] = 'Select';
            newdata['date'] = null;
            setTimeSlots([]);
        }
        setAppointmentData(newdata);

    };

    useEffect(() => {
        setDoctors([])
        if(appointmentType=="SPECIFIC"){
            getAllUsersByRole("DOCTOR", "").then(response => {
                setDoctors(response);
            })
        }
        setAppointmentData({
            'date': null,
            'doctorId': null,
            'appointmentType': appointmentType,
            'startTime': null
        });
    }, [appointmentType])

    function Allset() {
        if(( (appointmentData.date != null && appointmentData.startTime != null && appointmentData.startTime != 'Select' && appointmentData.appointmentType == "GENERAL") 
        || (appointmentData.date != null && appointmentData.startTime != null && appointmentData.startTime != 'Select' && appointmentData.appointmentType == "SPECIFIC" && appointmentData.doctorId != null && appointmentData.doctorId != "Select")) && !submit){
            return (<Button variant="primary" type="submit" className="submit-button">
            Submit
        </Button>)
        }else{
            return (<Button variant="primary" disabled type="submit" className="submit-button" >
            Submit
        </Button>)
        }
    }

    const handleChangeradio = (e) => {
        setDoctors([]);
        setTimeSlots([]);
        setAppointmentData({});
        setAppointmentType(e.target.id);
    };

    return (
        <div className='create-coverage-parent'>
            <Row className="justify-content-md-center header">
                <h3>Book Appointment</h3>
                {doctors.length <= 0 &&  appointmentData.appointmentType==='SPECIFIC' && <b className="red">No Available Doctors, Please try booking later!</b>}
            </Row>
            <Form onSubmit={handleSubmit}>
            <Row className="justify-content-md-center mb-3">
                    <Col md="6">
                        <Form.Check
                            inline
                            label="Specific Appointment"
                            name="1"
                            type="radio"
                            id="SPECIFIC"
                            onChange={handleChangeradio}
                        />
                        <Form.Check
                            inline
                            label="General Appointment"
                            name="1"
                            type="radio"
                            id="GENERAL"
                            onChange={handleChangeradio}
                        />
                    </Col>
                </Row>

            
                { doctors.length>0 && appointmentData.appointmentType==='SPECIFIC' && 
                <Row className="justify-content-md-center mb-3">
                    <Col md="6">
                        <Form.Group>
                            <Form.Label id="basic-addon1" className='label-css'>Select Doctor</Form.Label>
                            <Form.Select
                                aria-label="Default select example"
                                value={appointmentData.doctorId}
                                id="doctorId"
                                onChange={handleChange}
                            >
                                <option>Select</option>
                                {
                                    doctors.map((doctor, index) => {
                                        return <option key={index} value={doctor.id}>{doctor.firstName + " " + doctor.lastName}</option>
                                    })
                                }
                            </Form.Select>
                        </Form.Group>
                    </Col>
                </Row>}

                { ((appointmentData.appointmentType == 'SPECIFIC' && appointmentData.doctorId!=null && appointmentData.doctorId != "Select") || (appointmentData.appointmentType == 'GENERAL')) &&
                <Row className="justify-content-md-center mb-3">
                    <Col md="6">
                        <InputGroup>
                            <InputGroup.Text id="basic-addon1">Choose Date: </InputGroup.Text>
                            <FormControl
                                placeholder="Choose Date"
                                aria-label="Choose Date"
                                id="date"
                                autoComplete="off"
                                value={appointmentData.date}
                                onChange={handleChange}
                                required
                                min={appointmentData.appointmentType==="GENERAL"? tomorrow.toISOString().split("T")[0] : new Date().toISOString().split("T")[0]}
                                type="date"
                            />
                        </InputGroup>
                    </Col>
                </Row>
                }

                {appointmentData.date!=null && timeSlots.length>0 && 
                <Row className="justify-content-md-center mb-3">
                    <Col md="6">
                      
                    <Form.Group>
                        <Form.Label id="basic-addon1" className='label-css'>Select Time</Form.Label>
                        <Form.Select
                            aria-label="Default select example"
                            value={appointmentData.startTime}
                            id="startTime"
                            onChange={handleChange}
                        >
                            <option>Select</option>
                            {
                                timeSlots.map((time, index) => {
                                    return (
                                        <option key={index} value={time}>{time}</option>
                                    )
                                })
                            }
                        </Form.Select>
                    </Form.Group>
                      
                    </Col>
                </Row>}
                <Row className="justify-content-md-center mb-3">
                    <Col md="6">
                        <Form.Group className="mb-3">
                            <Allset />
                        </Form.Group>
                    </Col>

                </Row>
            </Form>

        </div>
    )
}

export default CreateAppointment;