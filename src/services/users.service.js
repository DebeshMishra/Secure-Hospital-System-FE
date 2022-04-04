import { SERVER_URL } from '../helpers/Constants';


const axios = require('axios');

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
    const response = await axios.get(SERVER_URL + '/api/users/getUserById?userId=' + data, {
        headers: {
            'Accept': "application/json",
            "Content-Type": "application/json",
        },
    })
    return response.data;
}

export const blockUserByEmailId = async (data, query, role) => {
    await axios.post(SERVER_URL + '/api/users/blockAccountByEmailId?emailId=' + data.email, {
        headers: {
            'Accept': "application/json",
            "Content-Type": "application/json",
        },
    })
    return getAllUsersByRole(role, query);
}

export const unblockUserByEmailId = async (data, query, role) => {
    await axios.post(SERVER_URL + '/api/users/activateAccountByEmailId?emailId=' +  data.email, {
        headers: {
            'Accept': "application/json",
            "Content-Type": "application/json",
        },
    })
    
    return getAllUsersByRole(role, query);
} 


export const getAllUserByTerm = async (data) => {
    const response = await axios.get(SERVER_URL + 'api/users/getAllUsersBysearchTerm?searchTerm=' + data, {
        headers: {
            'Accept': "application/json",
            "Content-Type": "application/json",
        },
    })
    return response.data;
} 

export const getAllUsersByRole = async (data, searchTerm) => {
    const response = await axios.get(SERVER_URL + '/api/users/getAllUsersByRole?role=' + data +"&searchTerm="+ searchTerm, {
        headers: {
            'Accept': "application/json",
            "Content-Type": "application/json",
        },
    })
    return response.data;
} 

export const getAppointmentTimings = async (data) => {
    const response = await axios.post(SERVER_URL + '/api/appointment/getAvailableSlotsOfDoctor', data, {
        headers: {
            'Accept': "application/json",
            "Content-Type": "application/json",
        },
    })
    return response.data;
} 


export const bookAppointment = async (data) => {
    const response = await axios.post(SERVER_URL + '/api/appointment/bookAppointment', data, {
        headers: {
            'Accept': "application/json",
            "Content-Type": "application/json",
        },
    })
    return response.data;
} 



export const getAllFutureAppointments = async (data) => {
    const response = await axios.get(SERVER_URL + '/api/appointment/getAllFutureAppointments?searchTerm='+data, {
        headers: {
            'Accept': "application/json",
            "Content-Type": "application/json",
        },
    })
    return response.data;
} 

export const getAllPastAppointments = async (data) => {
    const response = await axios.get(SERVER_URL + '/api/appointment/getAllPastAppointments?searchTerm='+data, {
        headers: {
            'Accept': "application/json",
            "Content-Type": "application/json",
        },
    })
    return response.data;
} 

export const cancelAppointment = async (data) => {
    const response = await axios.post(SERVER_URL + '/api/appointment/cancelAppointment?appointmentId='+data, {
        headers: {
            'Accept': "application/json",
            "Content-Type": "application/json",
        },
    })
    return response.data;
} 


// export const getAllAvailableSlotOfDoctors = async (data) => {
//     const response = await axios.post( SERVER_URL + '/api/appointment/getAllAvailableSlotOfDoctors', data, {
//         headers: {
//             'Accept': "application/json",
//             "Content-Type": "application/json",
//         },
//     })
//     return response.data;
// } 


export const getAllAvailableDoctorsForaTimeSlot = async (data) => {
    const response = await axios.post(SERVER_URL + '/api/appointment/getAllAvailableDoctorsForaTimeSlot', data, {
        headers: {
            'Accept': "application/json",
            "Content-Type": "application/json",
        },
    })
    return response.data;
} 


export const updateAppointment = async (data) => {
    const response = await axios.post(SERVER_URL + '/api/appointment/updateAppointment', data, {
        headers: {
            'Accept': "application/json",
            "Content-Type": "application/json",
        },
    })
    return response.data;
} 

export const completeAppointment = async (data) => {
    const response = await axios.post(SERVER_URL + '/api/appointment/completeAppointment?appointmentId='+ data, {
        headers: {
            'Accept': "application/json",
            "Content-Type": "application/json",
        },
    })
    return response.data;
} 


export const createTransaction = async (data) => {
    const response = await axios.post(SERVER_URL + '/api/transaction/createTransaction', data, {
        headers: {
            'Accept': "application/json",
            "Content-Type": "application/json",
        },
    })
    return response.data;
} 

export const getAllTransactions = async (patientId) => {
    const response = await axios.get(SERVER_URL + '/api/transaction/getAllTransactions?patientId='+patientId, {
        headers: {
            'Accept': "application/json",
            "Content-Type": "application/json",
        },
    })
    return response.data;
} 

export const approveTransaction = async (staffId, transactionId, appointmentId) => {
    const response = await axios.post(SERVER_URL + '/api/transaction/approveTransaction?staffId='+staffId+"&transactionId="+transactionId+"&appointmentId="+appointmentId, {
        headers: {
            'Accept': "application/json",
            "Content-Type": "application/json",
        },
    })
    return response.data;
} 

export const cancelTransaction = async (staffId, transactionId,appointmentId) => {
    const response = await axios.post(SERVER_URL + '/api/transaction/cancelTransaction?staffId='+staffId+"&transactionId="+transactionId+"&appointmentId="+appointmentId, {
        headers: {
            'Accept': "application/json",
            "Content-Type": "application/json",
        },
    })
    return response.data;
} 


export const getAllBills = async (patientId) => {
    const response = await axios.get(SERVER_URL + '/api/bills/getAllBills?patientId='+patientId, {
        headers: {
            'Accept': "application/json",
            "Content-Type": "application/json",
        },
    })
    return response.data;
} 



