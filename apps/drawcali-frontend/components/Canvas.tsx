import { initDraw } from "@/draw";
import { useRef, useState } from "react";
import { useEffect } from "react";
import { IconButton } from "./IconButton";
import { Circle, Pencil, RectangleHorizontal } from "lucide-react";
import { Game } from "@/draw/Game";


export type Tool = "circle" | "rect" | "pencil"

export function Canvas({roomId, socket}:{roomId: string, socket: WebSocket}){
        const canvasRef = useRef<HTMLCanvasElement>(null);
        const [game,setGame ]= useState<Game>()
        const [selectedTool, setSelectedTool]= useState<Tool>("circle")

        useEffect(()=>{
            //@ts-ignore
            game?.setTool(selectedTool)
        } , [selectedTool])

    useEffect(()=>{
        if(canvasRef.current){
            const g = new Game(canvasRef.current, roomId, socket)
           setGame(g)      
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
    selectedTool: Tool,
    setSelectedTool: (tool: Tool)=>void
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