
import { Container, Row, Col } from "react-bootstrap";

function Claims(props) {

    return (
        <Container>
            {
                (props.policies != null || props.policies?.length > 0 || props.claims != null || props.claims?.length > 0)?
                    <Row className="justify-content-md-center">
                        <h5>Claims</h5>
                        <table>
                            <tr>
                                <th>Claim ID</th>
                                <th>Policy ID</th>
                                <th>Appointment ID</th>
                                <th>Claim Amount</th>
                                <th>Status</th>
                            </tr>
                            {
                                props.claims.map((claim, index) => {
                                    return (
                                        <tr key={index}>
                                            <td key="1">{claim.id}</td>
                                            <td key="2">{claim.policyId}</td>
                                            <td key="3">{claim.appointmentId}</td>
                                            <td key="4">{claim.amountRequired}</td>
                                            <td key="5">{claim.status}</td>
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

export default Claims;