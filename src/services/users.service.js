

const axios = require('axios');

const SERVER_URL = "http://localhost:8080";

// export const getUsersByQuery = async (data) => {
//     console.log(data)
//     const response = await axios.get(SERVER_URL + '/api/users/getAllUsersBysearchTerm?searchTerm=' + data, {
//         headers: {
//             'Accept': "application/json",
//             "Content-Type": "application/json", 
//         },
//     })
//     return response.data;
// }

export const getUserByEmailId = async (data) => {
    const response = await axios.get(SERVER_URL + '/api/users/getUserByEmailId?emailId=' + data, {
        headers: {
            'Accept': "application/json",
            "Content-Type": "application/json",
        },
    })
    return response.data;
}


export const getUserById = async (data) => {
    const response = await axios.get('http://127.0.0.1:8080/api/users/getUserById?userId=' + data, {
        headers: {
            'Accept': "application/json",
            "Content-Type": "application/json",
        },
    })
    return response.data;
}

export const blockUserByEmailId = async (data, query, role) => {
    console.log(data)
    await axios.post(SERVER_URL + '/api/users/blockAccountByEmailId?emailId=' + data.email, {
        headers: {
            'Accept': "application/json",
            "Content-Type": "application/json",
        },
    })
    return getAllUsersByRole(role, query);
}

export const unblockUserByEmailId = async (data, query, role) => {
    console.log(data)
    await axios.post(SERVER_URL + '/api/users/activateAccountByEmailId?emailId=' +  data.email, {
        headers: {
            'Accept': "application/json",
            "Content-Type": "application/json",
        },
    })
    
    return getAllUsersByRole(role, query);
} 


export const getAllUserByTerm = async (data) => {
    const response = await axios.get('http://127.0.0.1:8080/api/users/getAllUsersBysearchTerm?searchTerm=' + data, {
        headers: {
            'Accept': "application/json",
            "Content-Type": "application/json",
        },
    })
    return response.data;
} 

export const getAllUsersByRole = async (data, searchTerm) => {
    const response = await axios.get('http://127.0.0.1:8080/api/users/getAllUsersByRole?role=' + data +"&searchTerm="+ searchTerm, {
        headers: {
            'Accept': "application/json",
            "Content-Type": "application/json",
        },
    })
    return response.data;
} 

export const getAppointmentTimings = async (data) => {
    const response = await axios.post('http://127.0.0.1:8080/api/appointment/getAvailableSlotsOfDoctor', data, {
        headers: {
            'Accept': "application/json",
            "Content-Type": "application/json",
        },
    })
    return response.data;
} 


export const bookAppointment = async (data) => {
    const response = await axios.post('http://127.0.0.1:8080/api/appointment/bookAppointment', data, {
        headers: {
            'Accept': "application/json",
            "Content-Type": "application/json",
        },
    })
    return response.data;
} 



export const getAllFutureAppointments = async (data) => {
    const response = await axios.get('http://127.0.0.1:8080/api/appointment/getAllFutureAppointments?searchTerm='+data, {
        headers: {
            'Accept': "application/json",
            "Content-Type": "application/json",
        },
    })
    return response.data;
} 

export const getAllPastAppointments = async (data) => {
    const response = await axios.get('http://127.0.0.1:8080/api/appointment/getAllPastAppointments?searchTerm='+data, {
        headers: {
            'Accept': "application/json",
            "Content-Type": "application/json",
        },
    })
    return response.data;
} 

export const cancelAppointment = async (data) => {
    const response = await axios.post('http://127.0.0.1:8080/api/appointment/cancelAppointment?appointmentId='+data, {
        headers: {
            'Accept': "application/json",
            "Content-Type": "application/json",
        },
    })
    return response.data;
} 


export const getAllAvailableSlotOfDoctors = async (data) => {
    const response = await axios.post('http://127.0.0.1:8080/api/appointment/getAllAvailableSlotOfDoctors', data, {
        headers: {
            'Accept': "application/json",
            "Content-Type": "application/json",
        },
    })
    return response.data;
} 


export const getAllAvailableDoctorsForaTimeSlot = async (data) => {
    const response = await axios.post('http://127.0.0.1:8080/api/appointment/getAllAvailableDoctorsForaTimeSlot', data, {
        headers: {
            'Accept': "application/json",
            "Content-Type": "application/json",
        },
    })
    return response.data;
} 


export const updateAppointment = async (data) => {
    const response = await axios.post('http://127.0.0.1:8080/api/appointment/updateAppointment', data, {
        headers: {
            'Accept': "application/json",
            "Content-Type": "application/json",
        },
    })
    return response.data;
} 

export const completeAppointment = async (data) => {
    const response = await axios.post('http://127.0.0.1:8080/api/appointment/completeAppointment?appointmentId='+ data, {
        headers: {
            'Accept': "application/json",
            "Content-Type": "application/json",
        },
    })
    return response.data;
} 


export const createTransaction = async (data) => {
    const response = await axios.post('http://127.0.0.1:8080/api/transaction/createTransaction', data, {
        headers: {
            'Accept': "application/json",
            "Content-Type": "application/json",
        },
    })
    return response.data;
} 

export const getAllTransactions = async () => {
    const response = await axios.get('http://127.0.0.1:8080/api/transaction/getAllTransactions', {
        headers: {
            'Accept': "application/json",
            "Content-Type": "application/json",
        },
    })
    return response.data;
} 

export const approveTransaction = async (staffId, transactionId, appointmentId) => {
    const response = await axios.post('http://127.0.0.1:8080/api/transaction/approveTransaction?staffId='+staffId+"&transactionId="+transactionId+"&appointmentId="+appointmentId, {
        headers: {
            'Accept': "application/json",
            "Content-Type": "application/json",
        },
    })
    return response.data;
} 

export const cancelTransaction = async (staffId, transactionId,appointmentId) => {
    const response = await axios.post('http://127.0.0.1:8080/api/transaction/cancelTransaction?staffId='+staffId+"&transactionId="+transactionId+"&appointmentId="+appointmentId, {
        headers: {
            'Accept': "application/json",
            "Content-Type": "application/json",
        },
    })
    return response.data;
} 

