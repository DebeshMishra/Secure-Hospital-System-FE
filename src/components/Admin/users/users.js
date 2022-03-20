import React, { useEffect, useMemo, useState } from "react";
import "./Users.css";
import Table from "../../Table/table.js";
import { getUsersByQuery } from "../../../services/users.service.js";
import { tab } from "@testing-library/user-event/dist/tab";
import {useDispatch } from 'react-redux';


const Users = (props) => {
    const [data, setData] = useState({ query: "" });
    const [rowData, setRowData] = useState("");
    const [tableData, setTableData] = useState([])


    const dispatch = useDispatch();

    const editRowOnClick = (rowInfo) =>{
        setRowData(rowInfo)
        //console.log("edit clicked")
        //console.log(row)
        console.log(rowData)

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
                    <button id="edit" onClick={()=>editRowOnClick(cell.row.values)} >
                    Edit
                    </button>
                    &nbsp;&nbsp;&nbsp;
                    <button id="delete" onClick={()=>deleteRowOnClick(cell.row.values)}>
                    Delete
                    </button>
                </div>


              )
        }
    ])
    //let tableData = useState([]) 
    //place holder data to see formatting of table
    
    


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(data);
        //TODO handle Search API here
        getUsersByQuery(data.query).then(response => {
            dispatch(setTableData(response))});
              
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