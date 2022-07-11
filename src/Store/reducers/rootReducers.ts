import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import {TempCount} from "./tempCount";

const rootReducer = combineReducers( {
    tempPostReducer: TempCount
})

export type RootState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, composeWithDevTools());