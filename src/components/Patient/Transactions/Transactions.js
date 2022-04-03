
import { Container, Row, Col } from "react-bootstrap";

function Transactions(props) {

    return (
        <Container>
            {
                (props.transactions != null || props.transactions?.length > 0)?
                    <Row className="justify-content-md-center">
                        <h5>Transactions</h5>
                        <table>
                            <tr>
                                <th>Transaction ID</th>
                                <th>time</th>
                                <th>Appointment ID</th>
                                <th>Bill ID</th>
                                <th>Amount</th>
                                <th>Approved By</th>

                                <th>Status</th>
                            </tr>
                            {
                                props.transactions.map((transaction, index) => {
                                    return (
                                        <tr key={index}>
                                            <td key="1">{transaction.transactionId}</td>
                                            <td key="2">{transaction.transactionCompletionTime}</td>
                                            <td key="3">{transaction.appointmentId}</td>
                                            <td key="4">{transaction.bill.id}</td>
                                            <td key="5">{transaction.bill.fee}</td>
                                            <td key="6">{transaction.staffName}</td>
                                            <td key="7">{transaction.transactionStatus}</td>
                                        </tr>
                                    )
                                })
                            }
                        </table>

                    </Row> :
                    <h6>No Coverages</h6>
            }

        </Container>
    )
}

export default Transactions;