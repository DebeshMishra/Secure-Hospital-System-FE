import { useEffect } from "react";
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
    Accordion,
    Tabs,
    Tab
} from "react-bootstrap";
import { useState } from "react";
import { getAllLabTests } from "../../../services/LabTests.services";
import './Appointments.css'

function Appointments(props) {

    const handleChange = (appointment, e) => {
        e.preventDefault();
    };

    useEffect(() => {

    }, []);


    return (
        <Container>
            <Accordion flush>
                {
                    props.appointments.map((appointment, index) => {

                        return (
                            <Accordion.Item eventKey={index} >
                                <Accordion.Header>Appointment Id: {appointment.id} - Date : {appointment.date}</Accordion.Header>
                                <Accordion.Body>
                                    <Form>
                                        <Row>
                                            <Col md="4">
                                                <Row className="mb-3" controlId={`appointmentType-${index}`}>
                                                    <Col sm="4">
                                                        <b>Type:</b>
                                                    </Col>
                                                    <Col sm="8">
                                                        <span>{appointment.appointmentType || "-"} </span>
                                                    </Col>
                                                </Row>
                                            </Col>
                                            <Col md="4">
                                                <Row className="mb-3" controlId={`startTime-${index}`}>
                                                    <Col column sm="4">
                                                        <b>Start Time:</b>
                                                    </Col>
                                                    <Col sm="8">
                                                        <span>{appointment.startTime || "-"} </span>
                                                    </Col>
                                                </Row>
                                            </Col>
                                            <Col md="4">
                                                <Row className="mb-3" controlId={`fees-${index}`}>
                                                    <Col sm="4">
                                                        <b>Fees:</b>
                                                    </Col>
                                                    <Col sm="8">
                                                        <span>{appointment.fees || "-"} </span>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md="4">
                                                <Row className="mb-3" controlId={`status-${index}`}>
                                                    <Col sm="4">
                                                        <b>Status:</b>
                                                    </Col>
                                                    <Col sm="8">
                                                        <span>{appointment.status || "-"} </ span>
                                                    </Col>
                                                </Row>
                                            </Col>
                                            <Col md="8">
                                                <Row className="mb-3" controlId={`staffNote-${index}`}>
                                                    <Col sm="4">
                                                        <b>Staff Notes:</b>
                                                    </Col>
                                                    <Col sm="8">
                                                        <span> {appointment.staffNote || "-"} </span>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                        {
                                            appointment.diagnoses == null ? <h6 className="red">No Diagnosis!</h6> :
                                            <Row className="lab-test-parent-1">
                                                <Row >
                                                    <h6><b>Diagnosis Info</b></h6>
                                                    <hr />
                                                </Row>
                                                <Row className="mb-3">
                                                    <Col md="6">
                                                        <Form.Group>
                                                            <Form.Label id="basic-addon1" className='label-css'>Diagnosis Information: </Form.Label>
                                                            <FormControl
                                                                as="textarea"
                                                                placeholder="Diagnosis"
                                                                aria-label="Diagnosis"
                                                                id="diagnosis_info"
                                                                autoComplete="off"
                                                                value={appointment.diagnoses.diagnosis_info || "-"}
                                                                required
                                                                disabled
                                                                type="text"
                                                            />
                                                        </Form.Group>
                                                    </Col>
                                                    <Col md="6">
                                                        <Form.Group>
                                                            <Form.Label id="basic-addon1" className='label-css'>Medical Prescription:</Form.Label>
                                                            <FormControl
                                                                as="textarea"
                                                                placeholder="prescription"
                                                                aria-label="prescription"
                                                                id="prescription"
                                                                autoComplete="off"
                                                                value={appointment.diagnoses.prescription || "-"}
                                                                required
                                                                disabled
                                                                type="text"
                                                            />
                                                        </Form.Group>
                                                    </Col>
                                                </Row>

                                                {
                                                    appointment.diagnoses.labResult.length > 0 &&
                                                    <>
                                                        <Row>
                                                            <h6><b>Lab Test Results</b></h6>
                                                        </Row>
                                                        <Row className="lab-test-parent">
                                                            {
                                                                appointment.diagnoses.labResult.map((labres, index) => {

                                                                    return (
                                                                        <Container className="lab-test">
                                                                            <Row>
                                                                                <Col md="4">
                                                                                    <Row className="mb-3">
                                                                                        <Col sm="6">
                                                                                            <b>Lab Test Name:</b>
                                                                                        </Col>
                                                                                        <Col sm="6">
                                                                                            <span>{labres.labtests.labTestName || "-"} </span>
                                                                                        </Col>
                                                                                    </Row>
                                                                                </Col>
                                                                                <Col md="4">
                                                                                    <Row className="mb-3">
                                                                                        <Col sm="6">
                                                                                            <b>Lab Test Cost:</b>
                                                                                        </Col>
                                                                                        <Col sm="6">
                                                                                            <span>{labres.labtests.labTestCost || "-" } </span>
                                                                                        </Col>
                                                                                    </Row>
                                                                                </Col>
                                                                                <Col md="4">
                                                                                    <Row className="mb-3">
                                                                                        <Col sm="6">
                                                                                            <b>Lab Test Status:</b>
                                                                                        </Col>
                                                                                        <Col sm="6">
                                                                                            <span>{labres.labResultStatus || "-" } </span>
                                                                                        </Col>
                                                                                    </Row>
                                                                                </Col>
                                                                            </Row>
                                                                            <Row>
                                                                                <Col md="4">
                                                                                    <Row className="mb-3">
                                                                                        <Col sm="4">
                                                                                            <b>Result:</b>
                                                                                        </Col>
                                                                                        <Col sm="8">
                                                                                            <span>{labres.result || '-'} </span>
                                                                                        </Col>
                                                                                    </Row>
                                                                                </Col>
                                                                                <Col md="8">
                                                                                    <Row className="mb-3">
                                                                                        <Col sm="3">
                                                                                            <b>Lab Staff Note:</b>
                                                                                        </Col>
                                                                                        <Col sm="9">
                                                                                            <span>{ labres.labStaffNotes || "-" } </span>
                                                                                        </Col>
                                                                                    </Row>
                                                                                </Col>
                                                                            </Row>
                                                                        </Container>
                                                                    )
                                                                })
                                                            }


                                                        </Row>
                                                    </>

                                                }


                                            </Row>
                                        }



                                    </Form>
                                </Accordion.Body>
                            </Accordion.Item>
                        )
                    })
                }


            </Accordion>

        </Container>
    )
}

export default Appointments;