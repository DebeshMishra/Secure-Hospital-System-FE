import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

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

  // needs API integration
  useEffect(() => {
    /*getAllLabTests().then((response) => {
      setLabTests(response.data);
      console.log(labTests);
    });*/
  }, []);

  const triggerBECall = (e) => {
    if (e) {
      /*getAllLabTests().then((response) => {
        setLabTests(response.data);
        console.log(labTests);
      });*/
    }
  };


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
                <th>Description</th>
                <th>Last Name</th>
                <th>First Name</th>
                <th>Fee</th>
                <th>Receipts and Bills</th>
                
              </tr>
            </thead>
            <tbody>
              {transactions.map((transactions, index) => {
                return (
                  <tr key={index}>
                    <td key={1}>{index + 1}</td>
                    <td key={2}>{transactions.description}</td>
                    <td key={3}> {transactions.lastName}</td>
                    <td key={4}> {transactions.firstName}</td>
                    <td key={5}> {transactions.transactionsPrice}</td>
                    <td key={6}> {<div><Button>Create Receipt</Button><Button>Create Receipt</Button></div>}</td>
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
