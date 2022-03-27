const axios = require('axios');

const SERVER_URL = "http://localhost:8080";

export const getUsersByQuery = async (data) => {
    console.log(data)
    const response = await axios.get(SERVER_URL + '/api/users/getAllUsers?searchTerm=' + data, {
        headers: {
            'Accept': "application/json",
            "Content-Type": "application/json", 
        },
    })
    return response.data;
}

export const getUserByEmailId = async (data) => {
    const response = await axios.get(SERVER_URL + '/api/users/getUserByEmailId?emailId=' + data, {
        headers: {
            'Accept': "application/json",
            "Content-Type": "application/json",
        },
    })
    return response.data;
}

export const blockUserByEmailId = async (data, query) => {
    console.log(data)
    await axios.post(SERVER_URL + '/api/users/blockAccountByEmailId?emailId=' + data.email, {
        headers: {
            'Accept': "application/json",
            "Content-Type": "application/json",
        },
    })
    return getUsersByQuery(query);
}

export const unblockUserByEmailId = async (data, query) => {
    console.log(data)
    await axios.post(SERVER_URL + '/api/users/activateAccountByEmailId?emailId=' +  data.email, {
        headers: {
            'Accept': "application/json",
            "Content-Type": "application/json",
        },
    })
    
    return getUsersByQuery(query);
} 