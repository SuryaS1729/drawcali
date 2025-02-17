import express  from "express";
import jwt from "jsonwebtoken"
import { JWT_SECRET } from "@repo/backend-common/config";
import { middleware } from "./middleware";

const app = express()

// app.get("/",(req,res)=>{

// })

app.post("/signup",(req,res)=>{

    //dbcall
    res.json({
        userId:"123"
    })
    
})
app.post("/signin",(req,res)=>{

    const userId = 1;

   const token =  jwt.sign({
        userId
    },JWT_SECRET)

    res.json({
        token
    })
    
})


app.post("/room",middleware,(req,res)=>{
    //dbcall
    res.json({
        roomId:123
    })
})

app.listen(3001)