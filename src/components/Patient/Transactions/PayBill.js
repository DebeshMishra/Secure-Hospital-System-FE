import React from "react";
import { useState, useEffect } from "react";
import {
  Form,
  Row,
  Container,
  Col,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";

const PayBill = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getTabledata();
  }, []);

  const getTabledata = () => {};

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <Container className="login">
      <div className="container mt-5">
        <table className="table table-dark table-striped">
          <thead>
            <tr>
              <th>Lab Test</th>
              <th>Status</th>
              <th>Result</th>
              <th>Cost</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>A</td>
              <td>B</td>
              <td>C</td>
              <td>D</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Form onSubmit={handleSubmit}>
        <Row className="justify-content-md-center mb-3">
          <Col md="4">
            <InputGroup>
              <InputGroup.Text id="basic-addon1">Patient Name</InputGroup.Text>
              <FormControl
                placeholder="Patient Name"
                aria-label="Patient Name"
                id="patient"
                value={data.patient}
                type="text"
                disabled={true}
              />
            </InputGroup>
          </Col>
        </Row>
        <Row className="justify-content-md-center mb-3">
          <Col md="4">
            <InputGroup>
              <InputGroup.Text id="basic-addon1">Doctor Name</InputGroup.Text>
              <FormControl
                placeholder="Doctor Name"
                aria-label="Doctor Name"
                id="doctor"
                value={data.doctor}
                disabled={true}
                type="text"
                required={true}
              />
            </InputGroup>
          </Col>
        </Row>
        <Row className="justify-content-md-center mb-3">
          <Col md="4">
            <InputGroup>
              <InputGroup.Text id="basic-addon1">
                Appointment Number
              </InputGroup.Text>
              <FormControl
                placeholder="Appointment Number"
                aria-label="Appointment Number"
                id="appointment"
                required={true}
                value={data.appointment}
                disabled={true}
                type="text"
              />
            </InputGroup>
          </Col>
        </Row>
        <Row className="justify-content-md-center mb-3">
          <Col md="4">
            <InputGroup>
              <InputGroup.Text id="basic-addon1">Total Cost</InputGroup.Text>
              <FormControl
                placeholder="Total Cost"
                aria-label="Total Cost"
                id="cost"
                required={true}
                value={data.cost}
                disabled={true}
                type="text"
              />
            </InputGroup>
          </Col>
        </Row>
        <Row className="justify-content-md-center mb-3">
          <Col md="4">
            <Form.Group>
              <Button variant="primary" type="submit" className="submit-button">
                Pay Bill
              </Button>
            </Form.Group>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};
export default PayBill;
