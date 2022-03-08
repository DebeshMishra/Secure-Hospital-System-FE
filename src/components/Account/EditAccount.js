import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import "./styles.css";

function EditAccount() {
  const [data, setData] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // TODO API signUp Data to backend.
    alert(data);
    console.log(data);
  };

  const handleChange = (e) => {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
  };

  let navigate = useNavigate();
  const showForm = () => {
    navigate("/account");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Edit Details</h3>
        <div className="form-group">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            id="firstname"
            value={data.firstname}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Last name</label>
          <input
            type="text"
            className="form-control"
            id="lastname"
            value={data.lastname}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={data.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input
            type="text"
            className="form-control"
            id="phone"
            value={data.phone}
            onChange={handleChange}
          />
        </div>
        <br />
        <div className="button-section">
          <button type="submit" className="btn btn-dark btn-lg btn-block">
            Submit
          </button>
          <button
            type="button"
            className="btn btn-dark btn-lg btn-block"
            onClick={showForm}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditAccount;
