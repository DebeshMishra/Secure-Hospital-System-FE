import React, { useEffect, useMemo, useState } from "react";
import Table from "../../Table/table.js";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import { getAllLabReports } from "../../../services/LabReports.services.js";

const LabTestReports = (props) => {
  const [data, setData] = useState({ query: "" });
  const [labTests, setLabTests] = useState(null);
  const [rowData, setRowData] = useState([]);
  const [tableData, setTableData] = useState([])
  const editableUserInfo = useSelector((state) => state.editableUser);

  const dispatch = useDispatch();
  let navigate = useNavigate();

  const deleteOnClick = (rowInfo) => {};

  const updateReport = (e) => {
    console.log(e)
    navigate("/updateLabTestReport", {state: { report: e}});
  };

  const viewUser = (e) => {
    console.log(e)
  }

  useEffect(() => {
    getAllLabReports().then(resp => {
      setLabTests(resp.labTest);
      const reports = [];
      resp.labReports.forEach(report => {
        const rep = {...report}
        rep['labTestId'] = resp.labTest[report.labTestId].id;
        rep['labTestName'] = resp.labTest[report.labTestId].labTestName;
        rep['labTestCost'] = resp.labTest[report.labTestId].labTestCost;
        reports.push(rep);
      });
      setTableData(reports);
      console.log(reports);
    });
  }, []);

  const columns = useMemo(() => [
    {
      Header: "Report ID",
      accessor: "id",
    },
    {
      Header: "Patient Name",
      accessor: "patientName",
    },
    {
      Header: "Doctor Name",
      accessor: "doctorName",
    },
    {
      Header: "Staff Name",
      accessor: "labStaffName",
    },
    {
      Header: "LabStaff Notes",
      accessor: "labStaffNotes",
    },
    {
      Header: "Test Id",
      accessor: "labTestId",
    },
    {
      Header: "Test Name",
      accessor: "labTestName",
    },
    {
      Header: "Fee",
      accessor: "labTestCost",
    },
    {
      Header: "Result",
      accessor: "result",
    },
    {
      Header: "Status",
      accessor: "labResultStatus",
    },
    {
      Header: "Manage Reports",
      accessor: "manage",
      Cell: ({ cell }) => (
        <div>
          <button id="Update" disabled={cell.row.values.labResultStatus == "COMPLETED"} onClick={() => updateReport(cell.row.values)}>
            { "Update & Submit"}
          </button>
        </div>
      ),
    },
  ]);

  const handleSubmit = async (e) => {
    e.preventDefault();

  };

  const handleChange = (e) => {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(data);
  };

  return (
    <Container>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <br />
            <input
              type="string"
              className="form-control"
              placeholder="Search"
              id="query"
              value={data.query}
            />
          </div>
          <br />
          <button type="submit" className="btn btn-dark btn-lg btn-block">
            Search
          </button>
        </form>
        <br />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <Table columns={columns} data={tableData} />
      </div>
      <br />

      <br />
      <br />
    </Container>
  );
};
export default LabTestReports;
