import React, { useEffect, useMemo, useState } from "react";
import Table from "../../Table/table.js";
import {useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";



const LabTestRequests = (props) => {
    const [data, setData] = useState({ query: "" });
    const [rowData, setRowData] = useState([]);
    //const [tableData, setTableData] = useState([])
    const editableUserInfo = useSelector((state) => state.editableUser);

    const dispatch = useDispatch();
    let navigate = useNavigate();

    const acceptOnClick = (rowInfo) =>{
        
    }

    const denyOnClick = (rowInfo) =>{
        
    }

    useEffect(() => {
        //Get Requests Here
    },[]);

    //Placeholder Data
    let tableData = useMemo(() => [
        {
            reportID: '0',
            lastName: 'Parrish',
            firstName: 'Kim',
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempor diam est. Cras semper pharetra augue vehicula gravida. Cras semper eget lectus eu maximus. Etiam pharetra, magna posuere maximus placerat, velit mauris tristique est, eget ornare ex justo vel ex. Pellentesque tortor elit, pulvinar eget porta eget, dapibus ac felis. In tempus tempor lectus eu tempus. Aliquam odio libero, consequat sit amet ullamcorper venenatis, porta eu nibh. Suspendisse consectetur tincidunt maximus. Quisque ac mi quis dui suscipit rhoncus non sit amet ipsum. Ut velit ligula, aliquet in diam ut, feugiat mollis ante. Pellentesque ultricies mauris mauris, ut suscipit tortor rhoncus id. Nulla ante orci, varius sed finibus at, eleifend vitae arcu. Suspendisse potenti. Suspendisse id placerat magna, eget vulputate augue. Mauris dui augue, scelerisque in nisl sit amet, aliquam egestas urna. Cras iaculis ante sem, vulputate fermentum turpis vulputate quis."
        },
        {
            reportID: '1',
            lastName: 'Smith',
            firstName: 'John',
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempor diam est. Cras semper pharetra augue vehicula gravida. Cras semper eget lectus eu maximus. Etiam pharetra, magna posuere maximus placerat, velit mauris tristique est, eget ornare ex justo vel ex. Pellentesque tortor elit, pulvinar eget porta eget, dapibus ac felis. In tempus tempor lectus eu tempus. Aliquam odio libero, consequat sit amet ullamcorper venenatis, porta eu nibh. Suspendisse consectetur tincidunt maximus. Quisque ac mi quis dui suscipit rhoncus non sit amet ipsum. Ut velit ligula, aliquet in diam ut, feugiat mollis ante. Pellentesque ultricies mauris mauris, ut suscipit tortor rhoncus id. Nulla ante orci, varius sed finibus at, eleifend vitae arcu. Suspendisse potenti. Suspendisse id placerat magna, eget vulputate augue. Mauris dui augue, scelerisque in nisl sit amet, aliquam egestas urna. Cras iaculis ante sem, vulputate fermentum turpis vulputate quis."
        },
        {
            reportID: '2',
            lastName: 'Doe',
            firstName: 'John',
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempor diam est. Cras semper pharetra augue vehicula gravida. Cras semper eget lectus eu maximus. Etiam pharetra, magna posuere maximus placerat, velit mauris tristique est, eget ornare ex justo vel ex. Pellentesque tortor elit, pulvinar eget porta eget, dapibus ac felis. In tempus tempor lectus eu tempus. Aliquam odio libero, consequat sit amet ullamcorper venenatis, porta eu nibh. Suspendisse consectetur tincidunt maximus. Quisque ac mi quis dui suscipit rhoncus non sit amet ipsum. Ut velit ligula, aliquet in diam ut, feugiat mollis ante. Pellentesque ultricies mauris mauris, ut suscipit tortor rhoncus id. Nulla ante orci, varius sed finibus at, eleifend vitae arcu. Suspendisse potenti. Suspendisse id placerat magna, eget vulputate augue. Mauris dui augue, scelerisque in nisl sit amet, aliquam egestas urna. Cras iaculis ante sem, vulputate fermentum turpis vulputate quis."
        },
        {
            reportID: '3',
            lastName: 'Doe',
            firstName: 'Jane',
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempor diam est. Cras semper pharetra augue vehicula gravida. Cras semper eget lectus eu maximus. Etiam pharetra, magna posuere maximus placerat, velit mauris tristique est, eget ornare ex justo vel ex. Pellentesque tortor elit, pulvinar eget porta eget, dapibus ac felis. In tempus tempor lectus eu tempus. Aliquam odio libero, consequat sit amet ullamcorper venenatis, porta eu nibh. Suspendisse consectetur tincidunt maximus. Quisque ac mi quis dui suscipit rhoncus non sit amet ipsum. Ut velit ligula, aliquet in diam ut, feugiat mollis ante. Pellentesque ultricies mauris mauris, ut suscipit tortor rhoncus id. Nulla ante orci, varius sed finibus at, eleifend vitae arcu. Suspendisse potenti. Suspendisse id placerat magna, eget vulputate augue. Mauris dui augue, scelerisque in nisl sit amet, aliquam egestas urna. Cras iaculis ante sem, vulputate fermentum turpis vulputate quis."
        },
        {
            reportID: '4',
            lastName: 'Castle',
            firstName: 'Frank',
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempor diam est. Cras semper pharetra augue vehicula gravida. Cras semper eget lectus eu maximus. Etiam pharetra, magna posuere maximus placerat, velit mauris tristique est, eget ornare ex justo vel ex. Pellentesque tortor elit, pulvinar eget porta eget, dapibus ac felis. In tempus tempor lectus eu tempus. Aliquam odio libero, consequat sit amet ullamcorper venenatis, porta eu nibh. Suspendisse consectetur tincidunt maximus. Quisque ac mi quis dui suscipit rhoncus non sit amet ipsum. Ut velit ligula, aliquet in diam ut, feugiat mollis ante. Pellentesque ultricies mauris mauris, ut suscipit tortor rhoncus id. Nulla ante orci, varius sed finibus at, eleifend vitae arcu. Suspendisse potenti. Suspendisse id placerat magna, eget vulputate augue. Mauris dui augue, scelerisque in nisl sit amet, aliquam egestas urna. Cras iaculis ante sem, vulputate fermentum turpis vulputate quis."
        },
        {
            reportID: '5',
            lastName: 'Allen',
            firstName: 'Barry',
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempor diam est. Cras semper pharetra augue vehicula gravida. Cras semper eget lectus eu maximus. Etiam pharetra, magna posuere maximus placerat, velit mauris tristique est, eget ornare ex justo vel ex. Pellentesque tortor elit, pulvinar eget porta eget, dapibus ac felis. In tempus tempor lectus eu tempus. Aliquam odio libero, consequat sit amet ullamcorper venenatis, porta eu nibh. Suspendisse consectetur tincidunt maximus. Quisque ac mi quis dui suscipit rhoncus non sit amet ipsum. Ut velit ligula, aliquet in diam ut, feugiat mollis ante. Pellentesque ultricies mauris mauris, ut suscipit tortor rhoncus id. Nulla ante orci, varius sed finibus at, eleifend vitae arcu. Suspendisse potenti. Suspendisse id placerat magna, eget vulputate augue. Mauris dui augue, scelerisque in nisl sit amet, aliquam egestas urna. Cras iaculis ante sem, vulputate fermentum turpis vulputate quis."
        },
        {
            reportID: '6',
            lastName: 'obscenely',
            firstName: 'random',
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempor diam est. Cras semper pharetra augue vehicula gravida. Cras semper eget lectus eu maximus. Etiam pharetra, magna posuere maximus placerat, velit mauris tristique est, eget ornare ex justo vel ex. Pellentesque tortor elit, pulvinar eget porta eget, dapibus ac felis. In tempus tempor lectus eu tempus. Aliquam odio libero, consequat sit amet ullamcorper venenatis, porta eu nibh. Suspendisse consectetur tincidunt maximus. Quisque ac mi quis dui suscipit rhoncus non sit amet ipsum. Ut velit ligula, aliquet in diam ut, feugiat mollis ante. Pellentesque ultricies mauris mauris, ut suscipit tortor rhoncus id. Nulla ante orci, varius sed finibus at, eleifend vitae arcu. Suspendisse potenti. Suspendisse id placerat magna, eget vulputate augue. Mauris dui augue, scelerisque in nisl sit amet, aliquam egestas urna. Cras iaculis ante sem, vulputate fermentum turpis vulputate quis."
        },
    ])
    
    const columns = useMemo(() => [
        {
            Header: 'Last Name',
            accessor: 'lastName'
        },
        {
            Header: 'First Name',
            accessor: 'firstName'
        },
        {
            Header: 'Appointment Number',
            accessor: 'appointmentNumber'
        },
        {
            Header: 'Doctor Recommendation',
            /*accessor: r => {
                let str = r.recommended.toString()
                let output = str.substring(0, 1).toUpperCase() + str.substring(1);
                return output;
            }*/
        },
        {
            Header: 'Manage Requests',
            accessor: 'manage',
            Cell: ({ cell }) => (
                <div>
                    <button id="block" onClick={()=>acceptOnClick(cell.row.values)}>
                    Accept
                    </button>
                    &nbsp;&nbsp;&nbsp;
                    <button id="block" onClick={()=>denyOnClick(cell.row.values)}>
                    Deny
                    </button>
                </div>


              )
        }
    ])
   
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        //console.log(data);
        //TODO handle Search API here

              
    }

    //useEffect(() => {

    //}, )

    const handleChange = (e) => {
        const newdata = { ...data };
        newdata[e.target.id] = e.target.value;
        setData(newdata);
        console.log(data);
    };

    return (
        <div>
        <div >
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <br />
                    <input type="string"
                        className="form-control"
                        placeholder="Search"
                        id="query"
                        value={data.query}
                        onChange={handleChange} />
                </div>
                <br />
                <button type="submit"
                    className="btn btn-dark btn-lg btn-block"
                >Search
                </button>
            </form>
            <br />
        </div>
            <div
            style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
            }}>
                <Table columns={columns} data={tableData}/>
            </div>
        </div>
    )
}
export default LabTestRequests