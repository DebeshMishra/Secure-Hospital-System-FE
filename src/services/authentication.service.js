import { Environments } from '../environment';
const axios = require('axios');

// function login(data) {

//     return axios.post('http://localhost:8080/api/auth/login', { 'email': 'spapani@asu.edu', 'password': 'Charan@123' })
//         .then(function (response) {
//             console.log(response);
//             // store user details and jwt token in local storage to keep user logged in between page refreshes
//             window.localStorage.setItem('user', JSON.stringify(response));
//             return response;
//         })
//         .catch(function (error) {
//             console.log(error);
//         });

//     // return fetch('http://localhost:8080/api/auth/login', {
//     //     method: 'POST',
//     //     headers: { 'Content-Type': 'application/json' },
//     //     body: JSON.stringify({'email' : 'spapani@asu.edu', 'password': 'Charan@123'})
//     // })
//     //     .then(user => {
//     //         // store user details and jwt token in local storage to keep user logged in between page refreshes
//     //         window.localStorage.setItem('user', JSON.stringify(user));
//     //         return user;
//     //     });
// }

export const loginAPI = async (data) => {
    const response = await axios.post('http://127.0.0.1:8080/api/auth/login', data, {
        headers: {
            'Accept': "application/json",
            "Content-Type": "application/json",
        },
    })

    return response;
}

export const getUserByEmailId = async (data, jwtToken) => {
    console.log(data)
    const response = await axios.get('http://127.0.0.1:8080/api/users/getUserByEmailId?emailId=' + data, {
        headers: {
            'Accept': "application/json",
            "Content-Type": "application/json",
        },
    })
    return response.data;
}

// function logout() {
//     // remove user from local storage to log user out
//     localStorage.removeItem('user');
// }

// function handleResponse(response) {
//     return response.text().then(text => {
//         const data = text && JSON.parse(text);
//         if (!response.ok) {
//             if (response.status === 401) {
//                 // auto logout if 401 response returned from api
//                 logout();
//                 window.location.reload(true);
//             }

//             const error = (data && data.message) || response.statusText;
//             return Promise.reject(error);
//         }

//         return data;
//     });
// }