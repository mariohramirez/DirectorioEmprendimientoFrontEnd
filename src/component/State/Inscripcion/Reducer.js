import * as actionTypes from "./ActionType";

const initialState = {
    inscripciones: [],
    inscripcion: null,
    loading: false,
    error: null,

};

const inscripcionReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CREATE_INSCRIPCION_REQUEST:
        case actionTypes.RETRIEVE_INSCRIPCIONES_REQUEST:
        case actionTypes.DELETE_INSCRIPCION_REQUEST:
        case actionTypes.UPDATE_INSCRIPCION_REQUEST:
        case actionTypes.CREATE_INSCRIPCION_SUCCESS:
        case actionTypes.GET_INSCRIPCION_BY_ID_REQUEST:
            return {
                ...state,
                loading: false,
                error: null,
            };
        case actionTypes.CREATE_INSCRIPCION_SUCCESS:
        case actionTypes.UPDATE_INSCRIPCION_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
            };
        case actionTypes.RETRIEVE_INSCRIPCIONES_SUCCESS:
            return {
                ...state,
                loading: false,
                inscripciones: action.payload,
                error: null,
            };
        case actionTypes.GET_INSCRIPCION_BY_ID_SUCCESS:
            return {
                ...state,
                loading: false,
                inscripcion: action.payload,
                error: null,
            };
        case actionTypes.DELETE_INSCRIPCION_SUCCESS:
            return {
                ...state,
                loading: false,
                inscripciones: state.inscripciones.filter(
                    (item) => item.id !== action.payload
                ),
                error: null,
            };
        case actionTypes.CREATE_INSCRIPCION_FAILURE:
        case actionTypes.RETRIEVE_INSCRIPCIONES_FAILURE:
        case actionTypes.DELETE_INSCRIPCION_FAILURE:
        case actionTypes.UPDATE_INSCRIPCION_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        default:
            return state;
    }
};

export default inscripcionReducer;