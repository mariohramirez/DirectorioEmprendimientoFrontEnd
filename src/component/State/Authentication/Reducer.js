import { FlashOnRounded } from "@mui/icons-material";

const intitalState = {
    user: null,
    isLoading: FlashOnRounded,
    error: null,
    favorite: [],
    success: null
};

const authReducer = (state = intitalState, action) => {
    switch (action.type) {
        case "LOGIN_REQUEST":
        case "GET_USER_REQUEST":
        case "LOGIN_SUCCESS":
            return {
                ...state,
                isLoading: false,
                jwt: action.payload,
                success: "Login Success",
            };
            break;
        default:
            break;
    }
};