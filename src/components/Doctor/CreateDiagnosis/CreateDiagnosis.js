import { useEffect } from "react";
import {
    Form,
    Row,
    Container,
    Col,
    FormControl,
    Button,
} from "react-bootstrap";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { getAllLabTests } from "../../../services/LabTests.services";
import { createDiagnosis } from "../../../services/LabReports.services";

function CreateDaignosis() {

    const { state } = useLocation();
    const { appointment } = state;
    const [labTests, setLabTests] = useState(null)
    const [diagnosisData, setDiagnosisData] = useState({})
    const [submit, setSubmit] = useState(false);
    let navigate = useNavigate();

    useEffect(() => {
        getAllLabTests().then(response => {
            setLabTests(response.data);
            const newData = {
                doctorId: parseInt(appointment.doctorId),
                patientId: parseInt(appointment.patientId),
                appointmentId: parseInt(appointment.appointment.id),
                diagnosis_info: appointment.appointment.diagnoses?.diagnosis_info || "",
                prescription: appointment.appointment.diagnoses?.prescription || "",
                labTestIds: []
            }
            response.data.forEach(lab => {
                newData["lab"+lab.id] = false
            })
            appointment.appointment.diagnoses?.labResult.forEach(r => {
                newData["lab"+r.labtests.id] = true;
            })
            setDiagnosisData(newData);
        });
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(diagnosisData.diagnosis_info == null || diagnosisData.prescription == null ){
            alert("please enter the diagnosis!");
            return;
        }
        const newData = {...diagnosisData}
        labTests.forEach(lab => {
            if(newData["lab"+lab.id])
                newData['labTestIds'].push(lab.id)
            delete newData['lab'+lab.id]
        })
        setSubmit(!submit);
        createDiagnosis(newData).then(response => {
            alert(response.data);
            setSubmit(!submit);
            navigate("/appointments")
        });
    };

    const handleChange = (e) => {
        const newdata = { ...diagnosisData };
        newdata[e.target.id] = e.target.value;
        setDiagnosisData(newdata);
    };

    

    const handleChangeCheckBox = (e) => {
        const newData = { ...diagnosisData };
        if(e.target.checked){
            newData[e.target.id] = true;
        }else{
            newData[e.target.id] = false;
        }
        setDiagnosisData(newData);
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
                                name="diagnosis_info"
                                autoComplete="off"
                                onChange={handleChange}
                                value={diagnosisData.diagnosis_info}
                                required
                                disabled={appointment.appointment.diagnoses!=null}
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
                                name="presciption"
                                id="prescription"
                                onChange={handleChange}
                                autoComplete="off"
                                disabled={appointment.appointment.diagnoses!=null}
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
                                            checked={diagnosisData["lab"+labtest.id]}
                                            disabled={appointment.appointment.diagnoses!=null}
                                            label={labtest.labTestName + " ($" + labtest.labTestCost + ")"}
                                            name="labtests"
                                            type="checkbox"
                                            value={labtest.id}
                                            onChange={handleChangeCheckBox}
                                            id={"lab"+labtest.id}
                                        >
                                        </Form.Check>)
                                })
                            }
                        </Form.Group>
                    </Col>
                </Row>
                
                
                <Row className="justify-content-md-center">
                    <Col md="3">
                        <Form.Group className="mb-3">
                            <Button variant="primary" disabled={(submit || appointment.appointment.diagnoses!=null || diagnosisData.prescription == "" || diagnosisData.diagnosis_info == "")} type="submit" className="submit-button" >
                                Create Diagnosis
                            </Button>
                        </Form.Group>
                    </Col>
                    {/* <Col md="3">
                        <Form.Group className="mb-3">
                            <Button variant="primary" type="submit" disabled={(diagnosisData?.prescription == "" && diagnosisData?.diagnosis_info == "") || appointment.appointment.status == "DIAGNOSIED"} className="submit-button" onClick={closeAppointment}>
                                Complete appointment
                            </Button>
                        </Form.Group>
                    </Col> */}
                </Row>
            </Form>
        </Container>

    )
}

export default CreateDaignosis;