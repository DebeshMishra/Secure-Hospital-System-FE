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
import { createCoverage } from '../../../../services/InsuranceStaff.services';

function CreateCoverage(props) {

    const [coverageData, setCoverageData] = useState({});

    const [cookies, setCookie, removeCookie] = useCookies([
        "JWTToken",
        "emailId",
    ]);
    const userInfo = useSelector((state) => state.user);
    const [submit, setSubmit] = useState(true);


    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmit(!submit);
        createCoverage(coverageData).then(response => {
            setSubmit(!submit);
            alert("Successfully created a coverage!");
            props.onSubmitted(true);
        }, (error) => {
            alert("Error in creating record!")
        });
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
                                autoComplete="off"
                                value={coverageData.coverageName}
                                onChange={handleChange}
                                minLength="3"
                                required
                                type="text"
                            />
                        </InputGroup>
                        <span style={{color: 'blue'}}>Coverage name should be unique!</span>
                </Row>
                <Row className="justify-content-md-center mb-3">
                        <InputGroup>
                            <InputGroup.Text id="basic-addon1">Description</InputGroup.Text>
                            <FormControl
                                placeholder="Coverage Description"
                                aria-label="Coverage Description"
                                id="description"
                                autoComplete="off"
                                minLength="3"
                                value={coverageData.description}
                                onChange={handleChange}
                                as="textarea"
                                type="text"
                            />
                        </InputGroup>
                </Row>
                <Row className="justify-content-md-center mb-3">
                        <Form.Group className="mb-3">
                            <Button variant="primary" disabled={coverageData.coverageName == null} type="submit" className="submit-button">
                                Submit
                            </Button>
                        </Form.Group>
                </Row>
            </Form>
            
        </div>
    )
}

export default CreateCoverage;