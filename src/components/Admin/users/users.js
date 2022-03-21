import React, { useEffect, useMemo, useState } from "react";
import Table from "../../Table/table.js";
import { getUsersByQuery, blockUserByEmailId, unblockUserByEmailId } from "../../../services/users.service.js";
import {useDispatch, useSelector } from 'react-redux';
import { getUserByEmailId } from "../../../services/authentication.service.js";
import { setEditableData } from "../../../features/editableUser.js";
import { useNavigate } from "react-router-dom";



const Users = (props) => {
    const [data, setData] = useState({ query: "" });
    const [rowData, setRowData] = useState([]);
    const [tableData, setTableData] = useState([])
    const editableUserInfo = useSelector((state) => state.editableUser);

    const dispatch = useDispatch();
    let navigate = useNavigate();

    const editRowOnClick = (rowInfo) =>{
        navigate("/editUser", {state: rowInfo})
    }

    const blockOnClick = (rowInfo) =>{
        blockUserByEmailId(rowInfo, data.query).then(response => {
            setTableData(response)
        })
    }

    const unblockOnClick = (rowInfo) =>{
        unblockUserByEmailId(rowInfo, data.query).then(response => {
            setTableData(response)
        })
    }

    useEffect(() => {
        getUsersByQuery("").then(response => {
            setTableData(response)
        })
    },[]);

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
            Header: 'Enabled',
            accessor: e => {
                let str = e.enabled.toString()
                let output = str.substring(0, 1).toUpperCase() + str.substring(1);
                return output;
            }
        },
        {
            Header: 'Phone',
            accessor: 'phone'
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
                    <button id="block" onClick={()=>blockOnClick(cell.row.values)}>
                    Block
                    </button>
                    &nbsp;&nbsp;&nbsp;
                    <button id="block" onClick={()=>unblockOnClick(cell.row.values)}>
                    Unblock
                    </button>
                </div>


              )
        }
    ])
   
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        //console.log(data);
        //TODO handle Search API here
        getUsersByQuery(data.query).then(response => {
            setTableData(response)
        })
              
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
export default Users