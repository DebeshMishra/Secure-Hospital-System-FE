
import AccordionBody from "react-bootstrap/esm/AccordionBody";
import { Accordion, Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import '../Diagnosis/Diagnosis.css';
import { Form, Button, InputGroup, FormControl, Row, Col } from "react-bootstrap";

function Diagnosis() {
    const userInfo = useSelector((state) => state.user);


    return (
        <Container>
            <div className="header-diagnosis">
                <h3>{userInfo.userData.firstName} Diagnosis Information</h3>
                <p>Diagnosis are generated per appointment.</p>
            </div>
            <Form>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Appointment_Id</Accordion.Header>
                        <Accordion.Body>
                            <div>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                                    <Form.Label column sm="2">
                                        Email
                                    </Form.Label>
                                    <Col sm="10">
                                        <Form.Control plaintext readOnly defaultValue="email@example.com" />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                                    <Form.Label column sm="2">
                                        Email
                                    </Form.Label>
                                    <Col sm="10">
                                        <Form.Control plaintext readOnly defaultValue="email@example.com" />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                                    <Form.Label column sm="2">
                                        Email
                                    </Form.Label>
                                    <Col sm="10">
                                        <Form.Control plaintext readOnly defaultValue="email@example.com" />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                                    <Form.Label column sm="2">
                                        Email
                                    </Form.Label>
                                    <Col sm="10">
                                        <Form.Control plaintext readOnly defaultValue="email@example.com" />
                                    </Col>
                                </Form.Group>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Appointment_Id</Accordion.Header>
                        <Accordion.Body>
                            <div>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                                    <Form.Label column sm="2">
                                        Email
                                    </Form.Label>
                                    <Col sm="10">
                                        <Form.Control plaintext readOnly defaultValue="email@example.com" />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                                    <Form.Label column sm="2">
                                        Email
                                    </Form.Label>
                                    <Col sm="10">
                                        <Form.Control plaintext readOnly defaultValue="email@example.com" />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                                    <Form.Label column sm="2">
                                        Email
                                    </Form.Label>
                                    <Col sm="10">
                                        <Form.Control plaintext readOnly defaultValue="email@example.com" />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                                    <Form.Label column sm="2">
                                        Email
                                    </Form.Label>
                                    <Col sm="10">
                                        <Form.Control plaintext readOnly defaultValue="email@example.com" />
                                    </Col>
                                </Form.Group>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Form>

        </Container>
    )
}

export default Diagnosis;