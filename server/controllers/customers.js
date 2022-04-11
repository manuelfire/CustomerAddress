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

export const getCustomer = async (req,res) => {
    try {
        console.log("GET",req.params);
        const {id : _id } = req.params;

        const getCustomer = await CreateCustomer.findById(_id);

        console.log(getCustomer);

        res.status(200).json(getCustomer);

     }catch(error){

        res.status(404).json({message: error.message});
            
        }
    
}


export const createCustomer = async (req, res) => {
    const customer  = req.body;

    const newCustomer = new CreateCustomer(customer);

    try {
        
        await newCustomer.save()

        res.status(201).json(newCustomer);

     }catch(error){

        res.status(404).json({message: error.message});
            
        }
}

export const updateCustomer = async (req, res) => {
    
    console.log("Update")
    console.log(req.body);
    const {id : _id } = req.params;
    const customer = req.body;
    var ObjectId = mongoose.Types.ObjectId;
    console.log(ObjectId.isValid(_id));
    try {
        
        if(!ObjectId.isValid(_id)) return res.status(404).send('No customer with that id');


        const updatedPost = await CreateCustomer.findByIdAndUpdate(_id,{...customer,_id},{new:true});

        res.json(updatedPost);

     }catch(error){

        res.status(404).json({message: error.message});
            
        }
}

export const deleteCustomer = async (req, res) => {
    
    const {id : _id } = req.params;
    const customer = req.body;

   
    try {
        
        if(!mongoose.Types.ObjectID.isObjectID(_id)) return res.status(404).send('No customer with that id');


        const deletedPost = await CreateCustomer.findByIdAndDelete(_id);

        res.json(deletedPost);

     }catch(error){

        res.status(404).json({message: error.message});
            
        }
}