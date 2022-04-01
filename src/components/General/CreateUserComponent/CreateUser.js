import "./CreateUser.css";
import React, { useEffect, useState } from "react";
import {
  loginAPI,
  registerUser,
} from "../../../services/authentication.service";
import {
  setUserData,
  removeUserData,
  setUserToken,
} from "../../../features/user";
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
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import { Navigate } from "react-router";

const CreateUser = (props) => {
  const [registrationdata, setRegistrationData] = useState({ role: "PATIENT" });
  const [cookies, setCookie, removeCookie] = useCookies([
    "JWTToken",
    "emailId",
  ]);
  const userInfo = useSelector((state) => state.user);

  const handleSubmit = async (e) => {
    e.preventDefault();
    registrationdata.roles = [registrationdata.role];
    registerUser(registrationdata).then(
      (response) => {
        console.log(response);
        if (response.status == 200) {
          alert(
            "Successfully registered!!! please view your email to confirm your account."
          );
          Navigate("/login");
        }
      },
      (error) => {
        alert("Error occurred!!! Please try again.");
        console.log(error);
      }
    );
  };

  const handleChange = (e) => {
    const newdata = { ...registrationdata };
    newdata[e.target.id] = e.target.value;
    setRegistrationData(newdata);
  };

  return (
    <Container className="login">
      <Row className="justify-content-md-center login-header">
        <h2>Register</h2>
      </Row>
      <Form onSubmit={handleSubmit}>
        <Row className="justify-content-md-center mb-3">
          <Col md="6">
            <InputGroup>
              <InputGroup.Text id="basic-addon1">First Name</InputGroup.Text>
              <FormControl
                placeholder="First Name"
                aria-label="First Name"
                id="firstName"
                value={registrationdata.firstName}
                onChange={handleChange}
                required={true}
                type="text"
              />
            </InputGroup>
          </Col>
        </Row>
        <Row className="justify-content-md-center mb-3">
          <Col md="6">
            <InputGroup>
              <InputGroup.Text id="basic-addon1">Last Name</InputGroup.Text>
              <FormControl
                placeholder="Last Name"
                aria-label="Last Name"
                id="lastName"
                value={registrationdata.lastName}
                onChange={handleChange}
                required={true}
                type="text"
              />
            </InputGroup>
          </Col>
        </Row>
        <Row className="justify-content-md-center mb-3">
          <Col md="6">
            <InputGroup>
              <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
              <FormControl
                placeholder="Email address"
                aria-label="Email address"
                id="email"
                value={registrationdata.email}
                required={true}
                onChange={handleChange}
                type="email"
              />
              <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
            </InputGroup>
          </Col>
        </Row>
        <Row className="justify-content-md-center mb-3">
          <Col md="6">
            <InputGroup>
              <InputGroup.Text id="basic-addon1">Date of Birth</InputGroup.Text>
              <FormControl
                placeholder="Date of Birth"
                aria-label="Date of Birth"
                id="date"
                autoComplete="off"
                value={registrationdata.dob}
                onChange={handleChange}
                required={true}
                type="date"
              />
            </InputGroup>
          </Col>
        </Row>
        <Row className="justify-content-md-center mb-3">
          <Col md="6">
            <InputGroup>
              <InputGroup.Text id="basic-addon1">Password</InputGroup.Text>
              <FormControl
                placeholder="Password"
                aria-label="Password"
                id="password"
                required={true}
                value={registrationdata.password}
                onChange={handleChange}
                type="password"
              />
            </InputGroup>
          </Col>
        </Row>
        <Row className="justify-content-md-center mb-3">
          <Col md="6">
            <InputGroup>
              <InputGroup.Text id="basic-addon1">Phone Number</InputGroup.Text>
              <FormControl
                placeholder="Phone Number"
                aria-label="Phone Number"
                id="phoneNumber"
                value={registrationdata.phoneNumber}
                onChange={handleChange}
                type="text"
              />
            </InputGroup>
          </Col>
        </Row>
        {userInfo.isLoggedIn &&
          userInfo.userData.user.roles[0].role == "ADMIN" && (
            <Row className="justify-content-md-center mb-3">
              <Col md="6">
                <Form.Select
                  aria-label="Default select example"
                  value={registrationdata.role}
                  id="role"
                  onChange={handleChange}>
                  <option>Select Roles</option>
                  <option value="PATIENT">Patient</option>
                  <option value="ADMIN">Admin</option>
                  <option value="HOSPITAL_STAFF">Hospital Staff</option>
                  <option value="LAB_STAFF">Lab Staff</option>
                  <option value="INSURANCE_STAFF">Insurance Staff</option>
                  <option value="DOCTOR">Doctor</option>
                </Form.Select>
              </Col>
            </Row>
          )}

        <Row className="justify-content-md-center mb-3">
          <Col md="6">
            <Form.Group className="mb-3">
              <Button variant="primary" type="submit" className="submit-button">
                Submit
              </Button>
            </Form.Group>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};
export default CreateUser;
