import React, { useEffect, useMemo, useState } from "react";
import Table from "../../Table/table.js";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";



const LabTestReports = (props) => {
    const [data, setData] = useState({ query: "" });
    const [rowData, setRowData] = useState([]);
    //const [tableData, setTableData] = useState([])
    const editableUserInfo = useSelector((state) => state.editableUser);

    const dispatch = useDispatch();
    let navigate = useNavigate();

    const updateRowOnClick = (rowInfo) => {
        console.log(rowInfo)
        navigate("/updateLabTestReport", { state: rowInfo })
    }

    const deleteOnClick = (rowInfo) => {
        
    }

    const createReport = () => {
        navigate("/createLabTestReport")
    }

    useEffect(() => {
        //Get Lab Reports Here
    }, []);

    //Placeholder Data
    let tableData = useMemo(() => [
        {
            reportID: '0',
            lastName: 'Parrish',
            firstName: 'Kim',
            lab_Test_Fee: 1000.19,
            lab_Result_Status: "Complete",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempor diam est. Cras semper pharetra augue vehicula gravida. Cras semper eget lectus eu maximus. Etiam pharetra, magna posuere maximus placerat, velit mauris tristique est, eget ornare ex justo vel ex. Pellentesque tortor elit, pulvinar eget porta eget, dapibus ac felis. In tempus tempor lectus eu tempus. Aliquam odio libero, consequat sit amet ullamcorper venenatis, porta eu nibh. Suspendisse consectetur tincidunt maximus. Quisque ac mi quis dui suscipit rhoncus non sit amet ipsum. Ut velit ligula, aliquet in diam ut, feugiat mollis ante. Pellentesque ultricies mauris mauris, ut suscipit tortor rhoncus id. Nulla ante orci, varius sed finibus at, eleifend vitae arcu. Suspendisse potenti. Suspendisse id placerat magna, eget vulputate augue. Mauris dui augue, scelerisque in nisl sit amet, aliquam egestas urna. Cras iaculis ante sem, vulputate fermentum turpis vulputate quis."
        },
        {
            reportID: '1',
            lastName: 'Smith',
            firstName: 'John',
            lab_Test_Fee: 2000.19,
            lab_Result_Status: "Complete",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempor diam est. Cras semper pharetra augue vehicula gravida. Cras semper eget lectus eu maximus. Etiam pharetra, magna posuere maximus placerat, velit mauris tristique est, eget ornare ex justo vel ex. Pellentesque tortor elit, pulvinar eget porta eget, dapibus ac felis. In tempus tempor lectus eu tempus. Aliquam odio libero, consequat sit amet ullamcorper venenatis, porta eu nibh. Suspendisse consectetur tincidunt maximus. Quisque ac mi quis dui suscipit rhoncus non sit amet ipsum. Ut velit ligula, aliquet in diam ut, feugiat mollis ante. Pellentesque ultricies mauris mauris, ut suscipit tortor rhoncus id. Nulla ante orci, varius sed finibus at, eleifend vitae arcu. Suspendisse potenti. Suspendisse id placerat magna, eget vulputate augue. Mauris dui augue, scelerisque in nisl sit amet, aliquam egestas urna. Cras iaculis ante sem, vulputate fermentum turpis vulputate quis."
        },
        {
            reportID: '2',
            lastName: 'Doe',
            firstName: 'John',
            lab_Test_Fee: 399.99,
            lab_Result_Status: "Complete",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempor diam est. Cras semper pharetra augue vehicula gravida. Cras semper eget lectus eu maximus. Etiam pharetra, magna posuere maximus placerat, velit mauris tristique est, eget ornare ex justo vel ex. Pellentesque tortor elit, pulvinar eget porta eget, dapibus ac felis. In tempus tempor lectus eu tempus. Aliquam odio libero, consequat sit amet ullamcorper venenatis, porta eu nibh. Suspendisse consectetur tincidunt maximus. Quisque ac mi quis dui suscipit rhoncus non sit amet ipsum. Ut velit ligula, aliquet in diam ut, feugiat mollis ante. Pellentesque ultricies mauris mauris, ut suscipit tortor rhoncus id. Nulla ante orci, varius sed finibus at, eleifend vitae arcu. Suspendisse potenti. Suspendisse id placerat magna, eget vulputate augue. Mauris dui augue, scelerisque in nisl sit amet, aliquam egestas urna. Cras iaculis ante sem, vulputate fermentum turpis vulputate quis."
        },
        {
            reportID: '3',
            lastName: 'Doe',
            firstName: 'Jane',
            lab_Test_Fee: 188.88,
            lab_Result_Status: "Complete",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempor diam est. Cras semper pharetra augue vehicula gravida. Cras semper eget lectus eu maximus. Etiam pharetra, magna posuere maximus placerat, velit mauris tristique est, eget ornare ex justo vel ex. Pellentesque tortor elit, pulvinar eget porta eget, dapibus ac felis. In tempus tempor lectus eu tempus. Aliquam odio libero, consequat sit amet ullamcorper venenatis, porta eu nibh. Suspendisse consectetur tincidunt maximus. Quisque ac mi quis dui suscipit rhoncus non sit amet ipsum. Ut velit ligula, aliquet in diam ut, feugiat mollis ante. Pellentesque ultricies mauris mauris, ut suscipit tortor rhoncus id. Nulla ante orci, varius sed finibus at, eleifend vitae arcu. Suspendisse potenti. Suspendisse id placerat magna, eget vulputate augue. Mauris dui augue, scelerisque in nisl sit amet, aliquam egestas urna. Cras iaculis ante sem, vulputate fermentum turpis vulputate quis."
        },
        {
            reportID: '4',
            lastName: 'Castle',
            firstName: 'Frank',
            lab_Test_Fee: 333.33,
            lab_Result_Status: "Incomplete",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempor diam est. Cras semper pharetra augue vehicula gravida. Cras semper eget lectus eu maximus. Etiam pharetra, magna posuere maximus placerat, velit mauris tristique est, eget ornare ex justo vel ex. Pellentesque tortor elit, pulvinar eget porta eget, dapibus ac felis. In tempus tempor lectus eu tempus. Aliquam odio libero, consequat sit amet ullamcorper venenatis, porta eu nibh. Suspendisse consectetur tincidunt maximus. Quisque ac mi quis dui suscipit rhoncus non sit amet ipsum. Ut velit ligula, aliquet in diam ut, feugiat mollis ante. Pellentesque ultricies mauris mauris, ut suscipit tortor rhoncus id. Nulla ante orci, varius sed finibus at, eleifend vitae arcu. Suspendisse potenti. Suspendisse id placerat magna, eget vulputate augue. Mauris dui augue, scelerisque in nisl sit amet, aliquam egestas urna. Cras iaculis ante sem, vulputate fermentum turpis vulputate quis."
        },
        {
            reportID: '5',
            lastName: 'Allen',
            firstName: 'Barry',
            lab_Test_Fee: 999.99,
            lab_Result_Status: "Complete",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempor diam est. Cras semper pharetra augue vehicula gravida. Cras semper eget lectus eu maximus. Etiam pharetra, magna posuere maximus placerat, velit mauris tristique est, eget ornare ex justo vel ex. Pellentesque tortor elit, pulvinar eget porta eget, dapibus ac felis. In tempus tempor lectus eu tempus. Aliquam odio libero, consequat sit amet ullamcorper venenatis, porta eu nibh. Suspendisse consectetur tincidunt maximus. Quisque ac mi quis dui suscipit rhoncus non sit amet ipsum. Ut velit ligula, aliquet in diam ut, feugiat mollis ante. Pellentesque ultricies mauris mauris, ut suscipit tortor rhoncus id. Nulla ante orci, varius sed finibus at, eleifend vitae arcu. Suspendisse potenti. Suspendisse id placerat magna, eget vulputate augue. Mauris dui augue, scelerisque in nisl sit amet, aliquam egestas urna. Cras iaculis ante sem, vulputate fermentum turpis vulputate quis."
        },
        {
            reportID: '6',
            lastName: 'obscenely',
            firstName: 'random',
            lab_Test_Fee: 444.44,
            lab_Result_Status: "Incomplete",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempor diam est. Cras semper pharetra augue vehicula gravida. Cras semper eget lectus eu maximus. Etiam pharetra, magna posuere maximus placerat, velit mauris tristique est, eget ornare ex justo vel ex. Pellentesque tortor elit, pulvinar eget porta eget, dapibus ac felis. In tempus tempor lectus eu tempus. Aliquam odio libero, consequat sit amet ullamcorper venenatis, porta eu nibh. Suspendisse consectetur tincidunt maximus. Quisque ac mi quis dui suscipit rhoncus non sit amet ipsum. Ut velit ligula, aliquet in diam ut, feugiat mollis ante. Pellentesque ultricies mauris mauris, ut suscipit tortor rhoncus id. Nulla ante orci, varius sed finibus at, eleifend vitae arcu. Suspendisse potenti. Suspendisse id placerat magna, eget vulputate augue. Mauris dui augue, scelerisque in nisl sit amet, aliquam egestas urna. Cras iaculis ante sem, vulputate fermentum turpis vulputate quis."
        },
    ])

    const columns = useMemo(() => [
        {
            Header: 'Report ID',
            accessor: 'reportID'
        },
        {
            Header: 'Last Name',
            accessor: 'lastName'
        },
        {
            Header: 'First Name',
            accessor: 'firstName'
        },
        {
            Header: 'Fee',
            accessor: 'lab_Test_Fee'
        },
        {
            Header: 'Status',
            accessor: 'lab_Result_Status'
        },
        {
            Header: 'Details',
            accessor: 'details',
        },
        {
            Header: 'Manage Reports',
            accessor: 'manage',
            Cell: ({ cell }) => (
                <div>
                    <button id="Update" onClick={() => updateRowOnClick(cell.row.values)} >
                        Update
                    </button>
                    &nbsp;&nbsp;&nbsp;
                    <button id="block" onClick={() => deleteOnClick(cell.row.values)}>
                        Delete
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
                        className="btn btn-dark btn-lg btn-block">
                        Search
                    </button>
                    &nbsp;&nbsp;&nbsp;
                    <button type="button"
                        className="btn btn-dark btn-lg btn-block" onClick={() => createReport()} >
                        Create
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
                <Table columns={columns} data={tableData} />
            </div>
            <br />

            <br />
            <br />
        </div>
    )
}
export default LabTestReports