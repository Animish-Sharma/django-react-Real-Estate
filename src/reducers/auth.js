import {
    LOGIN_SUCCESS,
    SIGNIN_FAIL,
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
    LOGOUT,
} from '../actions/types'

const initialState = {
    token: localStorage.getItem('token') /* We Used Token Because we are using JSON Web Tokens */ ,
    isAuthenticted: false,
    loading: false,
}

export default function(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case LOGIN_SUCCESS:
            localStorage.setItem('token', payload.access)
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                token: payload.access,
            }
        case SIGNUP_SUCCESS:
            return {
                ...state,
                isAuthenticted: false,
                loading: true
            }
        case SIGNIN_FAIL:
        case SIGNUP_FAIL:
        case LOGOUT:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                isAuthenticted: false,
                loading: false
            }
        default:
            return state;
    }
}