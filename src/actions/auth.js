import axios from 'axios'
import { setAlert } from './alert'

import {
    SIGNUP_SUCCESS,
    SIGNIN_FAIL,
    LOGIN_SUCCESS,
    SIGNUP_FAIL,
    LOGOUT,
} from './types'


export const login = (email, password) => async dispatch => {
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }
    const body = JSON.stringify({ email, password });

    try {
        console.log(body)
        const res = await axios.post({% your backend url%}, body, config)
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data,
        })

        dispatch(setAlert("Authentication Succeded", "success"))
    } catch (err) {
        dispatch({
            type: SIGNIN_FAIL,
        })
        console.log(err)
        dispatch(setAlert("Error in Authentication", "error"))
    }

}

export const signup = (name, email, password, password2) => async dispatch => {
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }
    const body = JSON.stringify({ name, email, password, password2 })
    try {
        const res = await axios.post('http://localhost:8000/api/accounts/signup', body, config)
        dispatch({
            type: SIGNUP_SUCCESS,
            payload: res.data,
        })

        dispatch(login(email, password))
    } catch (err) {
        dispatch({
            type: SIGNUP_FAIL,
        })
        console.log(err)
        dispatch(setAlert("Error in Authentication", "error"))
    }
};
export const logout = () => dispatch => {
    dispatch(setAlert("Successfully Logged Out", "success"));
    dispatch({ type: LOGOUT })
}