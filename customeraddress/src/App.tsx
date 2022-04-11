
import './App.css';
import React,{useState,useEffect} from "react";
import {Container, AppBar, Typography, Grow,Grid} from '@mui/material';
import CustomerTable from './components/Customers/Customers'
import {useDispatch, useSelector} from 'react-redux';
import {State} from './state/index';
import Form from './components/Form/Form';
import { bindActionCreators } from 'redux';
import { getCustomers } from './state/action-creator/customer';
import DataTable from './components/DataTable/DataTable';

require("es6-promise").polyfill();
require("isomorphic-fetch");;


function App() {

  


  // useEffect(() => {

  //     fetch("https://swapi.dev/api/people")
  //     .then(response => response.json())
  //     .then((json)=> setData(json.results));
      
  // },[]);
  const dispatch = useDispatch();
 //const {getCustomers} = bindActionCreators(customerActions,dispatch)
 const [currentId,setCurrentId] = useState(null);
  useEffect(() => {
    console.log("loading...");
    dispatch(getCustomers());
    
  },[currentId,dispatch]);

  const cost = useSelector((state : State)=> state.customer);
  
  
  return (
   <div>
<div><Form setCurrentId={setCurrentId} /></div>
<div>
    <DataTable customers={cost} currentId = {currentId}
     setCurrentId={setCurrentId}
     getRowProps={row => ({
      iseditable:"false",
      style: {
        cursor: "pointer"
      }
    })}
     />
</div>

   </div>
  );
}

export default App;
