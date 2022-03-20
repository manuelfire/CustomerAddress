import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import customerRoutes from './routes/customer.js'; 

const app = express();



app.use(bodyParser.json({limit: "5mb", extended : true} ));
app.use(bodyParser.urlencoded({limit: "5mb", extended : true} ));
app.use(cors());

app.use('/customers',customerRoutes);

const CONNECTION_URL = "mongodb+srv://admin:J8tkbh4ZGrPY5WaR@cluster0.ebptx.mongodb.net/customers?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewURLParser : true, useUnifiedTopology : true})
.then(() => app.listen(PORT,() => console.log('Server is connected') ))
.catch((error) => console.log(error.message));

