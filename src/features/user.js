import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'universal-cookie/es6';

const initialUserState = { email: "", user: {} }
const cookies = new Cookies();

export const userSlice = createSlice({
    name: 'user',
    initialState: { isLoggedIn: false, userData: initialUserState, jwtToken: undefined },
    reducers: {
        setUserToken: (state, action) => {
            cookies.set('JWTToken', action.payload.jwtToken, {maxAge: 20000});
            state.jwtToken = action.payload.jwtToken;
            state.isLoggedIn = true;
        },

        setUserData: (state, action) => {
            cookies.set('emailId', action.payload.userData.email, {maxAge: 20000});
            state.userData = action.payload.userData;
            state.isLoggedIn = true;
            
        },

        setAllData: (state, action) => {
            cookies.set('emailId', action.payload.userData.email, {maxAge: 20000});
            cookies.set('JWTToken', action.payload.jwtToken, {maxAge: 20000});
            state.userData = action.payload.userData;
            state.jwtToken = action.payload.jwtToken;
            state.isLoggedIn = true;
        },

        removeUserData: (state, action) => {
            cookies.remove('emailId');
            cookies.remove('JWTToken');
            state.userData = initialUserState
            state.jwtToken = undefined;
            state.isLoggedIn = false;
        },

        resetUserData: (state, action) => {
            state.userData = initialUserState;
            state.isLoggedIn = false;
        },

        checkCookiesForToken: (state, action) => {
            if(cookies.JWTToken && cookies.emailId){
                state.jwtToken = cookies.JWTToken;
                state.userData.email = cookies.emailId;
                state.isLoggedIn = true;
            }
        }
    }
});

export const { setUserData,setAllData, setUserToken, removeUserData, checkCookiesForToken } = userSlice.actions

export default userSlice.reducer