import { initDraw } from "@/draw";
import { useRef, useState } from "react";
import { useEffect } from "react";
import { IconButton } from "./IconButton";
import { Circle, Pencil, RectangleHorizontal } from "lucide-react";


type Shape = "circle" | "rect" | "pencil"

export function Canvas({roomId, socket}:{roomId: string, socket: WebSocket}){
        const canvasRef = useRef<HTMLCanvasElement>(null);
        const [selectedTool, setSelectedTool]= useState<Shape>("circle")

        useEffect(()=>{
            //@ts-ignore
            window.selectedTool = selectedTool
        } , [selectedTool])

    useEffect(()=>{
        if(canvasRef.current){
           initDraw(canvasRef.current, roomId, socket)       
        }

    }, [canvasRef]);

   return <div style={{
            height:"100vh",
            overflow:"hidden",
            background: "white"
   }}> 
    <canvas ref={canvasRef} width={window.innerWidth} height={window.innerHeight}>      
    </canvas>
    <TopBar selectedTool={selectedTool} setSelectedTool={setSelectedTool} />
    </div>
    
}

function TopBar({selectedTool, setSelectedTool}:{
    selectedTool: Shape,
    setSelectedTool: (tool: Shape)=>void
}){
    return  <div style={{
        position: "fixed",
        top: 10,
        left: 10
    }}>

        <div className="flex gap-2">
            <IconButton onClick={()=>{
                setSelectedTool("pencil")
            }} activated={selectedTool === "pencil"} icon={<Pencil/>}/>
            <IconButton onClick={()=>{
                setSelectedTool("rect")
            }} activated={selectedTool === "rect"} icon={<RectangleHorizontal/>} />
            <IconButton onClick={()=>{
                setSelectedTool("circle")
            }} activated={selectedTool === "circle"} icon={<Circle/>} />
        </div>
    </div>
}