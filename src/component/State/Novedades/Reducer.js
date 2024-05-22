import * as actionTypes from "./ActionType";

const initialState = {
    novedades: [],
    novedad: null,
    loading: false,
    error: null,
    
};

const novedadReducer = (state = initialState, action) => {
    switch (action.type) 
    {
        case actionTypes.CREATE_NOVEDAD_REQUEST:
        case actionTypes.RETRIEVE_NOVEDADES_REQUEST:
        case actionTypes.DELETE_NOVEDAD_REQUEST:
        case actionTypes.UPDATE_NOVEDAD_REQUEST:
        case actionTypes.CREATE_NOVEDAD_SUCCESS:
            return {
                ...state,
                loading: false,
            };
        case actionTypes.RETRIEVE_NOVEDADES_SUCCESS:
            return {
                ...state,
                loading: false,
                novedades: action.payload,
            };
        case actionTypes.GET_NOVEDAD_BY_ID_SUCCESS:
            return {
                ...state,
                loading: false,
                novedad: action.payload,
            };
        case actionTypes.UPDATE_NOVEDAD_SUCCESS:
            return {
                ...state,
                loading: false,
            };
        case actionTypes.DELETE_NOVEDAD_SUCCESS:
            return {
                ...state,
                loading: false,
                novedades: state.novedades.filter(
                    (item) => item.id !== action.payload
                ),
            };
        case actionTypes.CREATE_NOVEDAD_FAILURE:
        case actionTypes.RETRIEVE_NOVEDADES_FAILURE:
        case actionTypes.DELETE_NOVEDAD_FAILURE:
        case actionTypes.UPDATE_NOVEDAD_FAILURE:
        default:
            return state;
    }
};

export default novedadReducer;