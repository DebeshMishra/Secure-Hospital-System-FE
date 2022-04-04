
import './Policies.css'
import CreatePolicy from '../CreatePolicy/createPolicy';

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
import { Navigate } from "react-router";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { getPolicies } from '../../../../services/InsuranceStaff.services';

function Policies() {

    // API integrations needed
    const [policies, setPolicies] = useState([]);
    // cosnt [isCoverageAdded, setIsCoverageAdded] = userState(false);

    const [cookies, setCookie, removeCookie] = useCookies([
        "JWTToken",
        "emailId",
    ]);
    const userInfo = useSelector((state) => state.user);

    // needs API integration
    useEffect(() => {
        getPolicies().then(response => {
            const newData = response.data;
            newData.forEach((data, index) => {
                const coverages = []
                data['coverages'].map(coverage => {
                    coverages.push(coverage.coverageName);
                })
                newData[index]['coverages'] = coverages.join(', ');
            });
            setPolicies(newData);
        });
    }, [])

    const triggerBECall = (e) => {
        if(e){
            getPolicies().then(response => {
                const newData = response.data;
                newData.forEach((data, index) => {
                    const coverages = []
                    data['coverages'].map(coverage => {
                        coverages.push(coverage.coverageName);
                    })
                    newData[index]['coverages'] = coverages.join(', ');
                });
                setPolicies(newData);
            });
        }
    };

    // const policies = [
    //     {
    //         id: 1,
    //         policyName: "policyName1",
    //         policyType: "policyType1",
    //         policyClaimMaximumAmt: 10000,
    //         InsuranceProviderName: "InsuranceProviderName",
    //         coverages: "Auto, Home owner"
    //     },
    //     {
    //         id: 1,
    //         policyName: "policyName2",
    //         policyType: "policyType2",
    //         policyClaimMaximumAmt: 1000,
    //         InsuranceProviderName: "InsuranceProviderName",
    //         coverages: "Auto"
    //     }
    // ]

    return (
        <div>
        <Row className="justify-content-md-center header">
            <Col md="9">
                <h3>Policies</h3>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Policy Name</th>
                            <th>Policy Type</th>
                            <th>Maximum Claim Amount</th>
                            <th>Insurance Provider</th>
                            <th>Coverages</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            policies.map((policy, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{policy.policyName}</td>
                                        <td>{policy.policyType}</td>
                                        <td>{policy.policyClaimMaximumAmt}</td>
                                        <td>{policy.insuranceProviderName}</td>
                                        <td>{policy.coverages}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </Col>
            <Col md="3" className="border-c">
                <CreatePolicy  onSubmitted={triggerBECall}/>
            </Col>
        </Row>


    </div>
    )
}

export default Policies;