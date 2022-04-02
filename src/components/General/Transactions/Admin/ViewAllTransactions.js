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

const PayBill = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getTabledata();
  }, []);

  const getTabledata = () => {};

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="container mt-5">
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th>Transaction ID</th>
            <th>Amount Paid</th>
            <th>Patient Name</th>
            <th>Hospital Staff</th>
            <th>Appointment Number</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>A</td>
            <td>B</td>
            <td>C</td>
            <td>E</td>
            <td>F</td>
            <td>G</td>
            <td>
              <Button
                variant="primary"
                className="submit-button"
                size="sm"
                onClick>
                {"Approve"}
              </Button>
            </td>
            <Button
              variant="primary"
              className="submit-button"
              size="sm"
              onClick>
              {"Deny"}
            </Button>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default PayBill;
