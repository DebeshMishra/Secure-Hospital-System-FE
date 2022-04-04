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
  const [submit, setSubmit] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmit(!submit)
    Object.keys(labTestData).forEach(i => {
      labTestData[i] = labTestData[i].trim();
    })
    if(!Object.keys(labTestData).every((k) => (labTestData[k] != null && labTestData[k].trim().length > 0))){
      alert("please fill all the values");
    } else {
      createLabTest(labTestData).then((response) => {
        alert(response.data);
        props.onSubmitted(true);
        setSubmit(!submit);
      });
    }
  
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
          <Form.Label htmlFor="basic-url">TestName should be unique!</Form.Label>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">Lab Test Name*</InputGroup.Text>
              
              <FormControl
                placeholder="Lab Test Name"
                aria-label="Lab Test Name"
                id="labTestName"
                onChange={handleChange}
                required
                autoComplete="off"
                type="text"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">Description*</InputGroup.Text>
              <textarea
                rows = "5"
                cols = "39"
                placeholder="Description"
                aria-label="Description"
                id="labTestDescription"
                autoComplete="off"
                onChange={handleChange}
                type="text"
                required
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">Cost*</InputGroup.Text>
              <FormControl
                placeholder="Cost"
                aria-label="Cost"
                id="labTestCost"
                autoComplete="off"
                onChange={handleChange}
                type="number"
                required
              />
            </InputGroup>
            <Form.Group className="mb-3">
              <Button variant="primary" type="submit" disabled={(labTestData?.labTestCost == null || labTestData?.labTestDescription == null || labTestData?.labTestName == null) && !submit}>
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
