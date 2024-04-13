require('dotenv').config()

const express = require("express");
const mongoose = require("mongoose");
const {readdirSync} = require('fs');


const cors =require("cors")
const app = express();

app.use(cors());
app.use(express.json());
readdirSync('./routes').map((route)=>{app.use('/expenseTracker', require("./routes/" + route));});



mongoose.connect(process.env.MONGO_URI);

app.listen(process.env.PORT,()=>{
    console.log("Server is up and running on" ,process.env.PORT)
});
