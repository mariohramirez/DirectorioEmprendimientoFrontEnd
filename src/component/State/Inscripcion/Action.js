import { APIR_URL, api } from "../../../config/api";
import {
    CREATE_INSCRIPCION_REQUEST,
    CREATE_INSCRIPCION_SUCCESS,
    CREATE_INSCRIPCION_FAILURE,
    RETRIEVE_INSCRIPCIONES_FAILURE,
    RETRIEVE_INSCRIPCIONES_REQUEST,
    RETRIEVE_INSCRIPCIONES_SUCCESS,
    UPDATE_INSCRIPCION_REQUEST,
    UPDATE_INSCRIPCION_SUCCESS,
    UPDATE_INSCRIPCION_FAILURE,
    DELETE_INSCRIPCION_REQUEST,
    DELETE_INSCRIPCION_SUCCESS,
    DELETE_INSCRIPCION_FAILURE,
    GET_INSCRIPCION_BY_ID_REQUEST,
    GET_INSCRIPCION_BY_ID_SUCCESS,
    GET_INSCRIPCION_BY_ID_FAILURE,
    DELETE_ALL_INSCRIPCIONES
} from "./ActionType";

export const createInscripcion = (reqData) => async (dispatch) => {
    dispatch({ type: CREATE_INSCRIPCION_REQUEST})
    const { inscripcionData } = reqData;
    console.log("Inscripcion enviada a API: ",inscripcionData)
    try {
        const { data } = await api.post(`${APIR_URL}api/inscripcion`, inscripcionData)
        dispatch({ type: CREATE_INSCRIPCION_SUCCESS, payload: data })
        console.log("Inscripcion creada", data);
    } catch (error) {
        dispatch({ type: CREATE_INSCRIPCION_FAILURE, payload: error })
        console.log("catch error", error);
    }
}

export const retrieveinscripcion = () => {
    return async (dispatch) => {
        dispatch({type: RETRIEVE_INSCRIPCIONES_REQUEST});
        try {
            const { data } = await api.get("/api/inscripcion",);
            dispatch({type: RETRIEVE_INSCRIPCIONES_SUCCESS, payload: data});
            console.log("Todos los INSCRIPCIONes", data);
        } catch (error) {
            console.log("catch error", error);
            console.log({type: RETRIEVE_INSCRIPCIONES_FAILURE, payload: error});
        }
    }
};

export const retrieveInscripcionById = (reqData) => {
    return async (dispatch) => {
        dispatch({type: GET_INSCRIPCION_BY_ID_REQUEST});
        try {
            const response = await api.get(`/api/inscripcion/${reqData.emprendimientoId}`, );
            dispatch({type: GET_INSCRIPCION_BY_ID_SUCCESS, payload: response.data});
            console.log("Todas los inscripciones");
        } catch (error) {
            console.log("catch error", error);
            console.log({type: GET_INSCRIPCION_BY_ID_FAILURE, payload: error});
        }
    }
};