import { createSlice } from '@reduxjs/toolkit';

const initialUserState = { email: "" }

export const userSlice = createSlice({
    name: 'user',
    initialState: { isLoggedIn: false, userData: initialUserState, jwtToken: "" },
    reducers: {
        setUserToken: (state, action) => {
            state.isLoggedIn = true;
            state.jwtToken = action.payload.jwtToken
        },

        setUserData: (state, action) => {
            state.userData = action.payload.userData
            state.isLoggedIn = true
        },

        removeUserData: (state, action) => {
            state.isLoggedIn = false
            state.userData = initialUserState
        },

        resetUserData: (state, action) => {
            state.isLoggedIn = false
            state.userData = initialUserState
        }
    }
});

export const { setUserData, setUserToken, removeUserData } = userSlice.actions

export default userSlice.reducer