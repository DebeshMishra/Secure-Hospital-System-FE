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

function UpdateLabTestReport(props) {
  const [data, setData] = useState({});

  const { state } = useLocation();
  console.log(state);

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

  useEffect(() => {
    //console.log(state)
    setData({
      firstName: state.firstName,
      lastName: state.lastName,
      lab_Test_Fee: state.lab_Test_Fee,
      lab_Result_Status: state.lab_Result_Status,
      details: state.details,
    });
  }, []);

  return (
    <Container className="account">
      <Row className="justify-content-md-center account-header">
        <h2>Edit Lab Test Report</h2>
      </Row>
      <Row className="justify-content-md-center">
        <Col
          md="auto"
          style={{
            width: 1000,
          }}>
          <Form onSubmit={handleSubmit}>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">Patient Name</InputGroup.Text>
              <FormControl
                placeholder="Patient Name"
                aria-label="Patient Name"
                id="patientName"
                value={data.patientName}
                onChange={handleChange}
                required
                type="text"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">Doctor Name</InputGroup.Text>
              <FormControl
                placeholder="Doctor Name"
                aria-label="Doctor Name"
                id="doctorName"
                value={data.doctorName}
                onChange={handleChange}
                type="text"
                required
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">
                Lab Staff Name
              </InputGroup.Text>
              <FormControl
                placeholder="Lab Staff Name"
                aria-label="Lab Staff Name"
                id="labStaffName"
                value={data.labStaffName}
                onChange={handleChange}
                type="text"
                required
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">Lab Test</InputGroup.Text>
              <FormControl
                placeholder="Lab Test"
                aria-label="Lab Test"
                id="labTestId"
                value={data.labTestId}
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
                id="labResultStatus"
                value={data.labResultStatus}
                onChange={handleChange}
                type="text"
                required
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">
                Lab Staff Notes
              </InputGroup.Text>
              <textarea
                rows="10"
                class="form-control"
                placeholder="Lab Staff Notes"
                aria-label="Lab Staff Notes"
                id="labStaffNotes"
                value={data.labStaffNotes}
                onChange={handleChange}
                type="text"
                required
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">Result</InputGroup.Text>
              <FormControl
                placeholder="Result"
                aria-label="Result"
                id="result"
                value={data.result}
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

export default UpdateLabTestReport;
