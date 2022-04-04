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
import validator from 'validator'

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
  const [errorMessage, setErrorMessage] = useState('')
  const [submit, setSubmit] = useState(true);
  let navigate = useNavigate();


  //password validator
  const validate = (value) => {

    if (validator.isStrongPassword(value, {
      minLength: 8, minLowercase: 1,
      minUppercase: 1, minNumbers: 1, minSymbols: 1
    })) {
      setErrorMessage('Strong is Password')
    } else {
      setErrorMessage('Password is Not Strong ')
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    registrationdata.roles = [registrationdata.role];
    setSubmit(!submit);
    registerUser(registrationdata).then(
      (response) => {
        setSubmit(!submit);
        console.log(response);
        alert(
          response.data
        );
        navigate("/login");
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
    if (e.target.id == "password") {
      validate(e.target.value);
    }
  };

  const isValid = () => {
    Object.keys(registrationdata).forEach(key => {
      if (key == "password") {
        if (validator.isStrongPassword(registrationdata[key], {
          minLength: 8, minLowercase: 1,
          minUppercase: 1, minNumbers: 1, minSymbols: 1
        })) {

        } else {
          console.log(false);
          return false;
        }
      } else {
        if (registrationdata[key] == null || registrationdata[key].trim().length == 0) {
          console.log(false);
          return false;
        }
      }

    });
    console.log(true);
    return true;
  }

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
                autoComplete="off"
                value={registrationdata.firstName}
                onChange={handleChange}
                required={true}
                minLength={2}
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
                autoComplete="off"
                minLength={2}
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
                autoComplete="off"
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
                max={new Date().toISOString().split("T")[0]}
                min="1950-01-02"
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
                minLength={8}
                maxLength={15}
                autoComplete="off"
                required={true}
                value={registrationdata.password}
                onChange={handleChange}
                type="password"
              />

            </InputGroup>
            <div>
              <p style={{ color: 'blue' }}> Min Length: 8, Max Length: 15, Min Lowercase: 1, Min Uppercase: 1, Min Numbers: 1, Min Symbols: 1</p>
              <span style={{
                fontWeight: 'bold',
                color: 'red',
              }}>{errorMessage}</span>
            </div>

          </Col>
        </Row>
        <Row className="justify-content-md-center mb-3">
          <Col md="6">
            <InputGroup>
              <InputGroup.Text id="basic-addon1">Phone Number (Enter +1 at the start)</InputGroup.Text>
              <FormControl
                placeholder="Phone Number"
                aria-label="Phone Number"
                id="phoneNumber"
                autoComplete="off"
                minLength={12}
                maxLength={12}
                required
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
                  required
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
              <Button variant="primary" disabled={!validator.isStrongPassword(registrationdata["password"] || "", {
          minLength: 8, minLowercase: 1,
          minUppercase: 1, minNumbers: 1, minSymbols: 1
        }) || !submit} type="submit" className="submit-button">
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
