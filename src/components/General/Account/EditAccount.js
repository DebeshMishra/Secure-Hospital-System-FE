import React, { useState } from "react";
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
import { useEffect } from "react";

import "./styles.css";
import { getUserByEmailId, updateUserByEmailId } from "../../../services/authentication.service";

function EditAccount() {
  const [data, setData] = useState([]);
  const [cookies, setCookie, removeCookie] = useCookies(['JWTToken', 'emailId']);
  const userInfo = useSelector((state) => state.user);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // TODO API signUp Data to backend.
    updateUserByEmailId(data).then(response => {
      alert(response.data);
      navigate("/profile");
    }, error => {
      alert("Not Saved!");
    });
  };

  const handleChange = (e) => {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
  };

  let navigate = useNavigate();
  const showForm = () => {
    navigate("/profile");
  };


  useEffect(() => {
    if ((userInfo.isLoggedIn || cookies.JWTToken != undefined)) {
      if (cookies.emailId) {
        getUserByEmailId(cookies.emailId).then(response => {
          setData({
            firstName: response.firstName,
            lastName: response.lastName,
            phone: response.phone,
            email: response.email
          })
        })
      }
      else if (userInfo.userData.email) {
        getUserByEmailId(userInfo.userData.email).then(response => {
          setData({
            firstName: response.firstName,
            lastName: response.lastName,
            phone: response.phone,
            email: response.email
          })
        })
      }

    }
  }, []);

  return (
    <Container className="account">
      <Row className="justify-content-md-center account-header">
        <h2>Edit Account</h2>
      </Row>
      <Row className="justify-content-md-center">
        <Col md="auto">
        <Form onSubmit={handleSubmit}>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">First Name</InputGroup.Text>
              <FormControl
                placeholder="First Name"
                aria-label="First Name"
                id="firstName"
                value={data.firstName}
                onChange={handleChange}
                required
                type="text"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">Last Name</InputGroup.Text>
              <FormControl
                placeholder="Last Name"
                aria-label="Last Name"
                id="lastName"
                value={data.lastName}
                onChange={handleChange}
                type="text"
                required
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">Email</InputGroup.Text>
              <FormControl
                placeholder="Email Address"
                aria-label="Email Address"
                id="email"
                value={data.email}
                onChange={handleChange}
                type="email"
                required
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">Phone</InputGroup.Text>
              <FormControl
                placeholder="Phone"
                aria-label="Phone"
                id="phone"
                value={data.phone}
                onChange={handleChange}
                type="text"
                required
              />
            </InputGroup>
            <Form.Group className="mb-3">
              <Button variant="primary"
              type="submit"
              >Submit</Button>
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

export default EditAccount;
