import './Appointments.css';
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
    Tabs,
    Tab
} from "react-bootstrap";
import { Navigate } from "react-router";
import React, { useEffect, useState } from "react";
import PastAppointments from './PastAppointments/PastAppointments';
import CurrentAppointments from './CurrentAppointments/CurrentAppointments';
import CreateAppointment from './CreateAppointment/CreateAppointment';

function Appointments() {


    const [key, setKey] = useState('Current');

    const [cookies, setCookie, removeCookie] = useCookies([
        "JWTToken",
        "emailId",
    ]);
    const userInfo = useSelector((state) => state.user);

    return (
        <Container>
            <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3"
            >
                <Tab eventKey="Current" title="Current Appointments">
                    <CurrentAppointments />
                </Tab>
                <Tab eventKey="Past" title="Past Appointments">
                    <PastAppointments />
                </Tab>
                {userInfo.userData.role && userInfo.userData.role==="PATIENT" && <Tab eventKey="Book" title="Book Appointment">
                    <CreateAppointment />
                </Tab>}
            </Tabs>
        </Container>


    )
}

export default Appointments;