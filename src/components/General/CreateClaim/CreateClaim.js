import './CreateClaim.css'

import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import { useCookies } from "react-cookie";

import {
    Form,
    Row,
    Container,
    Col,
    FormControl,
    Button,
    InputGroup
} from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { createClaim, getAllPoliciesByuserId } from '../../../services/InsuranceStaff.services';

function CreateClaim() {

    const [claimData, setClaimData] = useState({});
    const [policies, setPolicies] = useState([]);
    const { state } = useLocation();
    const { appointment } = state;
    const [submit, setSubmit] = useState(false);
    let navigate = useNavigate();
    const [cost, setCost] = useState(0);

    const [cookies, setCookie, removeCookie] = useCookies([
        "JWTToken",
        "emailId",
    ]);
    const userInfo = useSelector((state) => state.user);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmit(!submit);
        createClaim(claimData).then(response => {
            alert(response);
            setSubmit(!submit);
            navigate("/appointments");
        })
    };

    const handleChange = (e) => {
        const newdata = { ...claimData };
        newdata[e.target.id] = e.target.value;
        setClaimData(newdata);
    };


    useEffect(() => {

        getAllPoliciesByuserId(appointment.patientId).then(response => {
            setPolicies(response);
        });
        let cost1 = 0
        cost1 += appointment.appointment.fees;
        appointment?.appointment?.diagnoses?.labResult.map(lr => {
            cost1 += lr.labtests.labTestCost;
        })
        setCost(cost1)
        setClaimData({
            "appointmentId": appointment.appointment.id,
            "patientId": appointment.patientId,
            "amountRequired": cost1,
        })
    }, []);

    return (
        <>
            {
                appointment.appointment.status == "DIAGNOSIED" &&
                <Container>
                    <Row className="justify-content-md-center header">
                        <h3>Raise a Claim</h3>
                        {(policies == null || policies.length == 0) && <h6>You don't have any policies!</h6>}
                    </Row>
                    {
                        (policies != null && policies.length > 0) &&
                        <Form onSubmit={handleSubmit}>
                            <Row className="justify-content-md-center mb-3">
                                <Col md="6">
                                    <Form.Group>
                                        <Form.Label id="basic-addon1" className='label-css'>Select a Policy: </Form.Label>
                                        <Form.Select
                                            aria-label="select a policy"
                                            value={claimData.policyId}
                                            id="policyId"
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
                                    <InputGroup>
                                        <InputGroup.Text id="basic-addon1">Cost: </InputGroup.Text>
                                        <FormControl
                                            placeholder="Patient Name"
                                            aria-label="Patient Name"
                                            value={cost}
                                            type="text"
                                            disabled={true}
                                        />
                                    </InputGroup>
                                </Col>
                            </Row>
                            <Row className="justify-content-md-center mb-3">
                                <Col md="6">
                                    <Form.Group className="mb-3">
                                        <Button variant="primary" disabled={claimData?.policyId == null || submit} type="submit" className="submit-button">
                                            Submit
                                        </Button>
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Form>
                    }

                </Container>
            }
        </>

    );
}

export default CreateClaim;