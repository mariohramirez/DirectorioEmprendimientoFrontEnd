import { api } from "../../../config/api";
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

export const retrieveNovedades = () => {
    return async (dispatch) => {
        dispatch({type: RETRIEVE_NOVEDADES_REQUEST});
        try {
            const { data } = await api.get("/api/novedades",);
            dispatch({type: RETRIEVE_NOVEDADES_SUCCESS, payload: data});
            console.log("Todas las novedades", data);
        } catch (error) {
            console.log("catch error", error);
            console.log({type: RETRIEVE_NOVEDADES_FAILURE, payload: error});
        }
    }
};

export const retrieveNovedadById = (reqData) => {
    return async (dispatch) => {
        dispatch({type: GET_NOVEDAD_BY_ID_REQUEST});
        try {
            const response = await api.get(`/api/novedades/${reqData.novedadId}`, );
            dispatch({type: GET_NOVEDAD_BY_ID_SUCCESS, payload: response.data});
            console.log("Todas las novedades");
        } catch (error) {
            console.log("catch error", error);
            console.log({type: GET_NOVEDAD_BY_ID_FAILURE, payload: error});
        }
    }
};