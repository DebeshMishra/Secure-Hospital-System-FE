
import {
    Form,
    Row,
    Container,
    Col,
    InputGroup,
    FormControl,
    Button,
    DropdownButton,
    Dropdown,
    Table
} from "react-bootstrap";
import './Coverages.css';
import CreateCoverage from './CreateCoverage/CreateCoverage';

function Coverages() {

    // needs API integration

    const coverages = [
        {
            coverageName: "hello",
            description: "skdjbsk"
        },
        {
            coverageName: "hello",
            description: "skdjbsk"
        }
    ]

    return (
        <div className="coveragesParent">
            <Row className="justify-content-md-center header">
                <Col md="8">
                    <h3>Coverages</h3>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Sno</th>
                                <th>Coverage Name</th>
                                <th>Coverage Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                coverages.map((coverage, index) => {
                                    return (
                                        <tr>
                                            <td>{index+1}</td>
                                            <td>{coverage.coverageName}</td>
                                            <td>{coverage.description}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                </Col>
                <Col md="4" className="border-c">
                    <CreateCoverage />
                </Col>
            </Row>


        </div>
    )
}

export default Coverages;