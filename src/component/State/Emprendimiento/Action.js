import { api } from "../../../config/api";
import {
    CREATE_EMPRENDIMIENTO_REQUEST,
    CREATE_EMPRENDIMIENTO_SUCCESS,
    CREATE_EMPRENDIMIENTO_FAILURE,
    RETRIEVE_EMPRENDIMIENTOS_REQUEST,
    RETRIEVE_EMPRENDIMIENTOS_SUCCESS,
    RETRIEVE_EMPRENDIMIENTOS_FAILURE,
    UPDATE_EMPRENDIMIENTO_REQUEST,
    UPDATE_EMPRENDIMIENTO_SUCCESS,
    UPDATE_EMPRENDIMIENTO_FAILURE,
    DELETE_EMPRENDIMIENTO_REQUEST,
    DELETE_EMPRENDIMIENTO_SUCCESS,
    DELETE_EMPRENDIMIENTO_FAILURE,
    GET_EMPRENDIMIENTO_BY_ID_REQUEST,
    GET_EMPRENDIMIENTO_BY_ID_SUCCESS,
    GET_EMPRENDIMIENTO_BY_ID_FAILURE,
    DELETE_ALL_EMPRENDIMIENTOS
} from "./ActionType";

export const retrieveEmprendimientos = (token) => {
    return async (dispatch) => {
        dispatch({type: RETRIEVE_EMPRENDIMIENTOS_REQUEST});
        try {
            const { data } = await api.get("/api/emprendimientos", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            dispatch({type: RETRIEVE_EMPRENDIMIENTOS_SUCCESS, payload: data});
            console.log("Todos los emprendimientos", data);
        } catch (error) {
            console.log("catch error", error);
            console.log({type: RETRIEVE_EMPRENDIMIENTOS_FAILURE, payload: error});
        }
    }
};

export const retrieveEmprendimientoById = (reqData) => {
    return async (dispatch) => {
        dispatch({type: GET_EMPRENDIMIENTO_BY_ID_REQUEST});
        try {
            const response = await api.get(`/api/emprendimientos/${reqData.emprendimientoId}`, );
            dispatch({type: GET_EMPRENDIMIENTO_BY_ID_SUCCESS, payload: response.data});
            console.log("Todos los emprendimientos");
        } catch (error) {
            console.log("catch error", error);
            console.log({type: GET_EMPRENDIMIENTO_BY_ID_FAILURE, payload: error});
        }
    }
};