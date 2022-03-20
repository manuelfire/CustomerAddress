import * as api from '../api';

export const getCustomers = () => async (dispatch) => {

try{
    const {data} = await api.fetchCustomers();

    const action = {type : 'FETCH_ALL', payload : data}

    dispatch(action);

}catch(error)
{
    console.log(error.message);
}

    
}

export const createCustomers = (customer) => async (dispatch) => {

    try{
        const {data} = await api.createCustomers(customer); 
        console.log(data);
        const action = {type : 'CREATE', payload : data}
        console.log(action);
        dispatch(action);
    
    }catch(error)
    {
        console.log(error.message);
    }
    
        
    }