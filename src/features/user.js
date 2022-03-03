import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'universal-cookie/es6';

const initialUserState = { email: "" }

export const userSlice = createSlice({
    name: 'user',
    initialState: { isLoggedIn: false, userData: initialUserState, jwtToken: "" },
    reducers: {
        setUserToken: (state, action) => {
            state.isLoggedIn = true;
            const cookies = new Cookies();
            cookies.set('JWTToken', action.payload.jwtToken);
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