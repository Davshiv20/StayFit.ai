const dotenv = require("dotenv");
dotenv.config();
const express=require("express");
const app=express();
app.use(express.json());

const mongoose=require('mongoose');

const port=process.env.PORT || 3000;
console.log(port);

const url=process.env.MONGO_URL 
console.log("connecting to",url);

mongoose.connect(url).then(result=>{
    console.log("connected to MongoDB")
    console.log(port);
})
.catch((error)=>{
    console.log('error connecting to MongoDB:',error.message)

})

app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})
