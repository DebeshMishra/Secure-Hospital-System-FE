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

function Appointments(props) {
    const [labTests, setLabTests] = useState(null)


    const handleSubmit = async (e) => {

    };

    const handleChange = (appointment, e) => {
        e.preventDefault();
        console.log(appointment);
    };

    useEffect(() => {
        getAllLabTests().then(response => {
            setLabTests(response.data);
        });
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
                                                        <span>{appointment.appointmentType} </span>
                                                    </Col>
                                                </Row>
                                            </Col>
                                            <Col md="4">
                                                <Row className="mb-3" controlId={`startTime-${index}`}>
                                                    <Col column sm="4">
                                                        <b>Start Time:</b>
                                                    </Col>
                                                    <Col sm="8">
                                                        <span>{appointment.startTime} </span>
                                                    </Col>
                                                </Row>
                                            </Col>
                                            <Col md="4">
                                                <Row className="mb-3" controlId={`fees-${index}`}>
                                                    <Col sm="4">
                                                        <b>Fees:</b>
                                                    </Col>
                                                    <Col sm="8">
                                                        <span>{appointment.fees} </span>
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
                                                        <span>{appointment.status} </ span>
                                                    </Col>
                                                </Row>
                                            </Col>
                                            <Col md="8">
                                                <Row className="mb-3" controlId={`staffNote-${index}`}>
                                                    <Col sm="4">
                                                        <b>Staff Notes:</b>
                                                    </Col>
                                                    <Col sm="8">
                                                        <span> {appointment.staffNote} </span>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                        <hr />
                                        <Row>
                                            {
                                                (appointment.status == "Completed" && appointment.diagnosis != null) ?
                                                    (
                                                        <p>completed</p>
                                                    ) :
                                                    (
                                                        <>
                                                            <h4>Add Diagnosis</h4>
                                                            <Form onSubmit={(appointment) => handleSubmit(appointment)}>
                                                                <Row className="mb-3">
                                                                    <Col md="12">
                                                                        <Form.Group>
                                                                            <Form.Label id="basic-addon1" className='label-css'><b>Diagnosis: </b></Form.Label>
                                                                            <FormControl
                                                                                as="textarea"
                                                                                placeholder="Diagnosis"
                                                                                aria-label="Diagnosis"
                                                                                id="diagnosis_info"
                                                                                autoComplete="off"
                                                                                value=""
                                                                                required
                                                                                disabled
                                                                                type="text"
                                                                            />
                                                                        </Form.Group>
                                                                    </Col>
                                                                </Row>
                                                                <Row>
                                                                    <Col md="12">
                                                                        <Form.Group>
                                                                            <Form.Label id="basic-addon1" className='label-css'><b>Medical Prescription:</b> </Form.Label>
                                                                            <FormControl
                                                                                as="textarea"
                                                                                placeholder="prescription"
                                                                                aria-label="prescription"
                                                                                id="prescription"
                                                                                autoComplete="off"
                                                                                value=""
                                                                                required
                                                                                disabled
                                                                                type="text"
                                                                            />
                                                                        </Form.Group>
                                                                    </Col>
                                                                </Row>
                                                                <Row>
                                                                    <Col md="12">
                                                                        <Form.Group>
                                                                            <Form.Label id="basic-addon1" className='label-css'><b>Suggest Lab tests:</b> </Form.Label>
                                                                            {(labTests == null || labTests.length == 0) ?
                                                                                (<h6>No available lab tests!</h6>) :
                                                                                labTests.map((labtest, index) => {
                                                                                    return (
                                                                                        <Form.Check
                                                                                            inline
                                                                                            label={labtest.labTestName + " ($" + labtest.labTestCost + ")"}
                                                                                            name="labtests"
                                                                                            type="checkbox"
                                                                                            id={`inline-${labtest.labTestName}-1`}
                                                                                        >
                                                                                        </Form.Check>)
                                                                                })
                                                                            }
                                                                        </Form.Group>
                                                                    </Col>
                                                                </Row>
                                                                <Row className="justify-content-md-center"> 
                                                                    <Col md="3">
                                                                        <Form.Group className="mb-3">
                                                                            <Button variant="primary" type="submit" className="submit-button" >
                                                                                Add Diagnosis
                                                                            </Button>
                                                                        </Form.Group>
                                                                    </Col>
                                                                    <Col md="3">
                                                                        <Form.Group className="mb-3">
                                                                            <Button variant="primary" type="submit" className="submit-button" >
                                                                                Complete Appointment
                                                                            </Button>
                                                                        </Form.Group>
                                                                    </Col>
                                                                </Row>
                                                            </Form>
                                                        </>

                                                    )
                                            }
                                        </Row>
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