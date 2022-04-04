
import './PatientRecord.css'
import { useLocation } from 'react-router';

import { Accordion, Container } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { getAllBills, getAllTransactions, getUserById } from '../../../services/users.service';
import UserInformation from '../UserInformation/UserInformaton';
import Appointments from '../Appointments/Appointments';
import { getAllLabTests } from '../../../services/LabTests.services';
import LabReports from '../LabReports/LabReports';
import Policy from '../Policies/Policy';
import Claims from '../Claims/Claims';
import Bills from '../Bills/Bills';
import Transactions from '../Transactions/Transactions';


function PatientRecord(props) {
    
    const [userData, setuserData] = useState(null)
    // const [labResults, setLabResults] = useState(null);
    const { state } = useLocation();
    const { userId } = state;
    const [bills, setBills] = useState([])
    const [transactions, setTransactions] = useState([])

    useEffect(() => {
        getUserById(userId).then(response => {
            response.appointments.sort(function(a, b) {
                // const keyA = new Date(a.date);
                // const keyB = new Date(b.date);
                const keyA = a.id;
                const keyB = b.id;
                // Compare the 2 dates
                if (keyA < keyB) return -1;
                if (keyA > keyB) return 1;

                return 0;
              });
            setuserData(response);
            const tran = [];
            getAllTransactions(response.id).then(resp => {
                setTransactions(resp);
            });

            getAllBills(response.id).then(response => {
                setBills(response);
            })
         
            
        });
        
    }, []);

    return (
        <Container >
            <h3 className='parent'>Patient Record</h3>
            {
                <Accordion defaultActiveKey={['0']} alwaysOpen flush>
                    <Accordion.Item eventKey="0" >
                        <Accordion.Header>User Information</Accordion.Header>
                        <Accordion.Body>
                        { userData !== null ? 
                            <UserInformation userInformation={userData} />: <b className='red'>No user Data available!</b>}
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Appointments</Accordion.Header>
                        <Accordion.Body>
                        {(userData == null || userData.appointments.length == 0 ) ? <b className='red'>No Appointments available!</b>: <Appointments appointments = {userData.appointments}/>}
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>Lab Reports</Accordion.Header>
                        <Accordion.Body>
                        {userData == null? <b className='red'>No LabReports available!</b> : <LabReports patientId = {userData.id}/>}
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>Claims</Accordion.Header>
                        <Accordion.Body>
                        {userData == null || userData.policies == null || userData.policies.length == 0 || userData.claims == null || userData.claims.length == 0 ? <b className='red'>No Policies taken!</b> : <Claims policies={userData.policies} claims={userData.claims}/>}
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                        <Accordion.Header>Policies</Accordion.Header>
                        <Accordion.Body>
                        {userData == null || userData.policies == null? <b className='red'>No Policies taken!</b> : <Policy policies={userData.policies}/>}
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="6">
                        <Accordion.Header> Bills</Accordion.Header>
                        <Accordion.Body>
                        {bills == null? <b className='red'>No bills present!</b> : <Bills bills={bills}/>}
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="7">
                        <Accordion.Header> Transactions</Accordion.Header>
                        <Accordion.Body>
                        {transactions == null || transactions.length ==0 ? <b className='red'>No Transactions present!</b> : <Transactions transactions={transactions}/>}
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            }
        </Container>

    )

}

export default PatientRecord;