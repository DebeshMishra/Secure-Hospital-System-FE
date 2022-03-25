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
import { getCoverages } from "../../../services/InsuranceStaff.services";
import './Coverages.css';
import CreateCoverage from './CreateCoverage/CreateCoverage';

function Coverages() {

    const [coverages, setCoverages] = useState([]);
    // cosnt [isCoverageAdded, setIsCoverageAdded] = userState(false);

    const [cookies, setCookie, removeCookie] = useCookies([
        "JWTToken",
        "emailId",
    ]);
    const userInfo = useSelector((state) => state.user);

    // needs API integration
    useEffect(() => {
        getCoverages().then(response => {
            setCoverages(response.data)
            console.log(coverages);
        });
    }, [])

    const triggerBECall = (e) => {
        if(e){
            getCoverages().then(response => {
                setCoverages(response.data)
                console.log(coverages);
            });
        }
    };

    // const coverages = [
    //     {
    //         coverageName: "hello",
    //         description: "skdjbsk"
    //     },
    //     {
    //         coverageName: "hello",
    //         description: "skdjbsk"
    //     }
    // ]

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
                                        <tr key={index}>
                                            <td key={1}>{index+1}</td>
                                            <td key={2}>{coverage.coverageName}</td>
                                            <td key={3}> {coverage.description}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                </Col>
                <Col md="4" className="border-c">
                    <CreateCoverage onSubmitted={triggerBECall}/>
                </Col>
            </Row>


        </div>
    )
}

export default Coverages;