const express = require("express");
const app = express();
const mongoose = require("mongoose")

mongoose.connect(
"mongodb+srv://ecommerce-store:ecommerce-store@cluster0.bflxl.mongodb.net/ecommerce-store?retryWrites=true&w=majority"
)
.then(()=>{console.log("DBConnect success")})
.catch((err)=>{console.log(err)})

app.listen(5000, ()=>{
    console.log("backend server is running");
})

