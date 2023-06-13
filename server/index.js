import express from 'express';
import dotenv from "dotenv";

const PORT=4000

const zomato=express();
zomato.use(express.json());

zomato.get('/',(req,res)=>{
    res.json({
        message:"Server is running"
    })
})


zomato.listen(PORT,()=>{
    console.log("server is running")
})