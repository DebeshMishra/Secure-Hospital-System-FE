const axios = require('axios');

export const getUsersByQuery = async (data) => {
    console.log(data)
    const response = await axios.get('http://127.0.0.1:8080/api/users/' + data, {
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


export const getAllUserByTerm = async (data) => {
    const response = await axios.get('http://127.0.0.1:8080/api/users/getAllUsersBysearchTerm?searchTerm=' + data, {
        headers: {
            'Accept': "application/json",
            "Content-Type": "application/json",
        },
    })
    return response.data;
} 

export const getAllUsersByRole = async (data) => {
    const response = await axios.get('http://127.0.0.1:8080/api/users/getAllUsersByRole?role=' + data, {
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