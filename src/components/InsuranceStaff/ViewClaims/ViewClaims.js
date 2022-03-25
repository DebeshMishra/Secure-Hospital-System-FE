import { Container } from "react-bootstrap";
import './ViewClaims.css'
import {
    Form,
    Row,
    Col,
    FormControl,
    Button,
    DropdownButton,
    Dropdown,
    Table,
} from "react-bootstrap";

function ViewClaims() {

    // API integrations needed

    const claims = [
        {
            id: 1,
            user_id: 123,
            appointmentId: 12,
            claimAmount: 10000,
            policyName: "A1",
            status: "Accepted"
        },
        {
            id: 1,
            user_id: 123,
            appointmentId: 12,
            claimAmount: 10000,
            policyName: "A2",
            status: "Accepted"
        },
    ]

    return (
        <div>
        <Row className="justify-content-md-center header">
            <Col md="12">
                <h3>Claims</h3>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>user Id</th>
                            <th>Appointment Id</th>
                            <th>Claim Amount</th>
                            <th>Policy Name</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            claims.map((policy, index) => {
                                return (
                                    <tr>
                                        <td>{policy.id}</td>
                                        <td>{policy.user_id}</td>
                                        <td>{policy.appointmentId}</td>
                                        <td>{policy.claimAmount}</td>
                                        <td>{policy.policyName}</td>
                                        <td>{policy.status}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </Col>
        </Row>


    </div>
    )
}

export default ViewClaims;