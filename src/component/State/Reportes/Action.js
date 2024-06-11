import { api } from "../../../config/api";
import {
    RETRIEVE_REPORTE_REQUEST,
    RETRIEVE_REPORTE_SUCCESS,
    RETRIEVE_REPORTE_FAILURE,
    RETRIEVE_REPORTEGENERO_REQUEST,
    RETRIEVE_REPORTEGENERO_SUCCESS,
    RETRIEVE_REPORTEGENERO_FAILURE,
    RETRIEVE_REPORTEPROGRAMA_REQUEST,
    RETRIEVE_REPORTEPROGRAMA_SUCCESS,
    RETRIEVE_REPORTEPROGRAMA_FAILURE,
} from "./ActionType";

export const retrieveReporteSectores = (jwt) => async (dispatch) => {
    dispatch({ type: RETRIEVE_REPORTE_REQUEST });
    try {
        const { data } = await api.get("/api/admin/reportes/sectores", {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })
        dispatch({ type: RETRIEVE_REPORTE_SUCCESS, payload: data });
        console.log("Todos los reportes", data);
    } catch (error) {
        console.log("catch error", error);
        console.log({ type: RETRIEVE_REPORTE_FAILURE, payload: error });
    }
}

export const retrieveReporteGenero = (jwt) => async (dispatch) => {
    dispatch({ type: RETRIEVE_REPORTEGENERO_REQUEST });
    try {
        const { data } = await api.get("/api/admin/reportes/mujeres", {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })
        dispatch({ type: RETRIEVE_REPORTEGENERO_SUCCESS, payload: data });
        console.log("Todos los reportes", data);
    } catch (error) {
        console.log("catch error", error);
        console.log({ type: RETRIEVE_REPORTEGENERO_FAILURE, payload: error });
    }
}

export const retrieveReportePrograma = (jwt) => async (dispatch) => {
    dispatch({ type: RETRIEVE_REPORTEPROGRAMA_REQUEST });
    try {
        const { data } = await api.get("/api/admin/reportes/programas", {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })
        dispatch({ type: RETRIEVE_REPORTEPROGRAMA_SUCCESS, payload: data });
        console.log("Todos los reportes", data);
    } catch (error) {
        console.log("catch error", error);
        console.log({ type: RETRIEVE_REPORTEPROGRAMA_FAILURE, payload: error });
    }
}