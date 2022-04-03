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
import { useEffect, useState } from "react";
import { getAllClaims } from "../../../services/InsuranceStaff.services";

function ViewClaims() {
    const [claims, setClaims] = useState([]);

    useEffect(() => {
        getAllClaims().then(response => {
            setClaims(response);
        })
    }, [])

    const approveClaim = (claimId) => {

    }
    const rejectClaim = (claimId) => {
        
    }
    const viewPatient = (patientId) => {
        
    }

    return (
        <>
            { 
                claims != null && claims.length > 0 &&
                <Container>
                    <Row className="justify-content-md-center header">
                        <Col md="12">
                            <h3>Claims</h3>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Claim Id</th>
                                        <th>Patient Name</th>
                                        <th>Policy Name</th>
                                        <th>Appointment Id</th>
                                        <th>Amount Required</th>
                                        <th>Status</th>
                                        <th>Tasks</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        claims.map((claim, index) => {
                                            return (
                                                <tr>
                                                    <td>{claim.claimId}</td>
                                                    <td>{claim.patientName}</td>
                                                    <td>{claim.policy.policyName}</td>
                                                    <td>{claim.appointmentId}</td>
                                                    <td>{claim.amountRequired}</td>
                                                    <td>{claim.status}</td>
                                                    <td>{
                                                        <>
                                                         <Button variant="primary" disabled={claim.status!="PENDING"}  onClick={approveClaim(claim.claimId)}>
                                                         Approve Claim
                                                       </Button>
                                                       <span> | </span>
                                                       <Button variant="primary" disabled={claim.status!="PENDING"} onClick={rejectClaim(claim.claimId)}>
                                                       Deny Claim
                                                     </Button>
                                                     <span> | </span>
                                                       <Button variant="primary" onClick={viewPatient(claim.patientId)}>
                                                       View Patient
                                                     </Button>
                                                        </>
                                                        

                                        }</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </Table>
                        </Col>
                    </Row>


                </Container>
            }
        </>

    )
}

export default ViewClaims;