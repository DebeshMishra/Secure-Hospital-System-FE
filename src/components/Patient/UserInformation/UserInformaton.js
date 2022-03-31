import { useEffect } from "react";
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
    Tabs,
    Tab
} from "react-bootstrap";
import './UserInformation.css'

function UserInformation(props) {

    const handleSubmit = async (e) => {
        e.preventDefault();
    };

    const handleChange = (e) => {

    };

    useEffect(() => {
        console.log(props);
    }, []);

    return (
        <Container>
            <h3>User Details</h3>
        <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
                <Col md="6">
                <Form.Group>
                    <Form.Label id="basic-addon1" className='label-css'>Patient Name: </Form.Label>
                    <FormControl
                        placeholder="Patient Name"
                        aria-label="Patient Name"
                        id="paitentName"
                        autoComplete="off"
                        value={props.userInformation.firstName + " " + props.userInformation.lastName}
                        required
                        disabled
                        type="text"
                    />
                </Form.Group>
                </Col>
                <Col md="6">
                <Form.Group>
                    <Form.Label id="basic-addon1" className='label-css'>Patient Date of Birth: </Form.Label>
                    <FormControl
                        placeholder="DOB"
                        aria-label="DOB"
                        id="patientDOB"
                        autoComplete="off"
                        value=""
                        required
                        disabled
                        type="text"
                    />
                </Form.Group>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col md="6">
                <Form.Group>
                    <Form.Label id="basic-addon1" className='label-css'>Phone: </Form.Label>
                    <FormControl
                        placeholder="Phone"
                        aria-label="Phone"
                        id="phone"
                        autoComplete="off"
                        value={props.userInformation.phone}
                        onChange={handleChange}
                        required
                        disabled
                        type="text"
                    />
                </Form.Group>
                </Col>
                <Col md="6">
                <Form.Group>
                    <Form.Label id="basic-addon1" className='label-css'>Email: </Form.Label>
                    <FormControl
                        placeholder="Email"
                        aria-label="Email"
                        id="date"
                        autoComplete="off"
                        value={props.userInformation.email}
                        onChange={handleChange}
                        required
                        disabled
                        type="text"
                    />
                </Form.Group>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col md="6">
                <Form.Group>
                    <Form.Label id="basic-addon1" className='label-css'>UserName: </Form.Label>
                    <FormControl
                        placeholder="User Name"
                        aria-label="User Name"
                        id="startTime"
                        autoComplete="off"
                        value={props.userInformation.username}
                        onChange={handleChange}
                        required
                        disabled
                        type="text"
                    />
                </Form.Group>
                </Col>
                <Col md="6">
                <Form.Group>
                    <Form.Label id="basic-addon1" className='label-css'>Role: </Form.Label>
                    <FormControl
                        placeholder="Role"
                        aria-label="Role"
                        id="fee"
                        autoComplete="off"
                        value={props.userInformation.roles[0].role}
                        onChange={handleChange}
                        required
                        disabled
                        type="text"
                    />
                </Form.Group>
                </Col>
            </Row>
            {/* <Row className="justify-content-md-center mb-3">
                <Col md="3">
                <Form.Group className="mb-3">
                    <DisabilityCheck />
                </Form.Group>
                </Col>
                <Col md="3">
                <Form.Group className="mb-3">
                    <Button variant="primary" type="submit" className="submit-button" >
                        Reject Appointment
                    </Button>
                </Form.Group>
                </Col>
                
            </Row> */}
        </Form>
    </Container>
    )
}


export default UserInformation;