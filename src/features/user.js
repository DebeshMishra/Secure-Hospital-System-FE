import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'universal-cookie/es6';

const initialUserState = { email: "", user: {} }
const cookies = new Cookies();

export const userSlice = createSlice({
    name: 'user',
    initialState: { isLoggedIn: false, userData: initialUserState, jwtToken: undefined },
    reducers: {
        setUserToken: (state, action) => {
            const cookies = new Cookies();
            cookies.set('JWTToken', action.payload.jwtToken);
            state.jwtToken = action.payload.jwtToken
            state.isLoggedIn = true;
        },

        setUserData: (state, action) => {
            const cookies = new Cookies();
            cookies.set('emailId', action.payload.userData.email);
            state.userData = action.payload.userData
            state.isLoggedIn = true;
            
        },

        removeUserData: (state, action) => {
            state.isLoggedIn = false
            state.userData = initialUserState
            state.jwtToken = undefined;
            const cookies = new Cookies();
            cookies.remove('emailId');
            cookies.remove('JWTToken');
        },

        resetUserData: (state, action) => {
            state.isLoggedIn = false
            state.userData = initialUserState
        },

        checkCookiesForToken: (state, action) => {
            const cookies = new Cookies();
            if(cookies.JWTToken && cookies.emailId){
                state.isLoggedIn = true;
                state.jwtToken = cookies.JWTToken;
                state.userData.email = cookies.emailId;
            }
        }
    }
});

export const { setUserData, setUserToken, removeUserData, checkCookiesForToken } = userSlice.actions

export default userSlice.reducer