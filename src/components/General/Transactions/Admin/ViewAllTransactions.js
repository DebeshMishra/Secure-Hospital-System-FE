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
import { useSelector } from "react-redux";
import { approveTransaction, cancelTransaction, getAllTransactions } from "../../../../services/users.service";

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  const userInfo = useSelector((state) => state.user);

  useEffect(() => {
    getTabledata();
  }, []);

  const getTabledata = () => { };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    getAllTransactions("").then(resp => {
      setTransactions(resp);
    });
  }, [])

  const approveTransactionf = ( transactionId, appointmentId) => {
    approveTransaction(userInfo.userData.user.id, transactionId, appointmentId).then(response => {
      alert(response);
      getAllTransactions("").then(resp => {
        setTransactions(resp);
      });
    });

  }

  const rejectTransactionf = ( transactionId, appointmentId) => {
    cancelTransaction(userInfo.userData.user.id, transactionId, appointmentId).then(response => {
      alert(response);
      getAllTransactions("").then(resp => {
        setTransactions(resp);
      });
    });
  }

  return (
    <>
      {
        transactions != null && transactions.length > 0 &&
        <div className="container mt-5">
          <h3>Transactions</h3>
          <table className="table table-dark table-striped">
            <thead>
              <tr>
                <th>Transaction ID</th>
                <th>Amount Paid</th>
                <th>Patient Name</th>
                <th>Hospital Staff</th>
                <th>Appointment Number</th>
                <th>Claim Id</th>
                <th>Transaction Time</th>
                <th>Transaction Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                transactions.map((tran, index) => {
                  return (
                    <tr key={index}>
                      <td key="1">{tran.transactionId}</td>
                      <td key="2">{tran.bill.fee}</td>
                      <td key="3">{tran.patientName}</td>
                      <td key="4">{tran.staffName || "-"}</td>
                      <td key="5">{tran.appointmentId}</td>
                      <td key="6">{tran.claimId}</td>
                      <td key="7">{tran.transactionCompletionTime}</td>
                      <td key="8">{tran.transactionStatus}</td>
                      <td>
                        <Button variant="primary" disabled={tran.transactionStatus != "PENDING"} onClick={() => approveTransactionf( tran.transactionId, tran.appointmentId)}>
                          Approve 
                        </Button>
                        <span> | </span>
                        <Button variant="primary" disabled={tran.transactionStatus != "PENDING"} FuseronClick={() => rejectTransactionf( tran.transactionId, tran.appointmentId)}>
                          Deny 
                        </Button>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      }
    </>

  );
};
export default Transactions;
