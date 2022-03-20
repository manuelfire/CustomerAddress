import mongoose from "mongoose";
import CreateCustomer from "../models/customer.js";


export const getCustomers = async (req,res) => {
    try {
        const getCustomers = await CreateCustomer.find();

        console.log(getCustomers);

        res.status(200).json(getCustomers);

     }catch(erorr){

        res.status(404).json({message: error.message});
            
        }
    
}


export const createCustomer = async (req, res) => {
    const customer  = req.body;

    const newCustomer = new CreateCustomer(customer);

    try {
        
        await newCustomer.save()

        res.status(201).json(newCustomer);

     }catch(erorr){

        res.status(404).json({message: error.message});
            
        }
}

export const updateCustomer = async (req, res) => {
    
    const {id : _id } = req.params;
    const customer = req.body;

   
    try {
        
        if(!mongoose.Types.ObjectID.isObjectID(_id)) return res.status(404).send('No customer with that id');


        const updatedPost = await CreateCustomer.findByIdAndUpdate(_id,customer,{new:true});

        res.json(updatedPost);

     }catch(erorr){

        res.status(404).json({message: error.message});
            
        }
}