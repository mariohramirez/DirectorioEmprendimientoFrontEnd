import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import {thunk} from "redux-thunk";
import emprendimientoReducer from "./Emprendimiento/Reducer";
import {authReducer} from "./Authentication/Reducer";
import novedadReducer from "./Novedades/Reducer";
import inscripcionReducer from "./Inscripcion/Reducer";

const rootReducer=combineReducers({
    auth: authReducer,
    emprendimiento: emprendimientoReducer,
    novedad: novedadReducer,
    inscripcion: inscripcionReducer,
});

export const store=legacy_createStore(rootReducer, applyMiddleware(thunk));