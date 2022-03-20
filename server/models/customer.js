import mongoose from "mongoose";

const customerEschema = mongoose.Schema({
 id: String,
 firstName: String,
 lastName: String,
 address: String,
 city: String,
 state: String,
 country: String,
 zipCode: String
});

const CreateCustomer = mongoose.model('Address',customerEschema);

export default CreateCustomer;