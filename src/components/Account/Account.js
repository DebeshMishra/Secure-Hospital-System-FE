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
      <Row className="justify-content-md-center">
        <Col md="auto">
          <Form>
            <InputGroup className="mb-3">
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
            <InputGroup className="mb-3">
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
            <InputGroup className="mb-3">
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
            <InputGroup className="mb-3">
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
            <Form.Group className="mb-3">
              <Button variant="primary" onClick={showForm}>
                Edit
              </Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Account;
