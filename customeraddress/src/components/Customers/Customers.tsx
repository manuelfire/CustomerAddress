import * as React from 'react';
import { useSelector } from 'react-redux';
import { useEffect, useMemo, useState } from 'react';
import {updateCustomer} from '../../state/action-creator/customer'
import {useDispatch} from 'react-redux';
import ICustomer from '../../types/ICustomer';
import DataTable from '../DataTable/DataTable';
import { customerActions,State } from '../../state';
import { bindActionCreators } from 'redux';





export default function CustomerTable(){

   
  

    const columns = useMemo( 
        () => [

        {
            
            Header : 'First Name',
            accessor : 'firstName',
           
        
        },
        {
            
            Header : 'Last Name',
            accessor : 'lastName',
        
        },
        {
            
           
            Header : 'Address',
            accessor : 'address',
        
        },
        {
            Header : 'City',
            accessor : 'city',
            
        
        },
        {
            Header : 'State',
            accessor : 'state',
            
        
        },
        
        {
            Header : 'Address',
            accessor : 'address',
        
        },
        {
            Header : 'Zip Code',
            accessor : 'zipCode'
           
            
        },
        
        ],[])
    
    const [currentId, setCurrentId] = React.useState(null);
    const dispatch = useDispatch();
    //const {getCustomers,createCustomers,updateCustomer,deleteCustomer} = bindActionCreators(customerActions,dispatch)
  
    const customers = useSelector((state : State) => state.customer);
    const data = useMemo(() => customers, []);
    console.log(customers);
   const [currentCustomerData, setCurrentCustomerData] = React.useState( {firstName : '',lastName:'',address:'',city:'',state:'',country:'',zipCode:'' } );
   const selectedCustomer = useSelector((state :  State) => currentId ? state.customer.find((p)=>p._id === currentId): null);
    const rowKeyGetter = (row ) =>
    {
        return row._id;
    };

     

    const handleSubmit = (e) => {

        if(currentId)
        {
            dispatch(updateCustomer(currentId,currentCustomerData));
        }


    }

    const getRowId = data => data._id;
    
    return (
        <div style={{ height: 400, width: '100%' }}>
       
        </div>
    )
}