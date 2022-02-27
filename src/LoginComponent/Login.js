import React, { useEffect, useState } from "react";
import "./Login.css";
import { loginAPI } from "../services/authentication.service";
import { setUserData, removeUserData, setUserToken } from "../features/user";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";


const Login = (props) => {
    const [data, setData] = useState({ email: "", password: "" })
    const [token, setToken] = useState(undefined)
    const user = useSelector((state) => state.user)
    const dispatch = useDispatch();
    let navigate = useNavigate();

    //   const postData = async () => {
    //     const response = await fetch('http://localhost:8080/api/auth/login', {
    //         method: 'post',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //             "email": "spapani@asu.edu",
    //             "password": "Charan@123"
    //           })
    //     },
    //     );
    //     return response.json();

    // }

    const handleSubmit = async (e) => {
        e.preventDefault();
        // TODO API Login Data to backend.
        console.log(data);

        loginAPI(data).then(response => {
            setToken(response.data.token)
        });
    }

    useEffect(() => {
        if (token != undefined) {
            dispatch(setUserData({ userData: { email: data.email, role: "ADMIN" } }))
            dispatch(setUserToken({ jwtToken: token }))
            console.log(user);
            navigate('/dashboard')
        }
    }, [token])

    const handleChange = (e) => {
        const newdata = { ...data };
        newdata[e.target.id] = e.target.value;
        setData(newdata);
        console.log(data);
    };

    if (user.isLoggedIn) {
        navigate('/dashboard')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Email</label>
                    <br />
                    <input type="email"
                        className="form-control"
                        placeholder="Enter email"
                        id="email"
                        value={data.email}
                        onChange={handleChange} />
                </div>
                <br />
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
                >Sign in
                </button>
            </form>
        </div>
    )
}
export default Login
