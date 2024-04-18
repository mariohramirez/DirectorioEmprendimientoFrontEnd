import * as actionTypes from "./ActionType";

const initialState = {
    emprendimientos: [],
    emprendimiento: null,
    loading: false,
    error: null,
    
};

const emprendimientoReducer = (state = initialState, action) => {
    switch (action.type) 
    {
        case actionTypes.CREATE_EMPRENDIMIENTO_REQUEST:
        case actionTypes.RETRIEVE_EMPRENDIMIENTOS_REQUEST:
        case actionTypes.DELETE_EMPRENDIMIENTO_REQUEST:
        case actionTypes.UPDATE_EMPRENDIMIENTO_REQUEST:
        case actionTypes.CREATE_EMPRENDIMIENTO_SUCCESS:
            return {
                ...state,
                loading: false,
            };
        case actionTypes.RETRIEVE_EMPRENDIMIENTOS_SUCCESS:
            return {
                ...state,
                loading: false,
                emprendimientos: action.payload,
            };
        case actionTypes.GET_EMPRENDIMIENTO_BY_ID_SUCCESS:
            return {
                ...state,
                loading: false,
                emprendimiento: action.payload,
            };
        case actionTypes.UPDATE_EMPRENDIMIENTO_SUCCESS:
            return {
                ...state,
                loading: false,
            };
        case actionTypes.DELETE_EMPRENDIMIENTO_SUCCESS:
            return {
                ...state,
                loading: false,
                emprendimientos: state.emprendimientos.filter(
                    (item) => item.id !== action.payload
                ),
            };
        case actionTypes.CREATE_EMPRENDIMIENTO_FAILURE:
        case actionTypes.RETRIEVE_EMPRENDIMIENTOS_FAILURE:
        case actionTypes.DELETE_EMPRENDIMIENTO_FAILURE:
        case actionTypes.UPDATE_EMPRENDIMIENTO_FAILURE:
        default:
            return state;
    }
};

export default emprendimientoReducer;