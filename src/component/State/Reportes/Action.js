import { api } from "../../../config/api";
import {
    RETRIEVE_REPORTE_REQUEST,
    RETRIEVE_REPORTE_SUCCESS,
    RETRIEVE_REPORTE_FAILURE,
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