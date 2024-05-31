import * as actionTypes from "./ActionType";

const initialState = {
    novedades: [],
    novedad: null,
    loading: false,
    error: null,
};

const novedadReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CREATE_NOVEDAD_REQUEST:
        case actionTypes.RETRIEVE_NOVEDADES_REQUEST:
        case actionTypes.DELETE_NOVEDAD_REQUEST:
        case actionTypes.UPDATE_NOVEDAD_REQUEST:
        case actionTypes.GET_NOVEDAD_BY_ID_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case actionTypes.CREATE_NOVEDAD_SUCCESS:
        case actionTypes.UPDATE_NOVEDAD_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
            };
        case actionTypes.RETRIEVE_NOVEDADES_SUCCESS:
            return {
                ...state,
                loading: false,
                novedades: action.payload,
                error: null,
            };
        case actionTypes.GET_NOVEDAD_BY_ID_SUCCESS:
            return {
                ...state,
                loading: false,
                novedad: action.payload,
                error: null,
            };
        case actionTypes.DELETE_NOVEDAD_SUCCESS:
            return {
                ...state,
                loading: false,
                novedades: state.novedades.filter(
                    (item) => item.id !== action.payload.id
                ),
                error: null,
            };
        case actionTypes.CREATE_NOVEDAD_FAILURE:
        case actionTypes.RETRIEVE_NOVEDADES_FAILURE:
        case actionTypes.DELETE_NOVEDAD_FAILURE:
        case actionTypes.UPDATE_NOVEDAD_FAILURE:
        case actionTypes.GET_NOVEDAD_BY_ID_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default novedadReducer;
