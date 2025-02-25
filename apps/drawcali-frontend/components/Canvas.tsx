import { initDraw } from "@/draw";
import { useRef } from "react";
import { useEffect } from "react";

export function Canvas({roomId, socket}:{roomId: string, socket: WebSocket}){
        const canvasRef = useRef<HTMLCanvasElement>(null);
    
    useEffect(()=>{
        if(canvasRef.current){
           initDraw(canvasRef.current, roomId, socket)       
        }

    }, [canvasRef]);

   return <div> <canvas ref={canvasRef} width={2000} height={1250}></canvas></div>
      
}