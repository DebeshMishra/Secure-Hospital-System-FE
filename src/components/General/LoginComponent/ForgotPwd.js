import React, { useEffect, useState } from "react";
import "./Login.css";
import { loginAPI } from "../../../services/authentication.service";
import {
  setUserData,
  removeUserData,
  setAllData,
  setUserToken,
  checkCookiesForToken,
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
} from "react-bootstrap";
import { requestOTP, confirmOTP } from "../../../services/ForgotPwd.service";

const ForgotPwd = (props) => {
  const [data, setData] = useState({
    email: "",
    password: "",
    otp: "",
    password1: "",
  });
  const [cookies, setCookie, removeCookie] = useCookies([
    "JWTToken",
    "emailId",
  ]);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('')
  const [submit, setSubmit] = useState(false);

  const [toggleOTPSection, setToggleOTP] = useState(false);
  const [otpCompare, setOtpCompare] = useState(true);

  const validate = (value) => {

    if (validator.isStrongPassword(value, {
      minLength: 8, minLowercase: 1,
      minUppercase: 1, minNumbers: 1, minSymbols: 1
    })) {
      setErrorMessage('Strong Password')
    } else {
      setErrorMessage('Password is Not Strong!')
    }
  }

  // on click of submit button, store in cookie - email and token
  const handleOTP = async (e) => {
    e.preventDefault();
    setToggleOTP(!toggleOTPSection);
    
    if(data.email.trim().length == 0){
      alert("Please fill the data!");
      return;
    }
    setSubmit(true);
    requestOTP({"email": data.email}).then(resp => {
      setSubmit(false);
      alert("Email sent!");
    }).catch( error => {
      setSubmit(false);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(data.email.trim().length == 0 || data.otp.trim().length == 0 ){
        alert("Data is not correct, please check!")
        return;
    }else{
      if(data.password.trim().length != data.password1.trim().length){
        alert("passwords are not same");
        return;
      }
    }
    setSubmit(true);
    confirmOTP(data).then((response) => {
      setSubmit(false);
      if(response != undefined){
        alert(response.data)
        navigate("/login");
      }
    }).catch( error => {
      setSubmit(false);
    });;
  };

  // when chrome refresh happens
  useEffect(() => {
    // if (cookies.JWTToken != null) {
    //     navigate('/dashboard')
    // }
  }, []);

  const handleChange = (e) => {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    if (e.target.id == "password") {
      validate(e.target.value);
    }
  };

  return (
    <Container className="login">
      <Row className="justify-content-md-center login-header">
        <h2>Forgot Password?</h2>
      </Row>
      {!toggleOTPSection && (
        <Form onSubmit={handleOTP}>
          <Row className="justify-content-md-center mb-3">
            <Col md="4">
              <InputGroup>
                <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                <FormControl
                  placeholder="Email address"
                  aria-label="Email address"
                  id="email"
                  value={data.email}
                  onChange={handleChange}
                  type="email"
                  required={true}
                />
                <InputGroup.Text id="basic-addon2">
                  @example.com
                </InputGroup.Text>
              </InputGroup>
            </Col>
          </Row>
          <Row className="justify-content-md-center mb-3">
            <Col md="4">
              <Form.Group>
                <Button 
                disabled = {submit}
                  variant="primary"
                  type="submit"
                  className="submit-button">
                  Send OTP
                </Button>
              </Form.Group>
            </Col>
          </Row>
        </Form>
      )}
      {toggleOTPSection && (
        <Form onSubmit={handleSubmit}>
          <Row className="justify-content-md-center mb-3">
            <Col md="4">
              <InputGroup>
                <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                <FormControl
                  placeholder="Email address"
                  aria-label="Email address"
                  id="email"
                  value={data.email}
                  type="email"
                  disabled={true}
                />
                <InputGroup.Text id="basic-addon2">
                  @example.com
                </InputGroup.Text>
              </InputGroup>
            </Col>
          </Row>
          <Row className="justify-content-md-center mb-3">
            <Col md="4">
              <InputGroup>
                <InputGroup.Text id="basic-addon1">OTP</InputGroup.Text>
                <FormControl
                  placeholder="OTP"
                  aria-label="OTP"
                  id="otp"
                  value={data.otp}
                  onChange={handleChange}
                  type="text"
                  minLength={6}
                  maxLength={6}
                  required={true}
                />
              </InputGroup>
            </Col>
          </Row>
          <Row className="justify-content-md-center mb-3">
            <Col md="4">
              <InputGroup>
                <InputGroup.Text id="basic-addon1">Password</InputGroup.Text>
                <FormControl
                  placeholder="Password"
                  aria-label="Password"
                  id="password"
                  required={true}
                  value={data.password}
                  onChange={handleChange}
                  type="password"
                />
              </InputGroup>
            </Col>
          </Row>
          <Row className="justify-content-md-center mb-3">
            <Col md="4">
              <InputGroup>
                <InputGroup.Text id="basic-addon1">
                  Re-Enter Password
                </InputGroup.Text>
                <FormControl
                  placeholder="Password"
                  aria-label="Password"
                  id="password1"
                  required={true}
                  value={data.password1}
                  onChange={handleChange}
                  type="password"
                />
              </InputGroup>
            </Col>
          </Row>
          <div>
              <p style={{ color: 'blue' }}> Min Length: 8, Max Length: 15, Min Lowercase: 1, Min Uppercase: 1, Min Numbers: 1, Min Symbols: 1</p>
              <span style={{
                fontWeight: 'bold',
                color: 'red',
              }}>{errorMessage}</span>
            </div>
          <Row className="justify-content-md-center mb-3">
            <Col md="4">
              <Form.Group>
                <Button
                disabled = {submit}
                  variant="primary"
                  type="submit"
                  className="submit-button">
                  Submit
                </Button>
              </Form.Group>
            </Col>
          </Row>
        </Form>
      )}
    </Container>
  );
};
export default ForgotPwd;
