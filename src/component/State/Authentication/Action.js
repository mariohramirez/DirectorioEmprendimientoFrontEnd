import axios from "axios";
import { APIR_URL, api } from "../../../config/api";
import {
    CREATE_USER_REQUEST,
    LOGIN_USER_REQUEST,
    LOGIN_USER_SUCCESS,
    LOGOUT,
    RETRIEVE_USER_REQUEST,
    RETRIEVE_USER_SUCCESS
} from "./ActionType";


export const createUser = (reqData) => async (dispatch) => {
    dispatch({ type: CREATE_USER_REQUEST })
    try {
        const { data } = await axios.post(`${APIR_URL}/auth/signup`, reqData.userData)
        if (data.jwt) localStorage.setItem("jwt", data.jwt)
        if (data.role === "ROLE_ADMIN") {
            reqData.navigate("/admin")
        }
        else {
            reqData.navigate("/")
        }
        dispatch({ type: CREATE_USER_SUCCESS, payload: data.jwt })
        console.log("Usuario creado", data);
    } catch (error) {
        console.log("catch error", error);
    }
}

export const loginUser = (reqData) => async (dispatch) => {
    dispatch({ type: LOGIN_USER_REQUEST })
    try {
        const { data } = await axios.post(`${APIR_URL}/auth/signin`, reqData.userData)
        if (data.jwt) localStorage.setItem("jwt", data.jwt)
        if (data.role === "ROLE_ADMIN") {
            reqData.navigate("/admin")
        }
        else {
            reqData.navigate("/")
        }
        dispatch({ type: LOGIN_USER_SUCCESS, payload: data.jwt })
        console.log("Usuario logueado", data);
    } catch (error) {
        console.log("catch error", error);
    }
}

export const retrieveUser = (jwt) => async (dispatch) => {
    dispatch({ type: RETRIEVE_USER_REQUEST })
    try {
        const { data } = await api.get(`api/usuarios/perfil`,{
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        } )
        dispatch({ type: RETRIEVE_USER_SUCCESS, payload: data.jwt })
        console.log("Perfil de usuario", data);
    } catch (error) {
        console.log("catch error", error);
    }
}

export const logout = () => async (dispatch) => {
    dispatch({ type: LOGOUT })
    try {
        dispatch({ type: LOGOUT})
        console.log("Usuario desconectado");
    } catch (error) {
        console.log("catch error", error);
    }
}