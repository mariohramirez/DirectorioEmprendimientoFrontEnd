import axios from 'axios';
import { GET_USER_REQUEST, LOGIN_REQUEST, LOGIN_SUCCESS } from './ActionType';
import { API_URL } from '../../config/api';

export const loginRequest = (reqData) => async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
    try {
        const {data} = await axios.post(`${API_URL}/auth/login`, reqData.userData);
        if (data.jwt) localStorage.setItem('jwt', data.jwt);
        if (data.role === "ROLE_ADMIN") {
            reqData.navigate('/admin');
        }
        else {
            reqData.navigate('/');
        }
        dispatch({ type: LOGIN_SUCCESS, payload: data.jwt });
        console.log("login success", data);
    } catch (error) {
        console.log(error);
    }
}

export const getUser = (jwt) => async (dispatch) => {
    dispatch({ type: GET_USER_REQUEST });
    try {
        const {data} = await api.post(`/auth/login`,{
            headers: {
                Authorization: `Bearer ${jwt}`,
            },
        });
        dispatch({ type: LOGIN_SUCCESS, payload: data });
        console.log("user profile", data)
    } catch (error) {
        console.log(error);
    }
}

export const logout = () => async (dispatch) => {
    dispatch({ type: GET_USER_REQUEST });
    try {
        dispatch({ type: LOGOUT});
        console.log("user profile", data)
    } catch (error) {
        console.log(error);
    }
}