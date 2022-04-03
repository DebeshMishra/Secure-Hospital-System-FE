
import { Container, Row, Col } from "react-bootstrap";

function Policy(props) {

    return (
        <Container>
            {
                props.policies != null ?
                    <Row className="justify-content-md-center">
                        <h5>Policies</h5>
                        <table>
                            <tr>
                                <th>Policy ID</th>
                                <th>PolicyName</th>
                                <th>InsuranceProviderName</th>
                                <th>Maximum  Claim amount</th>
                                <th>PolicyType</th>
                                <th>Coverages</th>
                            </tr>
                            {
                                props.policies.map((pol, index) => {
                                    return (
                                        <tr key={index}>
                                            <td key="1">{pol.id}</td>
                                            <td key="2">{pol.policyName}</td>
                                            <td key="3">{pol.insuranceProviderName}</td>
                                            <td key="4">{pol.policyClaimMaximumAmt}</td>
                                            <td key="5">{pol.policyType}</td>
                                            <td key="6">{pol.coverages.map(cov => {
                                                return cov.coverageName + " (" + cov.description + ")"
                                            }).join(", ")}</td>
                                        </tr>
                                    )
                                })
                            }
                        </table>

                    </Row> :
                    <h6>No Coverages</h6>
            }

        </Container>
    )
}

export default Policy;