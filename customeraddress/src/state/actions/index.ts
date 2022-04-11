import ICustomer from "../../types/ICustomer";
import { ActionType } from "../action-types";

interface FetchAllAction {
    type: ActionType.FETCH_ALL
    payload: any

}
interface CreateAction {
    type: ActionType.CREATE
    payload: any

}
interface UpdateAction {
    type: ActionType.UPDATE
    payload: any
}

interface DeleteAction {
    type: ActionType.DELETE
    payload: any
}

export  type Action =  FetchAllAction | CreateAction | UpdateAction | DeleteAction;