import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'universal-cookie/es6';
import jwt_decode from "jwt-decode";

const initialUserState = { email: "", user: {} }
const cookies = new Cookies();


export const userSlice = createSlice({
    name: 'user',
    initialState: { isLoggedIn: false, userData: initialUserState, jwtToken: undefined },
    reducers: {
        setUserToken: (state, action) => {
            state.jwtToken = action.payload.jwtToken;
            state.isLoggedIn = true;
            const decoded = jwt_decode(state.jwtToken);
            cookies.set('JWTToken', action.payload.jwtToken, {maxAge: decoded.exp - Math.round((new Date()).getTime() / 1000)});
            // console.log(decoded, Math.round((new Date()).getTime() / 1000), decoded.exp - Math.round((new Date()).getTime() / 1000));
            // runLogOutTimer( decoded.exp - Math.round((new Date()).getTime() / 1000));
        },

        setUserData: (state, action) => {
            state.userData = action.payload.userData;
            state.isLoggedIn = true;
            const decoded = jwt_decode(state.jwtToken);
            cookies.set('emailId', action.payload.userData.email, {maxAge: decoded.exp - Math.round((new Date()).getTime() / 1000)});
            // runLogOutTimer( decoded.exp - Math.round((new Date()).getTime() / 1000));
        },

        setAllData: (state, action) => {
            state.userData = action.payload.userData;
            state.jwtToken = action.payload.jwtToken;
            state.isLoggedIn = true;
            const decoded = jwt_decode(state.jwtToken);
            cookies.set('emailId', action.payload.userData.email, {maxAge: decoded.exp - Math.round((new Date()).getTime() / 1000)});
            cookies.set('JWTToken', action.payload.jwtToken, {maxAge: decoded.exp - Math.round((new Date()).getTime() / 1000)});
            // runLogOutTimer( decoded.exp - Math.round((new Date()).getTime() / 1000));
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

// function runLogOutTimer(timer) {
//     const dispatch = useDispatch();

//     let navigate = useNavigate();
//     setTimeout(() => {
//         dispatch(removeUserData);
//         navigate("/login")
//     }, timer);
// }