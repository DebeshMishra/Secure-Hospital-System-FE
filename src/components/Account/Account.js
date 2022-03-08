import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./styles.css";

function Account() {
  let navigate = useNavigate();
  const showForm = () => {
    navigate("/editAccount");
  };

  const [data, setData] = useState([]);

  return (
    <div>
      <h3>Account Details</h3>
      <div className="form-group">
        <label>First name</label>
        <input
          readOnly
          id="firstname"
          className="form-control"
          value={data.firstname}
        />
      </div>
      <div className="form-group">
        <label>Last name</label>
        <input
          readOnly
          id="lastname"
          className="form-control"
          value={data.lastname}
        />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          readOnly
          id="email"
          className="form-control"
          value={data.email}
        />
      </div>
      <div className="form-group">
        <label>Phone</label>
        <input
          readOnly
          id="phone"
          className="form-control"
          value={data.phone}
        />
      </div>
      <br />

      <div className="button-section">
        <button
          type="button"
          className="btn btn-dark btn-lg btn-block"
          onClick={showForm}>
          Edit
        </button>
      </div>
    </div>
  );
}

export default Account;
