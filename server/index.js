import express from 'express';
import dotenv from "dotenv";
import passport from "passport";
import session from "express-session";

// Private route authorization config
import privateRouteConfig from "./config/route.config";

//database connection
import ConnectDB from './database/connection'
import Auth  from './api/auth';
import Food from "./api/food";
import Restaurant from "./api/restaurant";
import User from "./api/user";
import Menu from "./api/menu";
import Order from "./api/order";
import Review from "./api/review";
import Image from './api/image';


dotenv.config();
privateRouteConfig(passport);

const PORT=4000

const zomato=express();
zomato.use(express.json());

// adding additional passport configuration
zomato.use(passport.initialize());

/*zomato.use(session({ secret: "ZomatoAbc" }));
zomato.use(passport.session());*/

zomato.get('/',(req,res)=>{
    res.json({
        message:"Server is running"
    })
})

zomato.use("/auth",Auth);
zomato.use("/food", Food);
zomato.use("/restaurant", Restaurant);
zomato.use("/user",  User);
zomato.use("/menu", Menu);
zomato.use("/order", Order);
zomato.use("/review", Review);
zomato.use("/image",Image)


zomato.listen(PORT,()=>{
    ConnectDB()
    .then(()=>{
        console.log("server is running")
    })
    .catch((error)=>{
        console.log("server is running but database connection failed!")
        console.log(error)
    })
})
    