import React, { useEffect, useMemo, useState } from "react";
import Table from "../../Table/table.js";
import { blockUserByEmailId, unblockUserByEmailId, getAllUsersByRole } from "../../../services/users.service.js";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { Button, Container } from "react-bootstrap";

const Users = (props) => {
    const [data, setData] = useState({ query: "" });
    const [rowData, setRowData] = useState([]);
    const [tableData, setTableData] = useState([])
    const editableUserInfo = useSelector((state) => state.editableUser);
    const userInfo = useSelector((state) => state.user);

    let navigate = useNavigate();

    const editRowOnClick = (rowInfo) => {
        navigate("/editUser", { state: rowInfo })
    }

    const blockOnClick = (rowInfo) => {
        let r = "";
        if (userInfo.userData.user.roles[0].role != "ADMIN") {
            r = "PATIENT";
        }
        blockUserByEmailId(rowInfo, data.query, r).then(response => {
            alert("User Blocked!");
            setTableData(response)
        })
    }

    const unblockOnClick = (rowInfo) => {
        let r = "";
        if (userInfo.userData.user.roles[0].role != "ADMIN") {
            r = "PATIENT";
        }
        unblockUserByEmailId(rowInfo, data.query, r).then(response => {
            alert("User Activated!");
            setTableData(response)
        })
    }

    useEffect(() => {
        if (userInfo.userData.user.roles[0].role != "ADMIN") {
            getAllUsersByRole("PATIENT", "").then(response => {
                setTableData(response)
            })
        } else {
            getAllUsersByRole("", "").then(response => {
                setTableData(response)
            })
        }

    }, []);

    const viewPatient = (user) => {
        navigate("/userData", { state: { userId: user.id } })
    }

    const columns = useMemo(() => [
        {
            Header: 'Id',
            accessor: 'id'
        },
        {
            Header: 'Role',
            accessor: 'roles[0].role'
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
                    {
                        (userInfo.userData.user.roles[0].role == "HOSPITAL_STAFF" || userInfo.userData.user.roles[0].role == "ADMIN") &&
                        <>
                            <Button id="edit" onClick={() => editRowOnClick(cell.row.values)} >
                                Edit
                            </Button>
                            <span>|</span>
                            <Button id="block" onClick={() => blockOnClick(cell.row.values)}>
                                Block
                            </Button>
                            <span>|</span>
                            <Button id="unblock" onClick={() => unblockOnClick(cell.row.values)}>
                                Unblock
                            </Button>
                        </>
                    }
                   
                    {
                       cell.row.values['roles[0].role'] == "PATIENT" &&
                       <>
                       <span>|</span>
                        <Button id="View User"  onClick={() => viewPatient(cell.row.values)}>
                        {"VIEW All DIAGNOSIS"}
                    </Button>
                       </>
                       
                    }
                    
                </div>


            )
        }
    ])


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (userInfo.userData.user.roles[0].role != "ADMIN") {
            getAllUsersByRole("PATIENT", data.query).then(response => {
                setTableData(response)
            })
        } else {
            getAllUsersByRole("", data.query).then(response => {
                setTableData(response)
            })
        }

    }

    //useEffect(() => {

    //}, )

    const handleChange = (e) => {
        const newdata = { ...data };
        newdata[e.target.id] = e.target.value;
        setData(newdata);
    };

    return (
        <Container>
            <div >
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <br />
                        <input type="string"
                            className="form-control"
                            placeholder="Search"
                            id="query"
                            autoComplete="off"
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
                <Table columns={columns} data={tableData} />
            </div>
        </Container>
    )
}
export default Users;