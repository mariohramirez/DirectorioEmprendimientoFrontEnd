import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import {thunk} from "redux-thunk";
import emprendimientoReducer from "./Emprendimiento/Reducer";
import {authReducer} from "./Authentication/Reducer";
import novedadReducer from "./Novedades/Reducer";
import inscripcionReducer from "./Inscripcion/Reducer";
import procesoReducer from "./Procesos/Reducer";
import emprendedorReducer from "./Emprendedor/Reducer";
import reporteReducer from "./Reportes/Reducer";

const rootReducer=combineReducers({
    auth: authReducer,
    emprendimiento: emprendimientoReducer,
    novedad: novedadReducer,
    inscripcion: inscripcionReducer,
    proceso: procesoReducer,
    emprendedor: emprendedorReducer,
    reporte: reporteReducer,
});

export const store=legacy_createStore(rootReducer, applyMiddleware(thunk));