"use client"

import { WS_URL } from "@/config";
import { initDraw } from "@/draw";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { Canvas } from "./Canvas";

export function RoomCanvas({roomId}:{roomId:string}){
    const [socket,setSocket]= useState<WebSocket| null>(null)

    useEffect(()=>{
      const ws = new WebSocket(`${WS_URL}?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI5MWMyYzkyYi1mMzkxLTQ4NDctOTQyNC1iODk2NzRmNTJlMjAiLCJpYXQiOjE3NDA0ODc3OTh9.YkFKNb2rRiiSWDTbZ0xRaClKm-vfO0vTJXuKS09DHOk`)

      ws.onopen = ()=>{
        setSocket(ws)
        ws.send(JSON.stringify({
          type: "join_room",
          roomId
        }))
      }
    },[])

    

    if(!socket){
        return <div> connecting to server pls wait</div>
    }

    return <div>
      <Canvas roomId = {roomId} socket = {socket}/>
        
    </div>
}