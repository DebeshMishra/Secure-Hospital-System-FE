import React, { useState } from "react";
import { useForm } from "react-hook-form";
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

function EditAccount() {
  const [data, setData] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // TODO API signUp Data to backend.
    alert(data);
    console.log(data);
  };

  const handleChange = (e) => {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
  };

  let navigate = useNavigate();
  const showForm = () => {
    navigate("/account");
  };

  return (
    <Container className="account">
      <Row className="justify-content-md-center account-header">
        <h2>Edit Account</h2>
      </Row>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <Form onSubmit={handleSubmit}>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">First Name</InputGroup.Text>
              <FormControl
                placeholder="First Name"
                aria-label="First Name"
                id="firstName"
                value={data.firstName}
                onChange={handleChange}
                type="text"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">Last Name</InputGroup.Text>
              <FormControl
                placeholder="Last Name"
                aria-label="Last Name"
                id="lastName"
                value={data.lastName}
                onChange={handleChange}
                type="text"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">Email</InputGroup.Text>
              <FormControl
                placeholder="Email Address"
                aria-label="Email Address"
                id="email"
                value={data.email}
                onChange={handleChange}
                type="email"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">Phone</InputGroup.Text>
              <FormControl
                placeholder="Phone"
                aria-label="Phone"
                id="phone"
                value={data.phone}
                onChange={handleChange}
                type="number"
              />
            </InputGroup>
            <Form.Group className="mb-3">
              <Button variant="primary">Submit</Button>
              <Button
                type="button"
                className="cancel-button"
                onClick={showForm}>
                Cancel
              </Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default EditAccount;
