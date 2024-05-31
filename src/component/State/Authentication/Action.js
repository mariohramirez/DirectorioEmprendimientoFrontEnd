import axios from "axios";
import { APIR_URL, api } from "../../../config/api";
import {
    CREATE_USER_FAILURE,
    CREATE_USER_REQUEST,
    CREATE_USER_SUCCESS,
    DELETE_USER_FAILURE,
    DELETE_USER_REQUEST,
    DELETE_USER_SUCCESS,
    LOGIN_USER_FAILURE,
    LOGIN_USER_REQUEST,
    LOGIN_USER_SUCCESS,
    LOGOUT,
    RETRIEVE_ALL_USERS_FAILURE,
    RETRIEVE_ALL_USERS_REQUEST,
    RETRIEVE_ALL_USERS_SUCCESS,
    RETRIEVE_USER_BY_ID_FAILURE,
    RETRIEVE_USER_BY_ID_REQUEST,
    RETRIEVE_USER_BY_ID_SUCCESS,
    RETRIEVE_USER_FAILURE,
    RETRIEVE_USER_REQUEST,
    RETRIEVE_USER_SUCCESS
} from "./ActionType";

export const createUser = (reqData) => async (dispatch) => {
    dispatch({ type: CREATE_USER_REQUEST })
    try {
        const { data } = await axios.post(`${APIR_URL}auth/signup`, reqData.userData)
        dispatch({ type: CREATE_USER_SUCCESS, payload: data.jwt })
        console.log("Usuario creado", data);
    } catch (error) {
        dispatch({ type: CREATE_USER_FAILURE, payload: error })
        console.log("catch error", error);
    }
}

export const loginUser = (reqData) => async (dispatch) => {
    dispatch({ type: LOGIN_USER_REQUEST })
    try {
        const { data } = await axios.post(`${APIR_URL}auth/signin`, reqData.userData)
        if (data.jwt) localStorage.setItem("jwt", data.jwt)
        dispatch({ type: LOGIN_USER_SUCCESS, payload: data.jwt })
        console.log("Usuario logueado", data);
    } catch (error) {
        dispatch({ type: LOGIN_USER_FAILURE, payload: error })
        console.log("catch error", error);
    }
}

export const retrieveUser = (jwt) => async (dispatch) => {
    dispatch({ type: RETRIEVE_USER_REQUEST })
    try {
        const { data } = await api.get(`api/usuarios/perfil`, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })
        dispatch({ type: RETRIEVE_USER_SUCCESS, payload: data })
        console.log("Perfil de usuario", data);
    } catch (error) {
        dispatch({ type: RETRIEVE_USER_FAILURE, payload: error })
        console.log("catch error", error);
    }
}

export const retrieveUserById = (jwt, reqData) => async (dispatch) => {
    dispatch({ type: RETRIEVE_USER_BY_ID_REQUEST })
    try {
        const { data } = await api.get(`api/usuarios/${reqData.userId}`, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })
        dispatch({ type: RETRIEVE_USER_BY_ID_SUCCESS, payload: data })
        console.log("Usuario", data);
    } catch (error) {
        dispatch({ type: RETRIEVE_USER_BY_ID_FAILURE, payload: error })
        console.log("catch error", error);
    }
}

export const logout = () => async (dispatch) => {
    dispatch({ type: LOGOUT })
    try {
        localStorage.clear()
        console.log("Usuario desconectado");
    } catch (error) {
        console.log("catch error", error);
    }
}

export const retrievAllUsers = (jwt) => async (dispatch) => {
    dispatch({ type: RETRIEVE_ALL_USERS_REQUEST })
    try {
        const { data } = await api.get(`api/usuarios`, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })
        dispatch({ type: RETRIEVE_ALL_USERS_SUCCESS, payload: data })
        console.log("Todos los usuarios", data);
    } catch (error) {
        dispatch({ type: RETRIEVE_ALL_USERS_FAILURE, payload: error })
        console.log("catch error", error);
    }
}

export const deletUser = (jwt, reqData) =>  async (dispatch) => {
        dispatch({ type: DELETE_USER_REQUEST });
        try {
            const res = await api.delete(`api/usuarios/${reqData.userId}`, {
                headers: {
                    Authorization: `Bearer ${jwt}`
                },
            });
            console.log("Usuario eliminado", res.data);
            dispatch({ type: DELETE_USER_SUCCESS, payload: reqData.userId });
        } catch (error) {
            console.log("catch error", error);
            dispatch({ type: DELETE_USER_FAILURE, payload: error });
        }
    };