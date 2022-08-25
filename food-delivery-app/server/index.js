const bodyParser = require("body-parser");
const express=require("express");
const cors =require("cors");

const db = require ("./db");

const app = express();

const productRouter = require ("./routes/productRouter");
const { default: mongoose } = require("mongoose");

var corsOptions ={
    origin:"http://localhost:3000"

}

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true}));



db.on('error',console.error.bind(console,'MongoDB connection error'))




app.get("/",(req,res)=>{
    res.json({message:"welcome to food orderning"})
})

const PORT = process.env.POrt || 8080;
app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
});

app.use('/api/',productRouter);

