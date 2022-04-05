import './createPolicy.css'
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

import {
    Form,
    Row,
    Container,
    Col,
    FormControl,
    Button,
    DropdownButton,
    Dropdown,
} from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { createPolicy, getCoverages } from '../../../../services/InsuranceStaff.services';

function CreatePolicy(props) {

    // Validation are pending.

    const [policyData, setPolicyData] = useState({coverages : [], policyType: "BASIC"});
    const [coverages, setCoverages] = useState([]);
    const [submit, setSubmit] = useState(false);

    const [cookies, setCookie, removeCookie] = useCookies([
        "JWTToken",
        "emailId",
    ]);
    const userInfo = useSelector((state) => state.user);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(policyData.coverages.length == 0){
            alert("need atleast one coverage!");
            return;
        }
        setSubmit(true);
        const newData = {...policyData}
        Object.keys(newData).forEach(key => {
            if(key != 'coverages')
                newData[key] = newData[key].trim();
        })
        createPolicy(newData).then(response => {
            alert("Policy Created Successfully!");
            props.onSubmitted(true);
            setSubmit(false);
        }, error => {
            alert("some error creating the policy!");
            setSubmit(false)
        })
    };

    const handleChange = (e) => {
        const newdata = { ...policyData };
        newdata[e.target.id] = e.target.value;
        setPolicyData(newdata);
    };


    const handleChangeCheckBox = (e) => {
        if(e.target.checked){
            const newdata = { ...policyData };
            newdata['coverages'].push(e.target.name);
            setPolicyData(newdata);
        }else{
            const newdata = { ...policyData };
            const index = newdata['coverages'].indexOf(e.target.name);
            if (index > -1) {
                newdata['coverages'].splice(index, 1); // 2nd parameter means remove one item only
            }
            setPolicyData(newdata);
        }
    };
    

    useEffect(() => {
        getCoverages().then(response => {
            setCoverages(response.data)
        });
    }, []);

    return (
        <Container>
            <Row className="justify-content-md-center header">
                <h3>Create Policy</h3>
                <p>Policy Name has to be Unique!</p>
            </Row>
            <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group>
                        <Form.Label id="basic-addon1" className='label-css'>Policy Name: </Form.Label>
                        <FormControl
                            placeholder="Policy Name"
                            aria-label="Policy Name"
                            id="policyName"
                            minLength={3}
                            autoComplete="off"
                            value={policyData.policyName}
                            onChange={handleChange}
                            required
                            type="text"
                        />
                    </Form.Group>
                </Row>
                {/* policyType has to be a dropdown and should be fetch used an API */}
                <Row className="justify-content-md-center mb-3">
                    <Form.Group>
                        <Form.Label id="basic-addon1" className='label-css'>Select policy Type</Form.Label>
                        <Form.Select
                            aria-label="Default select example"
                            value={policyData.policyType}
                            id="policyType"
                            required
                            onChange={handleChange}
                        >
                            <option>Select Policy Type</option>
                            <option value="BASIC" selected>Basic</option>
                            <option value="PREMIUM">Premium</option>
                        </Form.Select>
                    </Form.Group>
                </Row>
                <Row className="justify-content-md-center mb-3">
                    <Form.Group>
                        <Form.Label id="basic-addon1" className='label-css'>Maximum Amount</Form.Label>
                        <FormControl
                            placeholder="Maximum Amount"
                            aria-label="Maximum Amount"
                            id="policyClaimMaximumAmt"
                            autoComplete="off"
                            value={policyData.policyClaimMaximumAmt}
                            onChange={handleChange}
                            required
                            type="number"
                        />
                    </Form.Group>
                </Row>
                <Row className="justify-content-md-center mb-3">
                    <Form.Group>
                        <Form.Label id="basic-addon1" className='label-css'>Insurance Company Name</Form.Label>
                        <FormControl
                            placeholder="Insurance Company Name"
                            aria-label="Insurance Company Name"
                            autoComplete="off"
                            id="insuranceProviderName"
                            value={policyData.insuranceProviderName}
                            onChange={handleChange}
                            minLength="5"
                            required
                            type="text"
                        />
                    </Form.Group>
                </Row>
                <Row className="justify-content-md-center mb-3">
                    <Form.Group>
                        <Form.Label id="basic-addon1" className='label-css'>Select Coverages</Form.Label>
                        {
                            coverages.map((coverage, index) => {
                                return (
                                <Form.Check
                                    inline
                                    label={coverage.coverageName}
                                    type="checkbox"
                                    name={coverage.coverageName}
                                    id={`coverages-${coverage.coverageName}`}
                                    onChange={handleChangeCheckBox}
                                />)
                            })
                        }
                    </Form.Group>
                </Row>
                <Row className="justify-content-md-center mb-3">
                    <Form.Group className="mb-3">
                        <Button variant="primary" disabled={submit} type="submit" className="submit-button">
                            Submit
                        </Button>
                    </Form.Group>
                </Row>
            </Form>
        </Container>
    );
}


export default CreatePolicy;