import express  from "express";
import jwt from "jsonwebtoken"
import { JWT_SECRET } from "@repo/backend-common/config";
import { middleware } from "./middleware";
import {CreateUserSchema, SignInSchema, CreateRoomSchema} from "@repo/common/types"
import {prismaClient} from "@repo/db/client"
const app = express()
app.use(express.json())

app.post("/signup",async(req,res)=>{
    const parsedData= CreateUserSchema.safeParse(req.body);
    if(!parsedData.success){
        console.log(parsedData.error)
        res.json({
            message:"incorrect schema/inputs"
        })
        return
    }
    try {
       const user= await prismaClient.user.create({
            data:{
                    email:parsedData.data?.username,
                    password:parsedData.data.password,
                    name:parsedData.data.name
            }})
        res.json({
            userId:user.id
        })
    } catch (error) {
        res.status(411).json({
            message:"user already exists"
        })}})


app.post("/signin",async(req,res)=>{
    const parsedData= SignInSchema.safeParse(req.body);
    
    if(!parsedData.success){
        res.json({
            message:"incorrect schema/inputs"
        })
        return
    }

    const user = await prismaClient.user.findFirst({
        where:{
            email:parsedData.data.username,
            password:parsedData.data.password
        }

    })

    if(!user){
        res.status(403).json({
                        message:"not authorized"
        })
        return
    }

    const token =  jwt.sign({
        userId: user?.id
    },JWT_SECRET)

    res.json({
        token
    })
    
})


app.post("/room",middleware,(req,res)=>{

    const data= CreateRoomSchema.safeParse(req.body);
    
    if(!data.success){
        res.json({
            message:"incorrect schema/inputs"
        })
        return
    }
    //dbcall
    res.json({
        roomId:123
    })
})

app.listen(3001)