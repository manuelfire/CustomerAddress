import { combineReducers } from "redux";
import customers from "./customers";

export const reducers  =   combineReducers({
        customer : customers
});

export type State = ReturnType<typeof reducers>;