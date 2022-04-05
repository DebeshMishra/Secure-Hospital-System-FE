
import { Container, Row, Col } from "react-bootstrap";

function Bills(props) {

    return (
        <Container>
            {
                (props.bills != null || props.bills?.length > 0)?
                    <Row className="justify-content-md-center">
                        <h5>Bills</h5>
                        <table>
                            <tr>
                                <th>Bill ID</th>
                                <th>Generated time</th>
                                <th>Appointment ID</th>
                                <th>Amount</th>
                                <th>Status</th>
                            </tr>
                            {
                                props.bills.map((bill, index) => {
                                    return (
                                        <tr key={index}>
                                            <td key="1">{bill.billId}</td>
                                            <td key="2">{bill.billGeneratedTime}</td>
                                            <td key="3">{bill.appointmentId}</td>
                                            <td key="4">{bill.fee}</td>
                                            <td key="5">{bill.billStatus}</td>
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

export default Bills;