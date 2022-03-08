import React, { useEffect, useState } from "react";
import "./Login.css";
import { loginAPI } from "../services/authentication.service";
import { setUserData, removeUserData, setUserToken } from "../features/user";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { useCookies } from 'react-cookie';

import { Form, Row, Container, Col, InputGroup, FormControl, Button } from "react-bootstrap";

const Login = (props) => {
    const [data, setData] = useState({ email: "", password: "" })
    const [cookies, setCookie, removeCookie] = useCookies(['JWTToken', "emailId"]);
    const user = useSelector((state) => state.user)
    const dispatch = useDispatch();
    let navigate = useNavigate();

    // on click of submit button, store in cookie - email and token
    const handleSubmit = async (e) => {
        e.preventDefault();
        loginAPI(data).then(response => {
            dispatch(setUserData({ userData: { email: data.email, user: {}} }));
            dispatch(setUserToken({ jwtToken: response.data.token }));
            navigate('/dashboard')
        });
    }

    // when chrome refresh happens
    useEffect(() => {
        if (cookies.JWTToken != null) {
            navigate('/dashboard')
        }
    })

    const handleChange = (e) => {
        const newdata = { ...data };
        newdata[e.target.id] = e.target.value;
        setData(newdata);
    };

    return (
        <Container className="login">
            <Row className="justify-content-md-center login-header">
                <h2 >Login</h2>
            </Row>
            <Row className="justify-content-md-center">
                <Col md="auto">
                    <Form onSubmit={handleSubmit}>
                        <InputGroup className="mb-3">
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
                        <InputGroup className="mb-3">
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
                        <Form.Group className="mb-3">
                            <Form.Check className="floatLeft"
                                label="Remember"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Button variant="primary" type="submit" className="submit-button">
                                Submit
                            </Button>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}
export default Login
