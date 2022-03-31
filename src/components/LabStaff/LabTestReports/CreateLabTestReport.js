import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Form,
  Row,
  Container,
  Col,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";
import { useSelector } from "react-redux";
import { useEffect } from "react";

import "../styles.css";
import {
  getUserByEmailId,
  updateUserByEmailId,
} from "../../../services/authentication.service";

function CreateLabTestReport(props) {
  const [data, setData] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
  };

  let navigate = useNavigate();
  const showForm = () => {
    navigate("/labTestReports");
  };

  return (
    <Container className="account">
      <Row className="justify-content-md-center account-header">
        <h2>CreateLabTestReport</h2>
      </Row>
      <Row className="justify-content-md-center">
        <Col
          md="auto"
          style={{
            width: 1000,
          }}>
          <Form onSubmit={handleSubmit}>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">First Name</InputGroup.Text>
              <FormControl
                placeholder="First Name"
                aria-label="First Name"
                id="firstName"
                onChange={handleChange}
                required
                type="text"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">Last Name</InputGroup.Text>
              <FormControl
                placeholder="Last Name"
                aria-label="Last Name"
                id="lastName"
                onChange={handleChange}
                type="text"
                required
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">Fee</InputGroup.Text>
              <FormControl
                placeholder="Fee"
                aria-label="Fee"
                id="lab_Test_Fee"
                onChange={handleChange}
                type="text"
                required
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">Status</InputGroup.Text>
              <FormControl
                placeholder="Status"
                aria-label="Status"
                id="lab_Result_Status"
                onChange={handleChange}
                type="text"
                required
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">Details</InputGroup.Text>
              <textarea
                rows = "10"
                class="form-control"
                placeholder="Details"
                aria-label="Details"
                id="details"
                onChange={handleChange}
                type="text"
                required
              />
            </InputGroup>
            <Form.Group className="mb-3">
              <Button variant="primary" type="submit">
                Submit
              </Button>
              <Button
                type="Button"
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

export default CreateLabTestReport;
