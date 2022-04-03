
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


export const addPolicyToUser = async (patientId, policyId) => {
    const response = await axios.post(SERVER_URL + '/api/insurance/addPolicyToUser?patientId='+patientId+"&policyId="+policyId, {
        headers: {
            'Accept': "application/json",
            "Content-Type": "application/json",
        },
    })

    return response.data;
}


export const getAllPoliciesByuserId = async (patientId) => {
    const response = await axios.get(SERVER_URL + '/api/insurance/getAllPoliciesByuserId?patientId='+patientId, {
        headers: {
            'Accept': "application/json",
            "Content-Type": "application/json",
        },
    })

    return response.data;
}

export const createClaim = async (data) => {
    const response = await axios.post(SERVER_URL + '/api/claims/createClaim', data, {
        headers: {
            'Accept': "application/json",
            "Content-Type": "application/json",
        },
    })

    return response.data;
}


export const getAllClaims = async (data) => {
    const response = await axios.get(SERVER_URL + '/api/claims/getAllClaims', {
        headers: {
            'Accept': "application/json",
            "Content-Type": "application/json",
        },
    })

    return response.data;
}

export const approveClaim = async (claimId) => {
    const response = await axios.get(SERVER_URL + '/api/claims/approveClaim?claimId='+claimId, {
        headers: {
            'Accept': "application/json",
            "Content-Type": "application/json",
        },
    })

    return response.data;
}

export const rejectClaim = async (claimId) => {
    const response = await axios.get(SERVER_URL + '/api/claims/rejectClaim?claimId='+claimId, {
        headers: {
            'Accept': "application/json",
            "Content-Type": "application/json",
        },
    })

    return response.data;
}