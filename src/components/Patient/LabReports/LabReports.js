import { useEffect } from "react";
import {
    Form,
    Row,
    Container,
    Col,
    InputGroup,
    FormControl,
    Button,
    Table,
    DropdownButton,
    Dropdown,
    Accordion,
    Tabs,
    Tab
} from "react-bootstrap";
import { useState } from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import { getLabReportsById } from "../../../services/LabReports.services";

function LabReports(props) {

    const [labReportResponse, setLabReportResponse] = useState(null)

    useEffect(() => {
        getLabReportsById(props.patientId).then(response => {
            setLabReportResponse(response.data);
        })
    },[]);

    return (
        <Container>
            {
                (labReportResponse == null || labReportResponse.labReports == null)? <p>No reports!</p>:
                <>
                    <Row>
                        <h6><b>Lab Test Results</b></h6>
                    </Row>
                    <Row className="lab-test-parent">
                        {
                            labReportResponse.labReports.map((labres, index) => {

                                return (
                                    <Container className="lab-test">
                                        <Row>
                                            <Col md="4">
                                                <Row className="mb-3">
                                                    <Col sm="6">
                                                        <b>Lab Test Name:</b>
                                                    </Col>
                                                    <Col sm="6">
                                                        <span>{labReportResponse.labTest[labres.labTestId].labTestName || "-"} </span>
                                                    </Col>
                                                </Row>
                                            </Col>
                                            <Col md="4">
                                                <Row className="mb-3">
                                                    <Col sm="6">
                                                        <b>Lab Test Cost:</b>
                                                    </Col>
                                                    <Col sm="6">
                                                        <span>{labReportResponse.labTest[labres.labTestId].labTestCost || "-"} </span>
                                                    </Col>
                                                </Row>
                                            </Col>
                                            <Col md="4">
                                                <Row className="mb-3">
                                                    <Col sm="6">
                                                        <b>Lab Test Status:</b>
                                                    </Col>
                                                    <Col sm="6">
                                                        <span>{labres.labResultStatus || "-"} </span>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md="6">
                                                <Row className="mb-3">
                                                    <Col sm="4">
                                                        <b>Result:</b>
                                                    </Col>
                                                    <Col sm="8">
                                                        <span>{labres.result || '-'} </span>
                                                    </Col>
                                                </Row>
                                            </Col>
                                            <Col md="6">
                                                <Row className="mb-3">
                                                    <Col sm="3">
                                                        <b>Lab Staff Note:</b>
                                                    </Col>
                                                    <Col sm="9">
                                                        <span>{labres.labStaffNotes || "-"} </span>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md="4">
                                                <Row className="mb-3">
                                                    <Col sm="4">
                                                        <b>Doctor:</b>
                                                    </Col>
                                                    <Col sm="8">
                                                        <span>{labres.doctorName || '-'} </span>
                                                    </Col>
                                                </Row>
                                            </Col>
                                            <Col md="4">
                                                <Row className="mb-3">
                                                    <Col sm="3">
                                                        <b>Patient:</b>
                                                    </Col>
                                                    <Col sm="9">
                                                        <span>{labres.patientName || "-"} </span>
                                                    </Col>
                                                </Row>
                                            </Col>
                                            <Col md="4">
                                                <Row className="mb-3">
                                                    <Col sm="3">
                                                        <b>LabStaff:</b>
                                                    </Col>
                                                    <Col sm="9">
                                                        <span>{labres.labStaffName || "-"} </span>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </Container>
                                )
                            })
                        }


                    </Row>
                </>

            }
        </Container>
    )
}

export default LabReports;