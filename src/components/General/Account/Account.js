import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Form,
  Row,
  Container,
  Col,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";
import { useCookies } from 'react-cookie';
import { useSelector } from "react-redux";

import "./styles.css";
import { getUserByEmailId } from "../../../services/authentication.service";

function Account() {
  let navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(['JWTToken', 'emailId']);
  const userInfo = useSelector((state) => state.user);

  const showForm = () => {
    navigate("/editAccount");
  };

  useEffect(() => {
    if ((userInfo.isLoggedIn || cookies.JWTToken != undefined)) {
      if (cookies.emailId) {
        getUserByEmailId(cookies.emailId).then(response => {
          setData({
            firstName: response.firstName,
            lastName: response.lastName,
            phone: response.phone,
            email: response.email,
            role: response.roles[0].role
          })
        })
      }
      else if (userInfo.userData.email) {
        getUserByEmailId(userInfo.userData.email).then(response => {
          setData({
            firstName: response.firstName,
            lastName: response.lastName,
            phone: response.phone,
            email: response.email,
            role: response.roles[0].role
          })
        })
      }

    }
  }, []);

  const [data, setData] = useState([]);

  return (
    <Container className="account">
      <Row className="justify-content-md-center account-header">
        <h2>Account Details</h2>
      </Row>
      <Form>
        <Row className="justify-content-md-center mb-3">
          <Col md="4">

            <InputGroup>
              <InputGroup.Text id="basic-addon1">First Name</InputGroup.Text>
              <FormControl
                readOnly
                placeholder="First Name"
                aria-label="First Name"
                id="firstName"
                value={data.firstName}
                type="text"
              />
            </InputGroup>
          </Col>
        </Row>
        <Row className="justify-content-md-center mb-3">
          <Col md="4">
            <InputGroup>
              <InputGroup.Text id="basic-addon1">Last Name</InputGroup.Text>
              <FormControl
                readOnly
                placeholder="Last Name"
                aria-label="Last Name"
                id="lastName"
                value={data.lastName}
                type="text"
              />
            </InputGroup>
          </Col>
        </Row>
        <Row className="justify-content-md-center mb-3">
          <Col md="4">
            <InputGroup>
              <InputGroup.Text id="basic-addon1">Role</InputGroup.Text>
              <FormControl
                readOnly
                placeholder="Last Name"
                aria-label="Last Name"
                id="lastName"
                disabled
                value={data.role}
                type="text"
              />
            </InputGroup>
          </Col>
        </Row>
        <Row className="justify-content-md-center mb-3">
          <Col md="4">
            <InputGroup >
              <InputGroup.Text id="basic-addon1">Email</InputGroup.Text>
              <FormControl
                readOnly
                placeholder="Email address"
                aria-label="Email"
                id="email"
                value={data.email}
                type="email"
              />
            </InputGroup>
          </Col>
        </Row>
        <Row className="justify-content-md-center mb-3">
          <Col md="4">
            <InputGroup>
              <InputGroup.Text id="basic-addon1">Phone</InputGroup.Text>
              <FormControl
                readOnly
                placeholder="Phone"
                aria-label="Phone"
                id="phone"
                value={data.phone}
                type="number"
              />
            </InputGroup>
          </Col>
        </Row>
        <Row className="justify-content-md-center mb-3">
          <Col md="4">
            <Form.Group>
              <Button className="EditButton" variant="primary" onClick={showForm}>
                Edit
              </Button>
            </Form.Group>

          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default Account;
