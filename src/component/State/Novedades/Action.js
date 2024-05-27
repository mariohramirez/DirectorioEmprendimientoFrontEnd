import { APIR_URL, api } from "../../../config/api";
import {
    CREATE_NOVEDAD_REQUEST,
    CREATE_NOVEDAD_SUCCESS,
    CREATE_NOVEDAD_FAILURE,
    RETRIEVE_NOVEDADES_REQUEST,
    RETRIEVE_NOVEDADES_SUCCESS,
    RETRIEVE_NOVEDADES_FAILURE,
    UPDATE_NOVEDAD_REQUEST,
    UPDATE_NOVEDAD_SUCCESS,
    UPDATE_NOVEDAD_FAILURE,
    DELETE_NOVEDAD_REQUEST,
    DELETE_NOVEDAD_SUCCESS,
    DELETE_NOVEDAD_FAILURE,
    GET_NOVEDAD_BY_ID_REQUEST,
    GET_NOVEDAD_BY_ID_SUCCESS,
    GET_NOVEDAD_BY_ID_FAILURE,
    DELETE_ALL_NOVEDADES
} from "./ActionType";

export const createNovedad = (jwt, reqData) => async (dispatch) => {
    dispatch({ type: CREATE_NOVEDAD_REQUEST })
    const { novedadData } = reqData;

    try {
        const { data } = await api.post(`${APIR_URL}api/admin/novedades`, novedadData, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })
        dispatch({ type: CREATE_NOVEDAD_SUCCESS, payload: data })
        console.log("Novedad creada", data);
    } catch (error) {
        dispatch({ type: CREATE_NOVEDAD_FAILURE, payload: error })
        console.log("catch error", error);
    }
}

export const retrieveNovedades = () => {
    return async (dispatch) => {
        dispatch({ type: RETRIEVE_NOVEDADES_REQUEST });
        try {
            const { data } = await api.get("/api/novedades",);
            dispatch({ type: RETRIEVE_NOVEDADES_SUCCESS, payload: data });
            console.log("Todas las novedades", data);
        } catch (error) {
            console.log("catch error", error);
            console.log({ type: RETRIEVE_NOVEDADES_FAILURE, payload: error });
        }
    }
};

export const retrieveNovedadById = (reqData) => {
    return async (dispatch) => {
        dispatch({ type: GET_NOVEDAD_BY_ID_REQUEST });
        try {
            const response = await api.get(`/api/novedades/${reqData.novedadId}`,);
            dispatch({ type: GET_NOVEDAD_BY_ID_SUCCESS, payload: response.data });
            console.log("Novedad", response.data);
        } catch (error) {
            console.log("catch error", error);
            console.log({ type: GET_NOVEDAD_BY_ID_FAILURE, payload: error });
        }
    }
};

export const updateNovedad = (reqData) => async (dispatch) => {
    dispatch({ type: UPDATE_NOVEDAD_REQUEST })
    try {
        const { data } = await api.put(`/api/novedades/${reqData.novedadId}`, reqData)
        dispatch({ type: UPDATE_NOVEDAD_SUCCESS, payload: data })
        console.log("Novedad actualizada", data);
    } catch (error) {
        dispatch({ type: UPDATE_NOVEDAD_FAILURE, payload: error })
        console.log("catch error", error);
    }
}

export const deleteNovedad = (jwt, reqData) => async (dispatch) => {
    dispatch({ type: DELETE_NOVEDAD_REQUEST })
    try {
        const { data } = await api.delete(`/api/admin/novedades/${reqData.novedadId}`, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        
        })
        dispatch({ type: DELETE_NOVEDAD_SUCCESS, payload: data })
        console.log("Novedad eliminada", data);
    } catch (error) {
        dispatch({ type: DELETE_NOVEDAD_FAILURE, payload: error })
        console.log("catch error", error);
    }
}

