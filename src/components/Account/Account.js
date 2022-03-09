import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Form,
  Row,
  Container,
  Col,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";

import "./styles.css";

function Account() {
  let navigate = useNavigate();
  const showForm = () => {
    navigate("/editAccount");
  };

  const [data, setData] = useState([]);

  return (
    <Container className="account">
      <Row className="justify-content-md-center account-header">
        <h2>Account Details</h2>
      </Row>
      <Form>
        <Row className="justify-content-md-center mb-3">
          <Col md="4">

            <InputGroup>
              <InputGroup.Text id="basic-addon1">First Name</InputGroup.Text>
              <FormControl
                readOnly
                placeholder="First Name"
                aria-label="First Name"
                id="firstName"
                value={data.firstName}
                type="text"
              />
            </InputGroup>
          </Col>
        </Row>
        <Row className="justify-content-md-center mb-3">
          <Col md="4">
            <InputGroup>
              <InputGroup.Text id="basic-addon1">Last Name</InputGroup.Text>
              <FormControl
                readOnly
                placeholder="Last Name"
                aria-label="Last Name"
                id="lastName"
                value={data.LastName}
                type="text"
              />
            </InputGroup>
          </Col>
        </Row>
        <Row className="justify-content-md-center mb-3">
          <Col md="4">
            <InputGroup >
              <InputGroup.Text id="basic-addon1">Email</InputGroup.Text>
              <FormControl
                readOnly
                placeholder="Email address"
                aria-label="Email"
                id="email"
                value={data.email}
                type="email"
              />
            </InputGroup>
          </Col>
        </Row>
        <Row className="justify-content-md-center mb-3">
          <Col md="4">
            <InputGroup>
              <InputGroup.Text id="basic-addon1">Phone</InputGroup.Text>
              <FormControl
                readOnly
                placeholder="Phone"
                aria-label="Phone"
                id="phone"
                value={data.phone}
                type="number"
              />
            </InputGroup>
          </Col>
        </Row>
        <Row className="justify-content-md-center mb-3">
          <Col md="4">
            <Form.Group>
              <Button className="EditButton" variant="primary" onClick={showForm}>
                Edit
              </Button>
            </Form.Group>

          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default Account;
