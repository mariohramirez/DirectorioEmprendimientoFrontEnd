import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import {thunk} from "redux-thunk";
import emprendimientoReducer from "./Emprendimiento/Reducer";
import {authReducer} from "./Authentication/Reducer";

const rootReducer=combineReducers({
    auth: authReducer,
    emprendimiento: emprendimientoReducer,    
});

export const store=legacy_createStore(rootReducer, applyMiddleware(thunk));