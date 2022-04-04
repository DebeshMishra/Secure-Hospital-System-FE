import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useMemo } from "react";
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
} from "react-bootstrap";
import { Navigate } from "react-router";
import React, { useEffect, useState } from "react";
import CreateTransaction from "./CreateTransaction";
import "./styles.css";

function ViewTransactions() {
  const [transactions, setTransactions] = useState([]);
  const [cookies, setCookie, removeCookie] = useCookies([
    "JWTToken",
    "emailId",
  ]);
  const userInfo = useSelector((state) => state.user);

  let dummyData = useMemo(() => [
    {
      lastName: "Parrish",
      firstName: "Kim",
      transactionPrice: 1000.19,
      status: "Approved",
      description:
        "Lorem ipsum dolor sit amet.",
    },
  ])

  // needs API integration
  useEffect(() => {
    setTransactions(dummyData)
  }, []);

  const triggerBECall = (e) => {
    if (e) {

    }
  };

  const createBillOnClick = (e) => {
    //TODO Create Bill Here
  }

  const createReceiptOnClick = (e) => {
    //TODO Create Receipt Here
  }


  //TODO Create Receipts and Bills based off transaction



  return (
    <div className="labTestParent">
      <Row className="justify-content-md-center header">
        <Col md="8">
          <h3>Transactions</h3>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Transaction No</th>
                <th >Description</th>
                <th>Last Name</th>
                <th>First Name</th>
                <th>Price</th>
                <th>Status</th>
                <th>Receipts and Bills</th>

              </tr>
            </thead>
            <tbody>
              {transactions.map((transactions, index) => {
                return (
                  <tr key={index}>
                    <td key={1}>{index + 1}</td>
                    <td style={{ maxWidth: "200px" }} key={2}>{transactions.description}</td>
                    <td key={3}> {transactions.lastName}</td>
                    <td key={4}> {transactions.firstName}</td>
                    <td key={5}> {transactions.transactionPrice}</td>
                    <td key={6}> {transactions.status} </td>
                    <td key={7}> {<div>
                      <Button id="createReceipt" onClick={() => createReceiptOnClick(transactions.row.values)}>
                        Create Receipt
                      </Button>
                      &nbsp;&nbsp;
                      <Button id="createBill" onClick={() => createBillOnClick(transactions.row.values)}>
                        Create Bill
                      </Button>
                    </div>}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Col>
        <Col md="4" className="border-c">
          <CreateTransaction onSubmitted={triggerBECall} />
        </Col>
      </Row>
    </div>
  );
}

export default ViewTransactions;
