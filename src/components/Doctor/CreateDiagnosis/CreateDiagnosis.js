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
import { useLocation } from "react-router";
import { getAllLabTests } from "../../../services/LabTests.services";
import { createDiagnosis } from "../../../services/LabReports.services";

function CreateDaignosis() {

    const { state } = useLocation();
    const { appointment } = state;
    const [labTests, setLabTests] = useState(null)
    const [diagnosisData, setDiagnosisData] = useState({})
    const [submit, setSubmit] = useState(false);

    useEffect(() => {
        console.log(appointment);
        setDiagnosisData({
            doctorId: appointment.doctorId,
            patientId: appointment.patientId,
            appointmentId: appointment.appointment.id,
            labTestIds: []

        })
        getAllLabTests().then(response => {
            setLabTests(response.data);
        });
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(diagnosisData.diagnosis_info == null || diagnosisData.prescription == null ){
            alert("please enter the diagnosis!");
            return;
        }
        setSubmit(!submit);
        createDiagnosis(diagnosisData).then(response => {
            alert(response);
            setSubmit(!submit);
        });
    };

    const handleChange = (e) => {
        const newdata = { ...diagnosisData };
        newdata[e.target.id] = e.target.value;
        setDiagnosisData(newdata);
        console.log(newdata)
    };

    const handleChangeCheckBox = (e) => {
        const newdata = { ...diagnosisData };
        if(newdata['labTestIds'].length == 0){
            if (e.target.checked) {
                newdata['labTestIds'] = [parseInt(e.target.value)];
            }
        }else{
            if (e.target.checked) {
                newdata['labTestIds'].push(parseInt(e.target.value));
            }else{
                const index = newdata['labTestIds'].indexOf(parseInt(e.target.value));
            if (index > -1) {
                newdata['labTestIds'].splice(index, 1); // 2nd parameter means remove one item only
            }
            }
        }
        setDiagnosisData(newdata);
    }

    return (
        <Container>
            <Row>
                <h4>Add Diagnosis</h4>
            </Row>

            <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Col md="12">
                        <Form.Group>
                            <Form.Label id="basic-addon1" className='label-css'><b>Diagnosis: </b></Form.Label>
                            <FormControl
                                as="textarea"
                                placeholder="Diagnosis"
                                aria-label="Diagnosis"
                                id="diagnosis_info"
                                autoComplete="off"
                                onChange={handleChange}
                                value={diagnosisData.diagnosis_info}
                                required
                                type="text"
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md="12">
                        <Form.Group>
                            <Form.Label id="basic-addon1" className='label-css'><b>Medical Prescription:</b> </Form.Label>
                            <FormControl
                                as="textarea"
                                placeholder="prescription"
                                aria-label="prescription"
                                id="prescription"
                                onChange={handleChange}
                                autoComplete="off"
                                value={diagnosisData.prescription}
                                required
                                type="text"
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md="12">
                        <Form.Group>
                            <Form.Label id="basic-addon1" className='label-css'><b>Suggest Lab tests:</b> </Form.Label>
                            {(labTests == null || labTests.length == 0) ?
                                (<h6>No available lab tests!</h6>) :
                                labTests.map((labtest, index) => {
                                    return (
                                        <Form.Check
                                            inline
                                            key={index}
                                            label={labtest.labTestName + " ($" + labtest.labTestCost + ")"}
                                            name="labtests"
                                            type="checkbox"
                                            value={labtest.id}
                                            onChange={handleChangeCheckBox}
                                            id={`inline-${labtest.labTestName}-1`}
                                        >
                                        </Form.Check>)
                                })
                            }
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col md="6">
                        <Form.Group className="mb-3">
                            <Button variant="primary" disabled={(submit)} type="submit" className="submit-button" >
                                Add Diagnosis and complete appointment
                            </Button>
                        </Form.Group>
                    </Col>
                </Row>
            </Form>
        </Container>

    )
}

export default CreateDaignosis;