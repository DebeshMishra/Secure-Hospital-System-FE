import { SERVER_URL } from '../helpers/Constants';

const axios = require('axios');

export const loginAPI = async (data) => {
    const response = await axios.post(SERVER_URL + '/api/auth/login', data, {
        headers: {
            'Accept': "application/json",
            "Content-Type": "application/json",
        },
    });

    return response;
}

export const getUserByEmailId = async (data, jwtToken) => {
    const response = await axios.get(SERVER_URL + '/api/users/getUserByEmailId?emailId=' + data, {
        headers: {
            'Accept': "application/json",
            "Content-Type": "application/json",
        },
    })
    return response.data;
}


export const registerUser = async (data) => {
    const response = await axios.post(SERVER_URL + '/api/auth/register', data, {
        headers: {
            'Accept': "application/json",
            "Content-Type": "application/json",
        },
    })
    return response;
}

export const updateUserByEmailId = async (data) => {
    const response = await axios.post(SERVER_URL + '/api/users/updateUserByEmailId',  data, {
        headers: {
            'Accept': "application/json",
            "Content-Type": "application/json",
        },
    })
    return response;
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