
import './Policies.css'
import CreatePolicy from '../CreatePolicy/createPolicy';

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
    Table
} from "react-bootstrap";

function Policies() {

    // API integrations needed

    const policies = [
        {
            id: 1,
            policyName: "policyName1",
            policyType: "policyType1",
            policyClaimMaximumAmt: 10000,
            coPayPercentage: 10,
            InsuranceProviderName: "InsuranceProviderName",
            coverages: "Auto, Home owner"
        },
        {
            id: 1,
            policyName: "policyName2",
            policyType: "policyType2",
            policyClaimMaximumAmt: 1000,
            coPayPercentage: 13,
            InsuranceProviderName: "InsuranceProviderName",
            coverages: "Auto"
        }
    ]

    return (
        <div>
        <Row className="justify-content-md-center header">
            <Col md="9">
                <h3>Policies</h3>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Policy Name</th>
                            <th>Policy Type</th>
                            <th>Maximum Claim Amount</th>
                            <th>Co-Payment Percentage</th>
                            <th>Insurance Provider</th>
                            <th>Coverages</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            policies.map((policy, index) => {
                                return (
                                    <tr>
                                        <td>{policy.policyName}</td>
                                        <td>{policy.policyType}</td>
                                        <td>{policy.policyClaimMaximumAmt}</td>
                                        <td>{policy.coPayPercentage}</td>
                                        <td>{policy.InsuranceProviderName}</td>
                                        <td>{policy.coverages}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </Col>
            <Col md="3" className="border-c">
                <CreatePolicy />
            </Col>
        </Row>


    </div>
    )
}

export default Policies;