import React, {useState} from "react";
import { TextField,Button,Typography ,Paper } from "@mui/material";
import { useDispatch } from "react-redux";
import { createCustomers } from "../../state/action-creator/customer";
import ICustomer from "../../types/ICustomer";

const Form = ({setCurrentId}) =>{

    const [customerData,setCustomerData] = useState({} as ICustomer);
    const dispatch = useDispatch();

    const clear = () => {
        setCustomerData({} as ICustomer);
    };

    const handleSubmit = (e) => {

        e.preventDefault();
        console.log(customerData);
        dispatch(createCustomers(customerData));;
        setCurrentId(null);
        clear();
    };

    
    
    return(
        <Paper>
            <form autoComplete="off" noValidate onSubmit={handleSubmit}>

            <Typography variant="h6">Customer Management</Typography>
            <TextField 
            name ="firstName" 
            variant="outlined"  
            label ="First Name" 
            value={customerData.firstName}
            onChange={(e) => setCustomerData({...customerData, firstName : e.target.value})}
            />
            <TextField 
            name ="lastName" 
            variant="outlined"  
            label ="Last Name" 
            value={customerData.lastName}
            onChange={(e) => setCustomerData({...customerData, lastName : e.target.value})}
            />
            <TextField 
            name ="address" 
            variant="outlined"  
            label ="Address" 
            value={customerData.address}
            onChange={(e) => setCustomerData({...customerData, address : e.target.value})}
            />
            <TextField 
            name ="city" 
            variant="outlined"  
            label ="City" 
            value={customerData.city}
            onChange={(e) => setCustomerData({...customerData, city : e.target.value})}
            />
            <TextField 
            name ="state" 
            variant="outlined"  
            label ="State" 
            value={customerData.state}
            onChange={(e) => setCustomerData({...customerData, state : e.target.value})}
            />
            <TextField 
            name ="country" 
            variant="outlined"  
            label ="Country" 
            value={customerData.country}
            onChange={(e) => setCustomerData({...customerData, country : e.target.value})}
            />
            <TextField 
            name ="zipCode" 
            variant="outlined"  
            label ="Zip Code" 
            value={customerData.zipCode}
            onChange={(e) => setCustomerData({...customerData, zipCode : e.target.value})}
            />
            <Button variant="contained" color="primary" size="large" type="submit" onSubmit = {clear}>+</Button>
            </form>

        </Paper>
    );

}

export default Form;