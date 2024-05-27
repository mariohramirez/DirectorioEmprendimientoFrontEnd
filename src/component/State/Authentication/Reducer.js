import {
    CREATE_USER_FAILURE,
    CREATE_USER_REQUEST,
    CREATE_USER_SUCCESS,
    DELETE_USER_REQUEST,
    DELETE_USER_SUCCESS,
    LOGIN_USER_FAILURE,
    LOGIN_USER_REQUEST,
    LOGIN_USER_SUCCESS,
    LOGOUT,
    RETRIEVE_ALL_USERS_REQUEST,
    RETRIEVE_ALL_USERS_SUCCESS,
    RETRIEVE_USER_BY_ID_REQUEST,
    RETRIEVE_USER_BY_ID_SUCCESS,
    RETRIEVE_USER_FAILURE,
    RETRIEVE_USER_REQUEST,
    RETRIEVE_USER_SUCCESS,
    UPDATE_USER_REQUEST,
    UPDATE_USER_SUCCESS
} from "./ActionType"

const initialState = {
    users: [],
    user: null,
    userById: null,
    isLoading: false,
    error: null,
    jwt: null,
    succes: null,
    isAuthenticated: false,
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_USER_REQUEST:
        case LOGIN_USER_REQUEST:
        case DELETE_USER_REQUEST:
        case UPDATE_USER_REQUEST:
        case RETRIEVE_ALL_USERS_REQUEST:
        case RETRIEVE_USER_BY_ID_REQUEST:
        case RETRIEVE_USER_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null,
                succes: null,
            };
        case CREATE_USER_SUCCESS:
            return state;
        case LOGIN_USER_SUCCESS:
            return {
                ...state,
                isLoading: false, 
                isAuthenticated: true,
                jwt: action.payload, // data.jwt está en action.payload
                succes: "Registro exitoso",
            };
        case RETRIEVE_ALL_USERS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                users: action.payload, // Aquí 'data' completo está en action.payload
            };
        case UPDATE_USER_SUCCESS:
        case RETRIEVE_USER_BY_ID_SUCCESS:
            return {
                ...state,
                isLoading: false,
                userById: action.payload, // Aquí 'data' completo está en action.payload
        };
        case DELETE_USER_SUCCESS:
            return state;
        case RETRIEVE_USER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                user: action.payload, // Aquí 'data' completo está en action.payload
            };
        case LOGOUT:
            return initialState;
        case CREATE_USER_FAILURE:
        case LOGIN_USER_FAILURE:
        case RETRIEVE_USER_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
                succes: null,
                isAuthenticated: false,
            };
        default:
            return state;
    }
}
