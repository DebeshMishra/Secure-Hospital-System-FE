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
import { postTransactionToBlockChain } from "../../../../services/blockchain.service";
import { approveTransaction, cancelTransaction, getAllTransactions } from "../../../../services/users.service";

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  const userInfo = useSelector((state) => state.user);
  const [fectching, setFecteching] = useState(true)

  useEffect(() => {
    getTabledata();
  }, []);

  const getTabledata = () => { };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    setFecteching(true);
    getAllTransactions("").then(resp => {
      setTransactions(resp);
      setFecteching(false);
    });
  }, []);

  const approveTransactionf = (t) => {
    const transactionId = t.transactionId;
    const appointmentId = t.appointmentId;
    approveTransaction(userInfo.userData.user.id, transactionId, appointmentId).then(response => {
      postTransactionToBlockChain({
        "bill_id": t.bill.id || 0,
        "claim_id": t.claimId || 0,
        "staff_id":  t.staffId || 0,
        "patient_id":  t.patientId || 0,
        "__Transaction":  t.transactionId + " ",
        "appointment_id":  t.appointmentId || 0,
        "transaction_id":  t.transactionId || 0,
        "transaction_status_id": (t.transactionStatus == "COMPLETED"? 1: 0),
        "transaction_completion_time": t.transactionCompletionTime || new Date().toISOString()
      }).then(resp => {
        alert("successfully stored in blockchain!");
      }).catch(error => {
        alert("unable to store in blockchain");
      });
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
        transactions != null && transactions?.length > 0 ?
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
                        <Button variant="primary" disabled={tran.transactionStatus != "PENDING"} onClick={() => approveTransactionf(tran)}>
                          Approve 
                        </Button>
                        <span> | </span>
                        <Button variant="primary" disabled={tran.transactionStatus != "PENDING"} FuseronClick={() => rejectTransactionf(tran)}>
                          Deny 
                        </Button>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>:
        transactions?.length == 0? <h3>No Transactions!</h3>:
        fectching ? <h3>Fetching Transactions!</h3> : ""
      }
    </>

  );
};
export default Transactions;
