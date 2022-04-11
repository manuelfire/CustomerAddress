import { isEditable } from "@testing-library/user-event/dist/utils";
import React, {useEffect, useMemo, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {TableOptions, usePagination, useTable} from 'react-table';
import { State } from "../../state";
import { updateCustomer,getCustomers } from "../../state/action-creator/customer";
import ICustomer from "../../types/ICustomer";

const EditableCell = ({
  value: initialValue,
  row: row,
  column: { id },
  updateMyData, 
}) => {

  const [value,setValue] = useState(initialValue);

  const onChange = e => {
    setValue(e.target.value);
  }

  const onBlur = () => {
    console.log(row);
    updateMyData(row.original, id, value);
  }

  useEffect(()  => {
    setValue(initialValue)
  },[initialValue]);

  return row.isEditable ? <input value={value} onChange={onChange}  onBlur={onBlur} /> : <input value={value} onChange={onChange}  onBlur={onBlur} readOnly />

}



const defaultColumn = {
  Cell: EditableCell,
}

const DataTable = ({customers,currentId,setCurrentId,getRowProps}) =>{

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
        Header : 'Zip Code',
        accessor : 'zipCode'
       
        
    },

    

    
    ],[]);


const dispatch = useDispatch();
//const {getCustomers,createCustomers,updateCustomer,deleteCustomer} = bindActionCreators(customerActions,dispatch)


const data = useMemo(() => customers, []);
console.log(customers);
const [skipPageReset, setSkipPageReset] = React.useState(false);
const [currentCustomer,setCurrentCustomer] = useState({} as ICustomer);
const selectedCustomer = useSelector((state :  State) => currentId ? state.customer.find((p)=>p._id === currentId): null);

useEffect(() => {

  if(selectedCustomer) setCurrentCustomer(selectedCustomer);

},[selectedCustomer]);

const updateMyData = (rowData, columnId, value) => {
  // We also turn on the flag to not reset the page
  setSkipPageReset(true);
  setCurrentId(rowData._id);
 
  
  setCurrentCustomer({...currentCustomer, [columnId] : value});
  console.log("currentCustomer");
  console.log(currentCustomer);
  
  dispatch(updateCustomer(currentCustomer._id,currentCustomer));
  setCurrentId(rowData._id);
}
    //console.log(columns);
   // console.log(data);
    const tableInstance = useTable( {columns, data, defaultColumn,updateMyData} as any,usePagination);
 
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows ,
      prepareRow,
    } = tableInstance;
    
    return (
      // apply the table props
      <table {...getTableProps()}>
        <thead>
          {// Loop over the header rows
          headerGroups.map(headerGroup => (
            // Apply the header row props
            <tr {...headerGroup.getHeaderGroupProps()}>
              {// Loop over the headers in each row
              headerGroup.headers.map(column => (
                // Apply the header cell props
                <th {...column.getHeaderProps()}>
                  {// Render the header
                  column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        {/* Apply the table body props */}
        <tbody {...getTableBodyProps()}>
          {// Loop over the table rows
          rows.map(row => {
            // Prepare the row for display
            prepareRow(row)
            return (
              // Apply the row props
              <tr {...row.getRowProps(getRowProps(row))}>
                {// Loop over the rows cells
                row.cells.map(cell => {
                  // Apply the cell props
                  return (
                    <td {...cell.getCellProps()}>
                      {// Render the cell contents
                      cell.render('Cell')}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    )
}

export default DataTable;