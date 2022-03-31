
import { Container, Row, Col } from "react-bootstrap";

function Policy(props) {

  
    return (
        <Container>
            {
                props.policies != null  ?
                <Row className="justify-content-md-center">
                        <h5>Policies</h5>
                        <table>
                            <tr>
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
                                            <td>{pol.policyName}</td>
                                            <td>{pol.insuranceProviderName}</td>
                                            <td>{pol.policyClaimMaximumAmt}</td>
                                            <td>{pol.policyType}</td>
                                            <td>{pol.coverages.map(cov => {
                                                return cov.coverageName +" (" + cov.description +")" 
                                            }).join(", ")}</td>
                                        </tr>
                                    )
                                })
}
                        </table>
    
                </Row>:
                <h6>No Coverages</h6>
            }

    </Container>
    )
}

export default Policy;