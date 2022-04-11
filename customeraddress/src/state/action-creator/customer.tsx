import { Dispatch } from 'redux';
import * as api from '../../api';
import ICustomer from '../../types/ICustomer';
import { ActionType } from '../action-types';
import { Action } from '../actions';

export const getCustomers = () => async (dispatch) => {

try{
    console.log("Fetch");
    const {data} = await api.fetchCustomers();
    
    console.log(data);
    const action = {type : ActionType.FETCH_ALL, payload : data};

    dispatch(action);

}catch(error : any)
{
    console.log(error.message);
}

    
}

export const createCustomers = (customer : any) => async (dispatch) => {

    try{
        const {data} = await api.createCustomers(customer); 
        console.log(data);
        const action = {type : ActionType.CREATE, payload : data};
        console.log(action);
        dispatch(action);
    
    }catch(error : any)
    {
        console.log(error.message);
    }
    
        
    }

    export const updateCustomer = (id : any,customer : any) => async (dispatch) => {

        try{
            const {data} = await api.updateCustomer(id,customer); 
            console.log(data);
            const action = {type : ActionType.UPDATE, payload : data};
            console.log(action);
            dispatch(action);
        
        }catch(error : any)
        {
            console.log(error.message);
        }
        
            
        }

        export const deleteCustomer = (id : any) => async (dispatch) => {

            try{
                const {data} = await api.deleteCustomer(id); 
                console.log(data);
                const action = {type : ActionType.DELETE, payload : data};
                console.log(action);
                dispatch(action);
            
            }catch(error : any)
            {
                console.log(error.message);
            }
            
                
            }