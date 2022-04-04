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
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

import {
  Form,
  Row,
  Container,
  Col,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";

const Login = (props) => {
  const [data, setData] = useState({ email: "", password: "" });
  const [cookies, setCookie, removeCookie] = useCookies([
    "JWTToken",
    "emailId",
  ]);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  // on click of submit button, store in cookie - email and token
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(removeUserData());
    loginAPI(data).then((response) => {
      dispatch(
        setAllData({
          jwtToken: response.data.token,
          userData: { email: data.email, user: {} },
        })
      );
      navigate("/dashboard");
    });
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
  };

  return (
    <Container className="login">
      <Row className="justify-content-md-center login-header">
        <h2>Login</h2>
      </Row>
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
                onChange={handleChange}
                type="email"
              />
              <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
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
                value={data.password}
                onChange={handleChange}
                type="password"
              />
            </InputGroup>
          </Col>
        </Row>
        <Row className="justify-content-md-center mb-3">
          <Col md="4" className="floatLeft">
            <Link to="/forgotPwd">Forgot Password?</Link>
          </Col>
        </Row>
        <Row className="justify-content-md-center mb-3">
          <Col md="4">
            <Form.Group>
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
export default Login;
