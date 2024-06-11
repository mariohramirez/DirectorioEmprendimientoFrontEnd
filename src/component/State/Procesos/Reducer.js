import * as actionTypes from "./ActionType";

const initialState = {
    procesos: [],
    proceso: null,
    loading: false,
    error: null,

};

const procesoReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CREATE_PROCESO_REQUEST:
        case actionTypes.RETRIEVE_PROCESO_REQUEST:
        case actionTypes.DELETE_PROCESO_REQUEST:
        case actionTypes.UPDATE_PROCESO_REQUEST:
        case actionTypes.CREATE_PROCESO_SUCCESS:
        case actionTypes.GET_PROCESO_BY_ID_REQUEST:
            return {
                ...state,
                loading: false,
                error: null,
            };
        case actionTypes.CREATE_PROCESO_SUCCESS:
        case actionTypes.UPDATE_PROCESO_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
            };
        case actionTypes.RETRIEVE_PROCESO_SUCCESS:
            return {
                ...state,
                loading: false,
                procesos: action.payload,
                error: null,
            };
        case actionTypes.GET_PROCESO_BY_ID_SUCCESS:
            return {
                ...state,
                loading: false,
                proceso: action.payload,
                error: null,
            };
        case actionTypes.DELETE_PROCESO_SUCCESS:
            return {
                ...state,
                loading: false,
                procesos: state.procesos.filter(
                    (item) => item.id !== action.payload
                ),
                error: null,
            };
        case actionTypes.CREATE_PROCESO_FAILURE:
        case actionTypes.RETRIEVE_PROCESO_FAILURE:
        case actionTypes.DELETE_PROCESO_FAILURE:
        case actionTypes.UPDATE_PROCESO_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        default:
            return state;
    }
};

export default procesoReducer;