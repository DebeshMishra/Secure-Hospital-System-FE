  import React, { useState } from "react";
  import "./Login.css"
  import { Link } from "react-router-dom";
  
  const Login = (props) => {
      const [data, setData] = useState([])
  
      const handleSubmit = async (e) => {
          e.preventDefault();
      }

      const handleChange = (e) => {
          const newdata = { ...data };
          newdata[e.target.id] = e.target.value;
          setData(newdata);
        };

      return (
          <div>
              <form>
                  <div className="form-group">
                      <label>Email</label>
                      <br />
                      <input type="email" 
                      className="form-control" 
                      placeholder="Enter email"
                      id="email"
                      value={data.email} 
                      onChange={handleChange}/>
                  </div>
                  <br />
                  <div className="form-group">
                      <label>Password</label>
                      <input type="password" 
                      className="form-control" 
                      placeholder="Enter password"
                      id = "password"
                      value={data.password}
                      onChange={handleChange} />
                  </div>
                  <br />
                  <div className="form-group">
                      <div className="custom-control custom-checkbox">
                          <input type="checkbox" 
                          className="custom-control-input" 
                          id="customCheck1" />
                          <label className="custom-control-label" 
                          htmlFor="customCheck1">
                              Remember me
                              </label>
                      </div>
                  </div>
                  <br />
                  <button type="submit" 
                  className="btn btn-dark btn-lg btn-block"
                  onSubmit={handleSubmit}
                  >Sign in
                  </button>
              </form>
          </div>
      )
  }
  export default Login
  