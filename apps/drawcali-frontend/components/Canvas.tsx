import { initDraw } from "@/draw";
import { useRef } from "react";
import { useEffect } from "react";
import { IconButton } from "./IconButton";
import { Circle, Pencil, RectangleHorizontal } from "lucide-react";


export function Canvas({roomId, socket}:{roomId: string, socket: WebSocket}){
        const canvasRef = useRef<HTMLCanvasElement>(null);
    
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
    <TopBar/>
    </div>
    
}

function TopBar(){
    return  <div style={{
        position: "fixed",
        top: 10,
        left: 10
    }}>

        <IconButton icon={<Pencil/>} onClick={()=>{}}/>
        <IconButton icon={<RectangleHorizontal/>} onClick={()=>{}}/>
        <IconButton icon={<Circle/>} onClick={()=>{}}/>
    </div>
}