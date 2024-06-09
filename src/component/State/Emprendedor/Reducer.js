import * as actionTypes from "./ActionType";

const initialState = {
    emprendedores: [],
    emprendedor: null,
    loading: false,
    error: null,
    
};

const emprendimientoReducer = (state = initialState, action) => {
    switch (action.type) 
    {
        case actionTypes.CREATE_EMPRENDEDOR_REQUEST:
        case actionTypes.RETRIEVE_EMPRENDEDOR_REQUEST:
        case actionTypes.DELETE_EMPRENDEDOR_REQUEST:
        case actionTypes.UPDATE_EMPRENDEDOR_REQUEST:
        case actionTypes.CREATE_EMPRENDEDOR_SUCCESS:
            return {
                ...state,
                loading: false,
            };
        case actionTypes.RETRIEVE_EMPRENDEDOR_SUCCESS:
            return {
                ...state,
                loading: false,
                emprendedores: action.payload,
            };
        case actionTypes.GET_EMPRENDEDOR_BY_ID_SUCCESS:
            return {
                ...state,
                loading: false,
                emprendedor: action.payload,
            };
        case actionTypes.UPDATE_EMPRENDEDOR_SUCCESS:
            return {
                ...state,
                loading: false,
            };
        case actionTypes.DELETE_EMPRENDEDOR_SUCCESS:
            return {
                ...state,
                loading: false,
                emprendedores: state.emprendedores.filter(
                    (item) => item.id !== action.payload
                ),
            };
        case actionTypes.CREATE_EMPRENDEDOR_FAILURE:
        case actionTypes.RETRIEVE_EMPRENDEDOR_FAILURE:
        case actionTypes.DELETE_EMPRENDEDOR_FAILURE:
        case actionTypes.UPDATE_EMPRENDEDOR_FAILURE:
        default:
            return state;
    }
};

export default emprendimientoReducer;