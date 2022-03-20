export  default   (customers=[],action) =>{
    switch (action.type) {
        case "FETCH_ALL":
            return action.payload;
            
        case "CREATE":
            return [...customers,action.payload];
               
    
        default:
            return customers;
            break;
    }
}