import './CreateClaim.css'

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
import React, { useEffect, useState } from "react";
import { getPolicies } from '../../../services/InsuranceStaff.services';

function CreateClaim() {

    const [claimData, setClaimData] = useState({});
    const [policies, setPolicies] = useState([]);

    const [cookies, setCookie, removeCookie] = useCookies([
        "JWTToken",
        "emailId",
    ]);
    const userInfo = useSelector((state) => state.user);

    const handleSubmit = async (e) => {
        e.preventDefault();
    };

    const handleChange = (e) => {
        const newdata = { ...claimData };
        newdata[e.target.id] = e.target.value;
        setClaimData(newdata);
    };


    const handleChangeCheckBox = (e) => {

    };


    useEffect(() => {
        getPolicies().then(response => {
            setPolicies(response.data);
        });
    }, []);

    return (
        <Container>
            <Row className="justify-content-md-center header">
                <h3>Raise a Claim</h3>
            </Row>
            <Form onSubmit={handleSubmit}>
                <Row className="justify-content-md-center mb-3">
                <Col md="6">
                    <Form.Group>
                        <Form.Label id="basic-addon1" className='label-css'>Select a Policy: </Form.Label>
                        <Form.Select
                            aria-label="select a policy"
                            value={claimData.policy_Id}
                            id="policy_Id"
                            onChange={handleChange}
                        >
                            <option>Select Policy</option>
                            {
                                policies.map((policy, index) => {
                                    return (
                                        <option value={policy.id}>{policy.policyName}</option>
                                    )
                                })
                            }
                        </Form.Select>
                    </Form.Group>
                    </Col>
                </Row>
                <Row className="justify-content-md-center mb-3">
                <Col md="6">
                    <Form.Group className="mb-3">
                        <Button variant="primary" type="submit" className="submit-button">
                            Submit
                        </Button>
                    </Form.Group>
                </Col>
                </Row>
            </Form>
        </Container>
    );
}

export default CreateClaim;