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
import { createLabTest } from "../../../services/LabTests.services";

function CreateLabTests(props) {
  const [labTestData, setLabTestData] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    createLabTest(labTestData).then((response) => {
      alert("Successfully created the Lab Test!");
      props.onSubmitted(true);
    });
  };

  const handleChange = (e) => {
    const newdata = { ...labTestData };
    newdata[e.target.id] = e.target.value;
    setLabTestData(newdata);
  };

  //   let navigate = useNavigate();
  //   const showForm = () => {
  //     navigate("/labTestReports");
  //   };

  return (
    <Container className="account">
      <Row className="justify-content-md-center account-header">
        <h2>Create New Lab Test</h2>
      </Row>
      <Row className="justify-content-md-center">
        <Col
          md="auto"
          style={{
            width: 1000,
          }}>
          <Form onSubmit={handleSubmit}>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">Lab Test Name</InputGroup.Text>
              <FormControl
                placeholder="Lab Test Name"
                aria-label="Lab Test Name"
                id="labTestName"
                onChange={handleChange}
                required
                type="text"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">Description</InputGroup.Text>
              <FormControl
                placeholder="Description"
                aria-label="Description"
                id="labTestDescription"
                onChange={handleChange}
                type="text"
                required
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">Cost</InputGroup.Text>
              <FormControl
                placeholder="Cost"
                aria-label="Cost"
                id="labTestCost"
                onChange={handleChange}
                type="text"
                required
              />
            </InputGroup>
            <Form.Group className="mb-3">
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default CreateLabTests;
