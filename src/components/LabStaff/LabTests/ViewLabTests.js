import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

import {
  Form,
  Row,
  Container,
  Col,
  InputGroup,
  FormControl,
  Button,
  Table,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import { Navigate } from "react-router";
import React, { useEffect, useState } from "react";
import { getAllLabTests } from "../../../services/LabTests.services";
import "../styles.css";
import CreateLabTests from "./CreateLabTests";

function ViewLabTests() {
  const [labTests, setLabTests] = useState([]);
  // cosnt [isCoverageAdded, setIsCoverageAdded] = userState(false);

  const [cookies, setCookie, removeCookie] = useCookies([
    "JWTToken",
    "emailId",
  ]);
  const userInfo = useSelector((state) => state.user);

  // needs API integration
  useEffect(() => {
    getAllLabTests().then((response) => {
      setLabTests(response.data);
    });
  }, []);

  const triggerBECall = (e) => {
    if (e) {
      getAllLabTests().then((response) => {
        setLabTests(response.data);
      });
    }
  };

  return (
    <div className="labTestParent">
      <Row className="justify-content-md-center header">
        <Col md="8">
          <h3>Lab Tests</h3>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Sno</th>
                <th>Lab Test Name</th>
                <th>Description</th>
                <th>Fee</th>
              </tr>
            </thead>
            <tbody>
              {labTests.map((labTests, index) => {
                return (
                  <tr key={index}>
                    <td key={1}>{index + 1}</td>
                    <td key={2}>{labTests.labTestName}</td>
                    <td key={3}> {labTests.labTestDescription}</td>
                    <td key={4}> {labTests.labTestCost}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Col>
        <Col md="4" className="border-c">
          <CreateLabTests onSubmitted={triggerBECall} />
        </Col>
      </Row>
    </div>
  );
}

export default ViewLabTests;
