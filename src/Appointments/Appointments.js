  import React, { useState } from "react";
  import "./Appointments.css"
  import { Link } from "react-router-dom";


  const Appointments = (props) => {
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
                    <label>First Name</label>
                    <br />
                    <input type="text" 
                    className="form-control" 
                    placeholder="Enter first name"
                    id="firstname"
                    value={data.firstname} 
                    onChange={handleChange}/>
                </div>
                <br />
                <div className="form-group">
                    <label>Last Name</label>
                    <br />
                    <input type="text" 
                    className="form-control" 
                    placeholder="Enter last name"
                    id="lastname"
                    value={data.lastname} 
                    onChange={handleChange}/>
                </div>
                <br />
                <div className="form-group">
                    <label>Appointment Type</label>
                    <br />
                    <select>
                        <option selected value="SelectAppoointmentType">Select appointment type</option>
                        <option value="General">General</option>
                        <option value="Specific">Specific</option>
                    </select>
                </div>
                <br />
                




                  
                <button type="submit" className="btn btn-dark btn-lg btn-block" onSubmit={handleSubmit}>Submit</button>
              </form>
          </div>
      )
  }
  export default Appointments
  