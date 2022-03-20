const axios = require('axios');

const SERVER_URL = "http://localhost:8080";

export const getUsersByQuery = async (data) => {
    console.log(data)
    const response = await axios.get(SERVER_URL + '/api/admin/getAllUsers?searchTerm=' + data, {
        headers: {
            'Accept': "application/json",
            "Content-Type": "application/json", 
        },
    })
    return response.data;
}

export const editUsers = async (data) => {
    console.log(data)
    const response = await axios.post('http://127.0.0.1:8080/api/users/' + data, {
        headers: {
            'Accept': "application/json",
            "Content-Type": "application/json",
        },
    })
    return response.data;
}

export const deleteUsers = async (data) => {
    console.log(data)
    const response = await axios.post('http://127.0.0.1:8080/api/users/' + data, {
        headers: {
            'Accept': "application/json",
            "Content-Type": "application/json",
        },
    })
    return response.data;
} 