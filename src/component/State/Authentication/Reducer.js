import { CREATE_USER_REQUEST, LOGIN_USER_REQUEST, RETRIEVE_USER_REQUEST } from "./ActionType"

const initialState = {

    user: null,
    loading: false,
    error: null,
    jwt: null,
    succes: null

}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case CREATE_USER_REQUEST:
        case LOGIN_USER_REQUEST:
        case RETRIEVE_USER_REQUEST:
            return {
                ...state,
                loading: true
            }
            break;
        default:
            break;
    }
}