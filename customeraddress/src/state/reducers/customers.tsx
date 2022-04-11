import ICustomer from "../../types/ICustomer";
import { ActionType } from "../action-types";
import { Action } from "../actions";



export  default   (customers  = [],action : Action ) =>{
    switch (action.type) {
        case ActionType.FETCH_ALL:
            console.log("fui fetch");
            return action.payload;
            
        case ActionType.CREATE:
            return [...customers,action.payload];
        
        case ActionType.UPDATE:
            return customers.map((customer)=>customer._id === action.payload._id ? action.payload : customer);
        case ActionType.DELETE:
                return action.payload;
                   
    
        default:
            console.log(action);
            console.log("fui default");
            return customers;
            
    }
}