import logo from './logo.svg';
import './App.css';
import React,{useState,useEffect} from "react";
import {Container, Appbar, Typography, Grow,Grid} from '@mui/material';
import CustomerTable from './components/Customers/Customers.js'
import {useDispatch} from 'react-redux';
import {getCustomers} from './actions/customers';
import Form from './components/Form/Form.js';

require("es6-promise").polyfill();
require("isomorphic-fetch");;


function App() {

  
  const [data,setData] = useState([]);
  const dispatch = useDispatch();

  // useEffect(() => {

  //     fetch("https://swapi.dev/api/people")
  //     .then(response => response.json())
  //     .then((json)=> setData(json.results));
      
  // },[]);

  useEffect(() => {
    dispatch(getCustomers());
  },[dispatch]);

  return (
   <div>
<div><Form /></div>
<div>
  <CustomerTable />
</div>

   </div>
  );
}

export default App;
