import React, { useState } from "react";
import "./signup.css"
import { Link } from "react-router-dom";

const Signup = (props) => {
    const [data, setData] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault();
        // TODO API signUp Data to backend.
        alert(data);
        console.log(data);
    }

    const handleChange = (e) => {
        const newdata = { ...data };
        newdata[e.target.id] = e.target.value;
        setData(newdata);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h3>Register</h3>
                <div className="form-group">
                    <label>First name</label>
                    <input type="text"
                        className="form-control"
                        placeholder="First name"
                        id="firstname"
                        value={data.firstname}
                        onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Last name</label>
                    <input type="text"
                        className="form-control"
                        placeholder="Last name"
                        id="lastname"
                        value={data.lastname}
                        onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email"
                        className="form-control"
                        placeholder="Enter email"
                        id="email"
                        value={data.email}
                        onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password"
                        className="form-control"
                        placeholder="Enter password"
                        id="password"
                        value={data.password}
                        onChange={handleChange} />
                </div>
                <br />
                <button type="submit"
                    className="btn btn-dark btn-lg btn-block">
                    Register
                </button>
            </form>
        </div>
    )
}
export default Signup
