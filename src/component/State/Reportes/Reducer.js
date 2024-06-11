import * as actionTypes from "./ActionType";

const initialState = {
    reportes: [],
    reportesGenero: [],
    reportesPrograma: [],
    reporte: null,
    loading: false,
    error: null,

};

const reporteReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.RETRIEVE_REPORTE_REQUEST:
        case actionTypes.RETRIEVE_REPORTEGENERO_REQUEST:
        case actionTypes.RETRIEVE_REPORTEPROGRAMA_REQUEST:
            return {
                ...state,
                loading: false,
            };
        case actionTypes.RETRIEVE_REPORTE_SUCCESS:
            return {
                ...state,
                loading: false,
                reportes: action.payload,
            };
        case actionTypes.RETRIEVE_REPORTEGENERO_SUCCESS:
            return {
                ...state,
                loading: false,
                reportesGenero: action.payload,
            };
        case actionTypes.RETRIEVE_REPORTEPROGRAMA_SUCCESS:
            return {
                ...state,
                loading: false,
                reportesPrograma: action.payload,
            };
        case actionTypes.RETRIEVE_REPORTE_FAILURE:
        case actionTypes.RETRIEVE_REPORTEPROGRAMA_FAILURE:
        case actionTypes.RETRIEVE_REPORTEGENERO_FAILURE:
        default:
            return state;
    }
};

export default reporteReducer;