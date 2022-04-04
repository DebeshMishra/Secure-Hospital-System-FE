import React, { useState } from "react";
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
import { useEffect } from "react";

import "./styles.css";
import { updateUserByEmailId } from "../../../services/authentication.service";

function EditUser(props) {
  const [data, setData] = useState({});
  
  const { state } = useLocation();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    updateUserByEmailId(data).then(response => {
      alert(response.data);
      navigate("/users");
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
    navigate("/users");
  };


  useEffect(() => {
      setData({
        firstName: state.firstName,
        lastName: state.lastName,
        phone: state.phone,
        email: state.email
      })
  },[]);

  return (
    <Container className="account">
      <Row className="justify-content-md-center account-header">
        <h2>Edit User</h2>
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

export default EditUser;
