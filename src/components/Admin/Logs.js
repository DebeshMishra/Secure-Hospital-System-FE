import React from "react";
import "./Logs.css";
import axios from "axios";
import { useState, useEffect } from "react";

const Logs = () => {
  const get_url = "http://localhost:8080/api/logs/getAllLogs";

  const [tlogs, setTlogs] = useState([]);
  const [searchvalue, setSearchvalue] = useState("");
 

  useEffect(() => {
    getTabledata();
  }, []);

  const getTabledata = () => {
    axios
      .get(get_url, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then(function (response) {
        if (response.status === 200) {
          let logtable = response.data;
          setTlogs(logtable);
        }
      })
      .catch((error) => console.error(`Error: ${error}`));
  };
  return (
    <div className="container mt-5">
      <div class="input-group mb-3">
  <input type="search" class="form-control" placeholder="Search" value={searchvalue}
  onChange={(e)=>{setSearchvalue(e.target.value)}} />
</div>
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>User ID</th>
            <th>User Email</th>
            <th>Date</th>
            <th>Local Time</th>
          </tr>
        </thead>
        <tbody>
          {tlogs.filter((val)=>{
            if(searchvalue===""){
              return val;
            }else if(
              val.user_email.toLowerCase().includes(searchvalue)||
              val.id.toString().includes(searchvalue)||
              //val.user_id.toString().includes(searchvalue)
              val.date.toString().includes(searchvalue)||
              val.localTime.toString().includes(searchvalue)
              ){
                return val;
              }
          }).map((user, id) => (
            <tr key={id}>
              <td>{user.id}</td>
              <td>{user.user_id}</td>
              <td>{user.user_email}</td>
              <td>{user.date}</td>
              <td>{user.localTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Logs;


