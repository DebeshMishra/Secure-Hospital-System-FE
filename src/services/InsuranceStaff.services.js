
const axios = require('axios');

const SERVER_URL = "http://localhost:8080";

export const getCoverages = async () => {
    const response = await axios.get(SERVER_URL + '/api/coverages/getCoverages', {
        headers: {
            'Accept': "application/json",
            "Content-Type": "application/json",
        },
    })

    return response;
}

export const createCoverage = async (data) => {
    const response = await axios.post(SERVER_URL + '/api/coverages/createCoverage', data, {
        headers: {
            'Accept': "application/json",
            "Content-Type": "application/json",
        },
    })
    return response;
}

export const createPolicy = async (data) => {
    const response = await axios.post(SERVER_URL + '/api/insurance/createPolicy', data, {
        headers: {
            'Accept': "application/json",
            "Content-Type": "application/json",
        },
    })
    return response.data;
}

export const getPolicies = async () => {
    const response = await axios.get(SERVER_URL + '/api/insurance/getAllPolicies', {
        headers: {
            'Accept': "application/json",
            "Content-Type": "application/json",
        },
    })

    return response;
}