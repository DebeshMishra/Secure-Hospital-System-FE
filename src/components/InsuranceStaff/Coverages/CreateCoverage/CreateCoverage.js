import './CreateCoverage.css'
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
import React, { useEffect, useState } from "react";

function CreateCoverage() {

    const [coverageData, setCoverageData] = useState({});

    const [cookies, setCookie, removeCookie] = useCookies([
        "JWTToken",
        "emailId",
    ]);
    const userInfo = useSelector((state) => state.user);

    const handleSubmit = async (e) => {
        e.preventDefault();
    };

    const handleChange = (e) => {
        const newdata = { ...coverageData };
        newdata[e.target.id] = e.target.value;
        setCoverageData(newdata);
    };

    return (
        <div className='create-coverage-parent'>
            <Row className="justify-content-md-center header">
                <h3>Create Coverage</h3>
            </Row>
            <Form onSubmit={handleSubmit}>
                <Row className="justify-content-md-center mb-3">
                        <InputGroup>
                            <InputGroup.Text id="basic-addon1">Coverage Name: </InputGroup.Text>
                            <FormControl
                                placeholder="Coverage Name"
                                aria-label="Coverage Name"
                                id="coverageName"
                                value={coverageData.coverageName}
                                onChange={handleChange}
                                required
                                type="text"
                            />
                        </InputGroup>
                </Row>
                <Row className="justify-content-md-center mb-3">
                        <InputGroup>
                            <InputGroup.Text id="basic-addon1">Description</InputGroup.Text>
                            <FormControl
                                placeholder="Coverage Description"
                                aria-label="Coverage Description"
                                id="coverageDescription"
                                value={coverageData.coverageDescription}
                                onChange={handleChange}
                                required
                                as="textarea"
                                type="text"
                            />
                        </InputGroup>
                </Row>
                <Row className="justify-content-md-center mb-3">
                        <Form.Group className="mb-3">
                            <Button variant="primary" type="submit" className="submit-button">
                                Submit
                            </Button>
                        </Form.Group>
                </Row>
            </Form>

        </div>
    )
}

export default CreateCoverage;