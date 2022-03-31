import { useEffect, useState } from 'react';
import { useRowState } from 'react-table/dist/react-table.development';
import { addPolicyToUser, getPolicies } from '../../../services/InsuranceStaff.services';
import './TakePolicy.css'
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
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

function TakePolicy() {
    const userInfo = useSelector((state) => state.user);
    const [policies, setPolicies] = useState([]);
    const [policyId, setPolicyId] = useState(null);
    const [submit, setSubmit] = useState(false);
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmit(!submit);
        console.log(policyId.split(" ")[0])
        addPolicyToUser(userInfo.userData.user.id, policyId.split(" ")[0]).then(res => {
            alert(res);
            setSubmit(!submit);
            navigate("/appointments");
        });
    };

    const handleChange = (e) => {
        console.log(e)
        setPolicyId(e.target.value);
    };

    useEffect(() => {
        getPolicies().then(response => {
            setPolicies(response.data);
        });
    }, []);

    return (
        <Container>
            <Row className="justify-content-md-center header">
                <h3>Take a Policy</h3>
            </Row>
            <Form onSubmit={handleSubmit}>
                {
                    policies != null  ?
                    <Row className="justify-content-md-center mb-3">
                        <Col md="6">
                            <h5>Policies</h5>
                            <table>
                                <tr>
                                    <th>PolicyName</th>
                                    <th>InsuranceProviderName</th>
                                    <th>Maximum  Claim amount</th>
                                    <th>Coverages</th>
                                </tr>
                                {
                                    policies.map((pol, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{pol.policyName}</td>
                                                <td>{pol.insuranceProviderName}</td>
                                                <td>{pol.policyClaimMaximumAmt}</td>
                                                <td>{pol.coverages.map(cov => {
                                                    return cov.coverageName
                                                }).join(", ")}</td>
                                            </tr>
                                        )
                                    })
}
                            </table>
                        </Col>
                    </Row>:
                    <h6>No Coverages</h6>
                }
                <Row className="justify-content-md-center mb-3">
                    <Col md="6">
                        <Form.Group>
                            <Form.Label id="basic-addon1" className='label-css'>Select a Policy: </Form.Label>
                            <Form.Select
                                aria-label="select a policy"
                                value={policyId}
                                id="policyId"
                                onChange={handleChange}
                            >
                                <option>Select Policy</option>
                                {
                                    policies.map((policy, index) => {
                                        return (
                                            <option value={policy.policyId}>{policy.id +" "+ policy.policyName}</option>
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
                            <Button variant="primary" type="submit" disabled={(policyId == null || policyId == "") || submit} className="submit-button">
                                Submit
                            </Button>
                        </Form.Group>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
}

export default TakePolicy;