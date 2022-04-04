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
import { updateLabReportByPatientId } from "../../../services/LabReports.services";

function UpdateLabTestReport(props) {
  const [data, setData] = useState({});
  const userInfo = useSelector((state) => state.user);
  const [submit, setSubmit] = useState(false);

  const { state } = useLocation();
  const { report } = state;

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
  };

  let navigate = useNavigate();

  useEffect(() => {
    const newData = {...report}
    newData['labStaffId'] = userInfo.userData.user.id;
    newData['labStaffName'] = userInfo.userData.user.firstName + " " + userInfo.userData.user.lastName;
    setData(newData);
  }, []);

  const updateReport = (e) => {
    setSubmit(!submit);
    updateLabReportByPatientId(data).then(res => {
      alert(res);
      setSubmit(!submit);
      navigate("/labTestReports")
    })
  }

  const cancel = (e) => {
    navigate("/labTestReports");
  }

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
                autoComplete="off"
                disabled
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
                autoComplete="off"
                disabled
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
                disabled
                value={data.labStaffName || ""}
                onChange={handleChange}
                autoComplete="off"
                type="text"
                required
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">Lab Test Id</InputGroup.Text>
              <FormControl
                placeholder="Lab Test"
                aria-label="Lab Test"
                id="labTestId"
                disabled
                autoComplete="off"
                value={data.labTestId}
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
                id="labTestName"
                autoComplete="off"
                disabled
                value={data.labTestName || ""}
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
                autoComplete="off"
                disabled
                value={data.labResultStatus}
                onChange={handleChange}
                type="text"
                required
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">
                Lab Staff Note
              </InputGroup.Text>
              <textarea
                rows="5"
                className="form-control"
                placeholder="Lab Staff Note"
                aria-label="Lab Staff Notes"
                id="labStaffNotes"
                autoComplete="off"
                value={data.labStaffNotes || ""}
                onChange={handleChange}
                type="text"
                required
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">Result</InputGroup.Text>
              <textarea
                rows="5"
                className="form-control"
                placeholder="Result"
                aria-label="Result"
                id="result"
                autoComplete="off"
                value={data.result || ""}
                onChange={handleChange}
                type="text"
                required
              />
            </InputGroup>
            <Form.Group className="mb-3">
              <Button variant="primary" disabled={!submit && (data.result == null || data.result.length == 0 || data.labStaffNotes == null || data.labStaffNotes.length == 0)} type="submit" onClick={updateReport}>
                Submit
              </Button>
              <Button
                type="Button"
                className="cancel-button"
                onClick={cancel}>
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
