import './createPolicy.css'
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

import {
    Form,
    Row,
    Container,
    Col,
    FormControl,
    Button,
    DropdownButton,
    Dropdown,
} from "react-bootstrap";
import { Navigate } from "react-router";
import React, { useEffect, useState } from "react";

function CreatePolicy() {

    // API integration needed

    const [policyData, setPolicyData] = useState({});

    const [cookies, setCookie, removeCookie] = useCookies([
        "JWTToken",
        "emailId",
    ]);
    const userInfo = useSelector((state) => state.user);

    const handleSubmit = async (e) => {
        e.preventDefault();
    };

    const handleChange = (e) => {
        const newdata = { ...policyData };
        newdata[e.target.id] = e.target.value;
        setPolicyData(newdata);
    };

    return (
        <Container>
            <Row className="justify-content-md-center header">
                <h3>Create Policy</h3>
            </Row>
            <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group>
                        <Form.Label id="basic-addon1" className='label-css'>Policy Name: </Form.Label>
                        <FormControl
                            placeholder="Policy Name"
                            aria-label="Policy Name"
                            id="policyName"
                            value={policyData.policyName}
                            onChange={handleChange}
                            required
                            type="text"
                        />
                    </Form.Group>
                </Row>
                {/* policyType has to be a dropdown and should be fetch used an API */}
                <Row className="justify-content-md-center mb-3">
                    <Form.Group>
                        <Form.Label id="basic-addon1" className='label-css'>Policy Types</Form.Label>
                        <FormControl
                            placeholder="Policy Type"
                            aria-label="Policy Type"
                            id="policyType"
                            value={policyData.policyType}
                            onChange={handleChange}
                            required
                            type="text"
                        />
                    </Form.Group>
                </Row>
                <Row className="justify-content-md-center mb-3">
                    <Form.Group>
                        <Form.Label id="basic-addon1" className='label-css'>Maximum Amount</Form.Label>
                        <FormControl
                            placeholder="Maximum Amount"
                            aria-label="Maximum Amount"
                            id="policyClaimMaximumAmt"
                            value={policyData.policyClaimMaximumAmt}
                            onChange={handleChange}
                            required
                            type="text"
                        />
                    </Form.Group>
                </Row>
                <Row className="justify-content-md-center mb-3">
                    <Form.Group>
                        <Form.Label id="basic-addon1" className='label-css'>Percentage of payment</Form.Label>
                        <FormControl
                            placeholder="Percentage of payment contributed by company"
                            aria-label="Percentage of payment contributed by company"
                            id="coPayPercentage"
                            value={policyData.coPayPercentage}
                            onChange={handleChange}
                            required
                            type="text"
                        />
                    </Form.Group>
                </Row>
                <Row className="justify-content-md-center mb-3">
                    <Form.Group>
                        <Form.Label id="basic-addon1" className='label-css'>Insurance Company Name</Form.Label>
                        <FormControl
                            placeholder="Insurance Company Name"
                            aria-label="Insurance Company Name"
                            id="InsuranceProviderName"
                            value={policyData.InsuranceProviderName}
                            onChange={handleChange}
                            required
                            type="text"
                        />
                    </Form.Group>
                </Row>
                <Row className="justify-content-md-center mb-3">
                    <Form.Group>
                        <Form.Label id="basic-addon1" className='label-css'>Select Coverages</Form.Label>
                        <Form.Select
                            aria-label="Default select example"
                            value={policyData.coverages}
                            id="coverages"
                            onChange={handleChange}
                        >
                            <option>Select Coverages</option>
                            <option value="AUTO">Auto</option>
                            <option value="LIFE">Life</option>
                            <option value="HOME_OWNER">Home owner</option>
                        </Form.Select>
                    </Form.Group>
                </Row>
                <Row className="justify-content-md-center mb-3">
                    <Form.Group className="mb-3">
                        <Button variant="primary" type="submit" className="submit-button">
                            Submit
                        </Button>
                    </Form.Group>
                </Row>
            </Form>
        </Container>
    );
}


export default CreatePolicy;