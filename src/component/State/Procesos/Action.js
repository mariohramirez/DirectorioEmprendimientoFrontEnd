import { APIR_URL, api } from "../../../config/api";
import {
    CREATE_PROCESO_REQUEST,
    CREATE_PROCESO_SUCCESS,
    CREATE_PROCESO_FAILURE,
    RETRIEVE_PROCESO_FAILURE,
    RETRIEVE_PROCESO_REQUEST,
    RETRIEVE_PROCESO_SUCCESS,
    UPDATE_PROCESO_REQUEST,
    UPDATE_PROCESO_SUCCESS,
    UPDATE_PROCESO_FAILURE,
    DELETE_PROCESO_REQUEST,
    DELETE_PROCESO_SUCCESS,
    DELETE_PROCESO_FAILURE,
    GET_PROCESO_BY_ID_REQUEST,
    GET_PROCESO_BY_ID_SUCCESS,
    GET_PROCESO_BY_ID_FAILURE,
    DELETE_ALL_PROCESO
} from "./ActionType";

export const retrieveProcesos = (jwt) => async (dispatch) => {
    dispatch({ type: RETRIEVE_PROCESO_REQUEST });
    try {
        const { data } = await api.get("/api/admin/procesos", {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        });
        dispatch({ type: RETRIEVE_PROCESO_SUCCESS, payload: data });
        console.log("Todos los procesos", data);
    } catch (error) {
        console.log("catch error", error);
        console.log({ type: RETRIEVE_PROCESO_FAILURE, payload: error });
    }
}

export const retrieveProcesoById = (jwt, reqData) => async (dispatch) => {
    dispatch({ type: GET_PROCESO_BY_ID_REQUEST });
    console.log("Trayendo datos")
    console.log("JWTTTTT", jwt)
    try {
        const response = await api.get(`/api/admin/procesos/${reqData.procesoId}`, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        });
        dispatch({ type: GET_PROCESO_BY_ID_SUCCESS, payload: response.data });
        console.log("Todos los procesos");
    } catch (error) {
        console.log("catch error", error);
        console.log({ type: GET_PROCESO_BY_ID_FAILURE, payload: error });
    }
}

export const caractetizar = (jwt, id, reqData) => async (dispatch) => {
    dispatch({ type: UPDATE_PROCESO_REQUEST });
    console.log("Trayendo datosSSSSSSSSSSSSSSSSSSSSSSS")
    console.log("JWTTTTT", jwt)
    console.log("REQQQQQ",reqData)
    try {
        const response = await api.put(`/api/admin/procesos/${id}`, reqData, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        });
        dispatch({ type: UPDATE_PROCESO_SUCCESS, payload: response.data });
        console.log("Todos los procesos");
    } catch (error) {
        console.log("catch error", error);
        console.log({ type: UPDATE_PROCESO_FAILURE, payload: error });
    }
}