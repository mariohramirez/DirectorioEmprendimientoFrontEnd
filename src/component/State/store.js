import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import {thunk} from "redux-thunk";
import emprendimientoReducer from "./Emprendimiento/Reducer";

const rootReducer=combineReducers({
    emprendimiento: emprendimientoReducer,    
});

export const store=legacy_createStore(rootReducer, applyMiddleware(thunk));