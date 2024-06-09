import { api } from "../../../config/api";
import {
    CREATE_EMPRENDEDOR_REQUEST,
    CREATE_EMPRENDEDOR_SUCCESS,
    CREATE_EMPRENDEDOR_FAILURE,
    RETRIEVE_EMPRENDEDOR_REQUEST,
    RETRIEVE_EMPRENDEDOR_SUCCESS,
    RETRIEVE_EMPRENDEDOR_FAILURE,
    UPDATE_EMPRENDEDOR_REQUEST,
    UPDATE_EMPRENDEDOR_SUCCESS,
    UPDATE_EMPRENDEDOR_FAILURE,
    DELETE_EMPRENDEDOR_REQUEST,
    DELETE_EMPRENDEDOR_SUCCESS,
    DELETE_EMPRENDEDOR_FAILURE,
    GET_EMPRENDEDOR_BY_ID_REQUEST,
    GET_EMPRENDEDOR_BY_ID_SUCCESS,
    GET_EMPRENDEDOR_BY_ID_FAILURE,
    DELETE_ALL_EMPRENDEDEDORES
} from "./ActionType";

export const retrieveEmprendedor = () => {
    return async (dispatch) => {
        dispatch({type: RETRIEVE_EMPRENDEDOR_REQUEST});
        try {
            const { data } = await api.get("/api/emprendedor",);
            dispatch({type: RETRIEVE_EMPRENDEDOR_SUCCESS, payload: data});
            console.log("Todos los emprendedores", data);
        } catch (error) {
            console.log("catch error", error);
            console.log({type: RETRIEVE_EMPRENDEDOR_FAILURE, payload: error});
        }
    }
};

export const retrieveEmprendimientoById = (reqData) => {
    return async (dispatch) => {
        dispatch({type: GET_EMPRENDEDOR_BY_ID_REQUEST});
        try {
            const response = await api.get(`/api/emprendedor/${reqData.emprendimientoId}`, );
            dispatch({type: GET_EMPRENDEDOR_BY_ID_SUCCESS, payload: response.data});
            console.log("Todos los emprendedores");
        } catch (error) {
            console.log("catch error", error);
            console.log({type: GET_EMPRENDEDOR_BY_ID_FAILURE, payload: error});
        }
    }
};