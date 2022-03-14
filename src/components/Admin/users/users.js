import React, { useEffect, useMemo, useState } from "react";
import "./Users.css";
import Table from "../../Table/table.js";
import { getUsersByQuery } from "../../../services/users.service.js";



const Users = (props) => {
    const [data, setData] = useState({ query: "" });
    const [rowData, setRowData] = useState("");

    const editRowOnClick = (rowInfo) =>{
        setRowData(rowInfo)
        //console.log("edit clicked")
        //console.log(row)
        //console.log(rowData)

    }

    const deleteRowOnClick = (rowInfo) =>{
        setRowData(rowInfo)
        //console.log("edit clicked")
        //console.log(row)
        //console.log(rowData)

    }

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
            Header: 'Email',
            accessor: 'email'
        },
        {
            Header: 'Manage Users',
            accessor: 'manage',
            Cell: ({ cell }) => (
                <div>
                    <button id="edit" onClick={()=>editRowOnClick(cell.row.values)}>
                    Edit
                    </button>
                    <button id="delete" onClick={()=>deleteRowOnClick(cell.row.values)}>
                    Delete
                    </button>
                </div>


              )
        }
    ])
    //let tableData = useState([]) 
    //place holder data to see formatting of table
    let tableData = useMemo(() => [
        {
            lastName: 'Parrish',
            firstName: 'Kim',
            email: 'kparrish@asu.edu',

        },
        {
            lastName: 'Smith',
            firstName: 'John',
            email: 'jsmith@asu.edu',
        },
        {
            lastName: 'Doe',
            firstName: 'John',
            email: 'jdoe@asu.edu',
        },
        {
            lastName: 'Doe',
            firstName: 'Jane',
            email: 'jdoe2@asu.edu',
        },
        {
            lastName: 'Castle',
            firstName: 'Frank',
            email: 'fcastle@asu.edu',
        },
        {
            lastName: 'Allen',
            firstName: 'Barry',
            email: 'ballen@asu.edu',
        },
        {
            lastName: 'obscenely',
            firstName: 'random',
            email: 'robscenelylongusernameemailpassword@asu.edu',
        },
    ])


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(data);
        console.log(data.email);
        //TODO handle Search API here
        tableData = getUsersByQuery(data)
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
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Search</label>
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
            <Table columns={columns} data={tableData} />

        </div>
    )
}
export default Users