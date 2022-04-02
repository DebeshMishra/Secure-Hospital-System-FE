import React from "react";
import { useState, useEffect } from "react";
import {
  Form,
  Row,
  Container,
  Col,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";
import { useLocation, useNavigate } from "react-router";

const PayBill = () => {
  const [data, setData] = useState([]);
  const { state } = useLocation();
  const { appointment } = state;
  const [submit, setSubmit] = useState(false);
  let navigate = useNavigate();
  const [cost, setCost] = useState(0);

  useEffect(() => {
    console.log(appointment);
    let cost1 = 0
    cost1 += appointment.appointment.fees;
    appointment?.appointment?.diagnoses?.labResult.map(lr => {
      if(lr.labResultStatus == "COMPLETED")
        cost1 += lr.labtests.labTestCost;
    })
    setCost(cost1)
    setData({
      "appointmentId": appointment.appointment.id,
      "patientId": appointment.patientId,
      "staffId": null,
      "transactionStatus": "PENDING",
    })
  }, []);

  const getTabledata = () => { };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <>
      {
        appointment.appointment.status == "COMPLETED" &&
        <Container className="login">
          <div className="container mt-5">
            <table className="table table-dark table-striped">
              <thead>
                <tr>
                  <th>Lab Test</th>
                  <th>Status</th>
                  <th>Result</th>
                  <th>Cost</th>
                </tr>
              </thead>
              <tbody>
                { appointment?.appointment?.diagnoses?.labResult != null &&
                  appointment?.appointment?.diagnoses?.labResult.map((labresult, index) => {
                    return (
                      <tr key={index}>
                        <td key="1">{labresult.labtests.labTestName}</td>
                        <td key="2">{labresult.labResultStatus}</td>
                        <td key="3">{labresult.result}</td>
                        <td key="4">{labresult.labtests.labTestCost}</td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </div>
          <Form onSubmit={handleSubmit}>
          <Row className="justify-content-md-center mb-3">
              <Col md="4">
                <InputGroup>
                  <InputGroup.Text id="basic-addon1">Appointnment Cost</InputGroup.Text>
                  <FormControl
                    placeholder="Patient Name"
                    aria-label="Patient Name"
                    value={appointment.appointment.fees}
                    type="text"
                    disabled={true}
                  />
                </InputGroup>
              </Col>
            </Row>
            <Row className="justify-content-md-center mb-3">
              <Col md="4">
                <InputGroup>
                  <InputGroup.Text id="basic-addon1">Total Cost</InputGroup.Text>
                  <FormControl
                    placeholder="Patient Name"
                    aria-label="Patient Name"
                    value={cost}
                    type="text"
                    disabled={true}
                  />
                </InputGroup>
              </Col>
            </Row>
            <Row className="justify-content-md-center mb-3">
              <Col md="4">
                <Form.Group>
                  <Button variant="primary" type="submit" className="submit-button">
                    Pay Bill
                  </Button>
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Container>

      }
    </>


  );
};
export default PayBill;
