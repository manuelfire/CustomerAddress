import * as React from 'react';
import { DataGrid, DATA_GRID_PROPS_DEFAULT_VALUES } from '@mui/x-data-grid';
import { useSelector } from 'react-redux';
import { useState } from 'react';


const columns = [

{
    field : 'firstName',
    headerName : 'First Name',
    width : 150,
    editable : true,

},
{
    field : 'lastName',
    headerName : 'Last Name',
    width : 150,
    editable : true,

},
{
    field : 'address',
    headerName : 'Address',
    width : 150,
    editable : true,

},
{
    field : 'city',
    headerName : 'City',
    width : 150,
    editable : true,

},
{
    field : 'state',
    headerName : 'State',
    width : 150,
    editable : true,

},

{
    field : 'country',
    headerName : 'Address',
    width : 150,
    editable : true,

},
{
    field : 'zipCode',
    headerName : 'Zip Code',
    width : 150,
    editable : true,
    
},

];


export default function CustomerTable(){

    const [currentId, setCurrentId] = React.useState(null);

    const customers = useSelector((state) => state.customers);
    console.log(customers);
   

    const getRowId = data => data._id;
    
    return (
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={customers}
            columns={columns}
            pageSize={5}
            checkboxSelection
            disableSelectionOnClick
            getRowId={getRowId}
           
          />
        </div>
    )
}