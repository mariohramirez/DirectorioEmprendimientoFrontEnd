import * as actionTypes from "./ActionType";

const initialState = {
    reportes: [],
    reporte: null,
    loading: false,
    error: null,
    
};

const reporteReducer = (state = initialState, action) => {
    switch (action.type) 
    {
        case actionTypes.RETRIEVE_REPORTE_REQUEST:
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
        case actionTypes.RETRIEVE_REPORTE_FAILURE:
        default:
            return state;
    }
};

export default reporteReducer;